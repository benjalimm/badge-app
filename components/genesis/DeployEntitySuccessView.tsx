import React from 'react';
import style from '../../styles/genesis.module.css'
import { EntityInfo } from '../../schemas/genesis';
<<<<<<< HEAD
import Field from '../GenericComponents/Field';
=======
>>>>>>> main
import cx from 'classnames';
import { useRouter } from 'next/router';

const DeployEntitySuccessView = 
({ name, address, genesisTokenHolder, tokenHolderEnsName }: EntityInfo) => {
  const router = useRouter();

  function proceed() {
    router.push('/create')
  }

  return <div className={cx(style.entryContainer, style.successContainer)}>
<<<<<<< HEAD
    <img className={style.blackBadge} src="images/generic/success.svg"/>
=======
    <img className={style.blackBadge} src="/images/blackBadge.svg"/>
>>>>>>> main
    <h1 className={style.successHeader}>Entity successfully deployed on-chain</h1>
    <h1 className={style.successSubheader}>Genesis token minted to your wallet</h1>
    <div className={style.successEntityDetailsContainer}>
      <h1 className={style.successEntityDetailsHeader}>Details</h1>
<<<<<<< HEAD
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
=======
      <EntitySuccessField 
        title="Entity address" 
        value={address}
      />
      <EntitySuccessField 
        title="Entity name" 
        value={name}
      />
      <EntitySuccessField 
        title="Genesis token holder" 
        value={genesisTokenHolder}
>>>>>>> main
      />
    </div>
    <button 
      className={style.proceedButton} 
      onClick={proceed}>
      Proceed
    </button>
  </div>
}

<<<<<<< HEAD
=======
const EntitySuccessField = ({ title, value } : { title: string, value: string}) => {
  return <div className={style.successDetailsFieldContainer}>
    <h1 className={style.successDetailsFieldHeader}>{title}</h1>
    <span className={style.successDetailsFieldValue}>{value}</span>
  </div>
}

>>>>>>> main
export default DeployEntitySuccessView;