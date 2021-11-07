import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function NavItems(p){
    return(
        <Router>
        <div className="li">
        <Link to={p.page.link}>{p.page.name}</Link>
        </div>
        </Router>
        
    )
}export default NavItems;