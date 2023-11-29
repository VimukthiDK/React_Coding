import { useState } from "react";

function MyForm() {

    const [formData,setFormData] = useState({
        userName: "", 
        dob: "",
        age: "", 
        email: "",
    });

    
    const handleChangeName = (e) => {
        //console.log(e.target.value);
        setFormData({...formData, userName:e.target.value});
    }

    const handleChangeDOB = (e) => {

        setFormData({...formData, dob:e.target.value});
    }

    const handleChangeAge = (e) => {

        setFormData({...formData, age:e.target.value});

    }

    const handleChangeEmail = (e) => {

        setFormData({...formData, email:e.target.value});

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submited ... ! ");
        console.log(formData);

    }

    return ( 
        <>
        
        <h1> Form Page</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Name : 
                <input type="text" onChange={handleChangeName}/> 
            </label>
            <br/>
            <label>
                Bithday : 
                <input type="date" onChange={handleChangeDOB}/> 
            </label>
            <br/>

            <label>
                Age : 
                <input type="Number" onChange={handleChangeAge}/> 
            </label>
            <br/>

            <label>
                Email : 
                <input type="email" onChange={handleChangeEmail}/> 
            </label>

            <input type="submit" />

        </form>

        </>
     );
}

export default MyForm;