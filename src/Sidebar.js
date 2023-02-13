import { useState } from "react"

export default function Suggestions() {
  const [fotoDoUsuario, setFotoDoUsuario] = useState("assets/img/catanacomics.svg")
  const [nomeUsuario, setNomeUsuario] = useState("catanacomics")

  function TrocaFoto() {
    let novaFoto = prompt('Insira o link da nova foto!')
    if(!novaFoto) {
      novaFoto = fotoDoUsuario
    } else {
      setFotoDoUsuario(novaFoto)
    }
}
  function TrocaNome() {
    let novoUsuario = prompt('Insira o novo nome!')
    if(!novoUsuario) {
      novoUsuario = nomeUsuario
    } else {
      setNomeUsuario(novoUsuario)
    }
  }

    return(
        <ul class="sidebar">
          <ul class="usuario">
            <img src={fotoDoUsuario} alt="imagem de perfil" data-test="profile-image" onClick={TrocaFoto}/>
           <li class="texto">
              <span>
                <strong data-test="name" id="nome-atual">{nomeUsuario}</strong>
                <ion-icon name="pencil" data-test="edit-name" onClick={TrocaNome}></ion-icon>
              </span>
            </li>
          </ul>

          <ul class="sugestoes">
            <li class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </li>
  
            <SidebarItem imagem= "assets/img/bad.vibes.memes.svg"nome="bad.vibes.memes" texto="Segue você" seguir="Seguir"/>
            <SidebarItem imagem="assets/img/chibirdart.svg" nome="chibirdart" texto="Segue você" seguir="Seguir"/>
            <SidebarItem imagem="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar" texto="Novo no Instagram" seguir="Seguir"/>
            <SidebarItem imagem="assets/img/adorable_animals.svg" nome="adorable_animals" texto="Segue você" seguir="Seguir"/>
            <SidebarItem imagem="assets/img/smallcutecats.svg" nome="smallcutecats" texto="Segue você" seguir="Seguir"/>
  
           <li class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
            Hashtags • Idioma
           </li>
  
           <li class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
           </li>
          </ul>
        </ul>
    )
}

function SidebarItem(props) {
  return (
    <ul className="sugestao">
      <li className="usuario">
        <img src={props.imagem} alt="bad.vibes.memes.svg"/>
        <ul className="texto">
          <li className="nome">{props.nome}</li>
          <li className="razao">{props.texto}</li>
        </ul>
      </li>

      <li className="seguir">{props.seguir}</li>
    </ul>
  )
}