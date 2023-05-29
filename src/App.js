import { Provider } from 'react-redux';
import './App.css';
import Main from './Component/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import {store} from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter >
          <Main />
        </BrowserRouter>
      </Provider>
      

    </div>
  );
}

export default App;
