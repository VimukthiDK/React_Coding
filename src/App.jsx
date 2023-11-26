//import './App.css'
import Count from './components/Count';
import Profile from './components/Profile';
import TestRouting from './components/TestRouting';

const data_array = [
        {userName : 'Vimukthi', email : 'vimu@gmail.com', city : 'Colombo', isActive :true },
        {userName : 'Dhananjaya', email : 'dana@gmail.com', city : 'Kandy',isActive :true },
        {userName : 'Kalugampitiya', email : 'kalu@gmail.com', city : 'Gampaha',isActive :false },
];

function App() {
    return (
    <>
    {data_array.map((props) => (

      <Profile userName={props.userName} city={props.city} email={props.email} isActive={props.isActive} />

    ))}
       
      <Count/>
      <TestRouting/>

    </>
  );
}

export default App
