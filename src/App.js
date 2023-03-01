import React from 'react';
import './style.css';
import Header from './Header';
import Week from './Week';
import Notes from './Notes';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Week />
      <Notes />
    </div>
  );
}
