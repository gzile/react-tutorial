import React, { useEffect} from "react";

export default function Header(props) {
  
  const headerStyleObj = { backgroundColor: '#75a3b1', padding: '10px' };
  
  // Log the props object to see the properties before accessing them
  // console.log(props);
  
  //let mentorName = '';

  // 
  useEffect(() => {
    
    console.log('Log in Effect', props);
  });

  return (
    <header style={headerStyleObj}>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <p>{props.mentor}</p>
      <small>{Date()}</small>
    </header>
  );
} 