import { GetServerSideProps } from "next";

export type DomainType = "main" | "app-subdomain" | "unrecognized";

export interface DomainTypeProps {
  domainType: DomainType;
  host: string;
}
export const CURRENT_SUBDOMAIN = "alpha";
function parseWildCardWithHost(host: string): DomainType {

  // 1. Split and get first domain
  const splits = host.split(".");
  const wildCardString  = splits[0];

  // 2. Standardise string
  const lowerCaseString = wildCardString.toLowerCase();

  // 3. Check if it's local host, if so treat as main badge domain
  if (lowerCaseString.includes("localhost") && splits.length === 1) {
    /// If it's just localhost, we treat it as main badge domain
    return "main";
  } else if (splits.length === 3 && splits[1] === "vercel") {
    /// We make a provision for the app running in vercel dev or prod here
    return "main"
  } else {
    switch (lowerCaseString) {
      case "badge":
        return "main"
      case CURRENT_SUBDOMAIN: 
        return "app-subdomain"
      default:
        return "unrecognized"
    }
  }
}

const getServerSidePropsWildCardFunction: GetServerSideProps = async (context) => {
  const host = context.req.headers.host
  const wildcard = parseWildCardWithHost(host)
  console.log(`Wildcard: ${wildcard}`)
  const props: DomainTypeProps = { domainType: wildcard, host }
  return { props };
}
export default getServerSidePropsWildCardFunction;