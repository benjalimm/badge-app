import { NFTMedia } from "../../schemas/BadgeMedia"
import { permissionTokenMediaList } from "../metadata/badgeMediaList"
import { uploadERC721ToIpfs } from "./ipfsHelper"

type TokenType = "Genesis" | "Super user" | "Admin"
export async function uploadPermTokenIPFS(entityName: string, tokenType: TokenType): Promise<string> {
  const media = getPermissionTokenMedia(tokenType)
  const title = `${tokenType} token - ${entityName}`
  const url = await uploadERC721ToIpfs({
    name: title,
    description: getDescriptionForPermissionToken(entityName, tokenType),
    image: media.storageGif,
    animation_url: media.storageUrl,
    attributes: [
      {
        trait_type: "Permission token type",
        value: `${tokenType}`
      }
    ]
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

function getPermissionTokenMedia(tokenType: TokenType): NFTMedia {
  let index: number;
  switch (tokenType) {
    case "Genesis": 
      index = 0;
      break
    case "Super user":
      index = 1;
      break
    case "Admin":
      index = 2;
      break
    
  }
  
  return permissionTokenMediaList[index]
}

