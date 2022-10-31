import '../App.css'

// Define props as destructured object
const Main = ({mainTitle, list}) => {

    return (
    <main className='mainStyle'>
      <p>{mainTitle}</p>
      <ul>
        {/*Short for arrow function return one element */}
        {
          list.map(item => <li key={`${item}_${Date.now()}`}>{item}</li>)
        }
        {/*
          list.map((item) => {return(<li>{item}</li>)})
        */}

        {/* <li>{list[0]}</li>
        <li>{list[1]}</li>
        <li>{list[2]}</li> */}
      </ul>
    </main>
  );
}
export default Main;