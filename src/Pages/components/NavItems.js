import {Link} from "react-router-dom";

function NavItems(p){
    return(<div className="li"><Link to={p.page.link}>{p.page.name}</Link></div>);
}export default NavItems;