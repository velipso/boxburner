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

export interface IOffsetDrawCommands {
  offset: Vec2;
  commands: IDrawCommand[];
}

export interface JSONTypeDefCommon {
  nullable?: true;
  metadata?: any;
}

export type JSONTypeDefTypeBoolean =
  {
    type: 'boolean';
    nullable?: false;
    metadata: {
      default: boolean;
      title?: string;
      description?: string;
      [key: string]: any;
    };
  } |
  {
    type: 'boolean';
    nullable: true;
    metadata: {
      default: boolean | null;
      title?: string;
      description?: string;
      [key: string]: any;
    }
  };

export type JSONTypeDefTypeString =
  {
    type: 'string';
    nullable?: false;
    metadata: {
      default: string;
      title?: string;
      description?: string;
      [key: string]: any;
    };
  } |
  {
    type: 'string';
    nullable: true;
    metadata: {
      default: string | null;
      title?: string;
      description?: string;
      [key: string]: any;
    }
  };

export type JSONTypeDefTypeFloat64 =
  {
    type: 'float64';
    nullable?: false;
    metadata: {
      default: number;
      title?: string;
      description?: string;
      [key: string]: any;
    };
  } |
  {
    type: 'float64';
    nullable: true;
    metadata: {
      default: number | null;
      title?: string;
      description?: string;
      [key: string]: any;
    }
  };

export type JSONTypeDefTypeInt32 =
  {
    type: 'int32';
    nullable?: false;
    metadata: {
      default: number;
      title?: string;
      description?: string;
      [key: string]: any;
    };
  } |
  {
    type: 'int32';
    nullable: true;
    metadata: {
      default: number | null;
      title?: string;
      description?: string;
      [key: string]: any;
    }
  };

export type JSONTypeDefEnum =
  {
    enum: string[];
    nullable?: false;
    metadata: {
      default: string;
      title?: string;
      description?: string;
      [key: string]: any;
    };
  } |
  {
    enum: string[];
    nullable: true;
    metadata: {
      default: string | null;
      title?: string;
      description?: string;
      [key: string]: any;
    }
  };

export type JSONTypeDefElements =
  {
    elements: JSONTypeDef;
    nullable?: false;
    metadata: {
      default: number; // count of elements
      title?: string;
      description?: string;
      itemTitle?: string;
      itemDescription?: string;
      [key: string]: any;
    };
  } |
  {
    elements: JSONTypeDef;
    nullable: true;
    metadata: {
      default: number | null;
      title?: string;
      description?: string;
      itemTitle?: string;
      itemDescription?: string;
      [key: string]: any;
    }
  };

export type JSONTypeDefProperties =
  {
    properties: { [property: string]: JSONTypeDef };
    nullable?: false;
    metadata: {
      order: string[];
      title?: string;
      description?: string;
      [key: string]: any;
    };
  } |
  {
    properties: { [property: string]: JSONTypeDef };
    nullable: true;
    metadata: {
      default?: null;
      order: string[];
      title?: string;
      description?: string;
      [key: string]: any;
    };
  };

export type JSONTypeDefDiscriminator =
  {
    discriminator: string;
    mapping: { [value: string]: JSONTypeDefProperties };
    nullable?: false;
    metadata: {
      default: string;
      order: string[];
      title?: string;
      description?: string;
      [key: string]: any;
    };
  } |
  {
    discriminator: string;
    mapping: { [value: string]: JSONTypeDefProperties };
    nullable: true;
    metadata: {
      default: string | null;
      order: string[];
      title?: string;
      description?: string;
      [key: string]: any;
    }
  };

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

export interface IGeneratorSettings {
  thickness: number;
  kerf: number;
  units: 'mm' | 'in';
  fileFormat: 'svg';
  debug: boolean;
}

export const SettingsTypeDef: JSONTypeDefProperties = {
  properties: {
    thickness: {
      type: 'float64' as const,
      metadata: {
        default: 3,
        title: 'Material Thickness (units)',
      },
    },
    kerf: {
      type: 'float64' as const,
      metadata: {
        default: 0.1,
        title: 'Kerf',
        description: 'Thickness of material removed by cutting tool (units)',
      },
    },
    units: {
      enum: ['mm', 'in'],
      metadata: {
        default: 'mm',
        title: 'Units',
      },
    },
    fileFormat: {
      enum: ['svg'],
      metadata: {
        default: 'svg',
        title: 'File Format',
      },
    },
    debug: {
      type: 'boolean' as const,
      metadata: {
        default: false,
        title: 'Debug',
      },
    },
  },
  metadata: {
    title: 'Settings',
    order: ['thickness', 'kerf', 'units', 'fileFormat', 'debug'],
    startHidden: true,
  },
};

export interface IExportFile {
  mimeType: string;
  extension: string;
  data: Uint8Array;
}
