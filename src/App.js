import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


function App(props) {
  return (

    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.sidebar}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile 
              store={props.store} />} />                    
            <Route path='/dialogs/*' element={<DialogsContainer
              store={props.store}/>} />
          </Routes>         
        </div>
      </div>
    </BrowserRouter>    
  );
}

export default App;
