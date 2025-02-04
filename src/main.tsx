import {BrowserRouter} from 'react-router-dom' 
import { createRoot } from 'react-dom/client'
import './index.css'
import store from './store/store.ts'
import App from './App.tsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Provider store={store}>
  <App />
  </Provider>
 </BrowserRouter>
)
