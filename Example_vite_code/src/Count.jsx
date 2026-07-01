import { useEffect } from "react";

export default function Count({ number }) {
  useEffect(() => {
    document.title = `You Clicked ${number} times`;

    return ()=>{
      document.title= "Defalut site title"
    }
  }, [number]);
  return <span>{number}</span>;
}
  