import Image from "next/image";
import Link from "next/link";

import hero from '../../../public/servicesDetailHeroSm.jpg';
import floWorksMan from '../../../public/floWorksMan.png';

import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function outdoor() {
    
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
                        <h1 className="servicesHeroTitle">Outdoor Services</h1>
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
                <Link href="/services">&#60;Back to Services</Link>
            </div>
            <div className="servicesDetail">
                <div>
                    <h1>Outdoor Services and Installation</h1>
                </div>
                <div>
                    <p>
                        Outdoor plumbing services are essential for maintaining the functionality and integrity of various systems outside the confines of the home. 
                        These services encompass a wide range of tasks, including the installation, repair, and maintenance of outdoor fixtures such as faucets, sprinkler systems, and outdoor drainage systems. 
                        Experienced plumbers ensure that outdoor plumbing components are properly installed to withstand harsh weather conditions and environmental factors, preventing issues such as freezing pipes or water wastage. 
                        They also address issues like leaks, clogs, and damaged pipes to keep outdoor areas safe, functional, and aesthetically pleasing. 
                        Whether it&apos;s ensuring a lush green lawn through efficient irrigation or providing access to water for outdoor activities, outdoor plumbing services play a crucial role in enhancing the usability and enjoyment of outdoor spaces.
                    </p>
                </div>
                <div className="serviceDetailList">
                    <div className="serviceDetailListContainer">
                        <h2>Our Outdoor Services:</h2>
                        <ul>
                            <li>hose bib/ spigot repair</li>
	                        <li>plumbing inspection</li>
	                        <li>plumbing permits</li>
	                        <li>drain maintenance </li>
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