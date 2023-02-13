import { useState } from "react"


export default function Post1() {
  const [save, setSave] = useState("bookmark-outline")
  const [like, setLike] = useState("heart-outline")
  const [likes, setLikes] = useState(101523)
  const formatNumber = (number) => new Intl.NumberFormat("pt-BR").format(number) 
  

  function SavePost() {
    if(save === "bookmark-outline" ) {
      setSave("bookmark")
    } else {
      setSave("bookmark-outline")
    }
  } 

  function LikePost() {
    if(like === "heart-outline") {
      setLike("heart")
      setLikes(likes + 1)
    } else {
      setLike("heart-outline")
      setLikes(likes - 1)
    }
  }

  function LikeFoto() {
    if (like === "heart-outline") {
      setLike("heart")
      setLikes(likes + 1)
    } else {
      setLikes(likes - 1)
    }
  }
  
  return(
    <ul class="posts">
      <ul class="post" data-test="post">
        <li class="topo">
          <PostUser userprofile="assets/img/meowed.svg" username="meowed"/>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </li>
        <li class="conteudo">
          <img src="assets/img/gato-telefone.svg" alt="" data-test="post-image" onClick={LikeFoto} />
        </li>
        <ul class="fundo">
          <li class="acoes">
            <div>
              <ion-icon name={like} style={{color: like === "heart-outline" ? "black" : "red"}} data-test="like-post" onClick={LikePost}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name={save} data-test="save-post" onClick={SavePost} ></ion-icon>
            </div>
          </li>

          <PostLikes usersimage="assets/img/respondeai.svg" text1 ="respondeai" number={formatNumber(likes)}/>
          
        </ul>
      </ul>
    </ul>
  )
}


function PostUser(props) {
  return (
    <div class="usuario">
      <img src={props.userprofile} alt=""/>
      {props.username}
    </div>
  )
}

function PostLikes(props) {
  return (
    <li class="curtidas">
      <img src={props.usersimage} alt=""/>
      <div class="texto">
        Curtido por <strong>{props.text1}</strong> e <strong data-test="likes-number">outras {props.number} pessoas"</strong>
      </div>
    </li>
  )
}
