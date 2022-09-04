import { useState } from 'react';
import { Link } from 'react-router-dom';

const NewMessage = () => {
  const [textValue, setTextvalue] = useState('');
  const [nameValue, setNameValue] = useState('');
  
  const handleChange = (type: string, targetValue: string ) => {
    switch (type) {
      case "text":
        setTextvalue(targetValue);
        break;
      case "name":
        setNameValue(targetValue);
        break;
      default:
        break;
    }
  };

  const postData = () => {
    const dateCurr = new Date();
    const data = {
      text: textValue,
      user: nameValue,
      added: dateCurr
    }
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data })
    };

    fetch('/api/create', requestOptions)
      .then((res) => {
        console.log(res);
    })
  };

  return (
    <div className='messageContainer'>
      <div className='messageCard'>
        <div className='text'>Text: <input placeholder="Enter Text" type="text" onChange={e =>{handleChange("text", e.target.value)}}/></div>
        <div className='user'>Name: <input placeholder="Enter Name" type="text" onChange={e =>{handleChange("name", e.target.value)}}/></div>
        <Link to={"/"}> 
          <button type='button' onClick={postData}>Submit</button> 
        </Link>
      </div>
    </div>
  )
}

export default NewMessage;