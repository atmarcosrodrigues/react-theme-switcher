import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';


//import logo from './logo.svg';
//import './App.css';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Content  from './components/Content';

import usePersistedState from './utils/usePersistedState';

function App() {
  
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  //const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light'? dark: light);
  };
  
  return (
    <ThemeProvider theme={theme}>

    <div className="App">
      <GlobalStyle />
      <Header toggleTheme={toggleTheme}/>
      <Content />
    </div>
      
    </ThemeProvider>
  );
}

export default App;
