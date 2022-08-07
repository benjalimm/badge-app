import { create as ipfsHttpClient } from 'ipfs-http-client'
import { ERC721Metadata, NFTMetadata } from '../schemas/ERC721Metadata'
export const client = ipfsHttpClient({ 
  host: 'ipfs.infura.io', 
  port: 5001, 
  protocol: 'https' 
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

export async function getVideoUrlFromIpfsLink(ipfsLink: string): Promise<string> {
  if (ipfsLink.toLowerCase().startsWith('ipfs://')) {
    const hash = ipfsLink.replace('ipfs://', '')
    return `https://ipfs.io/ipfs/${hash}`
  } 
  return ipfsLink;
}

