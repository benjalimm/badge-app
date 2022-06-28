import { getEthUSDPrice } from "./getEthPrice";

type Subscription = (ethToUSDMultiplier: number) => void;
export default class USDConverter {
  
  private static _subscriptions: Subscription[] = [];
  private static _intervalId: NodeJS.Timeout | null = null;
  private static isPolling(): boolean {
    return this._intervalId !== null;
  }

  private static _latestEthToUSDMultiplier: number | null = null;
  private static _refreshInterval: number = 60000; // Every 1 min

  // ** LISTEN TO ETH TO USD UPDATES ** \\
  public static subscribeToEthUSDPriceUpdates(subscription: Subscription):number {
    this._subscriptions.push(subscription);

    // If we're not already polling, start polling
    if (!this.isPolling()) {
      this.startPollingIntervals();  
    }

    // If we have a latest multiplier, immediately call the listener 
    if (this._latestEthToUSDMultiplier) {
      subscription(this._latestEthToUSDMultiplier);
    }

    return this._subscriptions.length - 1;
  }

  // ** REMOVE Subscriber -> AVOID MEMORY LEAK** \\
  static stopSubscribing(id: number) {
    delete this._subscriptions[id];
    if (this._subscriptions.length === 0) {
      this.stopPolling();
    }
  }

  private static update() {
    getEthUSDPrice().then(number => {
      // 1. Store latest multiplier
      this._latestEthToUSDMultiplier = number;

      // 2. Update all listeners
      this._subscriptions.forEach(listener => listener(number));
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