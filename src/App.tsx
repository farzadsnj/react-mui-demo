import React from 'react';
import './App.css';
import { MuiButton } from './components/MuiButton';
import MuiCheckBox from './components/MuiCheckBox';
import { MuiRadioButton } from './components/MuiRadioButton';
import MuiSelect from './components/MuiSelect';
import MuiSwitch from './components/MuiSwitch';
import MuiTextField from './components/MuiTextField';
import { MuiTypography } from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckBox />
      <MuiSwitch />
    </div>
  );
}

export default App;
