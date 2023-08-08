import styles from "./tapNumber.module.scss";
import logo from "../../assets/img/logo-black.svg";

interface Props {
  number: number;
  tappAmount: number;
}

export default function TapNumber(props: Props) {
  return (
    <div className={styles.tapNumberContainer}>
      <img src={logo} alt="Logo myTapp" className={styles.logo} />
      <span className={styles.number}>{props.number}</span>
    </div>
  );
}
