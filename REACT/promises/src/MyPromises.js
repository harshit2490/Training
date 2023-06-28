import { useEffect, useState } from "react";

function fetchData1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(" Data-1 in 2000 sec");
    }, 2000);
  });
}

function fetchData2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data-2 in 3000 sec");
    }, 3000);
  });
}

export const PromiseComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const promises = [fetchData1(), fetchData2()];
    Promise.all(promises)
      .then((results) => {
        setData(results);
        console.log(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Promises in React</h1>
      {data.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          {data.map((item, index = 1) => (
            <h2 key={index}>{item}</h2>
          ))}
        </div>
      )}
    </div>
  );
};

export default PromiseComponent;
