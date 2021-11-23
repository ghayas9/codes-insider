import NavItems from "./NavItems";
function NavBar(p){
    var Items=[
        {name:'Home',link:'/'},
        {name:'Android',link:'/android'},
        {name:'Flutter',link:'/flutter'},
        {name:'Contact',link:'/contact'},
    ]
    return(
        <div className={p.show?'NavBar':'NavBar non'} >
            <div className="container">
                <div className="row">
                   <div className="ul">
                       {
                           Items.map((e)=>{
                               return (
                                   <NavItems page={e} />
                               )
                           })
                       }

                   </div>
                </div>
            </div>
        </div>
    )
}export default NavBar;