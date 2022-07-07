import { GetServerSideProps } from "next";

export type DomainType = "badge" | "alpha" | "unrecognized";

export interface DomainTypeProps {
  domainType: DomainType;
  host: string;
}

function parseWildCardWithHost(host: string): DomainType {

  // 1. Split and get first domain
  const splits = host.split(".");
  const wildCardString  = splits[0];

  // 2. Standardise string
  const lowerCaseString = wildCardString.toLowerCase();

  // 3. Check if it's local host, if so treat as main badge domain
  if (lowerCaseString.includes("localhost") && splits.length === 1) {
    return "badge";
  } else {
    return (wildCardString === "alpha" || wildCardString === "badge") ? wildCardString : "unrecognized";
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