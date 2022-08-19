import { Provider } from "@wagmi/core";
import { ethers } from "ethers";
import { getAddressForEns, getEnsForAddress, isEns } from "../generic/addressUtils";

//** The ENSCacheManager keeps track of the ENS names that have been queried in a single session. This is to prevent multiple queries of a wallet address *//
export default class ENSCacheManager {
  static cache: { [key: string]: string | null } = {};
  // If string is null -> Means it's already been queried with no result.

  static queryAddressForEns(address: string, fresh: boolean, provider: Provider): Promise<string | null> {
    // By setting fresh to true, we ignore if it's already been cache and query for a fresh result.

    return new Promise((res, rej) => {

      // 1. We check existing cache
      this.queryCacheForEns(address).then((possibleEns) => {
        // 2. If it exists and user does not care about a fresh query, we return the cached result.
        if (possibleEns && !fresh) {
          return possibleEns
        } else {
          // 2.1 If it doesn't exist or user wants a fresh query, we query with the provider.
          return getEnsForAddress(address, provider)
        }
      }).then((result) => {

        // 3. If result exists, we cache the result.
        if (result) {
          this.cache[address] = result;
        }
        res(result)
      }).catch(err => {
        rej(err)
      })

    })
    
  } 

  private static queryCacheForEns(address:string): Promise <string | null> {
    return new Promise((res, rej) => {
      const possibleEns = this.cache[address];
      if (possibleEns && isEns(possibleEns)) {
        res(possibleEns)
      } else {
        res(null)
      }
    })
  }
}