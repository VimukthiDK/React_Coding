import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

function TestRouting() {
    return (
        <>
        <h1>  Routing </h1>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/About' element={<About></About>}></Route>
                <Route path='/Contact' element={<Contact></Contact>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>        
        </BrowserRouter>
        
        </>
      );
}
export default TestRouting;