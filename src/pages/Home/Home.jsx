import React from "react";
import Dashboard from "../../components/DashBoard/DashBoard";
import './Home.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.png';

function Home() {
    const images = [
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b62ad0c4-ae84-4e35-9ec4-361c5973107f/air-jordan-legacy-312-low-mens-shoes-B931hr.png",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cf45e4d8-ecdf-4d1a-899f-98c32b34bcbb/air-jordan-1-low-womens-shoes-rJrHLw.png",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f84e05d5-f1a8-4628-a389-57b3f1889f61/air-jordan-1-mid-se-mens-shoes-Zn07hL.png",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fd8ed81b-130b-4580-9c8c-bb1d66c77231/air-jordan-1-retro-high-og-yellow-ochre-mens-shoes-JHpxkn.png",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b8523d14-0520-4294-b86e-edea1495693a/air-jordan-1-mid-se-womens-shoes-wkMdft.png",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/68538354-7dee-4373-9f49-bc65eff85ce6/air-jordan-1-zoom-cmft-2-zapatillas-2W3NJM.png"
    ];
    

    return (
        <Dashboard>
            <Container>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={img2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={img3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
                <Row className="my-5">
                    {images.map((src, index) => (
                        <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                            <img src={src} alt={`Air Jordan ${index + 1}`} className="img-fluid rounded" />
                        </Col>
                    ))}
                </Row>
                <Row className="mb-5">
                    <Col>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis praesentium asperiores alias facere obcaecati modi ex magnam consectetur explicabo itaque, corporis sed numquam, quos ipsam! Nemo dolorem odit facere quisquam!</p>
                    </Col>
                </Row>
            </Container>
        </Dashboard>
    );
}

export default Home;
