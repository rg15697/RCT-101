import React from 'react'
import styles from'./form.module.css'

const Form = () => {
    const nameRef = React.useRef()
    const passRef = React.useRef()
    const emailRef = React.useRef()

//    password authentication css

// if(type==='password'){
//     // if(pass!=passDefaultGivenbyUser){
//     //     CSS.add className: "red"
//     // }
// }

    const [form,setForm] = React.useState({

              // if we don't have default value don't need to pass form

        // username:"",
        // email:"",
        // password:"",
        // age:0,
        // isIndian:false,


  
    })
    const handleChange = (e) =>{
        let {name,value,checked,type,files} = e.target
        console.log(type,name,value,checked)
         if(type==='checkbox'){
            setForm({
                ...form,[name] : checked
            })
         }else if(type=="file"){
            setForm({
                ...form,[name] : files
            })
         }else{
            setForm({
                ...form,[name] : value
            })
         }
      
    }
    // React.useEffect(()=>{
    //     console.log(form)
    // },form)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(form)
        if(!form.username) {
            nameRef.current.focus()
            nameRef.current.className += styles.password;
        }
        else if(!form.password) passRef.current.focus()
        else if(!form.email) emailRef.current.focus()
    }
  return (
    <div>
        <h2>Form</h2>
         <form onSubmit={handleSubmit} action="">
         <div>
            <label htmlFor="">Name </label>
            <input 
               ref={nameRef} 
               className={styles.formInput} 
               value={form.username} 
               name='username' 
               onChange={handleChange} 
               placeholder='Enter Name' 
               type="text"
             />
        </div>
        
        <div>
            <label htmlFor="">E-mail </label>
            <input 
               ref={emailRef} 
               className={styles.formInput}  
               value={form.email} 
               name='email' 
               onChange={handleChange} 
               placeholder='Enter Email' 
               type="email" 
            />
        </div>

        <div>
            <label htmlFor="">Password </label>
            <input 
               ref={passRef} 
               className={styles.formInput}  
               value={form.password} 
               name='password' 
               onChange={handleChange}
               placeholder='Enter password' 
               type="password" 
            />
        </div>

        <div>
            <label htmlFor="">Age </label>
            <input 
               className={styles.formInput}  
               value={form.age} 
               name='age' 
               onChange={handleChange} 
               placeholder='Enter age' 
               type="number" 
            />
        </div>
        <div>
            <input 
              className={styles.formInput} 
            //   checked={form.isIndian} 
              onChange={handleChange} 
              name="isIndian"
              type="checkbox" 
            />
            <label htmlFor="">is Indian </label>
        </div>

        <div>
            <div>
                <input 
                   type="radio" 
                   name='gender' 
                   value="male" 
                   onChange={handleChange} 
                />
                <label htmlFor="">Male</label>
            </div>

            <div>
                <input 
                   type="radio" 
                   name='gender' 
                   value="female" 
                   onChange={handleChange} 
                />
                <label htmlFor="">Female</label>
            </div>

            <div>
                <input type="file" name='resume' files={form.resume} onChange={handleChange} />
                <label htmlFor="">Resume</label>
            </div>


            <div>
                
                <label htmlFor="">City</label>
                <select 
                    name='city'
                    value={form.city}
                    onChange={handleChange}
                >
                    {form.city || <option value=""></option>}
                    <option value="Delhi">Delhi</option>
                    <option value="Uttar pradesh">Uttar pradesh</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Haryana">haryana</option>
                </select>
            </div>
        </div>
        <button type='submit' >Submit</button>
         </form>
    </div>
  )
}

export default Form