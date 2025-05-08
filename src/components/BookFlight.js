import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './BookFlight.css';

const BookFlight = () => {
    const location = useLocation();
    const flight = location.state?.flight;
    const ticketid = location.state?.ticketid;
    const navigate = useNavigate();

    const [numPeople, setNumPeople] = useState(1);
    const [customerEmail, setCustomerEmail] = useState('');
    const [totalPrice, setTotalPrice] = useState(flight?.price || 0);
    const [passengers, setPassengers] = useState([
        { first_name: '', last_name: '', cccd: '', phone: '' }
    ]);
    const [message, setMessage] = useState('');

    if (!flight) {
        return <p className="alert alert-danger">Không có chuyến bay nào được chọn. Vui lòng quay lại trang tìm kiếm.</p>;
    }

    const handlePassengerChange = (index, field, value) => {
        const updatedPassengers = [...passengers];
        updatedPassengers[index][field] = value;
        setPassengers(updatedPassengers);
    };

    const handleNumPeopleChange = (e) => {
        const newNumPeople = Number(e.target.value);
        setNumPeople(newNumPeople);
        setTotalPrice(flight.price * newNumPeople);

        const updatedPassengers = [...passengers];

        if (newNumPeople > updatedPassengers.length) {

            for (let i = updatedPassengers.length; i < newNumPeople; i++) {
                updatedPassengers.push({ first_name: '', last_name: '', cccd: '', phone: '' });
            }
        } else {

            updatedPassengers.length = newNumPeople;
        }

        setPassengers(updatedPassengers);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!customerEmail) {
            setMessage('Vui lòng nhập email liên hệ.');
            return;
        }

        for (let i = 0; i < passengers.length; i++) {
            const p = passengers[i];
            if (!p.first_name || !p.last_name || !p.cccd || !p.phone) {
                setMessage(`Vui lòng nhập đầy đủ thông tin cho hành khách thứ ${i + 1}.`);
                return;
            }
        }

        const bookingData = {
            customerEmail,
            totalPrice,
            passengers,
        };

        try {
            const response = await fetch(`/api/flight/order_ticket/${flight.id}/${numPeople}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            });

            const result = await response.json();
            console.log(result);

            if (response.ok && result.success) {
                setMessage('Đặt vé thành công! Chuyển hướng đến thông tin vé...');


                const tickets = result.data;
                if (tickets && tickets.id_ticket) {

                    navigate(`/ticket-info/${tickets.id_ticket}`);
                } else {
                    setMessage('Không lấy được ID vé.');
                }
            } else {
                setMessage(result.message || 'Đặt vé thất bại, vui lòng thử lại sau.');
            }
        } catch (error) {
            console.error(error);
            setMessage('Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Đặt vé cho chuyến bay</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Email liên hệ:</label>
                                    <input
                                        type="email"
                                        value={customerEmail}
                                        onChange={(e) => setCustomerEmail(e.target.value)}
                                        className="form-control"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Số người:</label>
                                    <input
                                        type="number"
                                        value={numPeople}
                                        onChange={handleNumPeopleChange}
                                        className="form-control"
                                        min="1"
                                    />
                                </div>

                                <hr />

                                {passengers.map((passenger, index) => (
                                    <div key={index} className="passenger-group mb-3">
                                        <h5>Hành khách {index + 1}</h5>

                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Họ:</label>
                                                <input
                                                    type="text"
                                                    value={passenger.first_name}
                                                    onChange={(e) => handlePassengerChange(index, 'first_name', e.target.value)}
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Tên:</label>
                                                <input
                                                    type="text"
                                                    value={passenger.last_name}
                                                    onChange={(e) => handlePassengerChange(index, 'last_name', e.target.value)}
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Căn cước công dân/CMND:</label>
                                                <input
                                                    type="text"
                                                    value={passenger.cccd}
                                                    onChange={(e) => handlePassengerChange(index, 'cccd', e.target.value)}
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Số điện thoại:</label>
                                                <input
                                                    type="text"
                                                    value={passenger.phone}
                                                    onChange={(e) => handlePassengerChange(index, 'phone', e.target.value)}
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <hr />
                                    </div>
                                ))}

                                <div className="mb-3">
                                    <p><strong>Tổng giá vé:</strong> {totalPrice} USD</p>
                                </div>

                                <button type="submit" className="btn btn-primary w-100">Đặt vé</button>
                            </form>

                            {message && <div className="mt-3 alert alert-info">{message}</div>}
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Thông tin chuyến bay</h4>
                        </div>
                        <div className="card-body">
                            <p><strong>Chuyến bay:</strong> {flight.departure_city} → {flight.arrival_city}</p>
                            <p><strong>Giờ bay:</strong> {flight.departure_time}</p>
                            <p><strong>Giá vé mỗi người:</strong> {flight.price} USD</p>
                            <p><strong>Hãng bay:</strong> {flight.airline_code}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookFlight;
