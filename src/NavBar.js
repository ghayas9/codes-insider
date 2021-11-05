import NavItems from "./NavItems";
function NavBar(p){
    var Items=[
        {name:'Home',link:'/home'},
        {name:'Android',link:'/home'},
        {name:'Flutter',link:'/home'},
        {name:'Contact',link:'/home'},
    ]
    return(
        <div className={p.show?'NavBar':'NavBar non'} >
            <div className="container">
                <div className="row">
                   <div className="ul">
                       {
                           Items.map((e)=>{
                               return (
                                   <NavItems name={e.name}/>
                               )
                           })
                       }
                   </div>
                </div>
            </div>
        </div>
    )
}export default NavBar;