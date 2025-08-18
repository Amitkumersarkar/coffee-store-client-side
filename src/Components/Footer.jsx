import logo from "../assets/more/24.jpg";
const Footer = () => {
    return (
        <>
            {/* footer 1 */}
            <footer className="footer sm:footer-horizontal bg-[#F4F3F0] text-gray-600 p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="w-80">
                        <label>Enter your email address</label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            {/* footer 2 */}
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content">
                <aside
                    style={{ backgroundImage: `url(${logo})` }}
                    className="w-full h-[50px] py-3 text-white bg-center bg-no-repeat bg-cover"
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