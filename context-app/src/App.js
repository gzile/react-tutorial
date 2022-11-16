import React
// {
//   useState, 
//   useMemo, 
//   useCallback,
// }
from 'react';
// import Todo from './todo';
import { Toolbar } from './toolbar';

export const ThemeContext = React.createContext('light');
export const UserContext = React.createContext({
  name: 'Goce',
  lastName: 'Zhileski'
});

const App = () => {
  // const [count, setCount] = useState(0);
  // const [todos, setTodos] = useState([]);
  // const calculation = expensiveCalculation(count);
  //const calculation = useMemo(() => expensiveCalculation(count), [count]);

  // const increment = () => {
  //   setCount((c) => c + 1);
  // };
  
  // const addTodo = useCallback(() => {
  //   setTodos((t) => [...t, "New Todo"]);
  // },[todos]);

  // const array = ['Banana', 'apple', 'pear'];
  // const memoArray = useMemo(() => array,[array]);

  const themeValue = 'light';
  const userData = {
    name: 'Goce',
    lastName: 'LastTest'
  }

  return (
    <div>
      {/* <div>
        <Todo addTodo={addTodo} todos={todos} />
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div> */}
      <div>
        <ThemeContext.Provider value={themeValue}>
          <UserContext.Provider value={userData}>
            <Toolbar/>
          </UserContext.Provider> 
        </ThemeContext.Provider>
        
      </div>
    </div>

  )
}

export default App;