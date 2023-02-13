import { useState } from "react"

export default function Usuario() {
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
  

    return (
        <ul class="usuario">
            <img src={fotoDoUsuario} alt="imagem de perfil" data-test="profile-image" onClick={TrocaFoto}/>
            <li class="texto">
                <span>
                    <strong data-test="name" id="nome-atual">{nomeUsuario}</strong>
                    <ion-icon name="pencil" data-test="edit-name" onClick={TrocaNome}></ion-icon>
                </span>
            </li>
        </ul>
    )
}