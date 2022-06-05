import axios from "axios";
import React from "react";

export const FormPrep = () =>{
  const [form,setForm] = React.useState({})

  const handleChange = (e) =>{
    let {name,type,checked,value,files} = e.target;
    if(type==="checkbox") setForm({...form,[name]:checked})
    else if(type==="file") setForm({...form,[name]:files})
    else setForm({...form,[name]:value})
  }
  const SubmitData = (e)=>{
      e.preventDefault()
    axios.post(`http://localhost:8080/data`,{
        name:form.name,
        gender:form.gender,
        city:form.city,
        profPic:form.profPic
    })
  }
  return (
    <div>
       <form onSubmit={SubmitData}>
          <input 
          variant='outline' 
          name="name"
          placeholder='Outline' 
          onChange={handleChange}
      
          />
          <input name="gender"
             type="radio"
             onChange={handleChange}
              value="Male"
           />
            <input name="gender"
             type="radio"
             onChange={handleChange}
              value="Female"
           />
           <input type="file"
             onChange={handleChange}
             name="profPic"
             files={form.profPic}
           />

         <select name="city" 
          onChange={handleChange}>
              <option value="">{form.city || "Select your city"}</option>
              <option value="Azamgarh">Azamgarh</option>
              <option value="Varanasi">Varanasi</option>
              <option value="Allahabad">Allahabad</option>
         </select> 
         <input type="submit" placeholder="Submit" />
      </form>
    </div>
  )
}
