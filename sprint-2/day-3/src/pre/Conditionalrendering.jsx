import React from 'react'

const Conditionalrendering = () => {
    const [show,setShow] = React.useState(false)
    const isLoading = false;
    const isError = false

    // if (isLoading){
    //     return (
    //         <div>Conditionalrendering</div>
    //       ) 
    // }
    // return (
    //     <h2>else</h2>
    // )

   return isLoading ? (
            <h2>...IsLoading</h2>
        ) : isError ? (
            <div>...IsError</div>
        ) : (
           <div>
                <h2>Conditional Rendering</h2>
                <button onClick={()=>setShow(!show)}>Togge</button>
                {
                    show ? new Date().toLocaleString() : "HIDDEN"
                }
           </div>
        )
    
  
}

export default Conditionalrendering