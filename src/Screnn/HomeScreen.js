import React, {useState} from 'react';

function HomeScreen(params) {

  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val) 
  {
    setData(val.target.value)
    setPrint(false)
    // console.warn(val.target)
  }
  function editData()
  {
    alert("Data edited successfully...")
  }

    const handleRemoveClick = index => {
    const list = [...data];
    list.splice(index);
    setData(list);
  };
  
  return(
    <div >
      <h1>Task Application</h1>
      <hr/>
      <input style={{marginTop: 40, marginRight: 10}} type="text" onChange={getData}  />
      
      <button onClick={() => setPrint(true)} >Submit</button>
      {
        print? 
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',backgroundColor: '#C0C0C0', justifyContent: 'space-between' , marginTop: 30, width: "30%", marginLeft: "35%"}}>
          <div>
          <h1 style={{marginLeft: 10}} >{data}</h1>
          </div>
          <div style={{display: 'flex', margin: 10, marginTop: 20}} >
          <button style={{marginRight: 10}} onClick={editData} >Edit profile</button>
          <button onClick={handleRemoveClick} >Delete</button>
          </div>

        </div>
        : null
      }
    </div>
    
  )
}

export default HomeScreen;


// import React, {useState} from 'react';

// function HomeScreen() {
//   const [items, setItems] = useState([]);

//   const addItem = () => {
//     setItems([...items, {
//       id: items.length,
//       value: Math.floor(Math.random() * 10) + 1
//     }])
//   }

//   return(
//     <div>
//       <input type="text" placeholder="Enter data" />
//       <button onClick={addItem}>Submit</button>
//       <ul>
//         {
//           items.map(item => <li key={item.id}>{item.value}</li>)
//         }
//       </ul>
//     </div>
//   )
// }

// export default HomeScreen;


// import React, { useState } from "react";

// function HomeScreen() {
//   const [inputList, setInputList] = useState([{ firstData: "" }]);

//   const handleInputChange = (e, index) => {
//     const { name, value } = e.target;
//     const list = [...inputList];
//     list[index][name] = value;
//     setInputList(list);
//   };

  
//   const handleRemoveClick = index => {
//     const list = [...inputList];
//     list.splice(index, 1);
//     setInputList(list);
//   };

//   const handleEditProfile = index => {
//       alert('Profile Edited Successfully...');
//     //  console.log('profile edited'); 
//   }
  
//   const handleAddClick = () => {
//     setInputList([...inputList, { firstData: ""}]);
//   };

  

//   return (
//     <div className="Home">
//       <h1>Task App</h1>
      
//       {inputList.map((x, i) => {
//         return (
//           <div className="box">
//               <div>
//                    <input
//                     name="firstData"
//                     placeholder="Enter Value"
//                     value={x.firstData}
//                     onChange={e => handleInputChange(e, i)}
//                     />
//                      <button onClick={handleAddClick}>Submit</button>
//                     <button onClick={handleEditProfile} >Edit</button>
//                     {inputList.length !== 1 && <button onClick={() => handleRemoveClick(i)}>Delete</button>}
//               </div>
//                 <div style={{}}>
//                 <label>  {JSON.stringify(inputList)}</label>
//                 </div>
           
//           </div>
//         );
//       })}
      
//     </div>
//   );
// }

// export default HomeScreen;


