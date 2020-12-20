import { StoreContext } from "./storeContext";
import React, { useEffect, useContext, useState} from "react";
import './PrintJokes.css';
/**
 * Tulostetaan useContextista saatu lista 
 * eka count päivitys on ehdollistettu
 * koska count value on alussa (1), jota en tietenkään halunnut
 * varmaan olis löytyny joku järkevämpikin tapa tehdä tää
 */

const PrintJokes = () => {
  const [store, setStore] = useContext(StoreContext);
  const [count, setCount] = useState(0);
  const j = Object.values(store);
  const [firstUpdate, setFirstUpdate] = useState(true)
  
  useEffect(() => {
    if (firstUpdate) {
      setFirstUpdate(false)
    }
    else {
      setCount((+j.length + +count))
    }
  }, [store])
  const print = () => {
    return (
      <div>
        {
          j.map((element, i, y) => {
            return <p className="jokes" key={i}>{i + 1}{". "}{element.joke}{"\n"}</p>
          })
        }
      </div>
    )
  };

  return (
    <div>
      <h3 className="counter">{"Vitsejä näytetty yhteensä: "+count+" kpl."}</h3>
      {
        (count === 0) ?  <h2 alt="emptyList">{"Ei vitsejä näytettäväksi"}</h2> : print() 
      }
    </div>
  )
}
export default PrintJokes;