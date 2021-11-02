import './App.css';
import { useState } from 'react';
import Textarea from "@material-tailwind/react/Textarea";

function App() {

  const [typedResult, setTypedResult] = useState({});
  const [highLight, setHighLight] = useState([]);

  const textAreaOnChange = (e) => {
    let textValue = e.target.value.split("");
    
    // Count number of times each character appeared in the text
    let countedMap = {};
    textValue.forEach(char => {
      countedMap[char] = countedMap[char] + 1 || 1
    });

    setTypedResult(countedMap);

    // 5 most frequent characters in the text
    let highlighted = [];
    for (let char in countedMap) {
      highlighted.push([char, countedMap[char]]);
    }

    highlighted.sort(function (a, b) {
      return b[1] - a[1];
    });

    setHighLight(highlighted);
  }

  return (
    <div className="App p-6 items-center justify-center">
      <h1 className="text-blue-400 font-extrabold">Foldscope Instruments - James Jethro Thorpe</h1>
      <br />
      <Textarea
        color="lightBlue"
        size="regular"
        outline={true}
        placeholder="Enter some content!"
        onChange={(event) => textAreaOnChange(event)}
      />
      <div className="listContainer">
        <div>
          <h1 className="text-gray-400 font-extrabold">Total Characters and Count</h1>
          {Object.keys(typedResult).map((char, i) => (
            <li key={i}>
              <span>{char} : {typedResult[char]}</span>
            </li>
          ))}
        </div>

        <div>
          <h1 className="text-yellow-400 font-extrabold">5 most frequent characters</h1>
          {highLight.map((item, key) => {
            return (key < 5 ?
              <li key={key}>
                {item[0]} : {item[1]}
              </li>
              : null);
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
