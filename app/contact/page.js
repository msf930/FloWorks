import Image from "next/image";
import Link from "next/link";

import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";


import hero from '../../public/contactHeroSm.jpg';


export default function contact() {
     
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
                        <h1 className="servicesHeroTitle">Contact Us</h1>
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
            <div className="contactPageText">
                <div className="contactPageTextContainer">
                    <h3>Contact Info</h3>
                    <a href="tel:+7202631345">720-263-1345</a>
                    <a href="mailto:Kaleb@FloWorksplumbing.com">Kaleb@FloWorksplumbing.com</a>
                </div>
                <div className="contactPageTextContainer">
                    <h3>Business Hours</h3>
                    <h4>Monday – Friday: 8:00 AM – 6:00 PM</h4>
                    <h4>Saturday: 9:00 AM – 4:00 PM</h4>
                    <h4>Closed on Sundays</h4>
                </div>
            </div>
            <ContactForm/>
            <div className="contactMapContainer">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392872.46795334556!2d-105.24021044213202!3d39.710077068597435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac25818a89637caf%3A0xafe61565b38a090b!2sFloWorks%20Plumbing%20LLC!5e0!3m2!1sen!2sus!4v1708111626323!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>  
            <Footer/>
        </div>
     );

}