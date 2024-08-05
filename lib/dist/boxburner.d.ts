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
        defaultNotNull?: string;
        nullHint?: string;
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
        defaultNotNull?: number;
        nullHint?: string;
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
        defaultNotNull?: number;
        nullHint?: string;
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
    properties: Record<string, JSONTypeDef>;
    nullable?: false;
    metadata: {
        order: string[];
        title?: string;
        description?: string;
        [key: string]: any;
    };
} | {
    properties: Record<string, JSONTypeDef>;
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
    mapping: Record<string, JSONTypeDefProperties>;
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
    mapping: Record<string, JSONTypeDefProperties>;
    nullable: true;
    metadata: {
        default: string | null;
        order: string[];
        defaultNotNull?: string;
        nullHint?: string;
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
    definitions?: Record<string, JSONTypeDef>;
};
interface IGeneratorSettings {
    defaultThickness: number;
    defaultKerf: number;
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
    defaultThickness: number;
    defaultKerf: number;
    thicknessValue: number | null;
    kerfValue: number | null;
    border: IDrawCommand[];
    holes: IOffsetDrawCommands[];
    cuts: IOffsetDrawCommands[];
    scores: IOffsetDrawCommands[];
    text: ITextCommand[];
    constructor({ defaultThickness, defaultKerf, }: {
        defaultThickness: number;
        defaultKerf: number;
    }, border: IDrawCommand[], holes?: IOffsetDrawCommands[], cuts?: IOffsetDrawCommands[], scores?: IOffsetDrawCommands[], text?: ITextCommand[]);
    setThickness(thickness: number | null): void;
    setKerf(kerf: number | null): void;
    thickness(): number;
    kerf(): number;
    borderBoundingBox(): [Vec2, Vec2];
}

declare abstract class GeneratorBase {
    abstract name(): string;
    abstract schema(): JSONTypeDef;
    abstract generate(settings: IGeneratorSettings, params: any): Surface[];
}

declare class BoxCardstock extends GeneratorBase {
    name(): string;
    schema(): {
        properties: {
            thickness: {
                type: "float64";
                nullable: true;
                metadata: {
                    default: null;
                    defaultNotNull: number;
                    nullHint: string;
                    title: string;
                };
            };
            kerf: {
                type: "float64";
                nullable: true;
                metadata: {
                    default: null;
                    defaultNotNull: number;
                    nullHint: string;
                    title: string;
                    description: string;
                };
            };
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
            foot: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                };
            };
        };
        metadata: {
            order: string[];
        };
    };
    generate(settings: IGeneratorSettings, { thickness, kerf, width, depth, height, foot }: any): Surface[];
}

