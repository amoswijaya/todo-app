// create react template
import { UserAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useState } from 'react';
export default function Header() {
  const { logOut, changeTheme, theme } = UserAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const logout = async () => {
    await logOut();
    navigate('/login');
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const changeDark = () => {
    localStorage.setItem('theme', 'dark');
    changeTheme('dark');
    setIsOpen(false);
  };

  const changeLight = () => {
    localStorage.setItem('theme', 'light');
    changeTheme('light');
    setIsOpen(false);
  };
  return (
    <div className=' px-4 py-5  w-full  flex   m-auto text-slate-600 items-center justify-center'>
      <h4 className=' font-semibold md:text-5xl text-xl'>Simple Todo App</h4>
      <div className=' flex absolute right-0 mr-5 items-center'>
        {/* <button className='btn' onClick={logout}>
          Log out
        </button> */}
        <div className='mx-2 relative'>
          {theme === 'dark' ? (
            <BsFillMoonFill
              size={18}
              className='text-base-content cursor-pointer'
              onClick={toggle}
            />
          ) : (
            <BsFillSunFill
              size={18}
              className='text-base-content cursor-pointer'
              onClick={toggle}
            />
          )}

          {isOpen && (
            <div className='bg-base-200 z-10 absolute top-6 right-[-0.75rem] p-2 rounded-lg'>
              <div
                onClick={changeLight}
                className='flex flex-row items-center cursor-pointer text-base-content w-20 hover:bg-base-100'
              >
                <BsFillSunFill size={18} className='mr-2 ' />
                <span>Light</span>
              </div>
              <div
                onClick={changeDark}
                className='flex flex-row items-center cursor-pointer text-base-content w-20 hover:bg-base-100'
              >
                <BsFillMoonFill size={18} className='mr-2 ' />
                <span>Dark</span>
              </div>
            </div>
          )}
        </div>
        <div className='tooltip' data-tip='LogOut'>
          <BiLogOut
            className='text-2xl cursor-pointer text-red-500'
            onClick={logout}
          />
        </div>
      </div>
    </div>
  );
}
