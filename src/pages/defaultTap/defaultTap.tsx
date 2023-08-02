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

interface Client {
  clientName?: string
  clientCredit?: number
  clientVolume?: number
  clientState?: "ready" | "serving" | "done"
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
  modal: 'client' | 'sangria' | 'staff'
}

export default function DefaultTap(props: Props) {
  const [displayModal, setDisplayModal] = useState(false);
  const screenWidth = window.innerWidth;

  function renderModal(type: string) {
    if (type === 'client') {
      return <div
        className={`${styles.modalClient} ${displayModal ? styles.show : ' '}`}>
        <ModalClient
          name={props.clientName!}
          credit={props.clientCredit!}
          volume={props.clientVolume!}
          state={props.clientState!} />
      </div>
    }
    if (type === 'sangria') {
      return <div
        className={`${styles.modalSangria} ${displayModal ? styles.show : ' '}`}>
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
        className={`${styles.modalStaff} ${displayModal ? styles.show : ' '}`}>
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

  function renderInfosAndQrCode(width: number) {
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
            <Price ml="100" value={props.price} />
          </div>
        </div>
        <QrCode qrCode={props.qrCode} class={styles.qrCode} />
      </div>
    }
    if (width >= 1920 && width < 2959) {
      return <div className={styles.infosAndQrCode}>
        <div className={styles.price}>
          <Price ml="100" value={props.price} />
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

  return (
    <div className={styles.defaultTapContainer}>
      <div className={styles.firstRow}
        onClick={() => setDisplayModal(!displayModal)}>
        <div className={styles.numberAndTitleOrStyle}>
          <TapNumber number={props.tapNumber} />
          <NameStyleMode
            type={props.type === 'name' ? 'name' : 'style'}
            content={props.type === 'name' ? props.name : props.style}
            class={styles.nameStyleModeTop} />
        </div>
      </div>
      <div className={styles.secondRow}>
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
            type={props.type === 'name' ? 'style' : 'name'}
            content={props.type === 'name' ? props.style : props.name} />
        </div>
        {renderInfosAndQrCode(screenWidth)}
        {renderModal(props.modal)}
      </div>
    </div>
  );
}
