import { create as ipfsHttpClient } from 'ipfs-http-client'
import { ERC721Metadata, NFTMetadata } from '../schemas/ERC721Metadata'

const projectId = process.env.NEXT_PUBLIC_INFURA_IPFS_PROJECT_ID
const projectSecret = process.env.NEXT_PUBLIC_INFURA_IPFS_PROJECT_SECRET

const auth =
    "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");
export const client = ipfsHttpClient({ 
  host: 'ipfs.infura.io', 
  port: 5001, 
  protocol: 'https',
  headers: { authorization: auth }
})

export async function uploadERC721ToIpfs(metadata: NFTMetadata): Promise<string> {
  
  const data = JSON.stringify(metadata)
  const added = await client.add(
    data, { 
      progress: (prog) => console.log(`Received: ${prog}`)
    }
  )

  return `ipfs://${added.path}`   
}

export function getVideoUrlFromIpfsLink(ipfsLink: string): string {
  if (ipfsLink.toLowerCase().startsWith('ipfs://')) {
    const hash = ipfsLink.replace('ipfs://', '')
    return `https://badge.mypinata.cloud/ipfs/${hash}`
  } 
  return ipfsLink;
}

