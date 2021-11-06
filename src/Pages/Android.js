function Android(){
    return(
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
    )
}export default Android;