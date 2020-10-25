import React from 'react';
import Events from './Events';
import './Events.css'
import './App.css';

function App() {
  const events = [
                  {"name":"סוכות",  "date":"14/10/2020", "location": "שוחמיס"}, 
                  {"name":"שבועות א", "date":"20/05/2020", "location": "משה"},
                  {"name":"שבועות ב", "date":"14/11/2020", "location": "משה"},
                  {"name":"ראש השנה", "date":"26/10/2020", "location": "שוחמיס"},
                  {"name":"רמאדן א", "date":"15/01/2020", "location": "משה"},
                  {"name":"סיגד", "date":"01/06/2020", "location": "שוחמיס"},
                  {"name":"נובי גוד", "date":"21/09/2020", "location": "משה"},
                  {"name":"איד אל פיטר", "date":"31/12/2020", "location": "שוחמיס"}];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Saturdays and Holidays</h1>
      </header>
        <Events events={events}/>
    </div>
  );
}

export default App;
