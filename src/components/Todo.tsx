import todo_icon from "../assets/todo_icon.png";
import TodoItem from "./TodoItem";

const Todo = () => {
  return (
    <div className="w-11/12 max-w-lg mx-auto min-h-[550px] flex flex-col gap-3 bg-white p-5 rounded-xl ">
      {/* ---------- Title ---------- */}
      <div className="flex items-center mt-7 gap-3">
        <img src={todo_icon} alt="Todo Icon" className="w-10" />
        <h1 className="text-3xl font-bold">To-Do List App</h1>
      </div>

      {/* ---------- Task input ---------- */}
      <div className="flex items-center bg-gray-300 rounded-full mt-7">
        <input
          type="text"
          placeholder="Add you task"
          className=" bg-transparent border-0 outline-0 flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
        />
        <button
          className="border-0 rounded-full bg-orange-600 w-32 h-14
         text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      <hr />

      {/* ---------- Task list ---------- */}
      <div className="flex flex-col py-3 gap-1">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};
export default Todo;
