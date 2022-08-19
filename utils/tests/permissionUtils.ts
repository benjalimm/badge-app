import { Signer } from "ethers";
import { Entity, Entity__factory } from "../../typechain";
import { getCurrentEntityFromLocalStorage } from "../services/EntityLocalStorageManager";
import { uploadPermTokenIPFS } from "../ipfs/permTokenUploadUtils";

// const entityAddress: string = "0x3f488862578CaE52E6BA4f71cb7d34956FdAA783"
const user2Address: string = "0x845B62836650b762996FDf596AabFd19AfFAE02D"
const user3Address = "0x95dE2aF29E3cc1B776C70ECe4c6392022B1180dC"

export async function awardPermissionToken(signer: Signer) {
  const entityAddress = getCurrentEntityFromLocalStorage().address;

  const entity = Entity__factory.connect(entityAddress, signer)
  const ipfsUrl = await uploadPermTokenIPFS("Badge Labs", "Super user")
  await entity.assignPermissionToken(user2Address,2, ipfsUrl)
}

export async function revokePermissionToken(signer: Signer) {
  const entityAddress = getCurrentEntityFromLocalStorage().address;

  const entity = Entity__factory.connect(entityAddress, signer)
  await entity.revokePermissionToken(user2Address);
}

export async function surrenderPermissionToken(signer: Signer) {
  const entityAddress = getCurrentEntityFromLocalStorage().address;

  const entity = Entity__factory.connect(entityAddress, signer)
  await entity.surrenderPermissionToken();
}

export async function reassignGenesisToken(signer: Signer) {
  const entityAddress = getCurrentEntityFromLocalStorage().address;

  const entity = Entity__factory.connect(entityAddress, signer)
  const ipfsUrl = await uploadPermTokenIPFS("Badge Labs", "Genesis")
  const superUserUrl = await uploadPermTokenIPFS("Badge Labs", "Super user")

  await entity.reassignGenesisToken(user2Address, ipfsUrl, true, superUserUrl);
}