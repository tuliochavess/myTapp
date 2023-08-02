import styles from "./nameStyleMode.module.scss";

interface Props {
  type: "name" | "style" | 'mode';
  content: string;
  class?: string
}

export default function NameStyleMode(props: Props) {
  const screenWidth = window.innerWidth;

  function setFontSizeHD(length: number) {
    if (length <= 9) {
      return { fontSize: "4.125rem", lineHeight: "3.25rem" };
    }
    if (length > 10 && length <= 20) {
      return { fontSize: "2.3rem", lineHeight: "2.3rem" };
    }
    if (length > 20) {
      return { fontSize: "1.875rem", lineHeight: "1.875rem" };
    }
  }

  function setFontSizeFullHD(length: number) {
    if (length <= 9) {
      return { fontSize: "5rem", lineHeight: "4rem" };
    }
    if (length >= 10 && length <= 20) {
      return { fontSize: "3.7rem", lineHeight: "3rem" };
    }
    if (length > 20) {
      return { fontSize: "3rem", lineHeight: "2.7rem" };
    }
  }

  function setFontSizeByWidth(width: number, length: number) {
    if (width >= 1280 && width < 1919) {
      return setFontSizeHD(length)
    }
    if (width >= 1920 && width < 2959) {
      return setFontSizeFullHD(length)
    }
  }


  function setType(type: string) {
    if (type === 'name') return 'NOME'
    if (type === 'style') return 'ESTILO'
    if (type === 'mode') return 'MODO'
  }

  return (
    <div className={styles.nameOrStyleContainer + ' ' + props.class}>
      <span className={styles.title}>
        {setType(props.type)}
      </span>
      <span
        className={props.type === 'name' || props.type === 'style' ?
          styles.content :
          styles.contentBlue}
        style={setFontSizeByWidth(screenWidth, props.content.length)}
      >
        {props.content}
      </span>
    </div>
  );
}
