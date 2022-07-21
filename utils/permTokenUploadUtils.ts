import { uploadERC721ToIpfs } from "./ipfsHelper"

type TokenType = "Genesis" | "Super user" | "Admin"
export async function uploadPermTokenIPFS(entityName: string, tokenType: TokenType): Promise<string> {

  const title = `${entityName} - Badge permission token: ${tokenType}`
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
        description: "https://gateway.pinata.cloud/ipfs/QmSnELPoE6a6dcH5oXwfy1uoAwuussce3dKNuoMdHeJRda"
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
  const explanation = `Badge permission tokens allow users to reward Badges on behalf of an entity (${entityName}). Specifically, the genesis token is minted when a user registers a new entity on the Badge protocol. This allows the user to award Badges as well as grant other users permission to award Badges.`
  const content = appendBadgeExplanationToDescription(explanation)
  return content;
}

function appendBadgeExplanationToDescription(description: string): string {
  const divider = "\n----\n"
  const badgeExplanation = `Minted on https://badge.xyz`
  return description + " \n" + divider + " " + badgeExplanation + " " + divider
}

