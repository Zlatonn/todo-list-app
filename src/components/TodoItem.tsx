import notTrick from "../assets/not_tick.png";
// import trick from "../assets/tick.png";
import deleteBtn from "../assets/delete.png";

const TodoItem = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-1 items-center gap-3 py-2 px-3 mr-3 rounded-full hover:bg-gray-100 hover:cursor-pointer">
        <img src={notTrick} alt="notTrick" className="w-6" />
        <p>Item</p>
      </div>
      <button>
        <img src={deleteBtn} alt="deleteBtn" className="w-4 h-4 hover:scale-150 hover:cursor-pointer" />
      </button>
    </div>
  );
};
export default TodoItem;
