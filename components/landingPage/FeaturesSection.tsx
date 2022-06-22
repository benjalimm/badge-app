import React from 'react';
import styles from "./FeaturesSection.module.css"

interface Feature {
  title: string;
  description: string;
  icon: string;
}

// ** Feature data ** \\
const features: Feature[] = [{
  title: "Recoverable Badges",
  description: "Badges are non-transferable but recoverable. Recipients can set a permanent recovery address, allowing for recoverability while preventing speculation.",
  icon: "images/landingPage/LockOpen.svg"
},
{
  title: "Levelling system",
  description: "Not all achievements are equal. Different levels of merit are distinguished with an integer on-chain. A higher level commands a higher price.",
  icon: "images/landingPage/ModelDiamond.svg"
},
{
  title: "Burn with prejudice",
  description: "Unwanted Badges can be burnt in exchange for ETH from an entity’s stake. This increases their required stake and temporarily disables them until their stake is refilled.",
  icon: "images/landingPage/FireTrendHot.svg"
},
{
  title: "Permissions system",
  description: "Enable others to reward Badges on behalf of an entity by sending them a permission token. ",
  icon: "images/landingPage/UserGroupAccounts.svg"
},
{
  title: "Exposure to upside",
  description: "The Badge treasury exposes recipients to upside such an randomized NFT drops and coveted  whitelists.",
  icon: "images/landingPage/Gift.svg"
},
{
  title: "BadgeXP points system",
  description: "Badge’s non-transferable ERC20 points system can be used by other dapps for sybil-resistance and airdrops.",
  icon: "images/landingPage/ChartUpArrow.svg"
}
]

// ** Features section ** \\
export default function FeaturesSection() {

  return <div>
    <h1 className={styles.header}>Badge is a feature-rich protocol:</h1>
    <div className={styles.features}>
      {
        features.map((feature, index) => {
          return <FeatureCell 
            title={feature.title} 
            description={feature.description} 
            icon={feature.icon} 
            key={index}
          />
        })
      }

    </div>
  </div>
}

// ** Feature cell ** \\
function FeatureCell({ title, description, icon }: Feature) {
  return <div className={styles.feature}>
    <img className={styles.featureIcon}src={icon}/>
    <h1 className={styles.featureHeader}>{title}</h1>
    <span className={styles.featureDescription}>{description}</span>

  </div>
}