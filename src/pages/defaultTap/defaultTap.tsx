import { useState } from "react";
import IbuOrAbv from "../../components/ibuOrAbv";
import Price from "../../components/price/price";
import QrCode from "../../components/qrCode/qrCode";
import TapNumber from "../../components/tapNumber/tapNumber";
import styles from "./defaultTap.module.scss";
import ModalClient from "../../components/modalClient";
import ModalSangria from "../../components/modalSangria/modalSangria";
import ModalStaff from "../../components/modalStaff/modalStaff";
import NameStyleMode from "../../components/nameStyleMode";
import ModalExclusiveGroup from "../../components/modalExclusiveGroup";

interface Client {
  clientName?: string
  clientCredit?: number
  clientVolume?: number
  clientState?: "ready" | "serving" | "done";
  exclusive?: boolean;
  groupName?: string;
  discount?: number
}

interface Sangria {
  sangriaFlow?: number
  sangriaHighFlow?: boolean
  sangriaTotal?: number
  sangriaTapId?: number
  sangriaServerIp?: string
  sangriaTapIp?: string
}

interface Staff {
  staffEmployee?: string
  staffFlow?: number
  staffTotal?: number
}

interface Props extends Client, Sangria, Staff {
  tappAmount: number;
  tapNumber: number;
  type: "name" | "style";
  name: string;
  image: string;
  logo?: string;
  style: string;
  ibu: string;
  abv: string;
  price: string;
  qrCode: string;
  modal: 'client' | 'sangria' | 'staff';
  promotion?: number
}

