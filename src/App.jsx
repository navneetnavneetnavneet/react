import React, { useContext } from 'react'
import { datacontext } from './contexts/DataContext';

const App = () => {
  const [data, setData] = useContext(datacontext);

  console.log(data);
  return (
    <div>App</div>
  )
}

export default App