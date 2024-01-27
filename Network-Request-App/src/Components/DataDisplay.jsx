const DataDisplay = ({ userData }) => {
  return (
    <div className="container">
      {userData.map((user) => (
        <div key={user.id} className="main">
          <p>Id : {user.id}</p>
          <p>Title : {user.title}</p>
          <p>Body : {user.body}</p>
        </div>
      ))}
    </div>
  );
};
export default DataDisplay;
