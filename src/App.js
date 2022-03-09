import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './Shared/Header/Header';
import Join from './Pages/Join/Join';
import Chat from './Pages/Chat/Chat';


function App() {
  return (
      <BrowserRouter>
        <Header></Header>
        <Routes>
          
          <Route path="/" element={<Join />} />
          <Route path="chat" element={< Chat />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
