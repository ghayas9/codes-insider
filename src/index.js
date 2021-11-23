import reactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
reactDom.render(
    <Router>
        <App/>
    </Router>

,
document.getElementById('root'))