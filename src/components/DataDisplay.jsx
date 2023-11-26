import Profile from './Profile';

const data_array = [
        {userName : 'Vimukthi', email : 'vimu@gmail.com', city : 'Colombo', isActive :true },
        {userName : 'Dhananjaya', email : 'dana@gmail.com', city : 'Kandy',isActive :true },
        {userName : 'Kalugampitiya', email : 'kalu@gmail.com', city : 'Gampaha',isActive :false },
];

function DataDisplay() {
    return (
    <>

    {data_array.map((props) => (


      <Profile userName={props.userName} city={props.city} email={props.email} isActive={props.isActive} />

    ))}
       
    </>
  );
}

export default DataDisplay;