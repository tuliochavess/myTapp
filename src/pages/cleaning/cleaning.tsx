import NameStyleMode from "../../components/nameStyleMode";
import TapNumber from "../../components/tapNumber";
import alertOrange from '../../assets/img/alertOrange.svg'
import styles from "./cleaning.module.scss";

interface Props {
    tappAmount: number;
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

    function renderInfos(label: string, value: string | number) {
        return <div className={props.tappAmount == 3 ?
            styles.labelAndValue :
            styles.labelAndValue2or1}>
            <span className={props.tappAmount == 3 ?
                styles.label :
                styles.label2or1}>
                {label}
            </span>
            <span className={props.tappAmount == 3 ?
                styles.value :
                styles.value2or1}>
                {value}
            </span>
        </div>
    }

    return <div className={props.tappAmount == 3 ?
        styles.cleaningContainer :
        styles.cleaningContainer2or1}>
        <div className={styles.firstRow}>
            <div className={styles.title}>
                <TapNumber number={props.tapNumber} tappAmount={props.tappAmount} />
                <NameStyleMode
                    type={"mode"}
                    content={'LIMPEZA'}
                    class={styles.nameStyleModeTop}
                    tappAmount={0} />
            </div>
        </div>
        <div className={styles.employeeRow}>
            <span className={props.tappAmount == 3 ?
                styles.employeeLabel :
                styles.employeeLabel2or1}>Funcionário:</span>
            <span className={props.tappAmount == 3 ?
                styles.employee :
                styles.employee2or1}>{props.employee}</span>
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
            {renderInfos('Última limpeza:', props.dateLastClean)}
            {renderInfos('Tap ID:', props.tapId)}
            {renderInfos('Previsão para próx. limpeza:', props.dateNextClean)}
            {renderInfos('IP da Tap:', props.tapIp)}
            {renderInfos('Quantidade indicada de líquido:', `${props.liter} Litros`)}
            <div className={props.tappAmount == 3 ? styles.labelAndValue : styles.labelAndValue2or1}>
                <span className={props.tappAmount == 3 ? styles.label : styles.label2or1}>
                    IP do servidor:
                </span>
                <span className={props.tappAmount == 3 ? styles.value : styles.value2or1}>
                    {props.serverp} <div
                        className={styles.status}
                        style={props.serverStatusOk ?
                            { backgroundColor: '#6ECB4F' } :
                            { backgroundColor: '#B21E19' }}>

                    </div>
                </span>
            </div>
        </div>
        <div className={props.tappAmount == 3 ?
            styles.operationalInstruction :
            styles.operationalInstruction2or1}>
            Aumente a vazão até o máximo e puxe a tap para correr o líquido até a quantidade indicada.
        </div>
    </div>
}