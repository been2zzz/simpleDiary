import React, { useEffect, useState } from 'react';

// React.memo
// 변화 없는 prop 전달 시 rerender 하지 않음
// 객체가 아닌 경우 정상 작동
const CounterA = React.memo(({ cnt }) => {
  useEffect(() => {
    console.log('CounterA Update!');
  });
  return <div>{cnt}</div>;
});

// 객체인 경우 React.memo 정상 작동하지 않음. 주소값이 다르기 때문
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log('CounterB Update!');
  });
  return <div>{obj.cnt}</div>;
};

// 해당 함수를 통해 비교
const areEqual = (prevProps, nextProps) => {
  return prevProps.obj.cnt === nextProps.obj.cnt;
};

// 별도의 다른 컴포넌트 만듦 React.memo(component, 객체 비교 함수)
// 객체 비교 함수를 통해 비교가 되어 React.memo 정상 작동
const MemoizedCountB = React.memo(CounterB, areEqual);

// React.memo 사용 시 변한 컴포넌트만 rerender
// React.memo 미사용 시 text, count component 둘 다 update
const TextView = React.memo(({ text }) => {
  useEffect(() => {
    console.log('text update');
  });
  return <div>{text}</div>;
});

const CountView = React.memo(({ count }) => {
  useEffect(() => {
    console.log('count Update!');
  });
  return <div>{count}</div>;
});

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState('');
  const [cnt, setCnt] = useState(1);
  const [obj, setObj] = useState({
    cnt: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>count</h2>
        <CountView count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <TextView text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <h2>Counter A</h2>
        <CounterA cnt={cnt} />
        <button onClick={() => setCnt(cnt)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCountB obj={obj} />
        {/* <CounterB obj={obj} /> */}
        <button onClick={() => setObj({ cnt: obj.cnt })}>B button</button>
      </div>
    </div>
  );
};

export default OptimizeTest;
