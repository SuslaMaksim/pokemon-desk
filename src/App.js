import React from 'react';
import PokemonDesk from './pokemonDesc';
import PokemonContainer  from './PokemonContainer';
import {Switch,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store'


function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route exact path='/' render={(props)=> <PokemonDesk {...props}/>}/>
            <Route exact path='/:pokemonID' render={(props)=> <PokemonContainer  {...props}/>}/>
          </Switch>
        </div>
      </Provider>
  );
}

export default App;
