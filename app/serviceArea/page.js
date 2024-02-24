import Image from "next/image";
import Link from "next/link";

import hero from '../../public/areaHeroSm.jpg';
import floWorksMan from '../../public/floWorksMan.png';

import GoogleRating from "@/components/GoogleRating/GoogleRating";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";


export default function serviceArea() {
    
    return (
        <div>
        <main>
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
                        <h1 className="servicesHeroTitle">Service Area</h1>
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
            <div>
                <div className="areaPageTextContainer">
                    <h1>Our Mobile Plumbing Service Area</h1>
                    <ul>                       
                        <li>South Western Denver</li>
                        <li>Golden</li>
                        <li>Morrison</li>
                        <li>Littleton</li>
                        <li>Lakewood</li>
                        <li>Columbine</li>
                        <li>Highlands Ranch</li>
                        <li>Lone Tree</li>
                        <li>Centennial</li>
                    </ul>
                </div>
            </div>
            <div className="areaMapContainer">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392872.46795334556!2d-105.24021044213202!3d39.710077068597435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac25818a89637caf%3A0xafe61565b38a090b!2sFloWorks%20Plumbing%20LLC!5e0!3m2!1sen!2sus!4v1708111626323!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>       
                
            <div className="areaWhy">
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
            </div>
            <div className="areaRating">
                <GoogleRating/> 
            </div>  
             <ContactForm/>
             </main>
             <Footer/>         
        </div>
    );
}