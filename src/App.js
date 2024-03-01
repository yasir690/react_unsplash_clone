

// import React from 'react'
// import { useState } from 'react'
// import './App.css'
// const App = () => {
//   const [value,setvalue]=useState('');
//   const [result,setresult]=useState([]);
//   const getimage=()=>{
//           fetch(`https://api.unsplash.com/search/photos/?client_id=AIPkskNaLLAO3px_6U7h_pcmn1RPtz4JnUXDL9-e5R8&query=${value}&orientation=squarish`)
//            .then((res)=>res.json())
//            .then(data=>{
//             setresult(data.results)
//            })

//   }
//   return (
    
//     <>
//     <div className='inputs'>
//       <span>search:</span>
//       <input type='text' value={value} onChange={(e)=>setvalue(e.target.value)} style={{padding:"5px",width:"30%"}}/>
//       <button onClick={()=>getimage()}>getimage</button>
//       </div>  
//       <div className='gallery'>
//        {
//         result.map((item)=>{
//           return <img className='im' key={item.id} src={item.urls.regular}/>
//         })
//        }
//       </div>
//     </>
//   )
// }

// export default App



import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [value,setvalue]=useState('')
  const [result,setresult]=useState([]);

const fetchdata=()=>{
  fetch(`https://api.unsplash.com/search/photos/?client_id=AIPkskNaLLAO3px_6U7h_pcmn1RPtz4JnUXDL9-e5R8&query=${value}&orientation=squarish`)
  .then(res=>res.json())
  .then(data=>{
    setresult(data.results)
  })
}
 
  return (

    <>
    <h1 className='head'>unsplash clone</h1> 

    <div className='input'>
      <span>Search:</span>
      <input style={{width:"400px"}} type='text' value={value} onChange={(e)=>setvalue(e.target.value)}/>
      <button onClick={()=>fetchdata()}>Fetch Image</button>
      </div>

      <div className='gallery'>
    
     {
      result.map((item)=>{
        return <img className='images' id={item.id} src={item.urls.regular}/>
      })
     }
       
        </div> 
    </>
  )
}

export default App