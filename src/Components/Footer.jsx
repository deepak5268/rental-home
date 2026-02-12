import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
            <footer className="footer py-80 pb-0">
                <Container>
                    <div className="d-flex justify-content-between">
                        <div className="footer_info footer_info-first">
                            <h6 className="footer_info_title">Contact Info</h6>
                            <ul className="list-unstyled footer_info_list mb-0">
                                <li className="footer_info_item"><i class="fa-solid fa-location-dot"></i><address className="mb-0"> 402, Business Square Vijay Nagar, Indore, MP 452010 India</address></li>
                                <li className="footer_info_item align-items-center"><i class="fa-solid fa-phone"></i><Link to={"tel:+91 98765 43210"}>+91 98765 43210</Link></li>
                                <li className="footer_info_item align-items-center"><i class="fa-solid fa-envelope"></i><Link to={"mailto:support@rentalhome.com"}>support@rentalhome.com</Link></li>
                            </ul>
                        </div>
                        <div className="footer_info">
                            <h6 className="footer_info_title">Quick Links</h6>
                            <ul className="list-unstyled footer_info_list mb-0">
                                <li className="footer_info_item"><Link to={"#!"}>Home</Link></li>
                                <li className="footer_info_item"><Link to={"#!"}>Browse Properties</Link></li>
                                <li className="footer_info_item"><Link to={"#!"}>About Us</Link></li>
                                <li className="footer_info_item"><Link to={"#!"}>Contact Us</Link></li>
                            </ul>
                            
                        </div>
                        <div className="footer_info">
                            <h6 className="footer_info_title">Our Services</h6>
                            <ul className="list-unstyled footer_info_list mb-0">
                                <li className="footer_info_item"><Link to={"#!"}>Rent Apartments</Link></li>
                                <li className="footer_info_item"><Link to={"#!"}>Rent Houses</Link></li>
                                <li className="footer_info_item"><Link to={"#!"}>PG / Co-Living</Link></li>
                                <li className="footer_info_item"><Link to={"#!"}>Verified Properties</Link></li>
                                <li className="footer_info_item"><Link to={"#!"}>Zero Brokerage Listings</Link></li>
                            </ul>
                            
                        </div>
                        <div className="footer_info">
                            <h6 className="footer_info_title">Help & Support</h6>
                            <ul className="list-unstyled footer_info_list mb-0">
                                <li className="footer_info_item"><Link to={"#!"}>Help Center</Link></li>
                                <li className="footer_info_item"><Link to={"#!"}>FAQs</Link></li>
                                <li className="footer_info_item"><Link to={"#!"}>Privacy Policy</Link></li>
                                <li className="footer_info_item"><Link to={"#!"}>Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_copyRight d-flex gap-2 justify-content-between">
                        <p>© 2026 YourAppName. All Rights Reserved</p>
                        <p className="d-flex align-items-center gap-2"><Link to={"#!"}>Privacy Policy</Link> | <Link to={"#!"}> Terms of Service</Link> | <Link to={"#!"}>Sitemap</Link></p>
                    </div>
                </Container>
            </footer>
        </>
    )
}
export default Footer;