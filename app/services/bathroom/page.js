import Image from "next/image";
import Link from "next/link";

import hero from '../../../public/servicesDetailHeroSm.jpg';
import floWorksMan from '../../../public/floWorksMan.png';

import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function bathroom() {
    
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
                        <h1 className="servicesHeroTitle">Bathroom Services</h1>
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
                <Link href="/services">Back to Services</Link>
            </div>
            <div className="servicesDetail">
                <div>
                    <h1>Bathroom Services and Installation</h1>
                </div>
                <div>
                    <p>
                        Plumbing services for the bathroom encompass a vital aspect of ensuring functionality and comfort within your home. 
                        These services involve expert installation, repair, and maintenance of essential fixtures such as sinks, showers, toilets, and bathtubs. 
                        From addressing leaks and clogs to installing new plumbing systems during renovations, skilled plumbers provide comprehensive solutions to meet your specific needs. 
                        They ensure proper water flow, drainage, and water pressure, optimizing the performance of your bathroom plumbing while adhering to safety standards and regulations. 
                        With their expertise, you can trust that your bathroom&apos;s plumbing system will operate efficiently, promoting convenience and peace of mind for you and your household.
                    </p>
                </div>
                <div className="serviceDetailList">
                    <div className="serviceDetailListContainer">
                        <h2>Our Bathroom Services:</h2>
                        <ul>
                            <li>plumbing stoppage</li>
	                        <li>dripping shower or faucet</li>
	                        <li>water pressure issues</li>
	                        <li>water leak</li>
	                        <li>leaking toilet and toilet repair</li>
	                        <li>sewer smell</li>
	                        <li>free standing tub install</li>
	                        <li>floor mount tub filler install</li>
	                        <li>in wall shower valve install</li>
	                        <li>water, drain, waste install</li>
	                        <li>faucet install</li>
	                        <li>plumbing inspection</li>
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