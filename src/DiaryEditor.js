import { useState } from "react";
const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
  });

  //   const [author, setAuthor] = useState("");
  //   const [content, setContent] = useState("");

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={(e) => {
            setState({
              ...state, // state 먼저 펼치기! 반대로 할 경우 state가 그대로 겹쳐지기 때문에 변하지 않음
              content: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;
