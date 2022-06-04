import React from 'react'

const RefExample = () => {
    const ref = React.useRef();

    // React.useEffect(() => {}, [])
    // const onSubmit = () => {
    //     console.log(ref.current.files[0])
    // }
  return (
    <div>RefExample
        <h3>Image</h3>
        <input type="file" ref={ref} />
    </div>
  )
}

export default RefExample