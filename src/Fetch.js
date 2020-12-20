import React, { useEffect, useState, useContext } from 'react'
import { StoreContext } from "./storeContext";
import './Fetch.css'

/**
 * Haetaan haluttu määrä vitsejä apista ja tallennetaan ne storeContexiin 
 * kategoriat on tehty kovakoodauksella mikäli en muistanut/jaksanut hakea niitä
 */
const Fetch = () => {
  const minJokeCount = 1;
  const maxJokeCount = 10;
  const defaultJokeValueCount = 10;
  const [count, setCount] = useState(defaultJokeValueCount);
  const [chosenCategory, setChosenCategory] = useState("kaikki", "explicit", "nerdy")
  const [firstname, setFirstname] = useState("Chuck")
  const [lastname, setLastname] = useState("Norris")
  const [catecories, setCategories] = useState([])
  const [store, setStore] = useContext(StoreContext);
  useEffect(() => {
    setCategories(["kaikki kategoriat", "explicit", "nerdy"])
  }, []);

  const fetchJokes = () => {
    let base_url = "https://api.icndb.com/"
    let lastPArt = `jokes/random/${count}?firstName=${firstname}&lastName=${lastname}&escape=javascript`
    let limitcat = `&limitTo=[${chosenCategory}]`
    let finalUrl = base_url + lastPArt
    if (chosenCategory === "kaikki") {
      finalUrl = base_url + lastPArt
    }
    else {
      finalUrl = base_url + lastPArt + limitcat
    }
    fetch(finalUrl)
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        setStore(json.value)
      });
  };

  const validateValue = (e) => {
    if (e >= minJokeCount && e <= maxJokeCount) {
      setCount(e)
    }
  }

  const kat = (e) => {
    setChosenCategory(e)
  }
  // päivitetään sivu jotta printjokes komponentin laskuri nollautuu
  // olisi pitäny tehä useContexilla nollaus, mut en oo ainakaa vielä tehny näköjää
  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div className="jokeBox">
      <div className="labels">
        <label>Kategoriat</label>
        <select className="sel" onChange={e => kat(e.target.value)}>{catecories.map((x, i) => <option className="sel" key={i}>{x}</option>)}</select>
      </div>

      <div className="labels">
        <label>Vitsien määrä</label>
        <input type="number" alt="count" value={count} onChange={e => validateValue(e.target.value)} />
      </div>

      <div className="labels">
        <label>Etunimi</label>
        <input type="text" placeholder="etunimi" value={firstname} onChange={e => setFirstname(e.target.value)}  ></input>
      </div>

      <div className="labels">
        <label>Sukunimi</label>
        <input type="text" placeholder="sukunimi" value={lastname} onChange={e => setLastname(e.target.value)}  ></input>
      </div>

      <div className="labels">
        <button onClick={() => fetchJokes()}>Hae vitsit</button>
      </div>

      <div className="labels">
        <button onClick={() => refreshPage()}>Tyhjennä</button>
      </div>
    </div>
  );
}

export default Fetch;
