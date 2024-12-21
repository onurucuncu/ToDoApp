import React from "react";

const TodoInput = (props) => {
  const { todoValue, setTodoValue, handleAddTodos, editableIndex } = props;

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodos(todoValue);
    }
  };

  return (
    <>
      <div className="title-container">
        <h1 className="title">TODO or not TODO</h1>
      </div>
      
      <div className="header">
        <input
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          onKeyDown={handleKeyPress}
          placeholder="Enter todo..."
        />
        <button
          onClick={() => {
            handleAddTodos(todoValue);
          }}
        >
          {editableIndex === null ? "Add" : "Save"}
        </button>
      </div>
    </>
  );
};

export default TodoInput;
