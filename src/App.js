// import logo from './logo.svg';
import { useRef , useState , useEffect } from 'react';
import './App.css';
import { uploadFile } from './services/api';
function App() {
  const [ file , setFile ] = useState('')
  const [ result , setResult ] = useState('')
  const fileInput = useRef(); // replacement of document.getElement in react
  useEffect(() => {
    const getImage = async () => {
      if(file){
        const data = new FormData();
        data.append('name' , file.name)
        data.append('file' , file)
        let resp = await uploadFile(data); //data needs to sent along with the api
        setResult(resp?.path);
      }
    }
    getImage();
  },[file])
  const onUploadClick = () => {
    fileInput.current.click()
  }
  return (
    <div className='container'>
      <img src='https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-simon-berger-1266810.jpg&fm=jpg' alt='' />
      <div className='wrapper'>
        <h1>File sharing</h1>
        <p>Upload your files here</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        {/* e.target.files is used to see the file selected where files represent all the files , since we select one hence it is at the 0th position */}
        <input type='file' ref={ fileInput } style={{ display : 'none'}} onChange={(e) => setFile(e.target.files[0])} />
        <a href={result} target="_blank">{result}</a>
      </div>
    </div>
  );
}

export default App;
