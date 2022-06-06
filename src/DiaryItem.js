const DiaryItem = ({ author, content, created_date, emotion }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          author: {author} | emotion {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString}</span>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default DiaryItem;
