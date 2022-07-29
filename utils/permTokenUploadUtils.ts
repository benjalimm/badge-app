import { uploadERC721ToIpfs } from "./ipfsHelper"

type TokenType = "Genesis" | "Super user" | "Admin"
export async function uploadPermTokenIPFS(entityName: string, tokenType: TokenType): Promise<string> {
  const ipfsVideo = getVideo(tokenType)
  const title = `${tokenType} token - ${entityName}`
  const url = await uploadERC721ToIpfs({
    name: title,
    description: getDescriptionForPermissionToken(entityName, tokenType),
    animation_url: ipfsVideo,
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

function getVideo(tokenType: TokenType): string {

  switch (tokenType) {
    case "Genesis": 
      return "ipfs://QmSnELPoE6a6dcH5oXwfy1uoAwuussce3dKNuoMdHeJRda"
    case "Super user":
      return "ipfs://QmWF3yw9bpkpv596WCcBBq84B5PgQeTuhmA6Qp4mbAKSCh"
    case "Admin":
      return "ipfs://QmQ5V9tiWSaKKyt19roK48is2ouUJiL3b1S9vFQqUNacGP"
    
  }

}

