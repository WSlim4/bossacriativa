import React from 'react';
import { Footer, Header, Main } from './styles';

export default function Page({ children }) {
  return (
    <>
      <Header></Header>
      <Main>{ children }</Main>
      <Footer></Footer>
    </>
  )
}
