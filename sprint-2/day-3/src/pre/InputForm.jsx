import React from 'react'

const InputForm = () => {
    const [data,setData] = React.useState([]); 
    // initState

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setData({ ...data,[name]:value})
    }

    const{name,email,age} = data;
  return (
    <div style={{border:"green solid 4px"}}>
        <h2>InputForm</h2>
        <input  
          type="text" 
          value={name} 
          placeholder="enter Name"
          name="name"
          onChange={handleChange}
          />
          <br/>
        <input  
          type="text" 
          value={email}
          placeholder="enter email" 
          name="email"
          onChange={handleChange}
          />
          <br/>
        <input  
          type="text" 
          value={age} 
          placeholder="enter age"
          name="age"
          onChange={handleChange}
          />
          <br/>
          <button onClick={() => console.log(data)}>Click</button>
    </div>
  )
}

export default InputForm