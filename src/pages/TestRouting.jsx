import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import NotFound from './NotFound';
import Home from './Home';
import About from './About';
import Contact from './Contact';


function TestRouting() {
    return (
        <>
        <h1>  Routing </h1>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/About" element={<About></About>}></Route>
                <Route path="/Contact" element={<Contact></Contact>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>        
        </BrowserRouter>
        
        </>
      );
}
export default TestRouting;