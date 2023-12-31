import styles from "./price.module.scss";

interface Props {
  ml: string;
  value: string;
  tappAmount: number
  promotion?: number;
  oldValue?: string
}

export default function Price(props: Props) {
  return (
    <div className={styles.priceContainer}>
      <div className={styles.mlAndCurrency}>
        <span className={props.tappAmount == 3 ?
          styles.ml :
          styles.ml2or1}>
          {props.ml}ml /
        </span>
        <span className={props.tappAmount == 3 ?
          styles.currency :
          styles.currency2or1}>R$</span>
      </div>
      <div className={props.tappAmount == 3 ?
        styles.value :
        styles.value2or1}>
        {props.promotion ?
          <div className={styles.promotion}>
            <span className={styles.promotionMessage}>
              {`R$ ${props.oldValue}`}
            </span>
            <span className={styles.promotionValue}>
              {` com -${props.promotion}%`}
            </span>
          </div> :
          null}
        {props.value}
      </div>
    </div>
  );
}
