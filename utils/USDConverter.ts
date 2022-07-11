import { getEthUSDPrice } from "./getEthPrice";
import { v4 as uuidv4 } from 'uuid';

type Subscription = (ethToUSDMultiplier: number) => void;
export default class USDConverter {
  
  private static _subscriptions: {id: string, subscription: Subscription}[] = [];
  private static _intervalId: NodeJS.Timeout | null = null;
  private static isPolling(): boolean {
    return this._intervalId !== null;
  }

  private static _latestEthToUSDMultiplier: number | null = null;
  private static _refreshInterval: number = 60000; // Every 1 min

  // ** LISTEN TO ETH TO USD UPDATES ** \\
  public static subscribeToEthUSDPriceUpdates(subscription: Subscription):string {
    const id = uuidv4()
    this._subscriptions.push({subscription, id });

    // If we're not already polling, start polling
    if (!this.isPolling()) {
      this.startPollingIntervals();  
    }

    // If we have a latest multiplier, immediately call the listener 
    if (this._latestEthToUSDMultiplier) {
      subscription(this._latestEthToUSDMultiplier);
    }

    return id;
  }

  // ** REMOVE Subscriber -> AVOID MEMORY LEAK** \\
  static stopSubscribing(id: string) {
    console.log(`Number of subscriptions: ${USDConverter._subscriptions.length}`);
    const index = USDConverter._subscriptions.findIndex((subscription) => {
      console.log(`Subscription: ${subscription}`);
      if (subscription) {
        
        return subscription.id === id
      }
    });
    delete this._subscriptions[index];
    if (this._subscriptions.length === 0) {
      this.stopPolling();
    }
  }

  private static update() {
    getEthUSDPrice().then(number => {
      // 1. Store latest multiplier
      this._latestEthToUSDMultiplier = number;

      // 2. Update all listeners
      this._subscriptions.forEach(listener => listener.subscription(number));
    })

  }

  // ** POLL API ** \\
  private static startPollingIntervals() {
    console.log("Start polling")
    this.update();
    this._intervalId = setInterval(() => {
      this.update();
    }, this._refreshInterval);
  }
  
  // ** STOP POLLING API ** \\
  private static stopPolling() {
    console.log("Stop polling")
    if (this._intervalId) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
  }
}