import logo from "../assets/more/24.jpg";
import coffeeLogo from "../assets/more/logo1.png";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";

const Footer = () => {
    return (
        <>
            {/* footer 1 */}
            <footer className=" footer sm:footer-horizontal bg-[#F4F3F0] text-gray-600 p-10">
                <div>
                    <img className="w-[60px]" src={coffeeLogo} alt="Espresso Emporium Logo" />
                    <h1 className="text-2xl font-semibold text-[#331A15]" style={{ fontFamily: "Rancho, cursive" }}>Espresso Emporium</h1>
                    <p className="text-[#1B1A1A]">
                        Always ready to be your friend. Come & contact us to share your memorable moments.
                    </p>

                    <div className="mt-4">
                        <h6 className="footer-title text-cyan-600 font-bold">Social Media</h6>
                        <nav className="flex justify-start gap-3 mt-2">
                            <a href="#" className="link link-hover text-2xl"><FaFacebook /></a>
                            <a href="#" className="link link-hover text-2xl"><FaInstagramSquare /></a>
                            <a href="#" className="link link-hover text-2xl"><FaLinkedin /></a>
                        </nav>

                        <div className="mt-4">
                            <h2 className="text-[#1B1A1A] font-semibold text-2xl" style={{ fontFamily: "Rancho, cursive" }}>Get in Touch</h2>
                            <div className="flex gap-2 items-center mt-1">
                                <BsTelephone />
                                <a className="link link-hover font-bold">01312345670</a>
                            </div>
                            <div className="flex gap-2 items-center mt-1">
                                <MdMarkEmailUnread />
                                <a className="link link-hover font-bold">espresso@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="mt-4">
                    <h6 className="footer-title font-semibold text-2xl text-[#331A15]" style={{ fontFamily: "Rancho, cursive" }}>Connect with Us</h6>
                    <fieldset className="w-80">
                        <label>Enter your email address</label>
                        <div className="join mt-2">
                            <input
                                type="email"
                                placeholder="username@site.com"
                                className="input input-bordered join-item bg-gray-400 text-white"
                            />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>

            {/* footer 2 */}
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content">
                <aside
                    style={{ backgroundImage: `url(${logo})` }}
                    className="w-full h-[60px] py-3 text-white bg-center bg-no-repeat bg-cover flex items-center justify-center"
                >
                    <p>
                        Copyright © {new Date().getFullYear()} - All rights reserved by Espresso Emporium Coffee Shop Ltd
                    </p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;
