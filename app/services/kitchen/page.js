import Image from "next/image";
import Link from "next/link";

import hero from '../../../public/servicesDetailHeroSm.jpg';
import floWorksMan from '../../../public/floWorksMan.png';

import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function kitchen() {
    
    return (
        <div>
            <div className="servicesHero">
                <div className="servicesHeroImgContainer">
                    <Image
                        src={hero}
                        alt="hero"
                        layout="fill"
                        objectFit="cover"                       
                        placeholder='blur'
                    />
                </div>
                <div className="servicesLogoFull">
                    <div className="servicesLogoContainer">
                        <h1 className="servicesHeroTitle">Kitchen Services</h1>
                    </div>
                    <div className="servicesHeroCTA">
                        <a href="tel:+7202631345">Call Now: 720-263-1345</a>
                    </div>
                </div>
            </div>
            <div className="servicesAttention">
                <div className="servicesAttentionContainer">
                    <h2 className="servicesAttentionText">
                        Water Corrosion? This could be a major leak in the near future.
                    </h2>
                    <h2 className="servicesAttentionText">
                        Contact us immediately for an inspection
                    </h2>
                </div>
            </div>
            <div className="servicesBack">
                <Link href="/services">&#60; Back to Services</Link>
            </div>
            <div className="servicesDetail">
                <div>
                    <h1>Kitchen Services and Installations</h1>
                </div>
                <div>
                    <p>
                        Keeping your kitchen plumbing in top shape is crucial for maintaining a clean, functional, and hygienic cooking environment. 
                        From leaky faucets and clogged drains to malfunctioning garbage disposals and dishwasher installations, plumbing issues can quickly disrupt your daily routine. 
                        Thankfully, a variety of plumbing kitchen services are available to address a wide range of problems.
                    </p>
                </div>
                <div className="serviceDetailList">
                    <div className="serviceDetailListContainer">
                        <h2>Our Kitchen Services:</h2>
                        <ul>
                            <li>plumbing stoppage</li>
	                        <li>dripping faucet</li>
	                        <li>garbage disposal repair</li>
	                        <li>water pressure issues</li>
	                        <li>water leak</li>
	                        <li>noisy pipes</li>
	                        <li>water filter install</li>
	                        <li>water line to fridge install</li>
	                        <li>faucet installation</li>
	                        <li>water, drain, waste, vent installation</li>
	                        <li>plumbing installation</li>
	                        <li>drain maintenance</li>
                        </ul>
                    </div>                   
                </div>
                <div className="servicesDetailCTA">
                    <a href="tel:+7202631345">Call Now: 720-263-1345</a>
                </div>
            </div>
            <div className="serviceWhy">
                <div className="whyContainer">
                    <div className="whyLeft">
                        <div className="whyTextContainer">

                            <h1>Why Choose FloWorks Plumbing?</h1>
                            <p>
                            Colorado homeowners choose FloWorks Plumbing for unmatched service and unwavering integrity. 
                            Our commitment to excellence ensures your satisfaction, 
                            whether it’s a minor drip or a major bathroom addition. 
                            With us, you’ll experience plumbing done right, every time.
                            </p>
                            <div className="whyLinkContainer">
                        <Link href="/contact" className="whyLink">Contact Now</Link>
                    </div>
                        </div>
                    </div>
                    <div className="whyRight">
                        <div className="whyRightContainer">
                            <div className="whyImgContainer">
                                <Image
                                    src={floWorksMan}
                                    alt="Kaleb Smith Plumber"
                                    layout="fill"
                                    objectFit="contain"

                                />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        <ContactForm/>
        <Footer/>
            

        </div>
    );

}