import Airtable from "airtable";

export interface BetaUser {
  Name: string;
  walletAddress: string;
  email: string;
}

class AirtableController {
  private readonly base: Airtable.Base;
  private readonly betaUserBaseName = 'Beta users';

  constructor(apiKey: string, baseId: string) {
    this.base = new Airtable({ apiKey }).base(baseId);
  }

  async getListOfBetaUsers(): Promise<BetaUser[]> {
    return new Promise((res, rej) => {
      let betaUsers: BetaUser[] = [];
      this.base(this.betaUserBaseName).select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 3,
        view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          console.log('Retrieved', record.get('Name'));
          const user: BetaUser = { 
            Name: record.get('Name').toString(), 
            walletAddress: record.get('walletAddress').toString(), 
            email: record.get('email').toString()
          };
          betaUsers.push(user);
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

      }, function done(err) {
        rej(err);
      });
      
    })
  }

  async getBetaUser(walletAddress: string): Promise<BetaUser | null> {
    return new Promise((res, rej) => {
      this.base(this.betaUserBaseName).select({
        filterByFormula: `{walletAddress} = '${walletAddress}'`,
        maxRecords: 1,
        view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          console.log('Retrieved', record.get('Name'));
          const user: BetaUser = { 
            Name: record.get('Name').toString(), 
            walletAddress: record.get('walletAddress').toString(), 
            email: record.get('email').toString()
          };
          res(user);
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

      }, function done(err) {
        if (err) {
          rej(err)
        } else {
          res(null)
        }
      });
    })
  }
}

const airtableController = new AirtableController(process.env.AIRTABLE_API_KEY, "app1BoC9ixwHTWj6Z");
export default airtableController;