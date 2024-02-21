import Image from "next/image";
import Link from "next/link";

import hero from '../../../public/servicesDetailHeroSm.jpg';
import floWorksMan from '../../../public/floWorksMan.png';

import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function sewer() {
    
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
                        <h1 className="servicesHeroTitle">Sewer Services</h1>
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
                    <h1>Sewer Services and Installation</h1>
                </div>
                <div>
                    <p>
                        Sewer plumbing services are indispensable for maintaining the hygiene and functionality of residential and commercial properties. 
                        These services encompass a broad spectrum of tasks aimed at ensuring the proper operation of sewer systems, including installation, repair, and maintenance. 
                        Skilled professionals utilize advanced techniques and equipment to address issues such as clogs, leaks, and blockages within sewer lines. 
                        They conduct thorough inspections to identify potential problems and implement effective solutions to restore proper flow and prevent backups or sewage leaks. 
                        Additionally, sewer plumbing services may involve sewer line replacements or upgrades to enhance the efficiency and longevity of the system. 
                        By addressing sewer-related issues promptly and efficiently, these services contribute to the overall health, safety, and comfort of occupants while safeguarding the environment from potential contamination.
                    </p>
                </div>
                <div className="serviceDetailList">
                    <div className="serviceDetailListContainer">
                        <h2>Our Sewer Services:</h2>
                        <ul>
                            <li>sewer repair</li>
	                        <li>underground sewer repair</li>
	                        <li>sewer smell</li>
	                        <li>water, drain, waste, vent installation</li>
	                        <li>plumbing inspection</li>
	                        <li>plumbing permits</li>
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