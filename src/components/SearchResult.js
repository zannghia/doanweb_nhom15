import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const flights = location.state?.flights || [];

    const [openDetails, setOpenDetails] = useState({});

    const handleSelectFlight = (flight) => {
        navigate('/book-flight', { state: { flight } });
    };

    const toggleDetails = (flightId) => {
        setOpenDetails(prev => ({
            ...prev,
            [flightId]: !prev[flightId],
        }));
    };

    return (
        <div className="mt-5 pb-5">

            <style>{`
                .details-panel {
                    max-height: 0;
                    overflow: hidden;
                    background-color: #e0ffe0;
                    border-radius: 8px;
                    padding: 0 16px;
                    opacity: 0;
                    transition: all 0.4s ease;
                    margin-top: 10px;
                }
                .details-panel.open {
                    max-height: 500px;
                    padding: 16px;
                    opacity: 1;
                }
                .toggle-button {
                    background-color: #28a745;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 5px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                .toggle-button:hover {
                    background-color: #218838;
                }
                .arrow {
                    transition: transform 0.3s;
                }
                .arrow.open {
                    transform: rotate(180deg);
                }
            `}</style>

            <h3 className="text-center mb-4">Kết quả tìm kiếm chuyến bay</h3>

            {flights.length === 0 ? (
                <p className="text-center">Không tìm thấy chuyến bay nào.</p>
            ) : (
                <div className="d-flex flex-column gap-4">
                    {flights.map((flight) => (
                        <div
                            key={flight.id}
                            className="p-4 shadow rounded"
                            style={{ backgroundColor: '#f0fff0', border: '2px solid #ccc' }}
                        >
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <h5>{flight.departure_city} ({flight.departure_time}) → {flight.arrival_city} ({flight.arrival_time})</h5>
                                    <p className="mb-1">Hãng: {flight.airline_code} | Máy bay: {flight.aircraft_type || 'Airbus A321'}</p>
                                    <p className="mb-1">Thời gian bay: {flight.duration || '2 giờ 10 phút'}</p>
                                </div>
                                <div className="text-end">
                                    <p>Giá vé: {flight.ticket_price?.toLocaleString() || flight.price?.toLocaleString()} VND</p>
                                    <p>Thuế phí: {flight.tax_fee?.toLocaleString() || '583,400'} VND</p>
                                    <p>Dịch vụ: {flight.service_fee?.toLocaleString() || '0'} VND</p>
                                    <h5 className="text-danger">
                                        Tổng: {((flight.ticket_price || flight.price || 0) + (flight.tax_fee || 583400) + (flight.service_fee || 0)).toLocaleString()} VND
                                    </h5>
                                </div>
                            </div>

                            {/* Nút toggle chi tiết */}
                            <div className="text-center">
                                <button
                                    className="toggle-button"
                                    onClick={() => toggleDetails(flight.id)}
                                >
                                    {openDetails[flight.id] ? "Ẩn chi tiết" : "Xem chi tiết"}
                                    <span className={`arrow ${openDetails[flight.id] ? 'open' : ''}`}>▼</span>
                                </button>
                            </div>

                            {/* Panel chi tiết */}
                            <div className={`details-panel ${openDetails[flight.id] ? 'open' : ''}`}>
                                <p>✅ Hành lý xách tay 07Kg</p>
                                <p>✅ Bảo hiểm Sky Care</p>
                                <p>❌ Hành lý ký gửi</p>
                                <p>❌ Suất ăn</p>
                                <p>❌ Chọn trước chỗ ngồi</p>
                                <p>❌ Thay đổi ngày bay</p>
                            </div>

                            <button
                                className="btn btn-warning w-100 mt-3 fw-bold"
                                onClick={() => handleSelectFlight(flight)}
                            >
                                Đi tiếp
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <div className="text-center">
                <button className="btn btn-secondary mt-4" onClick={() => navigate('/')}>
                    Quay lại
                </button>
            </div>
        </div>
    );
};

export default SearchResults;
