import React from 'react';
import { FaHotel, FaUmbrellaBeach, FaPlane, FaCar } from 'react-icons/fa';
import './Services.css';

const Services = () => {
    return (
        <div className="services-container mt-5">
            <h3 className="text-center mb-4">Dịch vụ khác</h3>
            <div className="services-row">
                {/* Dịch vụ Khách Sạn */}
                <div className="services-card">
                    <img
                        src="https://booking.muongthanh.com/images/hotels/hotels/original/muong-thanh-luxury-bmt_1660535752_1663925749.jpg"
                        className="card-img-top services-img"
                        alt="Khách sạn"
                    />
                    <div className="card-body services-card-body">
                        <FaHotel className="services-icon text-primary" />
                        <h5 className="card-title services-title">Combo Khách Sạn</h5>
                        <p className="card-text services-text">Đặt khách sạn cùng chuyến bay với mức giá ưu đãi.</p>
                        <a href="#" className="btn services-btn btn-primary">Xem Thêm</a>
                    </div>
                </div>

                {/* Dịch vụ Bảo Hiểm */}
                <div className="services-card">
                    <img
                        src="https://ibaohiem.vn/wp-content/uploads/2023/01/Hop-dong-bao-hiem-du-lich-1024x598.jpg"
                        className="card-img-top services-img"
                        alt="Bảo hiểm"
                    />
                    <div className="card-body services-card-body">
                        <FaUmbrellaBeach className="services-icon text-warning" />
                        <h5 className="card-title services-title">Bảo Hiểm Du Lịch</h5>
                        <p className="card-text services-text">Bảo vệ chuyến đi của bạn với bảo hiểm du lịch toàn diện.</p>
                        <a href="#" className="btn services-btn btn-primary">Xem Thêm</a>
                    </div>
                </div>

                {/* Dịch vụ Máy Bay */}
                <div className="services-card">
                    <img
                        src="https://static2.abay.vn/Images/2022/06/14/ve-may-bay-gia-re-vietjet-air-tai-abay.jpg"
                        className="card-img-top services-img"
                        alt="Máy bay"
                    />
                    <div className="card-body services-card-body">
                        <FaPlane className="services-icon text-success" />
                        <h5 className="card-title services-title">Vé Máy Bay</h5>
                        <p className="card-text services-text">Đặt vé máy bay giá rẻ cho chuyến đi của bạn.</p>
                        <a href="#" className="btn services-btn btn-primary">Xem Thêm</a>
                    </div>
                </div>

                {/* Dịch vụ Thuê Xe */}
                <div className="services-card">
                    <img
                        src="https://icham.org/wp-content/uploads/2020/04/vinfast.jpg"
                        className="card-img-top services-img"
                        alt="Thuê xe"
                    />
                    <div className="card-body services-card-body">
                        <FaCar className="services-icon text-danger" />
                        <h5 className="card-title services-title">Thuê Xe</h5>
                        <p className="card-text services-text">Thuê xe tiện lợi cho chuyến du lịch của bạn.</p>
                        <a href="#" className="btn services-btn btn-primary">Xem Thêm</a>
                    </div>
                </div>
                <div className="services-card">
                    <img
                        src="https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/swift2471592284169014-1695094650429.webp"
                        className="card-img-top services-img"
                        alt="vận chuyển"
                    />
                    <div className="card-body services-card-body">
                        <FaCar className="services-icon text-danger" />
                        <h5 className="card-title services-title">Vận chuyển</h5>
                        <p className="card-text services-text">Vận chuyển Bắc - Trung - Nam siêu tốc, siêu tiện lợi.</p>
                        <a href="#" className="btn services-btn btn-primary">Xem Thêm</a>
                    </div>
                </div>
                <div className="services-card">
                    <img
                        src="https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/750x300vn-1698722234707.jpg"
                        className="card-img-top services-img"
                        alt="Ưu đãi"
                    />
                    <div className="card-body services-card-body">
                        <FaCar className="services-icon text-danger" />
                        <h5 className="card-title services-title">Ưu đãi dành cho chủ thẻ mới</h5>
                        <p className="card-text services-text">Ưu tiên check-in tại sân bay dành cho hạng thẻ Platinum.</p>
                        <a href="#" className="btn services-btn btn-primary">Xem Thêm</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
