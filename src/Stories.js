export default function Stories() {
    return (
        <ul className="stories">
            <StoriesItem imagem="assets/img/9gag.svg" texto="9gag" />
            <StoriesItem imagem="assets/img/meowed.svg" texto="meowed"/>
            <StoriesItem imagem="assets/img/barked.svg"  texto="barked"/>
            <StoriesItem imagem="assets/img/nathanwpylestrangeplanet.svg"  texto="nathanwpylestrangeplanet"/>
            <StoriesItem imagem="assets/img/wawawicomics.svg"  texto="wawawicomics"/>
            <StoriesItem imagem="assets/img/respondeai.svg"  texto="respondeai"/>
            <StoriesItem imagem="assets/img/filomoderna.svg"  texto="filomoderna"/>
            <StoriesItem imagem="assets/img/memeriagourmet.svg"  texto="memeriagourmet"/>
  
            <li className="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </li>
        </ul>
    )
}

function StoriesItem(props) {
  return (
    <ul className="story">
      <li className="imagem">
        <img src={props.imagem} alt="9gag"/>
      </li>
      <li className="usuario">{props.texto}</li>
    </ul>
  )
}