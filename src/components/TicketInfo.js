import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const TicketInfo = () => {
    const { id_ticket } = useParams();
    const [ticket, setTicket] = useState(null);
    const [flight, setFlight] = useState(null);
    const [loading, setLoading] = useState(true);
    const printRef = useRef();

    useEffect(() => {
        const fetchTicketAndFlight = async () => {
            try {
                const resTicket = await fetch(`http://giakhanhstu.id.vn/api/ticket/${id_ticket}`);
                const ticketJson = await resTicket.json();
                const ticketData = ticketJson.data;
                const passengers = ticketJson.passenger;

                const resFlight = await fetch(`http://giakhanhstu.id.vn/api/flight/${ticketData.id_flight}`);
                const flightJson = await resFlight.json();
                const flightData = flightJson.data[0];

                setTicket({ ...ticketData, passengers });
                setFlight(flightData);
            } catch (err) {
                console.error("Lỗi khi lấy dữ liệu:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchTicketAndFlight();
    }, [id_ticket]);

    const handleExportPDF = () => {
        const input = printRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`ticket-${id_ticket}.pdf`);
        });
    };

    if (loading) return <div className="container mt-5"><div className="alert alert-info">Đang tải thông tin vé...</div></div>;
    if (!ticket || !flight) return <div className="container mt-5"><div className="alert alert-danger">Không tìm thấy thông tin vé hoặc chuyến bay.</div></div>;

    return (
        <div className="container my-5">


            <div className="card shadow-lg p-4 border-0 rounded-4" ref={printRef} style={{ backgroundColor: '#fefefe' }}>
                {/* Logo và Header */}
                <div className="text-center mb-4">
                    <img src="https://pluspng.com/img-png/logo-vietjet-air-png-vietjet-air-and-safran-sign-sfco2-service-agreement-safran-aircraft-engines-1000.png" alt="Logo hãng bay" width="180" />
                    <h2 className="mt-3 text-primary fw-bold">E-TICKET</h2>
                    <p className="text-muted">Vé điện tử - Không cần in ra, chỉ cần mang theo khi làm thủ tục</p>
                </div>

                {/* Thông tin vé */}
                <div className="mb-3">
                    <p><strong>Mã vé:</strong> {ticket.id_ticket}</p>
                    <p><strong>Tổng tiền:</strong> {ticket.total_price} USD</p>
                </div>

                <div className="row">
                    {/* Hành khách */}
                    <div className="col-md-6 mb-4">
                        <h4 className="text-secondary border-bottom pb-2">👤 Hành khách</h4>
                        {ticket.passengers.map((p, i) => (
                            <div key={p.id} className="bg-light p-3 rounded mb-3 border">
                                <p><strong>Họ tên:</strong> {p.ho} {p.ten}</p>
                                <p><strong>SĐT:</strong> {p.sdt}</p>
                                <p><strong>CCCD:</strong> {p.cccd}</p>
                            </div>
                        ))}
                    </div>

                    {/* Chuyến bay */}
                    <div className="col-md-6 mb-4">
                        <h4 className="text-secondary border-bottom pb-2">✈️ Chuyến bay</h4>
                        <div className="bg-light p-3 rounded border">
                            <p><strong>Hãng:</strong> {flight.airline_code}</p>
                            <p><strong>Xuất phát:</strong> {flight.departure_city} ({flight.departure_time} - {flight.departure_date})</p>
                            <p><strong>Đến:</strong> {flight.arrival_city} ({flight.arrival_time} - {flight.arrival_date})</p>
                            <p><strong>Thời gian bay:</strong> {flight.total_time}</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-4">
                    <button className="btn btn-danger" onClick={handleExportPDF}>
                        <i className="bi bi-download me-2"></i>Tải vé PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TicketInfo;
