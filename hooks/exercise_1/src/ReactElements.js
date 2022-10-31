import './App.css'

export default function App() {

  const headerStyleObj = { backgroundColor: '#75a3b1', padding: '10px' };

  // React element header
  const header = (
    <header style={headerStyleObj}>
      <h1>Welcome to React exercise</h1>
      <h2>Getting started with React</h2>
      <p>Goce Zhileski</p>
      <small>Sep 23, 2022</small>
    </header>
  );

// React element main
  const main = (
    <main className='mainStyle'>
      <p>
        Working with react styles and react elements
      </p>
      <p>Prerequisite to get started  to react.js </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </main>
  );
// React element footer
  const footer =
      <footer style={{ backgroundColor: '#75a3b1', width: '100%', textAlign: 'center' }}>
        <p>Copyright 2022</p>
      </footer>

  return (
    // Styled div container with className / in JavaScript equivalent is word class in the html tag
    <div className='container'>
      {header}
      {main}
      {footer}
    </div>
  );
}