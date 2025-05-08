import React from 'react';
import SearchBar from './SearchBar';  // Thanh tìm kiếm chuyến bay
import PopularDestinations from './PopularDestinations';  // Điểm đến phổ biến
import PromoBanner from './PromoBanner';  // Banner ưu đãi
import Services from './Services';  // Dịch vụ khác
import './PopularDes.css';

const Home = () => {
    return (
        <div className="container mt-5 pb-5">

            <SearchBar />

            <PopularDestinations />

            <PromoBanner />

            <Services />
        </div>
    );
}

export default Home;
