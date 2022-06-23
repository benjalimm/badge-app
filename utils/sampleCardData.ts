import { BadgeData } from "../schemas/BadgeData";

const data: BadgeData[] = [
  {
    id: 0,
    title: "Core contributor",
    content: "Lana was instrumental in architecting and building out the DAO's core contract.",
    videoPath: "/videos/sampleNFTVideos/badgeTick.mp4",
    profilePhotoSource: "/images/landingPage/uniswap_logo.jpeg",
    level: 3,
    entityName: "Badge labs",
    recipientEns: "lanalim.eth"
  },
  {
    id: 1,
    title: "Lead engineer",
    content: "Nathan was responsible for engineering our MVP and getting our product to market in six months.",
    videoPath: "/videos/sampleNFTVideos/badgeKeyboard.mp4",
    profilePhotoSource: "/images/landingPage/coinbase_logo.jpeg",
    level: 4,
    entityName: "Uniswap",
    recipientEns: "0x15FA..3Ud"
  },
  {
    id: 2,
    title: "Investor & mentor",
    content: "Jon not only led our seed round, but also spent countless hours helping us to design our customer onboarding.",
    videoPath: "/videos/sampleNFTVideos/badgeTrophy.mp4",
    profilePhotoSource: "/images/landingPage/opensea_logo.png",
    level: 2,
    entityName: "Coinbase",
    recipientEns: "jon.eth"
  },
];

export default data