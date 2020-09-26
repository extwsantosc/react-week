import './styles/styles.css';

import React from 'react';
import { Title } from "./components/Title";
import { Character } from "./components/Character";

export const App = () => {
  return (
    <>
      <Title text='Victory'/>
      <Character name='Clipper' />
    </>
  );
}
