export interface ERC721Metadata { 
  title: string;
  type: "object";
  properties: ERC721MetadataProperties;
}

export type ERC721MetadataProperties =  { 
  [key: string]: ERC721MetadataProperty | Trait[]
}

// ** Metadata ** \\ 
interface Trait {
  trait_type: string;
  value: string;
}

export interface ERC721MetadataProperty {
  type?: "string" | "integer" | "number" | "boolean" | "array" | "object" | "null";
  description?: string;
}

export interface NFTMetadata {
  name: string;
  animation_url: string;
  description: string;
  attributes: Trait[];
}