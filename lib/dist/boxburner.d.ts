import { Vec2, PolyBool, GeometryEpsilon, Shape } from '@velipso/polybool';
export { Segment, Shape, Vec2, Vec6 } from '@velipso/polybool';

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
interface IntersectionResult {
    p: Vec2;
    alongA: number;
    alongB: number;
}

declare class GeometryExt extends GeometryEpsilon {
    atan2Deg(dy: number, dx: number): number;
    sinDeg(degrees: number): number;
    cosDeg(degrees: number): number;
    linesIntersect(a1x: number, a1y: number, a2x: number, a2y: number, b1x: number, b1y: number, b2x: number, b2y: number): IntersectionResult | null;
}
declare const geo: GeometryExt;
declare const polybool: PolyBool;

declare function ApplyKerf(shape: Shape, kerf: number): Shape;

declare class Surface {
    readonly thickness: number;
    readonly kerf: number;
    readonly border: Shape;
    readonly cuts: Shape;
    readonly scores: Shape;
    home: {
        origin: Vec2;
        angle: number;
    };
    constructor(thickness: number, kerf: number, border?: Shape, cuts?: Shape, scores?: Shape);
    replace(opts: Partial<{
        thickness: number;
        kerf: number;
        border: Shape;
        cuts: Shape;
        scores: Shape;
    }>): Surface;
    copy(): Surface;
    private static combine;
    static union(a: Surface, b: Surface): Surface;
    static intersect(a: Surface, b: Surface): Surface;
    static subtract(a: Surface, b: Surface): Surface;
    static xor(a: Surface, b: Surface): Surface;
    unionBorder(border: Shape): Surface;
    subtractBorder(border: Shape): Surface;
    setHome(origin: Vec2, angle: number): this;
    newShape(): Shape;
    boundingBox(): [Vec2, Vec2];
    applyKerf(): Surface;
}

declare abstract class DocumentBase {
    constructor(settings: IGeneratorSettings);
    abstract addSurface(offset: Vec2, surface: Surface, cutColor: string, scoreColor: string): void;
    abstract addComment(comment: unknown): void;
    abstract toFile(): IExportFile;
}

declare class DocumentSVG extends DocumentBase {
    settings: IGeneratorSettings;
    surfaces: Array<{
        offset: Vec2;
        surface: Surface;
        cutColor: string;
        scoreColor: string;
    }>;
    comments: unknown[];
    constructor(settings: IGeneratorSettings);
    addSurface(offset: Vec2, surface: Surface, cutColor: string, scoreColor: string): void;
    addComment(comment: unknown): void;
    toFile(): {
        mimeType: string;
        extension: string;
        data: Uint8Array;
    };
}

declare function exportDocument(settings: IGeneratorSettings): DocumentBase;

declare abstract class GeneratorBase {
    abstract name(): string;
    abstract schema(): JSONTypeDef;
    abstract generate(settings: IGeneratorSettings, params: any): Surface[];
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

declare class BoxTuck extends GeneratorBase {
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
            scorePadding: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                };
            };
            notchWidth: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                };
            };
            notchHeight: {
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
    generate(settings: IGeneratorSettings, { thickness, kerf, width, depth, height, scorePadding, notchWidth, notchHeight, }: any): Surface[];
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

declare abstract class EdgeBase {
    abstract name(): string;
    abstract schema(): JSONTypeDef;
    abstract thickness(thickness: number, params: any): number;
    abstract draw(surface: Surface, length: number, thickness: number, params: any): Surface;
}

declare abstract class JointBase extends EdgeBase {
    abstract jointThickness(invert: boolean, thickness: number, params: any): number;
    abstract jointDraw(surface: Surface, length: number, invert: boolean, thickness: number, params: any): Surface;
    thickness(thickness: number, params: any): number;
    draw(surface: Surface, length: number, thickness: number, params: any): Surface;
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
    jointThickness(callerInvert: boolean, thickness: number, { length1, length2, invert: userInvert }: any): number;
    jointDraw(surface: Surface, _length: number, _callerInvert: boolean, _thickness: number, _params: any): Surface;
}

declare function boxJointFingerSpacer({ length, width1, width2, cornerDistance1, cornerDistance2, centerDistance, }: {
    length: number;
    width1: number;
    width2: number;
    cornerDistance1: number;
    cornerDistance2: number;
    centerDistance: number;
}, forward: (x: number, d: number, finger: boolean) => void): void;
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
            cornerDistance1Delta: {
                type: "float64";
                nullable: true;
                metadata: {
                    default: null;
                    defaultNotNull: number;
                    title: string;
                    description: string;
                };
            };
            cornerDistance2Delta: {
                type: "float64";
                nullable: true;
                metadata: {
                    default: null;
                    defaultNotNull: number;
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
    jointThickness(callerInvert: boolean, thickness: number, { length1, length2, invert: userInvert }: any): number;
    jointDraw(surface: Surface, length: number, callerInvert: boolean, thickness: number, { invert: userInvert, width1, length1, width2, length2, play, cornerDistance, cornerDistance1Delta, cornerDistance2Delta, centerDistance, }: any): Surface;
}

declare class LegEdge extends EdgeBase {
    name(): string;
    schema(): {
        properties: {
            flatWidth: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            curveWidth: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            curveAmount: {
                type: "float64";
                metadata: {
                    default: number;
                    title: string;
                    description: string;
                };
            };
            height: {
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
    thickness(_thickness: number, { height }: any): number;
    draw(surface: Surface, length: number, thickness: number, { flatWidth, curveWidth, curveAmount, height }: any): Surface;
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
            cornerDistance1Delta: {
                type: "float64";
                nullable: true;
                metadata: {
                    default: null;
                    defaultNotNull: number;
                    title: string;
                    description: string;
                };
            };
            cornerDistance2Delta: {
                type: "float64";
                nullable: true;
                metadata: {
                    default: null;
                    defaultNotNull: number;
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
    jointThickness(callerInvert: boolean, thickness: number, { tenonLength, invert: userInvert, mortiseEdge }: any): number;
    jointDraw(surface: Surface, length: number, callerInvert: boolean, thickness: number, { invert: userInvert, width1, tenonLength, width2, holeDistance, play, thicknessPlay, cornerDistance, cornerDistance1Delta, cornerDistance2Delta, centerDistance, mortiseEdge, }: any): Surface;
}

declare function edgeListTypeDef(edges: EdgeBase[], metadata?: any, nullable?: boolean): JSONTypeDefDiscriminator;

declare const allEdges: EdgeBase[];
declare const allJoints: JointBase[];
declare function allEdgesTypeDef(metadata?: any, nullable?: boolean): JSONTypeDefDiscriminator;

export { ApplyKerf, BoxJoint, BoxNested, BoxPlain, BoxTuck, ButtJoint, DocumentBase, DocumentSVG, EdgeBase, GeneratorBase, type IExportFile, type IGeneratorSettings, type IntersectionResult, type JSONTypeDef, type JSONTypeDefCommon, type JSONTypeDefDiscriminator, type JSONTypeDefElements, type JSONTypeDefEnum, type JSONTypeDefProperties, type JSONTypeDefRef, type JSONTypeDefSchema, type JSONTypeDefTypeBoolean, type JSONTypeDefTypeFloat64, type JSONTypeDefTypeInt32, type JSONTypeDefTypeString, JointBase, KerfTester, LegEdge, MortiseAndTenonJoint, Rectangle, SettingsTypeDef, Surface, allEdges, allEdgesTypeDef, allGenerators, allJoints, boxJointFingerSpacer, edgeListTypeDef, exportDocument, geo, polybool };
