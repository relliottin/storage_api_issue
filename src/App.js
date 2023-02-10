import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    console.log(`Data: ${data}`);
    if (data != '') {
      localStorage.setItem('useEffect', 'value');
      sessionStorage.setItem('useEffect', 'value');
    }
  }, [data]);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('In handleSubmit');
    localStorage.setItem('handleSubmit', 'value');
    sessionStorage.setItem('handleSubmit', 'value');
  }

  return (
    <div className="login-wrapper">
      <div>
        <h1>handleSubmit</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div>
        <h1>useEffect</h1>
        <form>
          <div>
            <button onClick={e => setData('value')}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;