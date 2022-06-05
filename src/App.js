import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "Bin",
    content: "test",
    emotion: 5,
    created_date: new Date().getTime(), // getTime: 시간을 밀리세컨드로 변경
  },
  {
    id: 2,
    author: "Go",
    content: "test2",
    emotion: 5,
    created_date: new Date().getTime(), // getTime: 시간을 밀리세컨드로 변경
  },
  {
    id: 3,
    author: "Eun",
    content: "test3",
    emotion: 3,
    created_date: new Date().getTime(), // getTime: 시간을 밀리세컨드로 변경
  },
];
function App() {
  return (
    <div className="App">
      <h2>Diary</h2>
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
