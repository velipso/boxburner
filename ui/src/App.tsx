import React, { useState, useCallback, useMemo } from 'react'
//import assetLogo from './assets/asset.svg'
import { GeneratorBase, PlainBox, JSONTypeDefSchema, JSONTypeDef } from '@velipso/boxburner';

const generators: GeneratorBase[] = [
  new PlainBox()
];

const generatorOptions = generators.map(g => ({ label: g.name(), value: g }));

function Select<T>({
  title,
  options,
  value,
  setValue
}: {
  title?: string;
  options: { label: string, value: T }[];
  value: T;
  setValue(v: T | ((prevValue: T) => T)): void;
}) {
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const i = parseFloat(event.target.value);
      setValue(options[i].value);
    },
    [options, setValue]
  );
  return <>
    {title && <div className="input-title">{title}:</div>}
    <select
      value={options.findIndex(({value: v}) => v === value)}
      onChange={onChange}
    >
      {options.map(
        ({ label }, i) => (
          <option key={i} value={`${i}`}>
            {label}
          </option>
        )
      )}
    </select>
  </>;
}

function InputNumber({
  value,
  setValue,
  integer
}: {
  value: number;
  setValue(v: number | ((prevValue: number) => number)): void;
  integer: boolean;
}) {
  const [text, setText] = useState(`${value}`);
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
      const v = parseFloat(event.target.value);
      if (!isNaN(v)) {
        setValue(v);
      }
    },
    [setText]
  );
  const v = parseFloat(text);
  const error = isNaN(v) || (integer && Math.round(v) !== v);
  return (
    <input
      className={error ? 'error' : ''}
      type='text'
      value={text}
      onChange={onChange}
    />
  );
}

function JTDEditValue({
  schema,
  typedef,
  value,
  setValue
}: {
  schema: JSONTypeDefSchema;
  typedef: JSONTypeDef;
  value: any;
  setValue(v: any | ((prevValue: any) => any)): void;
}) {
  if ('type' in typedef) {
    switch (typedef.type) {
      case 'float64':
      case 'int32':
        return (
          <InputNumber
            value={value}
            setValue={setValue}
            integer={typedef.type === 'int32'}
          />
        );
      case 'string':
      case 'boolean':
        console.error('TODO: implement type', typedef.type);
    }
  } else if ('enum' in typedef) {
    console.error('TODO: implement enum');
  } else if ('elements' in typedef) {
    console.error('TODO: implement elements');
  } else if ('properties' in typedef) {
    let keys: string[] = [];
    if ('metadata' in typedef && 'keyOrder' in typedef.metadata) {
      keys = typedef.metadata.keyOrder;
    } else {
      if (!('metadata' in typedef)) {
        typedef.metadata = {};
      }
      keys = typedef.metadata.keys = Object.keys(typedef.properties);
    }
    return keys.map((k) => (
      <React.Fragment key={k}>
        <div className="input-title">
          {
            'metadata' in typedef && 'titles' in typedef.metadata
            ? typedef.metadata.titles[k] || k
            : k
          }:
        </div>
        <JTDEditValue
          schema={schema}
          typedef={typedef.properties[k]}
          value={value[k]}
          setValue={(v) => {
            setValue(
              (p: any) => ({
                ...p,
                [k]: typeof v === 'function' ? v(p[k]) : v
              })
            );
          }}
        />
      </React.Fragment>
    ));
  } else if ('discriminator' in typedef) {
    console.error('TODO: implement discriminator');
  } else if ('ref' in typedef) {
    console.error('TODO: implement ref');
  }
  return <p>ERROR: Unknown JSON type def! <pre>{JSON.stringify(typedef)}</pre></p>;
}

function JTDEditor({
  schema,
  value,
  setValue
}: {
  schema: JSONTypeDefSchema;
  value: any;
  setValue(v: any | ((prevValue: any) => any)): void;
}) {
  return (
    <JTDEditValue
      schema={schema}
      typedef={schema}
      value={value}
      setValue={setValue}
    />
  );
}

function App() {
  const [generator, setGenerator] = useState(generators[0]);
  const schema = useMemo(() => generator.schema(), [generator]);
  const [allParams, setAllParams] = useState<Map<GeneratorBase, any>>(() =>
    new Map<GeneratorBase, any>(
      generators.map(g => [g, g.defaultParams()])
    )
  );
  const params = allParams.get(generator);
  const setParams = useCallback(
    (v: any) => {
      setAllParams(
        (m) => {
          const map = new Map(m);
          map.set(generator, typeof v === 'function' ? v(map.get(generator)) : v);
          return map;
        }
      );
    },
    [setAllParams, generator]
  );
  const surface = useMemo(
    () => {
      try {
        return generator.generate(params);
      } catch (err) {
        return `${err}`;
      }
    },
    [params, generator]
  );

  return (
    <>
      <nav>
        <h2><a href="https://github.com/velipso/boxburner" target="_blank">boxburner</a></h2>
        <Select
          title="Generator"
          options={generatorOptions}
          value={generator}
          setValue={setGenerator}
        />
        <JTDEditor
          schema={schema}
          value={params}
          setValue={setParams}
        />
      </nav>
      <main>
        <pre>{JSON.stringify(surface, null, 2)}</pre>
      </main>
    </>
  )
}

export default App
