import Buttons from "../../Components/Buttons/Buttons";
import Header from "../../Components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay } from "swiper/modules";
import { Col, Container, Row } from "react-bootstrap";

import "swiper/css";
import "swiper/css/pagination";
import Footer from "../../Components/Footer";
const Home = ()=>{
    const sliderImg=[
        {id:1, image:"./images/banner-slider/banner-01.jpg", tag:"slider-image"},
        {id:2, image:"./images/banner-slider/banner-02.jpg", tag:"slider-image"},
        {id:3, image:"./images/banner-slider/banner-03.jpg", tag:"slider-image"}
    ]
    const enjoyCard=[
        {
            id:1, image:"./images/easy-renting.jpg", icon:"lightbulb",
            title:"Easy Renting, Zero Hassle",
            text:"Browse verified rental homes, schedule visits, and book your perfect space in just a few clicks. Our simple process saves your time and removes unnecessary paperwork, so you can move in faster without stress"
        },
        {
            id:2, image:"./images/save-more.webp", icon:"piggy-bank",
            title:"Save More Every Month",
            text:"Find budget-friendly rental homes with transparent pricing and zero hidden charges. Compare options easily and choose the best deal that fits your lifestyle—helping you save money without compromising on comfort."
        },
        {
            id:3, image:"./images/care-step.jpg", icon:"building-shield",
            title:"We Care at Every Step",
            text:"From property search to move-in support, we’re with you throughout your rental journey. Our dedicated assistance ensures smooth communication between tenants and owners, making renting simple and stress-free."
        },
        {
            id:3, image:"./images/secure-verified.jpg", icon:"hands-holding-circle",
            title:"Secure & Verified Homes",
            text:"Rent with complete peace of mind. All properties and owners are verified, payments are protected, and your personal data stays safe—so you can focus on living, not worrying."
        }
    ]
    const controlList=[
        {id:1, text:"Browse verified rental homes in prime locations"},
        {id:2, text:"Zero brokerage & transparent pricing"},
        {id:3, text:"Easy scheduling for property visits"},
        {id:4, text:"Secure payments & digital documentation"},
        {id:5, text:"Dedicated support for tenants & owners"}
    ]
    return(
        <>
            <Header />
            <section className="bannerSec position-relative">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                    speed={1200}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: false,
                    }}
                >
                    {sliderImg.map((items) => (
                        <SwiperSlide key={items.id}>
                            <img src={items.image} alt={items.tag} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="bannerSec_cnt">
                    <Container>
                        <div className="bannerSec_cnt_wrap">
                            <h1 className="bannerSec_cnt_title">Find Your Perfect Rental Home</h1>
                            <p className="bannerSec_cnt_para">
                                Discover verified rental homes with modern amenities in prime locations.
                                No brokers, no hassle – just your next home.
                            </p>
                            <div className="banner-btns">
                                <Buttons variant="primary" size="lg" value={`Explore Homes`} />
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
            <section className="enjoySec py-80">
                <Container>
                    <div className="commonHead text-center mx-auto">
                        <h2 className="commonHead_title">A New Way to Enjoy Your Rental Home</h2>
                        <p className="commonHead_para mb-0">Find comfort, convenience, and peace of mind in every rental. From easy bookings to secure living, we make renting simple, reliable, and stress-free for tenants and families.</p>
                    </div>
                    <Row>
                        {enjoyCard.map((innerData)=>(
                            <Col lg={3} key={innerData.id}>
                                <div className="enjoySec_card">
                                    <div className="enjoySec_card_img">
                                        <img src={innerData.image} className="img-fluid" alt="card-image" />
                                    </div>
                                    <div className="enjoySec_card_cnt">
                                        <div className="enjoySec_card_icon mb-3">
                                            <i class={`fa-solid fa-${innerData.icon}`}></i>
                                        </div>
                                        <p className="mb-0">{innerData.text}</p>
                                    </div>
                                    <div className="enjoySec_card_bottom text-center">
                                        <h3 className="mb-0 fs-5">{innerData.title}</h3>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <section className="aboutSec py-80 pt-0">
                <Container>
                    <Row className="g-5">
                        <Col lg={7}>
                            <div className="aboutSec_left">
                                <div className="commonHead">
                                    <span className="commonHead_subTitle">About Us</span>
                                    <h2 className="commonHead_title">Simplifying Renting,<br className="d-lg-block d-none"/> Redefining Living</h2>
                                    <p className="commonHead_para mb-0">We connect tenants and property owners through a smart, transparent, and hassle-free rental ecosystem. From discovering verified homes to moving in with confidence, our platform makes renting faster, safer, and more convenient—so you can focus on living, not searching.</p>
                                </div>
                                <div className="aboutSec_left_control d-flex gap-3 mb-5">
                                    <img src="./images/home-control.avif" className="img-fluid" alt="home-control-image"/>
                                    <ul className="aboutSec_left_list list-unstyled">
                                        {controlList.map((list)=>(
                                            <li key={list.id}><i class="fa-solid fa-check"></i>{list.text}</li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="aboutSec_left_belief py-4">We believe finding a home should be simple, trustworthy, and stress-free—not confusing or time-consuming.</p>
                                <Buttons variant="primary" size="lg" value={`Learn More`} />
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="aboutSec_right">
                                <img src="./images/rental-img.png" className="img-fluid w-100" alt="about-image" />
                                <div className="position-relative aboutSec_right_cnt">
                                    <i class="fa-solid fa-quote-right"></i>
                                    <p>A good rental experience isn’t just about a house—it’s about feeling secure, supported, and at home from day one.</p>
                                    <span className="fs-5">_Team, Rental Home</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer/>
        </>
    )
}
export default Home;