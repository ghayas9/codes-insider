import Post from "./components/Post";
import SideBar from "./components/SideBar";
import Pageheading from "./components/PageHeading";
function Android(){
    return(
        <>
            <Pageheading first='Home' name='Android'/>
            <div className="container">
            <div className="row">
                <div className="col-md-8 main">
                    
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
                <div className="col-md-4">
                    <SideBar/>
                </div>
            </div>
        </div>
        </>
    )
}export default Android;