import React, { useEffect, useState } from 'react';

const UnmountTest = () => {
  useEffect(() => {
    console.log('Mount!');

    return () => {
      // Unmount 시점에 실행
      console.log('Unmount!');
    };
  }, []);

  return <div>Unmount Testing Component</div>;
};
const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  useEffect(() => {
    console.log('Mount!');
  }, []); // dependency array에 빈 배열 전달 시 Mount되는 시점에만 실행

  useEffect(() => {
    console.log('Update!');
  }); // dependency array를 전달하지 않을 시 Update 시점에 실행

  useEffect(() => {
    console.log('Count Update!');
    if (count > 5) {
      alert('count가 5를 넘었습니다. 따라서 1로 초기화합니다.');
      setCount(1);
    }
  }, [count]); // dependency array 활용 시 감지하고 싶은 값만 감지하여 실행
  useEffect(() => {
    console.log('Text Update!');
  }, [text]); // dependency array 활용 시 감지하고 싶은 값만 감지하여 실행

  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
