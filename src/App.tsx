import React from 'react';
import { Header } from './components/Header';
import { Body } from './components/Body';


export const App = ()=>{ 
  return (
    <React.StrictMode>
      <Header />
      <Body />
    </React.StrictMode>
  );
}
