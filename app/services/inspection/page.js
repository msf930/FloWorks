import Image from "next/image";
import Link from "next/link";

import hero from '../../../public/servicesDetailHeroSm.jpg';
import floWorksMan from '../../../public/floWorksMan.png';

import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function sewer() {
    
    return (
        <div>
        <main>
            <section className="servicesHero">
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
                        <h1 className="servicesHeroTitle">Inspections and Permits Services</h1>
                    </div>
                    <div className="servicesHeroCTA">
                        <a href="tel:+7202631345">Call Now: 720-263-1345</a>
                    </div>
                </div>
            </section>
            <section className="servicesAttention">
                <div className="servicesAttentionContainer">
                    <h2 className="servicesAttentionText">
                        Water Corrosion? This could be a major leak in the near future.
                    </h2>
                    <h2 className="servicesAttentionText">
                        Contact us immediately for an inspection
                    </h2>
                </div>
            </section>
            <nav className="servicesBack">
                <Link href="/services">&#60; All Services</Link>
            </nav>
            <section className="servicesDetail">
                <div>
                    <h1>Inspections and Permits Services</h1>
                </div>
                <div>
                    <p>
                        Inspections and permits are crucial aspects of plumbing services, ensuring that installations and repairs comply with building codes and regulations. 
                        Plumbing professionals handle the necessary paperwork and liaise with local authorities to obtain permits for plumbing work. 
                        Inspections are conducted at various stages of the project to verify compliance with safety standards and ensure the proper functioning of plumbing systems. 
                        These inspections cover aspects such as pipe installation, fixture placement, and adherence to plumbing codes. 
                        By obtaining permits and conducting thorough inspections, plumbing services ensure that projects are completed safely, efficiently, and in accordance with legal requirements, ultimately providing peace of mind to property owners.
                    </p>
                </div>
                <div className="serviceDetailList">
                    <div className="serviceDetailListContainer">
                        <h2>Our Inspections and Permits Services:</h2>
                        <ul>
	                        <li>plumbing inspection</li>
	                        <li>plumbing permits</li>
	                        <li>water heater inspection</li>
	                        <li>drain maintenance</li>
                        </ul>
                    </div>                   
                </div>
                <div className="servicesDetailReturn">
                    <a href="/services">Return to All Services</a>
                </div>
                <div className="servicesDetailCTA">
                    <a href="tel:+7202631345">Call Now: 720-263-1345</a>
                </div>
            </section>
            <section className="serviceWhy">
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
                                    alt="cartoon plumber"
                                    layout="fill"
                                    objectFit="contain"

                                />

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        <ContactForm/>
        </main>
        <Footer/>
            

        </div>
    );

}