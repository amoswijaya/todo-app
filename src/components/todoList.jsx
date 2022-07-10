import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { FiTrash2 } from 'react-icons/fi';
import { useState } from 'react';
export default function TodoList({ todo, handleDelete, handleToggle }) {
  const [expanded, setExpanded] = useState(false);
  const destroyerTodo = () => {
    handleDelete(todo.id);
  };
  const toggleTodoItem = () => {
    handleToggle(todo.id);
  };

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className=' card my-4   shadow drop-shadow-xl rounded-lg w-full p-2 bg-base-100 '>
      <div className='flex flex-row items-center'>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={toggleTodoItem}
          className='checkbox checkbox-primary'
        />
        <div className='flex mx-2 w-full justify-between items-center'>
          <p
            className={
              todo.completed ? 'line-through opacity-50 text-lg' : 'text-lg'
            }
          >
            {todo.text}
          </p>
          <div className='flex-row flex items-center'>
            <FiTrash2
              size={24}
              className='cursor-pointer hover:opacity-50 text-red-500'
              onClick={destroyerTodo}
            />
            {!expanded ? (
              <RiArrowDropDownLine
                size={32}
                className='cursor-pointer hover:opacity-50 '
                onClick={handleExpand}
              />
            ) : (
              <RiArrowDropUpLine
                size={32}
                className='cursor-pointer hover:opacity-50 '
                onClick={handleExpand}
              />
            )}
          </div>
        </div>
      </div>
      {expanded && (
        <div className='bg-base-200 rounded-lg p-1 mt-2'>
          <span
            className={
              todo.completed ? 'line-through opacity-50 text-sm' : 'text-sm'
            }
          >
            {todo.description}
          </span>
        </div>
      )}
    </div>
  );
}
