import { useState } from "react"

export default function Post2() {
    const [save, setSave] = useState("bookmark-outline")
    const [like, setLike] = useState("heart-outline")
  
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
        } else {
            setLike("heart-outline")
        }
    }
  
    
    return(
        <ul class="posts">
            <ul class="post" data-test="post">
                <li class="topo">
                    <PostUser userprofile="assets/img/barked.svg" username="barked"/>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </li>
                <li class="conteudo">
                    <img src="assets/img/dog.svg" alt="" data-test="post-image" onClick={LikePost} id="foto-1"/>
                </li>
                <ul class="fundo">
                    <li class="acoes">
                    <div>
                    <ion-icon name={like} style={{color: like === "heart-outline" ? "black" : "red"}} data-test="like-post" onClick={LikePost} id="like-2"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={save} data-test="save-post" onClick={SavePost} id="save-2"></ion-icon>
                    </div>
                    </li>

                    <PostLikes usersimage="assets/img/adorable_animals.svg" text1 ="adorable_animals" number="99.159"/>
            
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