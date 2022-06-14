import React from 'react'
import styles from "./ReactForm.module.css"


const Input = ({inVokeData,loadingPage}) => {
    const [form,setForm] = React.useState({});

  
    
    const handleChange= (e) =>{
        let {name,value,type,checked,files} = e.target;
        // console.log(e)
        if(type==='files'){
            setForm({...form,[name]:files})
        }else if(type==="checkbox"){
            setForm({...form,[name]:checked})
        }else{
            setForm({...form,[name]:value})
        }
    }
const handleSubmit = (e) =>{
    // loadingPage();
    e.preventDefault()
    handleChange(e)
        return fetch('http://localhost:8080/employeeDetails',{
             method:"POST",
             headers:{
                 "Content-Type":"application/json"
             },
             body:JSON.stringify(form),
         })
         .then((res)=>res.json())
         .then((res)=>{
            
            console.log('handleSubmit')
            return inVokeData ();
         })
}

  return (

    <div className={styles.formContainer}>
        <form action="" onSubmit={handleSubmit} >
               <div>
               <div className={styles.inputCont}>
                  <input 
                     type="text" 
                     placeholder='Enter name' 
                     onChange={handleChange} 
                     name="name" />
             </div>
             <div className={styles.inputCont}>
                  <input 
                     type="text" 
                     placeholder='Enter age' 
                     onChange={handleChange} 
                     name="age" />
             </div>
             <div className={styles.inputCont}>
                  <input 
                     type="text" 
                     placeholder='Enter your address' 
                     onChange={handleChange} 
                     name="address" 
                  />
             </div>
             <div className={styles.inputCont}>
                  <select
                     name='department'
                     className={styles.selection}
                     onChange={handleChange}
                  >
                         {form.department || <option value="">Select your Department</option>}
                         <option value="Management">Management</option>
                         <option value="Marketing">Marketing</option>
                         <option value="Accounting">Accounting</option>
                         <option value="Purchasing">Purchasing</option>
                         <option value="Personal">Personal</option>
                     </select>
             </div>
             <div className={styles.inputCont}>
                  <input 
                     type="number" 
                     placeholder='Enter salary' 
                     onChange={handleChange} 
                     name="salary" />
             </div>
             <div className={styles.inputCont}>
                 <span>Married : </span>
                  <input 
                     type="checkbox" 
                     onChange={handleChange}
                     name="isMarried" />
             </div>
             <div className={styles.inputCont}>
                  <input 
                     type="file" 
                     placeholder='Choose' 
                     name="profilePhoto"
                     files={form.resume}
                     onChange={handleChange} 
                 />
             </div>
               </div>
               <button  type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Input