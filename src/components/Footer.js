import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer pt-4 pb-3">
            <div className="container">
                <div className="row text-center text-md-start align-items-start">
                    <div className="col-12 col-md-4 mb-4 mb-md-0">
                        <h5 className="text-uppercase fw-bold">VietJet Air</h5>
                        <p className="small mb-0">
                            Cung cấp trải nghiệm bay tiết kiệm, an toàn và tiện nghi cho mọi hành khách.
                        </p>
                    </div>

                    <div className="col-12 col-md-4 mb-4 mb-md-0">
                        <h6 className="text-uppercase fw-semibold">Liên kết</h6>
                        <ul className="list-unstyled mb-0">
                            <li><a href="/about" className="footer-link">Giới thiệu</a></li>
                            <li><a href="/contact" className="footer-link">Liên hệ</a></li>
                            <li><a href="/privacy" className="footer-link">Chính sách bảo mật</a></li>
                            <li><a href="/terms" className="footer-link">Điều khoản sử dụng</a></li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-4">
                        <h6 className="text-uppercase fw-semibold">Kết nối</h6>
                        <div className="d-flex justify-content-center justify-content-md-start gap-4">
                            <a href="#" className="footer-link fs-3" aria-label="Facebook">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="footer-link fs-3" aria-label="Instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" className="footer-link fs-3" aria-label="YouTube">
                                <i className="bi bi-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="row text-center text-md-start align-items-center">
                    <div className="col-md-9">
                        <p className="mb-1 small fw-semibold">CÔNG TY CỔ PHẦN HÀNG KHÔNG VIETJET</p>
                        <p className="mb-1 small">302/3 Phố Kim Mã, Phường Ngọc Khánh, Quận Ba Đình, TP. Hà Nội, Việt Nam.</p>
                        <p className="mb-0 small">Chịu trách nhiệm nội dung: <strong>Ông Nguyễn Thanh Sơn</strong></p>
                    </div>
                    <div className="col-md-3 text-center text-md-end mt-3 mt-md-0">
                        <img
                            src="https://dangkywebvoibocongthuong.com/wp-content/uploads/2021/11/logo-da-thong-bao-bo-cong-thuong.png"
                            alt="Bộ Công Thương"
                            className="img-fluid"
                            style={{ maxHeight: '50px' }}
                        />
                    </div>
                </div>

                <div className="text-center small mt-3">
                    © 2025 VietJet Air. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