declare class BoxNested extends GeneratorBase {
    name(): string;
    schema(): {
        properties: {
            labels: {
                type: "boolean";
                metadata: {
                    default: boolean;
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
    generate(settings: IGeneratorSettings, { labels, width, depth, height, holeDistance, play, thicknessPlay }: any): Surface[];
}

declare class BoxPlain extends GeneratorBase {
    name(): string;
    schema(): {
        properties: {
            labels: {
                type: "boolean";
                metadata: {
                    default: boolean;
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
    generate(settings: IGeneratorSettings, { labels, width, depth, height, holeDistance, play, thicknessPlay }: any): Surface[];
}

declare class KerfTester extends GeneratorBase {
    name(): string;
    schema(): {
        properties: {
            labels: {
                type: "boolean";
                metadata: {
                    default: boolean;
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
            height: {
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
                    description: string;
                };
            };
            testCount: {
                type: "int32";
                metadata: {
                    default: number;
                    title: string;
                };
            };
            kerfStart: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                };
            };
            kerfIncrement: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                };
            };
        };
        metadata: {
            order: string[];
        };
    };
    generate(settings: IGeneratorSettings, { labels, width, height, play, testCount, kerfStart, kerfIncrement }: any): Surface[];
}

declare class Rectangle extends GeneratorBase {
    name(): string;
    schema(): {
        properties: {
            label: {
                type: "string";
                nullable: true;
                metadata: {
                    default: null;
                    defaultNotNull: string;
                    nullHint: string;
                    title: string;
                };
            };
            labelFontSize: {
                type: "float64";
                nullable: true;
                metadata: {
                    default: null;
                    defaultNotNull: number;
                    nullHint: string;
                    title: string;
                };
            };
            thickness: {
                type: "float64";
                nullable: true;
                metadata: {
                    default: null;
                    defaultNotNull: number;
                    nullHint: string;
                    title: string;
                };
            };
            kerf: {
                type: "float64";
                nullable: true;
                metadata: {
                    default: null;
                    defaultNotNull: number;
                    nullHint: string;
                    title: string;
                    description: string;
                };
            };
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
    generate(settings: IGeneratorSettings, { label, labelFontSize, thickness, kerf, width, height, edge1, edge2, edge3, edge4, }: any): Surface[];
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
    forwardCurve(c1Dist: number, turn1: number, c2Dist: number, turn2: number, toDist: number): this;
    close(): Vec2;
    build(): IDrawCommand[];
}

declare class SurfaceBuilder {
    border: DrawBuilder;
    holes: Array<{
        offset: Vec2;
        db: DrawBuilder;
    }>;
    cuts: Array<{
        offset: Vec2;
        db: DrawBuilder;
    }>;
    scores: Array<{
        offset: Vec2;
        db: DrawBuilder;
    }>;
    text: ITextCommand[];
    hole(offset: Vec2, angle?: number): DrawBuilder;
    cut(offset: Vec2, angle?: number): DrawBuilder;
    score(offset: Vec2, angle?: number): DrawBuilder;
    scoreChar(offset: Vec2, width: number, height: number, char: string): this;
    build(defaultValues: {
        defaultThickness: number;
        defaultKerf: number;
    }): Surface;
}

declare abstract class EdgeBase {
    abstract name(): string;
    abstract schema(): JSONTypeDef;
    abstract thickness(length: number, thickness: number, params: any): number;
    abstract draw(sb: SurfaceBuilder, length: number, thickness: number, params: any): void;
}

declare abstract class JointBase extends EdgeBase {
    abstract jointThickness(length: number, invert: boolean, thickness: number, params: any): number;
    abstract jointDraw(sb: SurfaceBuilder, length: number, invert: boolean, thickness: number, params: any): void;
    thickness(length: number, thickness: number, params: any): number;
    draw(sb: SurfaceBuilder, length: number, thickness: number, params: any): void;
}

declare class BoxJoint extends JointBase {
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
    jointThickness(_length: number, callerInvert: boolean, thickness: number, { length1, length2, invert: userInvert }: any): number;
    jointDraw(sb: SurfaceBuilder, length: number, callerInvert: boolean, thickness: number, { invert: userInvert, width1, length1, width2, length2, play, cornerDistance, centerDistance, }: any): void;
}

declare class ButtJoint extends JointBase {
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
    jointThickness(_length: number, callerInvert: boolean, thickness: number, { length1, length2, invert: userInvert }: any): number;
    jointDraw(sb: SurfaceBuilder, length: number, callerInvert: boolean, thickness: number, { invert: userInvert, length1, length2 }: any): void;
}

declare class MortiseAndTenonJoint extends JointBase {
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
            mortiseEdge: JSONTypeDefDiscriminator;
        };
        metadata: {
            order: string[];
        };
    };
    jointThickness(length: number, callerInvert: boolean, thickness: number, { tenonLength, invert: userInvert, mortiseEdge }: any): number;
    jointDraw(sb: SurfaceBuilder, length: number, callerInvert: boolean, thickness: number, { invert: userInvert, width1, tenonLength, width2, holeDistance, play, thicknessPlay, cornerDistance, centerDistance, mortiseEdge, }: any): void;
}

declare function edgeListTypeDef(edges: EdgeBase[], metadata?: any, nullable?: boolean): JSONTypeDefDiscriminator;

declare const allEdges: EdgeBase[];
declare const allJoints: JointBase[];
declare function allEdgesTypeDef(metadata?: any, nullable?: boolean): JSONTypeDefDiscriminator;

declare abstract class DocumentBase {
    constructor(settings: IGeneratorSettings);
    abstract addSurface(offset: Vec2, surface: Surface, cutColor: string, holeColor: string, scoreColor: string): void;
    abstract toFile(): IExportFile;
}

declare class DocumentSVG extends DocumentBase {
    settings: IGeneratorSettings;
    surfaces: Array<{
        offset: Vec2;
        surface: Surface;
        cutColor: string;
        holeColor: string;
        scoreColor: string;
    }>;
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

export { AlongIntersection, BoxCardstock, BoxJoint, BoxNested, BoxPlain, ButtJoint, DocumentBase, DocumentSVG, DrawBuilder, EdgeBase, GeneratorBase, type IDrawCommand, type IDrawCommandCurve, type IDrawCommandGeneric, type IDrawCommandLine, type IExportFile, type IGeneratorSettings, type IOffsetDrawCommands, type ITextCommand, type IntersectionResult, type JSONTypeDef, type JSONTypeDefCommon, type JSONTypeDefDiscriminator, type JSONTypeDefElements, type JSONTypeDefEnum, type JSONTypeDefProperties, type JSONTypeDefRef, type JSONTypeDefSchema, type JSONTypeDefTypeBoolean, type JSONTypeDefTypeFloat64, type JSONTypeDefTypeInt32, type JSONTypeDefTypeString, JointBase, KerfTester, MortiseAndTenonJoint, Rectangle, SettingsTypeDef, Surface, SurfaceBuilder, type Vec2, allEdges, allEdgesTypeDef, allGenerators, allJoints, copyVec2, edgeListTypeDef, eps, expandPathByKerf, exportDocument, forwardVec2, linesIntersect };
