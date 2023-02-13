import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"
export default function Sidebar() {

    return(
        <ul class="sidebar">
          <Usuario />
          <Sugestoes />
        </ul>
    )
}