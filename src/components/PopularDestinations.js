import React, { useState } from 'react';
import { Modal, Button, Card, Row, Col, Pagination, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const destinations = [
    { name: 'Hồ Chí Minh', image: 'https://toigingiuvedep.vn/wp-content/uploads/2021/05/buc-tranh-dem-sai-gon.jpeg', price: '2,500,000 VNĐ', holiday: 'Tết Nguyên Đán' },
    { name: 'Hà Nội', image: 'https://img.thuthuatphanmem.vn/uploads/2018/09/26/anh-dep-mot-goc-ho-tay-ha-noi-ve-dem_053442610.jpg', price: '3,000,000 VNĐ', holiday: 'Giỗ Tổ Hùng Vương' },
    { name: 'Đà Nẵng', image: 'https://cdn3.ivivu.com/2022/09/c%E1%BA%A7u-r%E1%BB%93ng-%C4%91%C3%A0-n%E1%BA%B5ng-ivivu-4.jpg', price: '1,800,000 VNĐ', holiday: 'Lễ 30/4' },
    { name: 'Phú Quốc', image: 'http://redsvn.net/wp-content/uploads/2018/07/Redsvn-Phu-Quoc-19.jpg', price: '4,200,000 VNĐ', holiday: 'Giáng Sinh' },
    { name: 'Nha Trang', image: 'https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-anh-nha-trang-vao-buoi-chieu-toi.jpg', price: '2,000,000 VNĐ', holiday: 'Quốc Khánh 2/9' },
    { name: 'Sapa', image: 'https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-sapa-dep-tho-mong.jpg', price: '2,800,000 VNĐ', holiday: 'Tết Dương Lịch' },
    { name: 'Vũng Tàu', image: 'https://www.vietnamonline.com/media/uploads/froala_editor/images/VNo-vungtau11.jpg', price: '1,500,000 VNĐ', holiday: 'Lễ 2/9' },
    { name: 'Hạ Long', image: 'https://phunugioi.com/wp-content/uploads/2020/10/anh-ha-long-dep-nhat.jpg', price: '3,500,000 VNĐ', holiday: 'Trung Thu' },
    { name: 'Huế', image: 'https://img1.kienthucvui.vn/uploads/2019/08/14/hinh-anh-dai-noi-hue-ve-dem-dep_054028242.jpg', price: '2,400,000 VNĐ', holiday: 'Festival Huế' },
    { name: 'Đà Lạt', image: 'https://vietnamfreedomtour.com/wp-content/uploads/2016/02/da-lat.jpg', price: '2,600,000 VNĐ', holiday: 'Lễ Tình Nhân' },
    { name: 'Côn Đảo', image: 'https://static-images.vnncdn.net/files/publish/2022/9/2/con-dao5-445.jpg', price: '3,800,000 VNĐ', holiday: 'Ngày Thương binh Liệt sĩ' },
    { name: 'Quy Nhơn', image: 'https://www.vietnamairlines.com/~/media/Images/Discovery/Vietnam/QUYNHON/canh%20dep/1920x1080/Quynhon_canhdep_dam_thi_nai_1920x1080.jpg', price: '2,200,000 VNĐ', holiday: 'Lễ 30/4 - 1/5' },
    { name: 'Mộc Châu', image: 'https://statics.vinpearl.com/moc-chau-vietnam-14_1689840634.jpg', price: '2,100,000 VNĐ', holiday: 'Mùa Hoa Cải' },
    { name: 'Bà Nà Hills', image: 'https://vietnamtop10.net/wp-content/uploads/anh-ba-na-hills-38-1024x875.jpg', price: '3,200,000 VNĐ', holiday: 'Giáng Sinh' },
    { name: 'Tây Ninh', image: 'https://static-images.vnncdn.net/files/publish/2022/9/22/vmhien-tayninh-day3-2022-3-664.jpg', price: '1,300,000 VNĐ', holiday: 'Lễ Vu Lan' },
];

const itemsPerPage = 8;

const PopularDestinations = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedDestination, setSelectedDestination] = useState(null);

    const handleShowDetail = (destination) => setSelectedDestination(destination);
    const handleCloseModal = () => setSelectedDestination(null);

    const totalPages = Math.ceil(destinations.length / itemsPerPage);
    const currentDestinations = destinations.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <Container className="mt-5">
            <h3 className="text-center mb-4">Điểm đến phổ biến</h3>
            <Row>
                {currentDestinations.map((destination, index) => (
                    <Col md={3} sm={6} xs={12} key={index} className="mb-4">
                        <Card onClick={() => handleShowDetail(destination)} style={{ cursor: 'pointer', transition: 'transform 0.3s' }} className="h-100">
                            <Card.Img variant="top" src={destination.image} style={{ height: '180px', objectFit: 'cover' }} />
                            <Card.Body className="text-center">
                                <Card.Title>{destination.name}</Card.Title>
                                <Card.Text><strong>Giá:</strong> {destination.price}</Card.Text>
                                <Card.Text><strong>Ngày Lễ:</strong> {destination.holiday}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className="d-flex justify-content-center">
                <Pagination>
                    <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
                    <Pagination.Prev onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} />
                    {[...Array(totalPages)].map((_, i) => (
                        <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => setCurrentPage(i + 1)}>
                            {i + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} />
                    <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
                </Pagination>
            </div>

            <Modal show={!!selectedDestination} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedDestination?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={selectedDestination?.image} alt={selectedDestination?.name} className="img-fluid mb-3" style={{ borderRadius: '10px' }} />
                    <p><strong>Giá:</strong> {selectedDestination?.price}</p>
                    <p><strong>Ngày Lễ:</strong> {selectedDestination?.holiday}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Đóng</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default PopularDestinations;