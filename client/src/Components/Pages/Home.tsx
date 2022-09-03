import {FC} from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => {

  return(
    <>
      <div className='messageContainer'>
        <div className='messageCard'>
        <div className='text'>Hi There</div>
        <div className='user'>Amando</div>
        <div className='date'>date</div>
        </div>
      </div>
      <Link id='newMessage' to="/new">New Message</Link>
    </>
  )
}

export default Home;