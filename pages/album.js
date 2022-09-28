export default function Albums(props) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {props.albums?.map(album => (
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

export async function getServerSideProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const albums = await res.json()

    console.log(albums)

    return {
        props: {albums}
    }
}