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
    nullable?: true;
    metadata?: any;
}
type JSONTypeDefTypeBoolean = {
    type: 'boolean';
    nullable?: false;
    metadata: {
        default: boolean;
        [key: string]: any;
    };
} | {
    type: 'boolean';
    nullable: true;
    metadata: {
        default: boolean | null;
        [key: string]: any;
    };
};
type JSONTypeDefTypeString = {
    type: 'string';
    nullable?: false;
    metadata: {
        default: string;
        [key: string]: any;
    };
} | {
    type: 'string';
    nullable: true;
    metadata: {
        default: string | null;
        [key: string]: any;
    };
};
type JSONTypeDefTypeFloat64 = {
    type: 'float64';
    nullable?: false;
    metadata: {
        default: number;
        title?: string;
        [key: string]: any;
    };
} | {
    type: 'float64';
    nullable: true;
    metadata: {
        default: number | null;
        title?: string;
        description?: string;
        [key: string]: any;
    };
};
type JSONTypeDefTypeInt32 = {
    type: 'int32';
    nullable?: false;
    metadata: {
        default: number;
        title?: string;
        description?: string;
        [key: string]: any;
    };
} | {
    type: 'int32';
    nullable: true;
    metadata: {
        default: number | null;
        title?: string;
        description?: string;
        [key: string]: any;
    };
};
type JSONTypeDefEnum = {
    enum: string[];
    nullable?: false;
    metadata: {
        default: string;
        title?: string;
        description?: string;
        [key: string]: any;
    };
} | {
    enum: string[];
    nullable: true;
    metadata: {
        default: string | null;
        title?: string;
        description?: string;
        [key: string]: any;
    };
};
type JSONTypeDefElements = {
    elements: JSONTypeDef;
    nullable?: false;
    metadata: {
        default: number;
        title?: string;
        itemTitle?: string;
        description?: string;
        [key: string]: any;
    };
} | {
    elements: JSONTypeDef;
    nullable: true;
    metadata: {
        default: number | null;
        title?: string;
        itemTitle?: string;
        description?: string;
        [key: string]: any;
    };
};
type JSONTypeDefProperties = {
    properties: {
        [property: string]: JSONTypeDef;
    };
    nullable?: false;
    metadata: {
        order: string[];
        title?: string;
        description?: string;
        [key: string]: any;
    };
} | {
    properties: {
        [property: string]: JSONTypeDef;
    };
    nullable: true;
    metadata: {
        default?: null;
        order: string[];
        title?: string;
        description?: string;
        [key: string]: any;
    };
};
type JSONTypeDefDiscriminator = {
    discriminator: string;
    mapping: {
        [value: string]: JSONTypeDefProperties;
    };
    nullable?: false;
    metadata: {
        default: string;
        order: string[];
        title?: string;
        description?: string;
        [key: string]: any;
    };
} | {
    discriminator: string;
    mapping: {
        [value: string]: JSONTypeDefProperties;
    };
    nullable: true;
    metadata: {
        default: string | null;
        order: string[];
        title?: string;
        description?: string;
        [key: string]: any;
    };
};
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
    borderBoundingBox(): [Vec2, Vec2];
}

declare abstract class GeneratorBase {
    abstract name(): string;
    abstract defaultParams(): any;
    abstract schema(): JSONTypeDefSchema;
    abstract generate(params: any): Surface[];
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
        edges: ({
            kind: string;
            length: number;
            angle: number;
            surroundingSpaces: number;
            edgeWidth: number;
            extraLength: number;
            finger: number;
            play: number;
            space: number;
            width: number;
        } | {
            kind: string;
            length: number;
            angle?: undefined;
            surroundingSpaces?: undefined;
            edgeWidth?: undefined;
            extraLength?: undefined;
            finger?: undefined;
            play?: undefined;
            space?: undefined;
            width?: undefined;
        })[];
    };
    schema(): {
        properties: {
            thickness: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                };
            };
            edges: {
                elements: {
                    discriminator: string;
                    mapping: {
                        plain: {
                            properties: {
                                kind: {
                                    type: "string";
                                    metadata: {
                                        default: string;
                                        title: string;
                                    };
                                };
                                length: {
                                    type: "float64";
                                    metadata: {
                                        default: number;
                                        title: string;
                                    };
                                };
                            };
                            metadata: {
                                title: string;
                                order: string[];
                            };
                        };
                        boxJoint: {
                            properties: {
                                kind: {
                                    type: "string";
                                    metadata: {
                                        default: string;
                                        title: string;
                                    };
                                };
                                length: {
                                    type: "float64";
                                    metadata: {
                                        default: number;
                                        title: string;
                                    };
                                };
                                angle: {
                                    type: "float64";
                                    metadata: {
                                        default: number;
                                        title: string;
                                    };
                                };
                                surroundingSpaces: {
                                    type: "float64";
                                    metadata: {
                                        default: number;
                                        title: string;
                                    };
                                };
                                edgeWidth: {
                                    type: "float64";
                                    metadata: {
                                        default: number;
                                        title: string;
                                    };
                                };
                                extraLength: {
                                    type: "float64";
                                    metadata: {
                                        default: number;
                                        title: string;
                                    };
                                };
                                finger: {
                                    type: "float64";
                                    metadata: {
                                        default: number;
                                        title: string;
                                    };
                                };
                                play: {
                                    type: "float64";
                                    metadata: {
                                        default: number;
                                        title: string;
                                    };
                                };
                                space: {
                                    type: "float64";
                                    metadata: {
                                        default: number;
                                        title: string;
                                    };
                                };
                                width: {
                                    type: "float64";
                                    metadata: {
                                        default: number;
                                        title: string;
                                    };
                                };
                            };
                            metadata: {
                                title: string;
                                order: string[];
                            };
                        };
                    };
                    metadata: {
                        default: string;
                        order: string[];
                    };
                };
                metadata: {
                    default: number;
                    title: string;
                    itemTitle: string;
                };
            };
        };
        metadata: {
            order: string[];
        };
    };
    generate({ thickness, edges }: any): Surface[];
}

declare class DrawBuilder {
    commands: IDrawCommand[];
    angle: number;
    cursor(): Vec2;
    lineTo(to: Vec2): this;
    lineToRelative(delta: Vec2): this;
    quadCurveTo(c1: Vec2, to: Vec2): this;
    curveTo(c1: Vec2, c2: Vec2, to: Vec2): this;
    forward(dangle: number, dist?: number): this;
    close(): this;
    build(): IDrawCommand[];
}

declare function test(): void;

export { DrawBuilder, GeneratorBase, type IDrawCommand, type IDrawCommandCurve, type IDrawCommandGeneric, type IDrawCommandLine, type IPlainBoxParams, type ITextCommand, type JSONTypeDef, type JSONTypeDefCommon, type JSONTypeDefDiscriminator, type JSONTypeDefElements, type JSONTypeDefEnum, type JSONTypeDefProperties, type JSONTypeDefRef, type JSONTypeDefSchema, type JSONTypeDefTypeBoolean, type JSONTypeDefTypeFloat64, type JSONTypeDefTypeInt32, type JSONTypeDefTypeString, PlainBox, Surface, type Vec2, test };
