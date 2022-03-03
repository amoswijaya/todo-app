import TodoList from './todoList';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addTodo } from '../store/action';
import { useDispatch } from 'react-redux';
import { RiSendPlane2Line } from 'react-icons/ri';
export default function Body({ isFocus }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  useEffect(() => console.log(todos), [todos]);
  const [title, setTitle] = useState('');
  const addToDo = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      dispatch(
        addTodo({ text: title, id: todos.length + 1, completed: false })
      );
      setTitle('');
    }
  };
  const sendTodo = () => {
    dispatch(addTodo({ text: title, id: todos.length + 1, completed: false }));
    setTitle('');
  };
  return (
    <div className=' max-w-4xl m-auto mt-20 px-4'>
      <div className='flex flex-row items-center justify-between'>
        <input
          type='text'
          style={{ borderBottom: '1px dotted rgb(156, 163, 175)' }}
          className='w-full   focus:outline-none  outline-none bg-primary py-4 text-4xl text-gray-400 font-extralight  '
          placeholder='Add a new task'
          onKeyDown={handleSubmit}
          onChange={addToDo}
          value={title}
          ref={isFocus}
          maxLength={26}
        />
        <RiSendPlane2Line
          size={24}
          className={!title ? 'text-gray-400' : 'text-white cursor-pointer'}
          onClick={sendTodo}
        />
      </div>
      <div className='mt-20 overflow-y-auto max-h-[400px] overflow-hidden'>
        {todos.map((todo) => (
          <TodoList key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
