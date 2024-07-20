//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

export type Vec2 = [number, number];

export interface IDrawCommandGeneric<K extends string> {
  kind: K;
  to: Vec2;
}

export interface IDrawCommandLine extends IDrawCommandGeneric<'L'> {}

export interface IDrawCommandCurve extends IDrawCommandGeneric<'C'> {
  c1: Vec2;
  c2: Vec2;
}

export type IDrawCommand =
  | IDrawCommandLine
  | IDrawCommandCurve;

export interface ITextCommand {
  pt: Vec2;
  text: string;
}

export interface JSONTypeDefCommon {
  nullable?: boolean;
  metadata?: any;
}

export interface JSONTypeDefTypeBoolean extends JSONTypeDefCommon {
  type: 'boolean';
}

export interface JSONTypeDefTypeString extends JSONTypeDefCommon {
  type: 'string';
}

export interface JSONTypeDefTypeFloat64 extends JSONTypeDefCommon {
  type: 'float64';
}

export interface JSONTypeDefTypeInt32 extends JSONTypeDefCommon {
  type: 'int32';
}

export interface JSONTypeDefEnum extends JSONTypeDefCommon {
  enum: string[];
}

export interface JSONTypeDefElements extends JSONTypeDefCommon {
  elements: JSONTypeDef;
}

export interface JSONTypeDefProperties extends JSONTypeDefCommon {
  properties: { [property: string]: JSONTypeDef };
}

export interface JSONTypeDefDiscriminator extends JSONTypeDefCommon {
  discriminator: string;
  mapping: { [value: string]: JSONTypeDef };
}

export interface JSONTypeDefRef extends JSONTypeDefCommon {
  ref: string;
}

export type JSONTypeDef =
  | JSONTypeDefTypeBoolean
  | JSONTypeDefTypeString
  | JSONTypeDefTypeFloat64
  | JSONTypeDefTypeInt32
  | JSONTypeDefEnum
  | JSONTypeDefElements
  | JSONTypeDefProperties
  | JSONTypeDefDiscriminator;

export type JSONTypeDefSchema = JSONTypeDef & { definitions?: { [name: string]: JSONTypeDef } };
