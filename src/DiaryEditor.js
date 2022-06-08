import React, { useContext, useEffect, useRef, useState } from 'react';
import { DiaryDispatchContext } from './App';
const DiaryEditor = () => {
  const { onCreate } = useContext(DiaryDispatchContext);

  const authorInput = useRef(); // DOM 조작
  const contentInput = useRef();
  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1,
  });

  useEffect(() => {
    console.log('DiaryEditor render');
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const hadleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert('submit success!');
    setState({
      author: '',
      content: '',
      emotion: 1,
    });
  };
  return (
    <div className='DiaryEditor'>
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name='author'
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name='content'
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select
          name='emotion'
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </div>
      <div>
        <button onClick={hadleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor); // 최적화를 위해 React.memo
