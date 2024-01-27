import { useState } from "react";
import DataDisplay from "./Components/DataDisplay";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const allData = await fetch("https://jsonplaceholder.typicode.com/posts");
      const finalData = await allData.json();
      setIsLoading(false);
      setData(finalData);
      console.log(finalData);
    } catch (error) {
      setError(error);
    }
  };
  return (
    <>
      <div className="buttonContainer">
        <button onClick={fetchData}>
          {" "}
          {isLoading ? "Loading " : "Fetch Data"}
        </button>
      </div>
      <DataDisplay userData={data} />
    </>
  );
}

export default App;
