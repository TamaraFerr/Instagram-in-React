import Post1 from "./Post1";
import Post2 from "./Post2";
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
                    <Post1 />
                    <Post2 />
                </div>
                <Sidebar />      
            </div> 
        </>
    )
}