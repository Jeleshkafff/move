import { useState } from "react";
import { useEffect } from "react";
import styles from "./App.css";

function App() {
  const [array, setArray] = useState([]);
  // // useEffect(() => {
  let response, inp, btn;
  async function test() {
    // btn = document.querySelector(".Btn");
    // btn.addEventListener("onClick", async () => {
    inp = document.querySelector(".input");
    const localArray = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${inp.value}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "9d6f8b02-2f1c-41ea-81a6-ac78982af0d3",
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
    setArray(localArray);

    console.log(localArray);
  }
  useEffect(() => {
    test();
  }, []);

  // }, []);
  return (
    <div className="App">
      <input className="input" type="text" placeholder="Фильмы, сериалы" />
      <button onClick={test} className="Btn">
        Поиск
      </button>
      {array.films?.map((element) => {
        return (
          <div>
            <img className="Img" src={element.posterUrl} alt="" />
            <h1>Название {element.nameRu}</h1>
            <h2> Рейтинг {element.rating}</h2>
            <h4>{element.description}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;
