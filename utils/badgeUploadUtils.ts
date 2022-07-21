import { BadgeData } from "../schemas/BadgeData"
import { uploadERC721ToIpfs } from "./ipfsHelper"

export async function uploadBadgeIPFS(badgeData: BadgeData, videoUrl: string, xp: number): Promise<string> {
  const title = appendTitleLevelAddition(badgeData.title, badgeData.level)

  // 2. Upload ERC721 metadata to IPFS
  
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
        description: appendBadgeExplanationToDescription(badgeData.content)
      },
      "image": {
        type: 'string',
        description: videoUrl
      },
      "attributes": [
        {
          trait_type: "Level",
          value: `${badgeData.level}`
        },
        {
          trait_type: "BXP",
          value: `${xp}`
        }
      ]
    }
  })
  return url;
}

// Content additions are additon we make on top of the title / description of the ERC721 JSON to display more informatin on external clients, we remove them when we repull the data to display them without these additions on our client.

function appendTitleLevelAddition(title: string, level: number) {
  return `L${level} - ${title} `
}

function appendBadgeExplanationToDescription(description: string): string {
  const divider = "\n----\n"
  const badgeExplanation = `Minted on https://badge.xyz`
  return description + " \n" + divider + " " + badgeExplanation + " " + divider
}