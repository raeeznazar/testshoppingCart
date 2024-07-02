


import Container from 'react-bootstrap/Container';
import Header from './components/Header.jsx'
import CartList from './components/CartList.jsx'
import Viewcart from './components/Viewcart.jsx'
import Button from 'react-bootstrap/Button';
import { Link, Route, Router, Routes } from 'react-router-dom';


function App() {

  return (

    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<CartList />} ></Route>
        <Route path="/Viewcart" element={<Viewcart />} ></Route>

      </Routes>

    </Container>

  );
}

export default App;
