import Timer from "../timer/timer";
import styles from "./modalStaff.module.scss";

interface Props {
    employee: string
    flow: number
    total: number
    onClose: () => void
}

export default function ModalStaff(props: Props) {
    return <div className={styles.modalStaffContainer}>
        <Timer type="staff" onClose={() => props.onClose()} />
        <div className={styles.titleRow}>
            Modo:
            <span className={styles.staff}>
                STAFF
            </span>
        </div>
        <div className={styles.instructions}>
            Este é o modo para consumo da staff do estabelecimento, nenhum crédito é cobrado, apenas registramos os valores consumidos para relatório.
        </div>
        <div className={styles.employeeRow}>
            <span className={styles.employeeTtile}>
                Funcionário:
            </span>
            <span className={styles.employee}>
                {props.employee}
            </span>
        </div>
        <div className={styles.flowRow}>
            <div className={styles.flowRate}>
                Vazão (ml/s):
                <span className={styles.flow}>
                    {`${props.flow} ml/s`}
                </span>
            </div>
            <span className={styles.rightFlow}>
                O valor da vazão deve ser entre 12 e 25 ml/s
            </span>
        </div>
        <div className={styles.totalRow}>
            <div className={styles.total}>
                <span className={styles.titleTota}>
                    Total servido:
                </span>
                <span className={styles.totalValue}>
                    {`${props.total} ml`}
                </span>
            </div>
        </div>
    </div>
}