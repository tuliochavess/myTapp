import styles from "./modalClient.module.scss";
import doneServing from '../../assets/img/doneServing.svg'

interface Props {
    name: string
    credit: number
    volume: number
    state: "ready" | "serving" | "done"
    tappAmount: number
}

function showState(state: string) {
    if (state === 'ready') {
        return <span className={styles.readyToServe}>
            Pronto para servir!
        </span>
    }
    if (state === 'serving') {
        return <span className={styles.serving}>
            Servindo
        </span>
    }
    if (state === 'done') {
        return <span className={styles.done}>
            <img src={doneServing} alt="Ícone de conclúido" />
        </span>
    }
    return null
}

export default function ModalClient(props: Props) {
    return <div className={styles.modalClientContainer}>
        <div className={styles.firstColum}>
            <div className={styles.nameContainer}>
                <div className={styles.nameRow}>
                    Olá <span className={styles.name}>
                        {props.name}
                    </span>
                </div>
                <span className={styles.instructionOrValue}>
                    Abra a torneira para servir.
                </span>
            </div>
            {showState(props.state)}
        </div>
        <div className={styles.secondColum}>
            <div className={styles.credtContainer}>
                <span className={styles.credtTitle}>
                    Saldo myTapp:
                </span>
                <div className={styles.credit}>
                    R$
                    <span className={styles.value}>
                        {props.credit}
                    </span>
                </div>
            </div>
            <div className={styles.volumeContainer}>
                <span className={styles.volumeTitle}>
                    Volume servido:
                </span>
                <div className={styles.volume}>
                    {props.volume}
                    <span className={styles.ml}>
                        ml
                    </span>
                </div>
            </div>
        </div>
    </div>
}