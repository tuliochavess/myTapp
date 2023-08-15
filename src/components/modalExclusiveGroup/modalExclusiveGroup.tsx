import styles from "./modalExclusiveGroup.module.scss";

interface Props {
    tappAmount: number;
    groupName: string
    discount: number
}

export default function ModalExclusiveGroup(props: Props) {
    return <div className={props.tappAmount == 3 ?
        styles.modalExclusiveGroupContainer :
        styles.modalExclusiveGroupContainer2or1}>
        <div className={styles.message}>
            Ei! Você faz parte do grupo exclusivo!
        </div>
        <div className={styles.groupName}>
            {props.groupName}
        </div>
        <div className={styles.discountBox}>
            <span className={styles.discountMessage}>
                Desconto de:
            </span>
            <span className={styles.discount}>
                {`-${props.discount}%`}
            </span>
        </div>
    </div>
}