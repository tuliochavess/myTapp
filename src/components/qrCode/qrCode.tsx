import styles from "./qrCode.module.scss";

interface Props {
  qrCode: string;
  class?: string
}

export default function QrCode(props: Props) {
  return (
    <div className={styles.qrCodeContainer + ' ' + props.class}>
      <span className={styles.freeTap}>LIBERE A TAP</span>
      <img src={props.qrCode} alt="QRCode" className={styles.qrCodeImg} />
      <span className={styles.site}>MYTAPP.PUB</span>
    </div>
  );
}
