type Vec2 = [number, number];
interface IDrawCommandGeneric<K extends string> {
    kind: K;
    to: Vec2;
}
interface IDrawCommandLine extends IDrawCommandGeneric<'L'> {
}
interface IDrawCommandCurve extends IDrawCommandGeneric<'C'> {
    c1: Vec2;
    c2: Vec2;
}
type IDrawCommand = IDrawCommandLine | IDrawCommandCurve;
interface ITextCommand {
    pt: Vec2;
    text: string;
}
interface JSONTypeDefCommon {
    nullable?: boolean;
    metadata?: any;
}
interface JSONTypeDefTypeBoolean extends JSONTypeDefCommon {
    type: 'boolean';
}
interface JSONTypeDefTypeString extends JSONTypeDefCommon {
    type: 'string';
}
interface JSONTypeDefTypeFloat64 extends JSONTypeDefCommon {
    type: 'float64';
}
interface JSONTypeDefTypeInt32 extends JSONTypeDefCommon {
    type: 'int32';
}
interface JSONTypeDefEnum extends JSONTypeDefCommon {
    enum: string[];
}
interface JSONTypeDefElements extends JSONTypeDefCommon {
    elements: JSONTypeDef;
}
interface JSONTypeDefProperties extends JSONTypeDefCommon {
    properties: {
        [property: string]: JSONTypeDef;
    };
}
interface JSONTypeDefDiscriminator extends JSONTypeDefCommon {
    discriminator: string;
    mapping: {
        [value: string]: JSONTypeDef;
    };
}
interface JSONTypeDefRef extends JSONTypeDefCommon {
    ref: string;
}
type JSONTypeDef = JSONTypeDefTypeBoolean | JSONTypeDefTypeString | JSONTypeDefTypeFloat64 | JSONTypeDefTypeInt32 | JSONTypeDefEnum | JSONTypeDefElements | JSONTypeDefProperties | JSONTypeDefDiscriminator;
type JSONTypeDefSchema = JSONTypeDef & {
    definitions?: {
        [name: string]: JSONTypeDef;
    };
};

declare class Surface {
    thickness: number;
    border: IDrawCommand[];
    holes: IDrawCommand[][];
    cuts: IDrawCommand[][];
    text: ITextCommand[];
    constructor(thickness: number, border: IDrawCommand[], holes?: IDrawCommand[][], cuts?: IDrawCommand[][], text?: ITextCommand[]);
}

declare abstract class GeneratorBase {
    abstract name(): string;
    abstract defaultParams(): any;
    abstract schema(): JSONTypeDefSchema;
    abstract generate(params: any): Surface;
}

interface IPlainBoxParams {
    thickness: number;
    width: number;
    height: number;
}
declare class PlainBox extends GeneratorBase {
    name(): string;
    defaultParams(): {
        thickness: number;
        width: number;
        height: number;
    };
    schema(): {
        readonly properties: {
            readonly thickness: {
                readonly type: "float64";
            };
            readonly width: {
                readonly type: "float64";
            };
            readonly height: {
                readonly type: "float64";
            };
        };
        readonly metadata: {
            readonly keyOrder: readonly ["thickness", "width", "height"];
            readonly titles: {
                readonly thickness: "Material Thickness (mm)";
                readonly width: "Outer Width (mm)";
                readonly height: "Outer Height (mm)";
            };
        };
    };
    generate({ thickness, width, height }: any): Surface;
}

declare class DrawBuilder {
    commands: IDrawCommand[];
    cursor(): Vec2;
    lineTo(to: Vec2): this;
    quadCurveTo(c1: Vec2, to: Vec2): this;
    curveTo(c1: Vec2, c2: Vec2, to: Vec2): this;
    build(): IDrawCommand[];
}

declare function test(): void;

export { DrawBuilder, GeneratorBase, type IDrawCommand, type IDrawCommandCurve, type IDrawCommandGeneric, type IDrawCommandLine, type IPlainBoxParams, type ITextCommand, type JSONTypeDef, type JSONTypeDefCommon, type JSONTypeDefDiscriminator, type JSONTypeDefElements, type JSONTypeDefEnum, type JSONTypeDefProperties, type JSONTypeDefRef, type JSONTypeDefSchema, type JSONTypeDefTypeBoolean, type JSONTypeDefTypeFloat64, type JSONTypeDefTypeInt32, type JSONTypeDefTypeString, PlainBox, Surface, type Vec2, test };
