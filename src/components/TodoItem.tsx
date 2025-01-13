import notTrick from "../assets/not_tick.png";
import trick from "../assets/tick.png";
import deleteBtn from "../assets/delete.png";

// Defind props type
interface ITodoItemProps {
  id: number;
  task: string;
  isChecked: boolean;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoItem = ({ id, task, isChecked, onDelete, onToggle }: ITodoItemProps) => {
  // function handle delete
  const handleDelete = (id: number) => {
    onDelete(id);
  };

  // function handle toggle
  const handleToggle = (id: number) => {
    onToggle(id);
  };

  return (
    <div className="flex justify-between items-center">
      <div
        onClick={() => handleToggle(id)}
        className="flex flex-1 items-center gap-3 py-2 px-3 mr-3 rounded-full hover:bg-gray-100 hover:cursor-pointer"
      >
        <img src={isChecked ? trick : notTrick} alt="notTrick" className="w-6" />
        <p className={`${isChecked ? "line-through" : ""} select-none`}>{task}</p>
      </div>
      <button onClick={() => handleDelete(id)}>
        <img src={deleteBtn} alt="deleteBtn" className="w-4 h-4 duration-200  hover:scale-150 hover:cursor-pointer" />
      </button>
    </div>
  );
};
export default TodoItem;
