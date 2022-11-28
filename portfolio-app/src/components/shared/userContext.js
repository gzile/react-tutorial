import React from "react";

export const UserContext = React.createContext({
  firstName: '',
  lastName: '',
  setName: () => {} 
});