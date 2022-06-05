const DiaryList = ({ diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>Diary List</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <div key={it.id}>
            {/* 최상위 태그에 key 할당 */}
            <div>author {it.author}</div>
            <div>Diary {it.content}</div>
            <div>emotion {it.emotion}</div>
            <div>create_at(ms) {it.created_date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
