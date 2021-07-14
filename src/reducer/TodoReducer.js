const initialData = {
  list: [],
};

const TodoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id); // using this filter when we click then this id is not return and other all id is return

      return {
        ...state,
        list: newList,
      };

    default:
      return state;
  }
};

export default TodoReducer;
