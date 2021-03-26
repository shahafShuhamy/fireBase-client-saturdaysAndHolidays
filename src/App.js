import React from 'react';
import Events from './Events';
import './Events.css'
import './App.css';
import Plus from './assets/plus';

function App() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Saturdays and Holidays</h1>
            <div className="actions">
              <Plus className="add" />
            </div>
            </header>
            <Events/>
        </div>
      );
}

export default App;
