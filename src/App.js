import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PopularDestinations from './components/PopularDestinations';
import PromoBanner from './components/PromoBanner';
import Services from './components/Services';
import './components/PopularDes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './components/Header.css';
import SearchResults from './components/SearchResult';
import BookFlight from './components/BookFlight';
import TicketInfo from './components/TicketInfo';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute'; // Import route bảo vệ

const App = () => {
  return (
    <Router>
      <div className="container mt-5">
        <Header />
        <Routes>
          {/* Routes công khai */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/results" element={<SearchResults />} />
          <Route path="/book-flight" element={<BookFlight />} />
          <Route path="/ticket-info/:id_ticket" element={<TicketInfo />} />


          {/* Routes cần bảo vệ */}

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
