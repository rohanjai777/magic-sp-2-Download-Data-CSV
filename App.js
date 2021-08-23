import logo from './logo.svg';
import './App.css';
const data = [
  ["col1","col2","col3"],
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
function App() {
  const downloadTextFile = () =>{
    const csvString = makeCsv(data);
    const element = document.createElement("a");
    const file = new Blob([csvString]);
    element.href = URL.createObjectURL(file);
    element.download = "NewDownload.csv";
    document.body.appendChild(element);
    element.click();
  }
  const makeCsv = (rows) =>{
    return rows.map(r => {return r.join(",")}).join("\n");
  }
  return (
    <>
    <div>
      <button type="button" onClick={downloadTextFile}>Download</button>
    </div>
    </>
  );
}

export default App;
