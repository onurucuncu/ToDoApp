import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos, editableIndex } = props;
  return (
    <ul className="main">
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <TodoCard
            {...props}
            key={index}
            index={index}
            done={todo.done}
            isDisabled={editableIndex !== null && editableIndex !== index}
          >
            <p
              className={`todo-text ${todo.done}`}
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                color: todo.done ? "green" : "black",
              }}
            >
              {todo.text}
            </p>
            <div className="date">
              <span>Added on</span>
              <span>{todo.date}</span>
            </div>
          </TodoCard>
        ))
      ) : (
        <h3>No todos yet. Start by adding one!</h3>
      )}
    </ul>
  );
};

export default TodoList;
