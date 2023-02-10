import './App.css';

function App() {

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('In handleSubmit');
    localStorage.setItem('key', 'value');
    sessionStorage.setItem('key', 'value');
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;