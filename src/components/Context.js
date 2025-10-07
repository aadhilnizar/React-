import React, {createContext , useContext , useState} from React

const CounterContext = createContext();
 export const useContext = ()=> useContext(CounterContext);