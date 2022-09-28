import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => setAlbums(data))
  }, [])
  console.log(albums)
  return (
    <div className={styles.container}>
      <button>
        <a href="/album">Lihat Detail Page Album</a>
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {albums.map(album => (
            <tr key={album.id} style={{textAlign: 'center'}}>
              <td>{album.id}</td>
              <td>{album.userId}</td>
              <td>{album.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
