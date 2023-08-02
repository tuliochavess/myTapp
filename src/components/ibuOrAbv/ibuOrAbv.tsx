import styles from "./ibuOrAbv.module.scss";

interface Props {
  type: "ibu" | "abv";
  value: string;
  class?: string;
}

export default function IbuOrAbv(props: Props) {
  return (
    <div className={styles.ibuOrAbvContainer + " " + props.class}>
      <div className={styles.titleAndName}>
        <span className={styles.title}>
          {props.type === "abv" ? "% ALCOOL" : "AMARGOR"}
        </span>
        <span className={styles.name}>
          {props.type === "abv" ? "ABV" : "IBU"}
        </span>
      </div>
      <div className={styles.value}>{props.value}</div>
    </div>
  );
}
