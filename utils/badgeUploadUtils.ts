import { BadgeData } from "../schemas/BadgeData"
import { uploadERC721ToIpfs, uploadERC721ToIpfs2 } from "./ipfsHelper"

export async function uploadBadgeIPFS(badgeData: BadgeData, videoUrl: string) {
  // 2. Upload ERC721 metadata to IPFS
  
  const url = await uploadERC721ToIpfs({
    title: badgeData.title,
    type: 'object',
    properties: {
      "name": { 
        type: 'string',
        description: appendTitleLevelAddition(badgeData.title, badgeData.level)
      },
      "description": {
        type: 'string',
        description: appendBadgeExplanationToDescription(badgeData.content)
      },
      "image": {
        type: 'string',
        description: videoUrl
      },
      "animation_url": {
        type: 'string',
        description: videoUrl
      },
    }
  })
}

export async function uploadBadgeIPFS2(badgeData: BadgeData, videoUrl: string, xp: number): Promise<string> {
  // 2. Upload ERC721 metadata to IPFS
  const title = appendTitleLevelAddition(badgeData.title, badgeData.level)
  const url = await uploadERC721ToIpfs2({
    title: title,
    type: 'object',
    properties: {
      name: title,
      description: appendBadgeExplanationToDescription(badgeData.content),
      image: videoUrl,
      animation_url: videoUrl,
      attributes: [
        {
          trait_type: "Level",
          value: `${badgeData.level}`
        },
        {
          trait_type: "XP",
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
  const divider = "// ** //"
  const badgeExplanation = `This NFT was minted on badge.xyz. Badges are non-transferable NFTs that showcase a person's achievement.`
  return description + " " + divider + " " + badgeExplanation
}