import { useState, useEffect } from "react";

function MainArea() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://elephant-api.herokuapp.com/elephants")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.slice(0, 47));
        setData(data.slice(0, 47));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("%cSe acutalizó el componente", "color: yellow");
  }, [data]);

  useEffect(() => {
    return () => console.log("%cSe desmontó el componente", " color: red");
  }, []);

  return (
    <main>
      <h1>Hi</h1>
      <ul>
        {data.map((elephant, i) => {
          return <li key={i}>{elephant.name}</li>;
        })}
      </ul>
    </main>
  );
}

export default MainArea;
