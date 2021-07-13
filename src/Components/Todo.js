import React, { useState } from 'react';
import '../Components/Todo.css';

const Todo = () => {
    
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    const additem = () => {
        if(!inputData) {
            alert('first enter data..');
        }else {
            setItems([...items, inputData]);
            setInputData('');
        }
    }

    const deleteItem = (id) => {
        console.log(id);
        const updateditems = items.filter((elem, ind) => {
            return ind !== id;
        });

        setItems(updateditems);
    }

    const editprofile = () => {
        alert("the profile is edited");
    }

    return(
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption className="title">Add your list here</figcaption>
                    </figure>
                    <hr></hr>
                    <div className="addItems">
                        <input type="text" placeholder="Add items"
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                         />
                         <button className="add-btn" title="Add Item" onClick={additem} >Add Item</button>
                    </div>

                    <div className="showItems">
                        {
                            items.map((elem, ind) => {
                                return(
                                    <div className="eachItem" key={ind}>
                                        <h3>{elem}</h3>
                                        <div className="delteedit">
                                            <button onClick={editprofile} >Edit</button>
                                            <button style={{marginLeft: "10%"}} onClick={() => deleteItem(ind)} >Delete</button>
                                        </div>
                                        
                                    </div>
                                )
                            })
                        }
                        
                    </div>

                </div>

            </div>  
        </>
    )
}

export default Todo;