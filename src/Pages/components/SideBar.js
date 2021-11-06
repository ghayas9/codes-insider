import './SideBar.css';
function SideBar(){
    return(
        <div className="side">
            <div className="search">
                <h4 className='h'>SEARCH</h4>
                <div className="sr">
                <input type="text"  placeholder='Search Here ' className='col-10'/>
                <i className="fas fa-search  col-2" ></i>
                </div>
            </div>
            <div className="Categories">
                <h4 className='h'>CATEGORIES</h4>
                <div className="ul">
                    <div className="li">
                    <span>Android</span> <span>(12)</span>
                    </div>
                    <div className="li">
                    <span>Flutter</span> <span>(10)</span>
                    </div>
                </div>
            </div>
            <div className="newsletter">
                <h4 className='h'>NEWSLETTER</h4>
                <div className="ml">
                <input type="text"  placeholder='Your Email Address ' className='col-10'/>
                <i class="far fa-paper-plane col-2"></i>
                </div>
            </div>
            <div className="popular-post">
                <h4 className='h'>POPULAR POSTS</h4>
                <div className="pp">
                <div className="p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, aut.
                </div>
                <div className="p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, aut.
                </div>
                <div className="p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, aut.
                </div>
                <div className="p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, aut.
                </div>
                <div className="p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, aut.
                </div>
                <div className="p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, aut.
                </div>
                <div className="p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, aut.
                </div>
                <div className="p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, aut.
                </div>
                <div className="p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, aut.
                </div>
                </div>
            </div>
        </div>
    )
}export default SideBar;