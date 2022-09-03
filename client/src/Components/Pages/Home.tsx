import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Data {
  text: string;
  user: string;
  added: string;
}

const Home: FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data])

  return(
    <>
      <div className='messageContainer'>
        {Object.entries(data).map(([key, value]) => {
          return (
            <div className='messageCard' key={key}>
              <div className='text'>{value.text}</div>
              <div className='user'>{value.user}</div>
              <div className='date'>{value.added}</div>
            </div>
          )
      })}
      </div>
      <Link id='newMessage' to="/new">New Message</Link>
    </>
  )
}

export default Home;