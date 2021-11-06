import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './Pages/components/TopBar';
import './App.css';
import Home from './Pages/Home';
import FootBar from './Pages/components/FootBar';
function App(){
    return(
        <>
        <TopBar/>
        <Home/>
        <FootBar/>
        </>
    )
}
export default App;
