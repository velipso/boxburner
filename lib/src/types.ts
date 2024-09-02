//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { type Vec2, type Vec6 } from '@velipso/polybool';
export type { Vec2, Vec6 };

export interface JSONTypeDefCommon {
  nullable?: true;
  metadata?: any;
}

export type JSONTypeDefTypeBoolean =
  | {
      type: 'boolean';
      nullable?: false;
      metadata: {
        default: boolean;
        title?: string;
        description?: string;
        [key: string]: any;
      };
    }
  | {
      type: 'boolean';
      nullable: true;
      metadata: {
        default: boolean | null;
        title?: string;
        description?: string;
        [key: string]: any;
      };
    };

export type JSONTypeDefTypeString =
  | {
      type: 'string';
      nullable?: false;
      metadata: {
        default: string;
        title?: string;
        description?: string;
        [key: string]: any;
      };
    }
  | {
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

export type JSONTypeDefTypeFloat64 =
  | {
      type: 'float64';
      nullable?: false;
      metadata: {
        default: number;
        title?: string;
        description?: string;
        [key: string]: any;
      };
    }
  | {
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

export type JSONTypeDefTypeInt32 =
  | {
      type: 'int32';
      nullable?: false;
      metadata: {
        default: number;
        title?: string;
        description?: string;
        [key: string]: any;
      };
    }
  | {
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

export type JSONTypeDefEnum =
  | {
      enum: string[];
      nullable?: false;
      metadata: {
        default: string;
        title?: string;
        description?: string;
        [key: string]: any;
      };
    }
  | {
      enum: string[];
      nullable: true;
      metadata: {
        default: string | null;
        title?: string;
        description?: string;
        [key: string]: any;
      };
    };

export type JSONTypeDefElements =
  | {
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
    }
  | {
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

export type JSONTypeDefProperties =
  | {
      properties: Record<string, JSONTypeDef>;
      nullable?: false;
      metadata: {
        order: string[];
        title?: string;
        description?: string;
        [key: string]: any;
      };
    }
  | {
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

export type JSONTypeDefDiscriminator =
  | {
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
    }
  | {
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

export type JSONTypeDefSchema = JSONTypeDef & {
  definitions?: Record<string, JSONTypeDef>;
};

export interface IGeneratorSettings {
  defaultThickness: number;
  defaultKerf: number;
  units: 'mm' | 'in';
  fileFormat: 'svg';
  debug: boolean;
}

export const SettingsTypeDef: JSONTypeDefProperties = {
  properties: {
    defaultThickness: {
      type: 'float64' as const,
      metadata: {
        default: 3,
        title: 'Default Material Thickness (units)',
      },
    },
    defaultKerf: {
      type: 'float64' as const,
      metadata: {
        default: 0.1,
        title: 'Default Kerf (units)',
        description: 'Thickness of material removed by cutting tool',
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
    order: ['defaultThickness', 'defaultKerf', 'units', 'fileFormat', 'debug'],
    startHidden: true,
  },
};

export interface IExportFile {
  mimeType: string;
  extension: string;
  data: Uint8Array;
}

export interface IntersectionResult {
  p: Vec2; // intersection point
  alongA: number; // where this point is along the A line
  alongB: number; // where this point is along the B line
}
