import React from 'react';
import './App.css';
import MuiAccordion from './components/MuiAccordion';
import MuiAutoComplete from './components/MuiAutoComplete';
import MuiBottomNavigation from './components/MuiBottomNavigation';
import { MuiBox } from './components/MuiBox';
import MuiBreadCrumbs from './components/MuiBreadCrumbs';
import { MuiButton } from './components/MuiButton';
import MuiCard from './components/MuiCard';
import MuiCheckBox from './components/MuiCheckBox';
import MuiDrawer from './components/MuiDrawer';
import MuiImageList from './components/MuiImageList';
import MuiLink from './components/MuiLink';
import MuiNavbar from './components/MuiNavbar';
import { MuiRadioButton } from './components/MuiRadioButton';
import MuiRating from './components/MuiRating';
import MuiSelect from './components/MuiSelect';
import MuiSpeedDial from './components/MuiSpeedDial';
import MuiSwitch from './components/MuiSwitch';
import MuiTextField from './components/MuiTextField';
import { MuiTypography } from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      {/* <MuiTypography />
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
      <MuiImageList /> */}
      <MuiNavbar />
      <MuiLink />
      <MuiBreadCrumbs />
      <MuiDrawer />
      <MuiSpeedDial />
      <MuiBottomNavigation />
    </div>
  );
}

export default App;
