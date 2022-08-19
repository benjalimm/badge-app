import { BadgeData } from "../../schemas/BadgeData"
import { uploadERC721ToIpfs } from "./ipfsHelper"

export async function uploadBadgeIPFS(badgeData: BadgeData, videoUrl: string, imageUrl: string, xp: number): Promise<string> {
  const title = appendTitleLevelAddition(badgeData.title, badgeData.level)

  // 2. Upload ERC721 metadata to IPFS

  const url = await uploadERC721ToIpfs({
    name: title,
    description: appendBadgeExplanationToDescription(badgeData.content),
    image: imageUrl,
    animation_url: videoUrl,
    attributes: [
      {
        trait_type: "Level",
        value: `${badgeData.level}`
      },
      { 
        trait_type: "BXP",
        value: `${xp}` 
      }
    ]
  })
  
  return url;
}

// Content additions are additon we make on top of the title / description of the ERC721 JSON to display more informatin on external clients, we remove them when we repull the data to display them without these additions on our client.

function appendTitleLevelAddition(title: string, level: number) {
  return `L${level} - ${title} `
}

function appendBadgeExplanationToDescription(description: string): string {
  const divider = "\n----\n"
  const badgeExplanation = `Badges are non-transferable NFTs that showcase a person's achievement. Checkout https://badge.xyz for more info.`
  return description + " \n" + divider + " " + badgeExplanation + " " + divider
}