import Header from './components/header';
import Body from './components/body';
import { useRef } from 'react';

export default function App() {
  const headerRef = useRef(null);
  const handlerClick = () => {
    headerRef.current.focus();
  };
  return (
    <div>
      <Header onClick={handlerClick} />
      <Body isFocus={headerRef} />
    </div>
  );
}
