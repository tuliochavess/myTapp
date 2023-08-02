import { useEffect, useState } from "react";
import styles from "./timer.module.scss";

interface Props {
    type: 'sangria' | 'staff'
    onClose: () => void
}

export default function Timer(props: Props) {
    const [time, setTime] = useState('')

    useEffect(() => {
        countdownTimer()
    }, []);

    function setBackgroundColor(type: string) {
        if (type === 'sangria') {
            return { background: '#930C08' }
        }
        if (type === 'staff') {
            return { background: '#5B9439' }
        }
    }

    function countdownTimer() {
        let remainingSeconds = props.type === 'sangria' ? 40 : 300;

        const interval = setInterval(() => {
            remainingSeconds--;
            const minutes = Math.floor(remainingSeconds / 60);
            const seconds = remainingSeconds % 60;
            const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            setTime(formattedTime);

            if (remainingSeconds === 0) {
                clearInterval(interval);
                props.onClose()
            }
        }, 1000);
    }

    return <div className={styles.timerContainer}
        style={setBackgroundColor(props.type)}>
        <span className={styles.timer}>{time}</span>
    </div>
}