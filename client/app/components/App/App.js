import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ children }) => (
  <>
    <Header />
    <main styles={{paddingBottom:'60px'}}>
      {children}
    </main>
    <Footer/>
  </>
);

export default App;
