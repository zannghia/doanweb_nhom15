import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        lastName: '',
        fullName: '',
        countryCode: '+84',
        phone: '',
        dob: '',
        email: '',
        referralCode: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Đăng ký thành công!');
        navigate('/login');
    };

    return (
        <div className="container mt-5 pb-5" style={{ maxWidth: '600px' }}>
            <div className="card shadow-sm border-0">
                <div className="card-body">
                    <h4 className="text-center mb-4 text-danger font-weight-bold">
                        ĐĂNG KÝ TÀI KHOẢN TRAVELAPP
                    </h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    placeholder="Họ *"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fullName"
                                    placeholder="Tên đệm và Tên *"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <select
                                    className="form-control"
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                >
                                    <option value="+84">(+84) VN</option>
                                    <option value="+1">(+1) USA</option>
                                    <option value="+61">(+61) AUS</option>
                                </select>
                            </div>
                            <div className="form-group col-md-8">
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    placeholder="Số điện thoại *"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    pattern="[0-9]{9,11}"
                                    title="Nhập số điện thoại từ 9 đến 11 chữ số"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <input
                                type="date"
                                className="form-control"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email *"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="referralCode"
                                placeholder="Mã giới thiệu (nếu có)"
                                value={formData.referralCode}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-warning btn-block font-weight-bold mt-3"
                        >
                            Đăng ký
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
