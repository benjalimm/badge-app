export interface ERC721Metadata { 
  title: string;
  type: "object";
  properties: ERC721MetadataProperties;
}

export type ERC721MetadataProperties =  { 
  [key: string]: ERC721MetadataProperty | Trait[]
}

// ** Metadata ** \\ 
export interface ERC721Metadata2 {
  title: string;
  type: "object";
  properties: ERC721MetadataProperties2;
}

interface Trait {
  trait_type: string;
  value: string;
}
export type ERC721MetadataProperties2 = {
  name: string;
  description: string;
  image: string;
  animation_url: string;
  attributes: Trait[];
}

export interface ERC721MetadataProperty {
  type?: "string" | "integer" | "number" | "boolean" | "array" | "object" | "null";
  description?: string;
}

/* Example of ERC721Metadata:

{
    "title": "Token Metadata",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Identifies the asset to which this token represents"
        },
        "decimals": {
            "type": "integer",
            "description": "The number of decimal places that the token amount should display - e.g. 18, means to divide the token amount by 1000000000000000000 to get its user representation."
        },
        "description": {
            "type": "string",
            "description": "Describes the asset to which this token represents"
        },
        "image": {
            "type": "string",
            "description": "A URI pointing to a resource with mime type image/* representing the asset to which this token represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive."
        },
        "properties": {
            "type": "object",
            "description": "Arbitrary properties. Values may be strings, numbers, object or arrays."
        }
    }
}

*/
