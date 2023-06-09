import App from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store} from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import AuthCover from 'components/App/AuthCover';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <AuthCover>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthCover>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
