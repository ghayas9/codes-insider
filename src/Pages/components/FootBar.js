import './FootBar.css';
function FootBar(){
   var pages=[
        {name:'Terms & Condition',link:'/abc'},
        {name:'Privacy Policy',link:'/abc'},
        {name:'Disclaimer',link:'/abc'},
        {name:'Sitemap',link:'/abc'},
    ]
    return(
        <div className="container-fluid footbar">
            <div className='Social'>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-instagram"></i>
            </div>
            <div className='pages'>
                {
                    pages.map(
                        (e)=>{
                            return(
                                <li>{e.name}</li>
                            )
                        }
                    )
                }
            </div>
            <div className="copy-right">
            Copyright © 2021 CODES INSIDER All Rights Reserved.
            </div>
        </div>
    )
}export default FootBar;