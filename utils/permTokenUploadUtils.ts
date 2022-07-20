import { uploadERC721ToIpfs } from "./ipfsHelper"

type TokenType = "Genesis" | "Super user" | "Admin"
export async function uploadPermTokenIPFS(entityName: string, tokenType: TokenType): Promise<string> {

  const title = `${entityName} permission token - ${tokenType}`
  const url = await uploadERC721ToIpfs({
    title: title,
    type: 'object',
    properties: {
      "name": { 
        type: 'string',
        description: title
      },
      "description": {
        type: 'string',
        description: getDescriptionForPermissionToken(entityName, tokenType)
      },
      "image": {
        type: 'string',
        description: "https://www.dropbox.com/s/ckdxzz1bajegvid/Genesis%20Token.mp4?raw=1"
      },
      "attributes": [
        {
          trait_type: "Permission token type",
          value: `${tokenType}`
        }
      ]
    }
  })
  return url;
}

function getDescriptionForPermissionToken(entityName: string, tokenType: TokenType): string {
  const startingExplanation = `Permission tokens allow users to reward Badges on behalf of ${entityName}. The Genesis token is minted to the users wallet when they register an entity on-chain through Badge.`
  return startingExplanation
}

