
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/ui/Layout';
import { publicRoutes } from './helper/routes/routes';
import { Provider } from 'react-redux';
import store from './app/store';


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {
            publicRoutes?.map((eacRoute, idx)=>
            <Route key={idx} path={eacRoute.path} element={eacRoute.element} />
            )
          }
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
