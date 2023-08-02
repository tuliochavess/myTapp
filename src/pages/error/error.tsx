import TapNumber from "../../components/tapNumber";
import styles from "./error.module.scss";
import logo from '../../assets/img/myTappLogoError.svg'
import router from '../../assets/img/error/router.svg'
import server from '../../assets/img/error/server.svg'
import cable from '../../assets/img/error/cable.svg'
import internet from '../../assets/img/error/internet.svg'
import maintenance from '../../assets/img/error/maintenance.svg'
import beer from '../../assets/img/error/beer.svg'
import closed from '../../assets/img/error/closed.svg'
import trocardepois from '../../assets/img/error/trocardepois.svg'
import { useState } from "react";

interface Props {
    type: 'default' | 'router' | 'server' | 'cable' | 'internet' | 'maintenance' | 'closed' | 'unavailable' | 'barrel'
    tapNumber: number
    tapId?: number
}

export default function ErrorPage(props: Props) {
    const [defaultError, setDefaultError] = useState(true)

    function renderError(type: string, tapId?: number) {
        if (type === 'default') return <img src={logo} alt="myTapp Logo" />
        if (type === 'router') {
            return renderCustomError(type, tapId)
        }
        if (type === 'server') {
            return renderCustomError(type, tapId)
        }
        if (type === 'cable') {
            return renderCustomError(type, tapId)
        }
        if (type === 'internet') {
            return renderCustomError(type, tapId)
        }
        if (type === 'maintenance') {
            return renderCustomError(type, tapId)
        }
        if (type === 'closed') {
            return renderCustomError(type, tapId)
        }
        if (type === 'unavailable') {
            return renderCustomError(type, tapId)
        }
        if (type === 'barrel') {
            return renderCustomError(type, tapId)
        }
    }

    function renderErrorTitle(type: string) {
        if (type === 'router') return 'Não é possível estabelecer comunicação com o roteador.'
        if (type === 'server') return 'Não está sendo possível comunicar com o servidor.'
        if (type === 'cable') return 'O cabo de rede da tap está desconectado.'
        if (type === 'internet') return 'O estabelecimento está sem conexão com a internet.'
        if (type === 'maintenance') return 'Tap em manutenção.'
        if (type === 'closed') return 'Por hoje é só pessoal: o bar já fechou! Mas podemos beber outro dia, que tal?'
        if (type === 'unavailable') return 'Desculpe, esta tap está indisponível para consumo.'
        if (type === 'barrel') return 'Ei, parece que acabou o barril! Chame um atendente para te ajudar.'
    }

    function renderErrorImg(type: string) {
        if (type === 'router') return router
        if (type === 'server') return server
        if (type === 'cable') return cable
        if (type === 'internet') return internet
        if (type === 'maintenance') return maintenance
        if (type === 'closed') return closed
        if (type === 'unavailable') return trocardepois
        if (type === 'barrel') return trocardepois
    }

    function renderCustomError(type: string, tapId?: number) {
        return <div className={styles.errorComponent}>
            <span className={styles.errorTtile}>
                {renderErrorTitle(type)}
            </span>
            <img src={renderErrorImg(type)}
                className={styles.errorImg} />
            {tapId ?
                <span className={styles.tapId}>
                    {`ID da tap: ${tapId}`}
                </span> :
                null}
        </div>
    }

    function renderDefaultError() {
        return <div className={styles.errorComponent}>
            <span className={styles.tapId}>
                Ei, Parece que acabou a cerveja aqui!
            </span>
            <img src={beer}
                className={styles.errorImg} />
            <span className={styles.tapId}>
                Chame um atendente para te ajudar.
            </span>
        </div>
    }

    return <>
        <div className={styles.tapNumber} onClick={() => setDefaultError(!defaultError)}>
            <TapNumber number={props.tapNumber} />
        </div>
        <div className={styles.errorContainer}>
            {defaultError ?
                renderDefaultError() :
                renderError(props.type, props.tapId)}
        </div>
    </>

}