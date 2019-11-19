import React from 'react';
import { render, cleanup } from '@testing-library/react';
import  '@testing-library/jest-dom/extend-expect';
import Header from '../components/Header';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureStore([]);

describe('Tesing Header Component', () => {
  let store;

  afterEach(cleanup);
  
  beforeEach(()=> {
    store = mockStore({
      myState: 'sample text'
    });
  });

  it('H1 tag has to be Listmera', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Header/>
        </Provider> 
      </BrowserRouter>
    );
    expect(getByTestId('h1tag')).toHaveTextContent('Listmera');
  });
});
