import React, { useState } from 'react';
import './SearchBar.css';
import { Navigate, useNavigate } from 'react-router-dom';

const SearchAds = () => {
    const [departure, setDeparture] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [passengers, setPassengers] = useState(1);
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();
        const payload = {
            diemxuatphat: departure,
            diemden: destination,
            ngaydi: date,
            hanhkhach: passengers
        };

        try {
            const response = await fetch('/api/flight', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error('Lỗi khi gọi API');

            const data = await response.json();
            console.log('Kết quả tìm kiếm:', data.data);
            navigate('/results', { state: { flights: data.data } });
        } catch (error) {
            console.error('Lỗi:', error.message);
        }
    };

    return (
        <div className="main-container">
            {/* Quảng cáo bên trái */}
            <div className="ads-container">
                <div className="ads-carousel">
                    <div className="ad-card">
                        <img src="https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/750x650-1732499558682.png" alt="Ad 1" />
                        <h4>Ưu đãi bay nội địa</h4>
                        <p>Giảm giá 40% cho các chuyến bay nội địa trong tháng 5</p>
                        <button className="btn-ad">Đặt ngay</button>
                    </div>
                    <div className="ad-card">
                        <img src="https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/vietopbannermb-1745198376090.jpg" alt="Ad 2" />
                        <h4>Bay quốc tế giá rẻ</h4>
                        <p>Khám phá thế giới với giá chỉ từ 99.000đ</p>
                        <button className="btn-ad">Xem thêm</button>
                    </div>
                    <div className="ad-card">
                        <img src="https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/asaddsa-1744709924963.jpg" alt="Ad 3" />
                        <h4>Combo khách sạn + vé máy bay</h4>
                        <p>Tiết kiệm đến 30% khi đặt combo</p>
                        <button className="btn-ad">Khám phá</button>
                    </div>
                    <div className="ad-card">
                        <img src="https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/vietopbannermbqwdwqd-1744880705487.jpg" alt="Ad 4" />
                        <h4>Khám phá thế giới với Combo tiết kiệm</h4>
                        <p>Không chỉ vé máy bay, mà còn combo khách sạn, giúp bạn tiết kiệm tới 30%! Đặt ngay để có kỳ nghỉ không lo về giá!</p>
                        <button className="btn-ad">Khám phá</button>
                    </div>
                    <div className="ad-card">
                        <img src="https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/5topbannermb-1742061299670.jpg" alt="Ad 5" />
                        <h4>Kỷ nguyên vươn mình</h4>
                        <p>Ưu đãi cực lớn khi đặt vé quốc tế</p>
                        <button className="btn-ad">Khám phá</button>
                    </div>
                </div>
            </div>

            {/* Form tìm kiếm */}
            <div className="search-container">
                <div className="card-title">Tìm chuyến bay</div>
                <form onSubmit={handleSearch}>
                    <div className="form-group">
                        <label className="form-label">Điểm đi</label>
                        <input type="text" className="form-control" value={departure} onChange={(e) => setDeparture(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Điểm đến</label>
                        <input type="text" className="form-control" value={destination} onChange={(e) => setDestination(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Ngày khởi hành</label>
                        <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Số lượng vé</label>
                        <input type="number" className="form-control" value={passengers} min="1" max="10" onChange={(e) => setPassengers(e.target.value)} />
                    </div>
                    <button type="submit" className="btn-primary">Tìm chuyến bay</button>
                </form>
            </div>
        </div>
    );
};

export default SearchAds;
