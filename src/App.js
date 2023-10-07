import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <div className="nav_bar">
          <div className="right">
            <h1>Waste Up</h1>
          </div>
        </div>
      </nav>
      <main>
        <div className="main">
          <div className="left">
            <h2>Sign in to Waste Up</h2>
            <button className="button1">
              <img src="icons8-google-20.png" alt="" className="icon" /> Sign in with Google
            </button>
            <div className="centre">
              <hr className="devider" />
              <p>or</p>
              <hr className="devider2" />
            </div>
            <button className="button2"> Continue with email</button>
          </div>
          <div className="right2">
            <img src="7.jpg" alt="" />
          </div>
        </div>
      </main>
    </div>
);
}

export default App;
