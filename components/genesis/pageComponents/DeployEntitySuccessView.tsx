import React from 'react';
import sharedStyle from './shared.module.css';
import style from './DeployEntitySuccessView.module.css';
import Field from '../../GenericComponents/Field';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { BasicButton } from '../../GenericComponents/Buttons';

interface Props { 
  entityName: string;
  entityAddress: string;
  genesisTokenHolder: string;
  genesisHolderEnsName?: string;
  transactionLink: string;
  badgeTokenLink: string;
  permissionTokenLink: string;
}
export default function  DeployEntitySuccessView 
({ 
  entityName, 
  entityAddress, 
  genesisTokenHolder, 
  genesisHolderEnsName, 
  transactionLink,
  permissionTokenLink,
  badgeTokenLink
}: Props)  {
  const router = useRouter();

  function proceed() {
    router.push('/create')
  }

  return <div className={cx(sharedStyle.entryContainer, style.successContainer)}>
    <img className={style.blackBadge} src="images/generic/success.svg"/>
    <h1 className={style.successHeader}>Entity successfully registered on-chain</h1>
    <h1 className={style.successSubheader}>Genesis token minted to your wallet</h1>
    <div className={style.successEntityDetailsContainer}>
      <h1 className={style.successEntityDetailsHeader}>Details</h1>
      <Field 
        title="Entity name" 
        value={entityName}
        className={style.successDetailsFieldContainer}
      />
      <Field 
        title="Entity address" 
        value={entityAddress}
        className={style.successDetailsFieldContainer}
      />
      <Field 
        title="Genesis token holder" 
        value={genesisTokenHolder}
        className={style.successDetailsFieldContainer}
      />
      <Field 
        title="Transaction link" 
        value={transactionLink}
        className={style.successDetailsFieldContainer}
        isLink={true}
      />

    </div>
    <BasicButton 
      className={style.proceedButton} 
      onClick={proceed} 
      text={"Proceed"}
    />
  </div>
}
