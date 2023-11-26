import './Profile.css'

function Profile({userName,email,city,isActive}) {
    return (
    <>
      <div>
        <ol>
        <li style={{color: isActive ? 'green' : 'red' }}> {'User Name = ' + userName} </li>
        <li> {'Private Email Address = ' + email} </li>
        <li> {'Current City = ' + city} </li>
        </ol>
        <hr/>
      </div>
      
    </>
  );
}

export default Profile;

 