export default function DefaultTap(props: Props) {
  const [displayModal, setDisplayModal] = useState(false);
  const screenWidth = window.innerWidth;

  function renderModal(type: string) {
    if (type === 'client') {
      return <div
        className={`${styles.modalClient} ${displayModal ? styles.show : ''} ${props.tappAmount == 3 ?
          '' :
          styles.modalClient2or1}`}>
        <ModalClient
          name={props.clientName!}
          credit={props.clientCredit!}
          volume={props.clientVolume!}
          state={props.clientState!}
          tappAmount={props.tappAmount!} />
      </div>
    }
    if (type === 'sangria') {
      return <div
        className={`${styles.modalSangria} ${displayModal ? styles.show : ' '} ${props.tappAmount == 3 ?
          '' :
          styles.modalSangria2or1}`}>
        <ModalSangria
          flow={props.sangriaFlow!}
          highFlow={props.sangriaHighFlow}
          total={props.sangriaTotal!}
          tapId={props.sangriaTapId!}
          serverIp={props.sangriaServerIp!}
          tapIp={props.sangriaTapIp!}
          onClose={() => setDisplayModal(false)}
        />
      </div>
    }
    if (type === 'staff') {
      return <div
        className={`${styles.modalStaff} ${displayModal ? styles.show : ' '} ${props.tappAmount == 3 ?
          '' :
          styles.modalStaff2or1}`}>
        <ModalStaff
          employee={props.staffEmployee!}
          flow={props.staffFlow!}
          total={props.staffTotal!}
          onClose={() => setDisplayModal(false)}
        />
      </div>
    }
    return null
  }

  function renderInfosAndQrCode(width: number, amount: number) {
    if (amount == 3) {
      if (width >= 1280 && width < 1919) {
        return <div className={styles.infosAndQrCode}>
          <div>
            <div className={styles.ibuAndAbv}>
              <IbuOrAbv
                type="ibu"
                value={props.ibu}
                class={styles.firstElement}
              />
              <IbuOrAbv type="abv" value={props.abv} />
            </div>
            <div className={styles.price}>
              <Price ml="100" value={props.price} tappAmount={props.tappAmount} promotion={props.promotion!} />
            </div>
          </div>
          <QrCode qrCode={props.qrCode} class={styles.qrCode} />
        </div>
      }

      if (width >= 1920) {
        return <div className={styles.infosAndQrCode}>
          <div className={styles.price}>
            <Price ml="100" value={props.price} tappAmount={props.tappAmount} promotion={props.promotion!} />
          </div>
          <div className={styles.ibuAndAbv}>
            <IbuOrAbv
              type="ibu"
              value={props.ibu}
              class={styles.firstElement}
            />
            <IbuOrAbv type="abv" value={props.abv} />
          </div>
          <QrCode qrCode={props.qrCode} class={styles.qrCode} />
        </div>
      }
    }

    if (amount == 2) {
      if (width >= 1280 && width < 1919) {
        return <div className={styles.infosAndQrCode}>
          <div className={styles.price}>
            <Price ml="100" value={props.price} tappAmount={props.tappAmount} promotion={props.promotion!} />
          </div>
          <div className={styles.ibuAndAbv2or1}>
            <IbuOrAbv
              type="ibu"
              value={props.ibu}
              class={styles.firstElement2or1}
            />
            <IbuOrAbv type="abv" value={props.abv} />
          </div>
          <QrCode qrCode={props.qrCode} class={styles.qrCode} />
        </div>
      }

      if (width >= 1920) {
        return <div className={styles.infosAndQrCode}>
          <div className={styles.price}>
            <Price ml="100" value={props.price} tappAmount={props.tappAmount} promotion={props.promotion!} />
          </div>
          <div className={styles.ibuAndAbv2or1}>
            <IbuOrAbv
              type="ibu"
              value={props.ibu}
              class={styles.firstElement2or1}
            />
            <IbuOrAbv type="abv" value={props.abv} />
          </div>
          <QrCode qrCode={props.qrCode} class={styles.qrCode} />
        </div>
      }
    }

    if (amount == 1) {
      return <div className={styles.infosAndQrCode}>
        <div className={styles.price}>
          <Price ml="100" value={props.price} tappAmount={props.tappAmount} promotion={props.promotion!} />
        </div>
        <div className={styles.ibuAndAbv2or1}>
          <IbuOrAbv
            type="ibu"
            value={props.ibu}
            class={styles.firstElement2or1}
          />
          <IbuOrAbv type="abv" value={props.abv} />
        </div>
        {screenWidth > 414 ? <QrCode qrCode={props.qrCode} class={styles.qrCode} /> : null}
      </div>
    }
  }

  return <>
    {props.exclusive && displayModal ?
      <ModalExclusiveGroup
        tappAmount={props.tappAmount}
        groupName={props.groupName!}
        discount={props.discount!}
      /> :
      null}
    <div
      className={props.tappAmount == 3 ?
        styles.defaultTapContainer :
        styles.defaultTapContainer2or1}
    >
      <div className={styles.firstRow}>
        <div className={styles.numberAndTitleOrStyle}>
          <TapNumber number={props.tapNumber} tappAmount={props.tappAmount} />
          <NameStyleMode
            tappAmount={props.tappAmount}
            type={props.type === 'name' ? 'name' : 'style'}
            content={props.type === 'name' ? props.name : props.style}
            class={styles.nameStyleModeTop} />
        </div>
      </div>
      <div className={styles.secondRow}
        onClick={() => setDisplayModal(!displayModal)}>
        <div className={styles.rowImage}>
          <img
            src={props.image}
            alt="Foto da cerveja"
            className={styles.image}
          />
          {props.logo ? <img
            src={props.logo}
            alt="Logo da cerveja"
            className={styles.logo}
          /> : null}
        </div>
      </div>
      <div className={styles.thirdRow}>
        <div>
          <NameStyleMode
            tappAmount={props.tappAmount}
            type={props.type === 'name' ? 'style' : 'name'}
            content={props.type === 'name' ? props.style : props.name} />
        </div>
        {renderInfosAndQrCode(screenWidth, props.tappAmount)}
        {renderModal(props.modal)}
      </div>
    </div>
  </>

}
