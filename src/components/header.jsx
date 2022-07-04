// create react template
import { RiAddFill } from 'react-icons/ri';
// import { useState } from 'react';
export default function Header({ onClick }) {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='container px-4 py-5  w-full  flex justify-between  max-w-4xl m-auto text-gray-300'>
      <h4 className=' font-semibold '>Todo App</h4>
      <RiAddFill onClick={onClick} className='cursor-pointer' size={24} />
    </div>
  );
}
