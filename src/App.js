import React, {useState} from 'react';
import Events from './Events';
import Modal from 'react-modal';
import AddEventModal from './AddEventModal';
import './Events.css'
import './App.css';
import Plus from './assets/plus';

function App() {

      const [isModalOpen, setModalIsOpen] = useState(false);
      const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          backgroundColor       : 'var(--secondary)'      
        }
    };

      function openAddingForm(e) {
        e.preventDefault();
        setModalIsOpen(true);
        console.log("here");
      }

      function closeAddingForm() {
        setModalIsOpen(false);
      }

      return (
        <div className="App">
          <header className="App-header">
            <h1>Saturdays and Holidays</h1>
            <div className="actions">
            </div>
            </header>
            <Events/>
            <button className="add-container" onClick={openAddingForm}>
              <Plus className="add"/>
            </button>
            <Modal isOpen={isModalOpen} style={customStyles}>
              <button className="close-modal" onClick={closeAddingForm}>X</button>
              <AddEventModal/>
            </Modal>
        </div>
      );
}

export default App;
