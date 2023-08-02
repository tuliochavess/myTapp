import styles from "./price.module.scss";

interface Props {
  ml: string;
  value: string;
}

export default function Price(props: Props) {
  return (
    <div className={styles.priceContainer}>
      <div className={styles.mlAndCurrency}>
        <span className={styles.ml}>{props.ml}ml /</span>
        <span className={styles.currency}>R$</span>
      </div>
      <div className={styles.value}>{props.value}</div>
    </div>
  );
}
