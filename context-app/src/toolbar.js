import React, { useEffect, useMemo } from "react";
// import { ThemedButton } from "./themeButton";
const array = ['Banana', 'apple', 'pear'];

export const Toolbar = (props) => {

  const memoArray = useMemo(() => props.array);

  useEffect(()=> {
    console.log('toolbar', memoArray);

  },[memoArray])

  return(
    <div>
      <div>
        <ul>
          {memoArray?.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>

    </div>
  )
}
