import { useEffect, useState } from "react";

function ApiComponent() {
  const [albumData, setAlbumData] = useState(null);
  const [filteredAlbumData, setFilteredAlbumData] = useState([{}]);
  useEffect(() => {
    getAPI();
  }, []);

  useEffect(() => {
    if (albumData !== null) {
      let newAlbumData = albumData.filter((album) => album.userId === 4);
      setFilteredAlbumData(newAlbumData);
    }
  }, [albumData]);

  async function getAPI() {
    let res = await fetch("https://jsonplaceholder.typicode.com/albums");
    let data = await res.json();
    setAlbumData(data);
  }
  return (
    <div>
      {filteredAlbumData.map((album) => {
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
