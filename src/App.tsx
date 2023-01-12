import React from 'react';
import './App.css';
import MuiAccordion from './components/MuiAccordion';
import MuiAutoComplete from './components/MuiAutoComplete';
import { MuiBox } from './components/MuiBox';
import { MuiButton } from './components/MuiButton';
import MuiCard from './components/MuiCard';
import MuiCheckBox from './components/MuiCheckBox';
import MuiImageList from './components/MuiImageList';
import { MuiRadioButton } from './components/MuiRadioButton';
import MuiRating from './components/MuiRating';
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
      <MuiAutoComplete />
      <MuiRating />
      <MuiBox />
      <MuiCard />
      <MuiAccordion />
      <MuiImageList />
    </div>
  );
}

export default App;
