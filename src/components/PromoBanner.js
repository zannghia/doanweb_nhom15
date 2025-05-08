import React from 'react';

const PromoBanner = () => {
    return (
        <div className="container mt-5">
            <div className="alert alert-info text-center" role="alert">
                <h4 className="alert-heading">Khuyến mãi đặc biệt!</h4>
                <p>Giảm giá 50% cho tất cả các chuyến bay đi Đà Nẵng!</p>
                <hr />
                <p className="mb-0">Nhanh tay đặt vé ngay hôm nay!</p>
            </div>
        </div>
    );
}

export default PromoBanner;
