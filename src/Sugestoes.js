export default function Sugestoes() {
    return (
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

    )
}

function SidebarItem(props) {
    return (
      <ul className="sugestao">
        <li className="usuario">
          <img src={props.imagem} alt=""/>
          <ul className="texto">
            <li className="nome">{props.nome}</li>
            <li className="razao">{props.texto}</li>
          </ul>
        </li>
  
        <li className="seguir">{props.seguir}</li>
      </ul>
    )
}

  

