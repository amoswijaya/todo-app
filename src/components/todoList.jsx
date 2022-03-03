import {
  RiCheckboxCircleFill,
  RiCheckboxCircleLine,
  RiDeleteBin6Line,
} from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/action';
export default function TodoList({ todo }) {
  const dispatch = useDispatch();
  const destroyerTodo = () => {
    console.log(todo.id);
    dispatch(removeTodo(todo.id));
  };
  const toggleTodoItem = () => {
    dispatch(toggleTodo(todo.id));
  };
  return (
    <div className='w-full bg-secondary py-2 px-4 text-white rounded-lg flex flex-row items-center justify-between my-4'>
      <div className=' flex flex-row items-center'>
        {todo.completed ? (
          <RiCheckboxCircleFill
            size={42}
            className='cursor-pointer'
            onClick={toggleTodoItem}
          />
        ) : (
          <RiCheckboxCircleLine
            size={42}
            className='cursor-pointer'
            onClick={toggleTodoItem}
          />
        )}
        <p className='ml-2 text-xl'>{todo.text}</p>
      </div>
      <div className=' flex flex-row items-center'>
        <RiDeleteBin6Line
          onClick={destroyerTodo}
          size={32}
          className='text-gray-400 cursor-pointer'
        />
      </div>
    </div>
  );
}
