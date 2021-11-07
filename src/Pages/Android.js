import Post from "./components/Post";
import SideBar from "./components/SideBar";
function Android(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-8 main">
                    <h1>Android</h1>
                    
                </div>
                <div className="col-md-4">
                    <SideBar/>
                </div>
            </div>
        </div>
    )
}export default Android;