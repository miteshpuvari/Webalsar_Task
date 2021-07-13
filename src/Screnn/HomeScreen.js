import React, { useState } from 'react';
import {useSelector, useDispatch} from "react-redux";

import '../Screnn/HomeScreen.css';
import {addTodo, deleteTodo, removeTodo} from '../actions/Index';

const HomeScreen = () => {

    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.TodoReducer.list);
    const dispatch = useDispatch();
    
    return(
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                    <figcaption>Add your list here</figcaption>
                    </figure>
                <div className="addItems">
                    <input type="text" placeholder="Enter data"
                        value={inputData}
                        onChange={(event) => setInputData(event.target.value)}
                     />
                    <button onClick={() => dispatch(addTodo(inputData),
                        setInputData('')) } >Add Item</button>
                </div>

                <div className="showItems" >
                    {
                        list.map((elem) => {
                            return(
                            <div className="eachItem" key={elem.id} >
                                <h3>{elem.data}</h3>
                                <div>
                                    <button onClick={() => dispatch(deleteTodo(elem.id)) } >Delete Item</button>
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

export default HomeScreen;

