import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const FetchApiContext = createContext();

export function FetchApiContextFun({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(response.data);   
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);  
      }
    };  

    fetchData();
  }, []);

  return (
    <FetchApiContext.Provider value={{ data, loading, error }}>
      {children}
    </FetchApiContext.Provider>
  );
}
