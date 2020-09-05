import React from 'react';
import './App.css';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import ParentComponent from './components/ParentComponent';

import Counter from './components/Counter'


function App() {
  return (
    <div className="App">
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}
      {/* <ParentComponent /> */}

      <Counter />

    </div>
  )
}

export default App;
