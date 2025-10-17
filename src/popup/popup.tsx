import { createRoot } from 'react-dom/client';

const App = () => {
  const onClick = () => {
    alert('Hello from popup!');
  };
  return <button onClick={onClick}>Click Me!</button>;
};

createRoot(document.getElementById('root')!).render(<App />);
