import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Stories from "./Stories";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


export default function Corpo() {
    return (
        <>
            <div class="corpo">
                <Navbar />
                <div class="esquerda">
                    <Stories />
                    <Post1 />
                    <Post2 />
                    <Post3 />
                </div>
                <Sidebar />      
            </div> 
        </>
    )
}