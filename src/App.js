
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    
      <Navbar title="TextUtils" aboutText="About Us" />
      {/* <Navbar/> */}

      <TextForm labelText="Enter the Text Below..."></TextForm>
      
    
    </>
  );
}

export default App;
