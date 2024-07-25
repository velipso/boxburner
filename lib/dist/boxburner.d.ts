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
interface IOffsetDrawCommands {
    offset: Vec2;
    commands: IDrawCommand[];
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
        title?: string;
        description?: string;
        [key: string]: any;
    };
} | {
    type: 'boolean';
    nullable: true;
    metadata: {
        default: boolean | null;
        title?: string;
        description?: string;
        [key: string]: any;
    };
};
type JSONTypeDefTypeString = {
    type: 'string';
    nullable?: false;
    metadata: {
        default: string;
        title?: string;
        description?: string;
        [key: string]: any;
    };
} | {
    type: 'string';
    nullable: true;
    metadata: {
        default: string | null;
        title?: string;
        description?: string;
        [key: string]: any;
    };
};
type JSONTypeDefTypeFloat64 = {
    type: 'float64';
    nullable?: false;
    metadata: {
        default: number;
        title?: string;
        description?: string;
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
        description?: string;
        itemTitle?: string;
        itemDescription?: string;
        [key: string]: any;
    };
} | {
    elements: JSONTypeDef;
    nullable: true;
    metadata: {
        default: number | null;
        title?: string;
        description?: string;
        itemTitle?: string;
        itemDescription?: string;
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
interface IGeneratorSettings {
    thickness: number;
    kerf: number;
    units: 'mm' | 'in';
    fileFormat: 'svg';
    debug: boolean;
}
declare const SettingsTypeDef: JSONTypeDefProperties;
interface IExportFile {
    mimeType: string;
    extension: string;
    data: Uint8Array;
}
declare enum AlongIntersection {
    BeforeStart = 0,
    EqualStart = 1,
    BetweenStartAndEnd = 2,
    EqualEnd = 3,
    AfterEnd = 4
}
interface IntersectionResult {
    p: Vec2;
    alongA: AlongIntersection;
    alongB: AlongIntersection;
}

declare class Surface {
    thickness: number;
    border: IDrawCommand[];
    holes: IOffsetDrawCommands[];
    cuts: IOffsetDrawCommands[];
    scores: IOffsetDrawCommands[];
    text: ITextCommand[];
    constructor(thickness: number, border: IDrawCommand[], holes?: IOffsetDrawCommands[], cuts?: IOffsetDrawCommands[], scores?: IOffsetDrawCommands[], text?: ITextCommand[]);
    borderBoundingBox(): [Vec2, Vec2];
}

declare abstract class GeneratorBase {
    abstract name(): string;
    abstract schema(): JSONTypeDef;
    abstract generate(settings: IGeneratorSettings, params: any): Surface[];
}

declare class Rectangle extends GeneratorBase {
    name(): string;
    schema(): {
        properties: {
            width: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                };
            };
            height: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                };
            };
            edge1: JSONTypeDefDiscriminator;
            edge2: JSONTypeDefDiscriminator;
            edge3: JSONTypeDefDiscriminator;
            edge4: JSONTypeDefDiscriminator;
        };
        metadata: {
            order: string[];
        };
    };
    generate(settings: IGeneratorSettings, { width, height, edge1, edge2, edge3, edge4 }: any): Surface[];
}

declare class PlainBox extends GeneratorBase {
    name(): string;
    schema(): {
        properties: {
            width: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                };
            };
            depth: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                };
            };
            height: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                };
            };
            holeDistance: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            play: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            thicknessPlay: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
        };
        metadata: {
            order: string[];
        };
    };
    generate(settings: IGeneratorSettings, { width, depth, height, holeDistance, play, thicknessPlay }: any): Surface[];
}

declare const allGenerators: GeneratorBase[];

declare class DrawBuilder {
    commands: IDrawCommand[];
    angle: number;
    cursor(): Vec2;
    lineTo(to: Vec2): this;
    lineToRelative(delta: Vec2): this;
    quadCurveTo(c1: Vec2, to: Vec2): this;
    curveTo(c1: Vec2, c2: Vec2, to: Vec2): this;
    turn(dangle: number): this;
    forward(dist: number): this;
    close(): this;
    build(): IDrawCommand[];
}

declare class SurfaceBuilder {
    border: DrawBuilder;
    holes: {
        offset: Vec2;
        db: DrawBuilder;
    }[];
    cuts: {
        offset: Vec2;
        db: DrawBuilder;
    }[];
    scores: {
        offset: Vec2;
        db: DrawBuilder;
    }[];
    text: ITextCommand[];
    hole(offset: Vec2, angle?: number): DrawBuilder;
    cut(offset: Vec2, angle?: number): DrawBuilder;
    score(offset: Vec2, angle?: number): DrawBuilder;
    build(thickness: number): Surface;
}

declare abstract class EdgeBase {
    abstract name(): string;
    abstract schema(): JSONTypeDef;
    abstract thickness(length: number, invert: boolean, settings: IGeneratorSettings, params: any): number;
    abstract draw(sb: SurfaceBuilder, length: number, invert: boolean, settings: IGeneratorSettings, params: any): void;
}

