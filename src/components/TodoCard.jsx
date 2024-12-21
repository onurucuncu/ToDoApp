import React from "react";

const TodoCard = (props) => {
  const {
    handleDeleteTodos,
    handleEditTodos,
    handleDoneTodos,
    done,
    index,
    isDisabled,
    children,
  } = props;
  return (
    <li
      className={`todoItem ${isDisabled ? "disabled" : ""}`}
      style={{
        opacity: isDisabled ? 0.5 : 1,
        pointerEvents: isDisabled ? "none" : "auto",
      }}
    >
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => handleEditTodos(index)}
          disabled={isDisabled}
          aria-label="Edit todo"
          title="Edit"
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => handleDeleteTodos(index)}
          disabled={isDisabled}
          aria-label="Delete todo"
          title="Delete"
        >
          <i class="fa-regular fa-trash-can"></i>
        </button>
        <button
          onClick={() => handleDoneTodos(index)}
          aria-label="Done"
          title="Done"
        >
          <i
            className={`fa-square-check fa-${done ? "solid check" : "regular"}`}
          ></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
