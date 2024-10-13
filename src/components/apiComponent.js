import { useEffect, useState } from "react";

function ApiComponent() {
  const [albumData, setAlbumData] = useState(null);
  const [userID, setUserID] = useState(1);
  const [filteredAlbumData, setFilteredAlbumData] = useState(null);

  function onUserID() {
    console.log("THIS IS MESSAGE", userID);
    if (albumData !== null) {
      let myUserID = userID;
      console.log(myUserID);
      let newAlbumData = albumData.filter((album) => album.userId === myUserID);
      console.log(myUserID, newAlbumData);
      setFilteredAlbumData(newAlbumData);
    }
  }
  useEffect(() => {
    getAPI();
  }, []);

  function changeUserID(event) {
    console.log(event.target.value);
    setUserID(parseInt(event.target.value));
  }
  useEffect(() => {
    if (albumData !== null) {
      let newAlbumData = albumData.filter((album) => album.userId === userID);
      setFilteredAlbumData(newAlbumData);
    } else {
      setFilteredAlbumData(null);
    }
  }, [albumData]);

  function getAPI() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        res.json().then((data) => {
          setAlbumData(data);
          localStorage.setItem("albums", JSON.stringify(data));
        });
      })
      .catch((err) => {
        //alert("In Catch Block");
        let aldata = localStorage.getItem("albums");
        setAlbumData(JSON.parse(aldata));
      });
  }

  return (
    <div>
      <label htmlFor="userid">User ID: </label>
      <input id="userid" type="number" value={userID} onChange={changeUserID} />
      <button onClick={onUserID}>Show</button>
      {filteredAlbumData === null && <p>Data is empty</p>}
      {filteredAlbumData?.map((album) => {
        return (
          <div key={album.title}>
            <span style={{ width: "100px" }}>{album.userId}</span>,
            <span style={{ width: "200px" }}>{album.id}</span>,
            <span style={{ width: "300px" }}>{album.title}</span>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

export default ApiComponent;
