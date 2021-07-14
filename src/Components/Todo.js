import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "../Components/Todo.css";

// get the data from local storage

const grtLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(grtLocalItems());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const additem = () => {
    if (!inputData) {
      alert("first enter data..");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleSubmit(true);
      setInputData("");
      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    const updateditems = items.filter((elem) => {
      return index !== elem.id;
    });

    setItems(updateditems);
  };

  // add data in local storage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  const editIten = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    console.log("data for edit", newEditItem);

    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption className="title">Add your list here</figcaption>
          </figure>
          <hr></hr>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add items"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggleSubmit ? (
              <button className="add-btn" title="Add Item" onClick={additem}>
                Add Item
              </button>
            ) : (
              <button onClick={additem}>Edit</button>
            )}
          </div>

          <div className="showItems">
            {items.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.name}</h3>
                  <div className="delteedit">
                    <button onClick={() => editIten(elem.id)}>Edit</button>
                    <button
                      style={{ marginLeft: "10%" }}
                      onClick={() => deleteItem(elem.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
