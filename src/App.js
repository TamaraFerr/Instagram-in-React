import Posts from "./Posts";
import Stories from "./Stories";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function App() {
    return(
        <>
            <div class="corpo">
                <Navbar />
                <div class="esquerda">
                    <Stories />
                    <Posts />
                </div>
                <Sidebar />      
            </div> 
        </>
    )
}