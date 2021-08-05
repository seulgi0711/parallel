import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import logo from './logo.svg';

const get = (url) => {
  return axios.get(url, {
    headers: {
      "channel-type": "Web",
      "cmp-id": 1,
      "emp-id": "1",
      language: "ko"
    }
  }).then(({ data }) => data);
};

const run = async () => {
  try {
    const result = await Promise.all([
      get(
        "/settings/api/v2/working-setting/fixed-commute-rule/new"
      ),
      get(
        "/settings/api/v2/working-setting/staggered-commute-rule/new"
      ),
      get(
        "/settings/api/v2/working-setting/optional-working-tm-rule/new"
      ),
      get(
        "/settings/api/v2/working-setting/regarded-working-tm-rule/new"
      )
    ]);
    console.log(result);
  } catch (e) {
    console.log('@@@@@@@@@@@@@@@@')
    console.log(e)
  }
};

function App() {

  useEffect(() => {
    run();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
