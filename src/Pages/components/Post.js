function Post(){
    return(
        <div className="post row">
            <img src="https://sp-ao.shortpixel.ai/client/q_lqip,ret_wait,w_500,h_360/https://codesinsider.com/wp-content/uploads/2021/11/flutter-cupertino-sliver-navigation-bar-example-tutorial-500x360.png" alt="" className="col-md-4" />
            <div className="col-md-8 d">
                <h4 className="title">
                    Lorem, ipsum dolor sit amet consectetur 
                </h4>
                <div className="about-post">
                <span><i className="fas fa-user"></i> by <b>GHAYAS</b> </span>
                <span><i className="far fa-clock"></i> {datenow()} </span>
                <span><i className="far fa-comment"></i> 0</span>
                </div>
                <div className="post-detail">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet omnis error perspiciatis libero, quod ducimus illum dolorum perferendis fugiat accusantium.
                </div>
            </div>
        </div>
    );
}export default Post;

function datenow(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date();
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const output = month  + '\n'+ day  + ',' + year;
    return output;
    }