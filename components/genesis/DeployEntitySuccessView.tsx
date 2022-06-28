import React from 'react';
import sharedStyle from './shared.module.css';
import style from './DeployEntitySuccessView.module.css';
import { EntityInfo } from '../../schemas/genesis';
import Field from '../GenericComponents/Field';
import cx from 'classnames';
import { useRouter } from 'next/router';
type ScanInput = { scanLink: string }
interface Props extends EntityInfo, ScanInput {}
const DeployEntitySuccessView = 
({ name, address, genesisTokenHolder, tokenHolderEnsName, scanLink }: Props) => {
  const router = useRouter();

  function proceed() {
    router.push('/create')
  }

  return <div className={cx(sharedStyle.entryContainer, style.successContainer)}>
    <img className={style.blackBadge} src="images/generic/success.svg"/>
    <h1 className={style.successHeader}>Entity successfully deployed on-chain</h1>
    <h1 className={style.successSubheader}>Genesis token minted to your wallet</h1>
    <div className={style.successEntityDetailsContainer}>
      <h1 className={style.successEntityDetailsHeader}>Details</h1>
      <Field 
        title="Entity address" 
        value={address}
        className={style.successDetailsFieldContainer}
      />
      <Field 
        title="Entity name" 
        value={name}
        className={style.successDetailsFieldContainer}
      />
      <Field 
        title="Genesis token holder" 
        value={genesisTokenHolder}
        className={style.successDetailsFieldContainer}
      />
      <Field 
        title="Etherscan url" 
        value={scanLink}
        className={style.successDetailsFieldContainer}
        isLink={true}
      />

    </div>
    <button 
      className={style.proceedButton} 
      onClick={proceed}>
      Proceed
    </button>
  </div>
}

export default DeployEntitySuccessView;