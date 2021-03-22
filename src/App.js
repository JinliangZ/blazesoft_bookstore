import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddButton from './components/Buttons/AddButton';
import Main from './components/Pages/MainPage';


function App() {
  
 

  return (
    <BrowserRouter>
      <div className="App">
        <h1>BookStore</h1>
        
        <AddButton />

        <Switch>
          <Route exact path = '/' component = {Main} />  
        </Switch>
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
