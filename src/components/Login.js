import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await fetch('https://login-one-beige.vercel.app/users');
            const data = await response.json();

            const user = data.find(
                (user) => user.username === formData.email && user.password === formData.password
            );

            if (user) {

                console.log('Đăng nhập thành công!');
                localStorage.setItem('token', user.token);


                setLoading(false);

                setTimeout(() => {
                    navigate('/');
                }, 1000);
            } else {

                console.log('Thông tin đăng nhập sai!');
                setErrorMessage('Sai tài khoản hoặc mật khẩu!');
                setLoading(false);
            }
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
            setErrorMessage('Không thể kết nối đến server.');
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5 pb-5">
            <h2>Đăng nhập</h2>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

            {loading && <div className="alert alert-info">Đang đăng nhập...</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                </button>
            </form>
        </div>
    );
};

export default Login;
