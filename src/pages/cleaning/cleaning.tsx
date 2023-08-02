import NameStyleMode from "../../components/nameStyleMode";
import TapNumber from "../../components/tapNumber";
import alertOrange from '../../assets/img/alertOrange.svg'
import styles from "./cleaning.module.scss";

interface Props {
    tapNumber: number
    employee: string
    flow: number
    total: number
    dateLastClean: string
    tapId: number
    dateNextClean: string
    tapIp: string
    liter: number
    serverp: string
    serverStatusOk: boolean
}

export default function Cleaning(props: Props) {
    return <div className={styles.cleaningContainer}>
        <div className={styles.firstRow}>
            <div className={styles.title}>
                <TapNumber number={props.tapNumber} />
                <NameStyleMode
                    type={"mode"}
                    content={'LIMPEZA'}
                    class={styles.nameStyleModeTop} />
            </div>
        </div>
        <div className={styles.employeeRow}>
            <span className={styles.employeeLabel}>Funcionário:</span>
            <span className={styles.employee}>{props.employee}</span>
        </div>
        <span className={styles.instructions}>
            Este modo não realiza nenhuma cobrança de créditos, apenas registra os valores servidos para relatório.
        </span>
        <div className={styles.flowContainer}>
            <span className={styles.flowTitle}>
                Informações de fluxo
            </span>
            <div className={styles.flowRateRow}>
                <span className={styles.flowRate}>
                    Vazão (ml/s):
                </span>
                <span className={styles.flowValue}>
                    {`${props.flow} ml/s`}
                </span>
            </div>
            <div className={styles.flowInstructionRow}>
                <img src={alertOrange} alt="Alerta de fluxo" />
                <span className={styles.flowInstruction}>
                    Após a limpeza, reajuste a vazão entre 12 e 25 ml/s
                </span>
            </div>
            <div className={styles.totalRow}>
                <span className={styles.totalTitle}>Total servido:</span>
                <span className={styles.total}>{`${props.total} ml`}</span>
            </div>
        </div>
        <div className={styles.infoContainer}>
            <div className={styles.labelAndValue}>
                <span className={styles.label}>
                    Última limpeza:
                </span>
                <span className={styles.value}>
                    {props.dateLastClean}
                </span>
            </div>
            <div className={styles.labelAndValue}>
                <span className={styles.label}>
                    Tap ID:
                </span>
                <span className={styles.value}>
                    {props.tapId}
                </span>
            </div>
            <div className={styles.labelAndValue}>
                <span className={styles.label}>
                    Previsão para próx. limpeza:
                </span>
                <span className={styles.value}>
                    {props.dateNextClean}
                </span>
            </div>
            <div className={styles.labelAndValue}>
                <span className={styles.label}>
                    IP da Tap:
                </span>
                <span className={styles.value}>
                    {props.tapIp}
                </span>
            </div>
            <div className={styles.labelAndValue}>
                <span className={styles.label}>
                    Quantidade indicada de líquido:
                </span>
                <span className={styles.value}>
                    {`${props.liter} Litros`}
                </span>
            </div>
            <div className={styles.labelAndValue}>
                <span className={styles.label}>
                    IP do servidor:
                </span>
                <span className={styles.value}>
                    {props.serverp} <div
                        className={styles.status}
                        style={props.serverStatusOk ?
                            { backgroundColor: '#6ECB4F' } :
                            { backgroundColor: '#B21E19' }}>

                    </div>
                </span>
            </div>
        </div>
        <div className={styles.operationalInstruction}>
            Aumente a vazão até o máximo e puxe a tap para correr o líquido até a quantidade indicada.
        </div>
    </div>
}