/* eslint-disable @typescript-eslint/no-unused-vars */
import DefaultTap from "../defaultTap/defaultTap";
import cerveja from "../../assets/img/cerveja.svg";
import qrCode from "../../assets/img/qrCode.svg";
import styles from "./home.module.scss";
import Cleaning from "../cleaning/cleaning";
import logoCerveja from "../../assets/img/logoCerveja.svg";
import ErrorPage from "../error/error";
import { ReactNode, useEffect, useState } from "react";

export default function Home() {
  const [tappAmount, setTappAmount] = useState(2)
  const [tapp1, setTapp1] = useState<ReactNode>()
  const [tapp2, setTapp2] = useState<ReactNode>()
  const [tapp3, setTapp3] = useState<ReactNode>()

  const condition = tappAmount >= 2 ? styles.homeContainer : styles.homeContainer1

  useEffect(() => {
    setTapp1(
      <DefaultTap
        tappAmount={tappAmount}
        tapNumber={1}
        type="name"
        name="LAGER STOUT"
        image={cerveja}
        logo={logoCerveja}
        style="LAGER"
        ibu="12"
        abv="3,0"
        price="3,50"
        qrCode={qrCode}
        modal="client"
        clientName="Túlio Chaves"
        clientCredit={50.32}
        clientVolume={0}
        clientState="ready"
        exclusive
        groupName="Grupo Sete Lagoas Futebol Clube Mineiro"
        discount={30}
        promotion={25}
      />

      // <DefaultTap
      //   tappAmount={tappAmount}
      //   tapNumber={2}
      //   type="name"
      //   name="PILSEN"
      //   image={cerveja}
      //   style="ZEALAND"
      //   ibu="88"
      //   abv="5,5"
      //   price="4,20"
      //   qrCode={qrCode}
      //   modal="sangria"
      //   sangriaFlow={33}
      //   sangriaHighFlow
      //   sangriaTotal={100}
      //   sangriaTapId={4}
      //   sangriaServerIp="127.17.140.43"
      //   sangriaTapIp="127.17.140.43"
      // />

      // <DefaultTap
      //   tappAmount={tappAmount}
      //   tapNumber={3}
      //   type="name"
      //   name="PILSEN AROMATIC"
      //   image={cerveja}
      //   style="LAGER"
      //   ibu="40"
      //   abv="4,2"
      //   price="2,70"
      //   qrCode={qrCode}
      //   modal="staff"
      //   staffEmployee="Túlio Chaves"
      //   staffFlow={20}
      //   staffTotal={200}
      // />

      // <Cleaning
      //   tappAmount={tappAmount}
      //   tapNumber={2}
      //   employee={"Túlio Chaves"}
      //   flow={500}
      //   total={2000}
      //   dateLastClean={"ontem"}
      //   tapId={2}
      //   dateNextClean={"amanhda"}
      //   tapIp={"123.456.769"}
      //   liter={2}
      //   serverp={"123.4565.987"}
      //   serverStatusOk={true}
      // />

      // <ErrorPage
      //   type={"cable"}
      //   tapNumber={1}
      //   tappAmount={tappAmount}
      //   tapId={3}
      // />
    )

    setTapp2(
      <DefaultTap
        tappAmount={tappAmount}
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

      //   <Cleaning
      //   tappAmount={tappAmount}
      //   tapNumber={2}
      //   employee={"Túlio Chaves"}
      //   flow={500}
      //   total={2000}
      //   dateLastClean={"ontem"}
      //   tapId={2}
      //   dateNextClean={"amanhda"}
      //   tapIp={"123.456.769"}
      //   liter={2}
      //   serverp={"123.4565.987"}
      //   serverStatusOk={true}
      // />

      // <ErrorPage
      //   type={"cable"}
      //   tapNumber={1}
      //   tappAmount={tappAmount}
      //   tapId={3}
      // />
    )

    setTapp3(
      <DefaultTap
        tappAmount={tappAmount}
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
    )
  }, []);


  function renderTapps(amount: number) {
    if (amount == 1) {
      return <div className={`${condition} ${styles.full}'`}>
        <div>
          {tapp1}
        </div>
      </div>
    }
    if (amount == 2) {
      return <div className={`${condition} ${styles.half}`}>
        <div>
          {tapp1}
        </div>
        <div>
          {tapp2}
        </div>
      </div>
    }
    if (amount == 3) {
      return <div className={`${condition} ${styles.threeThirds}`}>
        <div>
          {tapp1}
        </div>
        <div>
          {tapp2}
        </div>
        <div>
          {tapp3}
        </div>
      </div>
    }
  }

  return (renderTapps(tappAmount));
}
