
export type Standard = 'atex' | 'nec';

export interface DecodedMarking {
  raw: string;
  standard: 'ATEX/IECEx' | 'NEC' | 'Unknown';
  details: {
    group?: string;
    category?: string;
    atmosphere?: string;
    protection?: string[];
    gasGroup?: string;
    dustGroup?: string;
    tempClass?: string;
    epl?: string;
    ip?: string;
    ambient?: string;
    class?: string;
    division?: string;
    necGroup?: string;
  };
  missingFields: string[];
}

export interface GeneratorState {
  standard: Standard;
  group: string;
  category: string;
  atmosphere: string;
  epl: string;
  protections: string[];
  gasGroup: string;
  dustGroup: string;
  tempClass: string;
  maxTemp: string;
  ipRating: string;
  ambientMin: string;
  ambientMax: string;
  necClass: string;
  necDivision: string;
  necGroup: string;
  necTempCode: string;
}
