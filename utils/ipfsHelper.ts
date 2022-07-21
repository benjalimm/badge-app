import { create as ipfsHttpClient } from 'ipfs-http-client'
import { ERC721Metadata } from '../schemas/ERC721Metadata'
export const client = ipfsHttpClient({ 
  host: 'ipfs.infura.io', 
  port: 5001, 
  protocol: 'https' 
})

export async function uploadERC721ToIpfs(metadata: ERC721Metadata): Promise<string> {
  const data = JSON.stringify(metadata)
  const added = await client.add(
    data, { 
      progress: (prog) => console.log(`Received: ${prog}`)
    }
  )

  return `https://ipfs.infura.io/ipfs/${added.path}`   
}

