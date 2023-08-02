/* eslint-disable @typescript-eslint/no-unused-vars */
import DefaultTap from "../defaultTap/defaultTap";
import cerveja from "../../assets/img/cerveja.svg";
import qrCode from "../../assets/img/qrCode.svg";
import styles from "./home.module.scss";
import Cleaning from "../cleaning/cleaning";
import logoCerveja from "../../assets/img/logoCerveja.svg";
import ErrorPage from "../error/error";
import { useState } from "react";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div>
        <DefaultTap
          tapNumber={1}
          type="name"
          name="RUSSIAN IMPERIAL STOUT DRAFT BEER"
          image={cerveja}
          logo={logoCerveja}
          style="NEW ZEALAND BOEHMIAN PILSENER"
          ibu="12"
          abv="3,0"
          price="3,50"
          qrCode={qrCode}
          modal="client"
          clientName="Túlio Chaves"
          clientCredit={50.32}
          clientVolume={0}
          clientState="ready"
        />
        {/* <ErrorPage
          type="maintenance"
          tapNumber={1}
          tapId={4}
        /> */}
      </div>
      <div>
        <DefaultTap
          tapNumber={2}
          type="name"
          name="PILSEN"
          image={cerveja}
          style="ZEALAND"
          ibu="88"
          abv="5,5"
          price="4,20"
          qrCode={qrCode}
          modal="sangria"
          sangriaFlow={33}
          sangriaHighFlow
          sangriaTotal={100}
          sangriaTapId={4}
          sangriaServerIp="127.17.140.43"
          sangriaTapIp="127.17.140.43"
        />
        {/* <Cleaning
          tapNumber={2}
          employee="Túlio Chaves"
          flow={23}
          total={1500}
          dateLastClean="12/10/2019 16:53"
          tapId={4}
          dateNextClean="19/10/2019 16:53"
          tapIp="172.17.140.43"
          liter={1.5}
          serverp="172.17.140.43"
          serverStatusOk
        /> */}
      </div>
      <div>
        <DefaultTap
          tapNumber={3}
          type="name"
          name="PILSEN AROMATIC"
          image={cerveja}
          style="LAGER"
          ibu="40"
          abv="4,2"
          price="2,70"
          qrCode={qrCode}
          modal="staff"
          staffEmployee="Túlio Chaves"
          staffFlow={20}
          staffTotal={200}
        />
      </div>
    </div>
  );
}
