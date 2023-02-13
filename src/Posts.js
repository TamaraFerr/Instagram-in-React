


export default function Posts() {
    return(
        <ul class="posts">
            <PostItem userprofile="assets/img/meowed.svg" username="meowed" image="assets/img/gato-telefone.svg" usersimage="assets/img/respondeai.svg" text1 ="respondeai" number="101.523"/>
            <PostItem userprofile="assets/img/barked.svg" username="barked" image="assets/img/dog.svg" usersimage="assets/img/adorable_animals.svg" text1 ="adorable_animals" number="99.159"/>
        </ul>
    )
}


function PostItem(props) {
  return (
    <div class="post" data-test="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.userprofile} alt=""/>
          {props.username}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.image} alt="" data-test="post-image"/>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline" data-test="like-post"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline" data-test="save-post"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.usersimage} alt=""/>
          <div class="texto">
            Curtido por <strong>{props.text1}</strong> e <strong data-test="likes-number">outras {props.number} pessoas"</strong>
          </div>
        </div>
      </div>
    </div>
  )
}