declare class ButtJoint extends EdgeBase {
    name(): string;
    schema(): {
        properties: {
            invert: {
                type: "boolean";
                metadata: {
                    default: boolean;
                    title: string;
                    description: string;
                };
            };
            length1: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            length2: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
        };
        metadata: {
            order: string[];
        };
    };
    thickness(_length: number, callerInvert: boolean, { thickness }: IGeneratorSettings, { length1, length2, invert: userInvert }: any): number;
    draw(sb: SurfaceBuilder, length: number, callerInvert: boolean, { thickness }: IGeneratorSettings, { invert: userInvert, length1, length2, }: any): void;
}

declare class BoxJoint extends EdgeBase {
    name(): string;
    schema(): {
        properties: {
            invert: {
                type: "boolean";
                metadata: {
                    default: boolean;
                    title: string;
                    description: string;
                };
            };
            width1: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            length1: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            width2: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            length2: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            play: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            cornerDistance: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            centerDistance: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
        };
        metadata: {
            order: string[];
        };
    };
    thickness(_length: number, callerInvert: boolean, { thickness }: IGeneratorSettings, { length1, length2, invert: userInvert }: any): number;
    draw(sb: SurfaceBuilder, length: number, callerInvert: boolean, { thickness }: IGeneratorSettings, { invert: userInvert, width1, length1, width2, length2, play, cornerDistance, centerDistance }: any): void;
}

declare class MortiseAndTenonJoint extends EdgeBase {
    name(): string;
    schema(): {
        properties: {
            invert: {
                type: "boolean";
                metadata: {
                    default: boolean;
                    title: string;
                    description: string;
                };
            };
            width1: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            tenonLength: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            width2: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            holeDistance: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            play: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            thicknessPlay: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            cornerDistance: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            centerDistance: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
        };
        metadata: {
            order: string[];
        };
    };
    thickness(_length: number, callerInvert: boolean, { thickness }: IGeneratorSettings, { tenonLength, invert: userInvert }: any): number;
    draw(sb: SurfaceBuilder, length: number, callerInvert: boolean, { thickness }: IGeneratorSettings, { invert: userInvert, width1, tenonLength, width2, holeDistance, play, thicknessPlay, cornerDistance, centerDistance }: any): void;
}

declare const allEdges: EdgeBase[];
declare function allEdgesTypeDef(metadata?: any): JSONTypeDefDiscriminator;

declare abstract class DocumentBase {
    constructor(settings: IGeneratorSettings);
    abstract addSurface(offset: Vec2, surface: Surface, cutColor: string, holeColor: string, scoreColor: string): void;
    abstract toFile(): IExportFile;
}

declare class DocumentSVG extends DocumentBase {
    settings: IGeneratorSettings;
    surfaces: {
        offset: Vec2;
        surface: Surface;
        cutColor: string;
        holeColor: string;
        scoreColor: string;
    }[];
    constructor(settings: IGeneratorSettings);
    addSurface(offset: Vec2, surface: Surface, cutColor: string, holeColor: string, scoreColor: string): void;
    toFile(): {
        mimeType: string;
        extension: string;
        data: Uint8Array;
    };
}

declare function exportDocument(settings: IGeneratorSettings): DocumentBase;

declare const eps = 1e-7;
declare function copyVec2(p: Vec2): Vec2;
declare function forwardVec2(p: Vec2, angle: number, dist: number): Vec2;
declare function linesIntersect(aStart: Vec2, aEnd: Vec2, bStart: Vec2, bEnd: Vec2): IntersectionResult | null;
declare function expandPathByKerf(offset: Vec2, commands: IDrawCommand[], kerf: number): {
    offset: Vec2;
    commands: IDrawCommand[];
};

export { AlongIntersection, BoxJoint, ButtJoint, DocumentBase, DocumentSVG, DrawBuilder, EdgeBase, GeneratorBase, type IDrawCommand, type IDrawCommandCurve, type IDrawCommandGeneric, type IDrawCommandLine, type IExportFile, type IGeneratorSettings, type IOffsetDrawCommands, type ITextCommand, type IntersectionResult, type JSONTypeDef, type JSONTypeDefCommon, type JSONTypeDefDiscriminator, type JSONTypeDefElements, type JSONTypeDefEnum, type JSONTypeDefProperties, type JSONTypeDefRef, type JSONTypeDefSchema, type JSONTypeDefTypeBoolean, type JSONTypeDefTypeFloat64, type JSONTypeDefTypeInt32, type JSONTypeDefTypeString, MortiseAndTenonJoint, PlainBox, Rectangle, SettingsTypeDef, Surface, SurfaceBuilder, type Vec2, allEdges, allEdgesTypeDef, allGenerators, copyVec2, eps, expandPathByKerf, exportDocument, forwardVec2, linesIntersect };
