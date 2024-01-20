import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import ShawarmaContainer from './components/shawarmaContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer/>
        <ItemContainer cake/>
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <ShawarmaContainer />
        <NewCakeContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
