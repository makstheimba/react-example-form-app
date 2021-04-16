import './App.css';
import { useState } from 'react';
import Form from './Form'
import { FormContextProvider } from './FormContext';

function App() {
  const [nameInputValue, setNameInputValue] = useState('');
  const [surnameInputValue, setSurnameInputValue] = useState('');
  const formContextValue = {
    name: {
      value: nameInputValue,
      onChange: setNameInputValue
    },
    surname: {
      value: surnameInputValue,
      onChange: setSurnameInputValue
    }
  }
  function handleSubmit(event) {
      event.preventDefault();
      console.log(formContextValue);
      debugger;
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Form</h1>
        <FormContextProvider value={formContextValue}>
          <Form handleSubmit={handleSubmit} />
        </FormContextProvider>
      </header>
    </div>
  );
}

export default App;
