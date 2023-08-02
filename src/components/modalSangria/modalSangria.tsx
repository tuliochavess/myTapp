import styles from "./modalSangria.module.scss";
import alertHighFlow from '../../assets/img/alertBlack.svg'
import Timer from "../timer";

interface Props {
    flow: number
    highFlow?: boolean
    total: number
    tapId: number
    serverIp: string
    tapIp: string
    onClose: () => void
}

export default function ModalSangria(props: Props) {
    return <div className={styles.modalSangriaContainer}>
        <Timer type="sangria" onClose={() => props.onClose()} />
        <div className={styles.titleRow}>
            Modo:
            <span className={styles.sangria}>
                SANGRAR BARRIL
            </span>
        </div>
        <div className={styles.instructions}>
            Este modo não realiza nenhuma cobrança de créditos, apenas registra os valores servidos para relatório.
        </div>
        <div className={styles.flowRate}>
            Vazão (ml/s):
            <span className={styles.flow}>
                {`${props.flow} ml/s`}
            </span>
            {props.highFlow ?
                <>
                    <span className={styles.highFlow}>
                        - Vazão muito alta
                    </span>
                    <img
                        src={alertHighFlow}
                        alt="Alerta de fluxo muito alto"
                        className={styles.alertHighFlow} />
                </>
                : null}

        </div>
        <span className={styles.rightFlow}>
            O valor da vazão deve ser entre 12 e 25 ml/s
        </span>
        <div className={styles.total}>
            <span className={styles.titleTota}>
                Total servido:
            </span>
            <span className={styles.totalValue}>
                {`${props.total} ml`}
            </span>
        </div>
        <span className={styles.tapId}>
            {`Tap ID: ${props.tapId}`}
        </span>
        <span className={styles.serverIp}>
            {`IP do servidor: ${props.serverIp}`}
        </span>
        <span className={styles.tapIp}>
            {`IP da Tap: ${props.tapIp}`}
        </span>
    </div>
}