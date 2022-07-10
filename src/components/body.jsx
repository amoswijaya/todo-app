import TodoList from './todoList';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { UserAuth } from '../context/authContext';
import Swal from 'sweetalert2';

export default function Body({ isFocus }) {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { user } = UserAuth();
  const addToDo = (e) => {
    setTitle(e.target.value);
  };
  const addDescription = (e) => {
    setDescription(e.target.value);
  };
  // const handleSubmit = (e) => {
  //   if (e.keyCode === 13) {
  //     sendTodo();
  //     setTitle('');
  //     setDescription('');
  //   }
  // };
  const sendTodo = async () => {
    await updateDoc(doc(db, 'users', user?.email), {
      todos: arrayUnion({
        text: title,
        id: +new Date(),
        completed: false,
        description: description,
      }),
    });
    Swal.fire({
      text: 'Toast with custom target',
      target: '#custom-toast',
      customClass: {
        container: 'absolute',
      },
      toast: true,
      position: 'bottom-right',
      timer: 3000,
      showConfirmButton: false,
      icon: 'success',
      timerProgressBar: true,
    });
    console.log('done');
    setDescription('');
    setTitle('');
  };

  const handleDelete = async (id) => {
    try {
      const result = todos.filter((todo) => todo.id !== id);
      await updateDoc(doc(db, 'users', user?.email), {
        todos: result,
      });
      Swal.fire({
        text: 'Toast with custom target',
        target: '#custom-toast',
        customClass: {
          container: 'absolute',
        },
        toast: true,
        position: 'bottom-right',
        timer: 3000,
        showConfirmButton: false,
        icon: 'success',
        timerProgressBar: true,
      });
      console.log('done');
    } catch (err) {
      console.log(err);
    }
  };

  const handleToggle = async (id) => {
    try {
      const result = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      await updateDoc(doc(db, 'users', user?.email), {
        todos: result,
      });
      console.log('done');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getData = async () => {
      await onSnapshot(doc(db, 'users', user.email), (snap) => {
        setTodos(snap.data().todos);
      });
    };
    getData();
  }, [user?.email]);
  return (
    <div className='flex w-full h-screen flex-col-reverse md:flex-row'>
      {/* todo section */}
      <div className='md:w-4/6  h-full w-full px-4'>
        {todos.map((todo) => (
          <TodoList
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </div>
      {/* form section */}
      <div className='md:w-2/6  h-auto w-full p-4 '>
        <div className='card w-full bg-base-100 shadow-xl'>
          <div className='card-body'>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>Your Todo</span>
              </label>
              <input
                type='text'
                placeholder='Type here'
                className='input input-bordered w-full'
                value={title}
                onChange={addToDo}
              />
              <label className='label'>
                <span className='label-text'>Description</span>
              </label>
              <textarea
                className='textarea textarea-bordered h-24'
                placeholder='Type here'
                value={description}
                onChange={addDescription}
              ></textarea>
            </div>
            <div className='card-actions justify-end mt-4'>
              <button className='btn btn-primary' onClick={sendTodo}>
                Add Todo
              </button>
            </div>
          </div>
        </div>
        <div id='custom-target'></div>
      </div>
    </div>
  );
}
