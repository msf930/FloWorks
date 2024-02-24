
import Image from "next/image";


import og from '../../public/og.png';
import hero from '../../public/servicesHero.jpg';
import waterHeater from '../../public/servicesWaterHeaterSm.jpg';
import kitchen from '../../public/servicesKitchenSm.jpg';
import bathroom from '../../public/servicesBathroomSm.jpg';
import outdoor from '../../public/servicesOutdoorSm.jpg';
import sewer from '../../public/servicesSewerSm.jpg';
import inspection from '../../public/servicesInspectionSm.jpg';


import Link from 'next/link';
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";



export default function Services() {
    
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
                        <h1 className="servicesHeroTitle">Our Services</h1>
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
            <div className="servicesHeader">
                <h1>Click below to learn more</h1>
            </div>
            <div className="servicesPageContainer">                
                <Link href="services/waterheater">
                        <div className="servicePageItem">
                        <div className="servicePageImgContainer">
                            <Image
                                className="servicePageImg"
                                src={waterHeater}
                                alt="water heater plumbing"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                placeholder='blur'
                            />
                            <h3 className="servicePageHoverText">Learn More</h3>
                        </div>
                        <div className="servicePageTextContainer">
                            <h2>Water Heater</h2>
                            <h3>From routine maintenance to emergency repairs, water heater services ensure a steady flow of hot water for your home.</h3>
                        </div>
                    </div>
                </Link>
                <Link href="services/kitchen">
                        <div className="servicePageItem">
                        <div className="servicePageImgContainer">
                            <Image
                                className="servicePageImg"
                                src={kitchen}
                                alt="kitchen plumbing"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                placeholder='blur'
                                
                            />
                            <h3 className="servicePageHoverText">Learn More</h3>
                        </div>
                        <div className="servicePageTextContainer">
                            <h2>Kitchen</h2>
                            <h3>Keep your kitchen&apos;s heart flowing smoothly with expert repairs, installations, and maintenance for sinks, disposals, dishwashers, and more.</h3>
                        </div>
                    </div>
                </Link>
                <Link href="services/bathroom">
                        <div className="servicePageItem">
                        <div className="servicePageImgContainer">
                            <Image
                                className="servicePageImg"
                                src={bathroom}
                                alt="bathroom plumbing"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                placeholder='blur'
                                
                            />
                            <h3 className="servicePageHoverText">Learn More</h3>
                        </div>
                        <div className="servicePageTextContainer">
                            <h2>Bathroom</h2>
                            <h3>We handle everything from leaky faucets and clogged drains to shower installations and toilet repairs, keeping your essential space functioning hygienically and smoothly.</h3>
                        </div>
                    </div>
                </Link>
                <Link href="services/outdoor">
                        <div className="servicePageItem">
                        <div className="servicePageImgContainer">
                            <Image
                                className="servicePageImg"
                                src={outdoor}
                                alt="outdoor plumbing"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                placeholder='blur'
                                
                            />
                            <h3 className="servicePageHoverText">Learn More</h3>
                        </div>
                        <div className="servicePageTextContainer">
                            <h2>Outdoor</h2>
                            <h3>Outdoor plumbing services ensure exterior spigots perform flawlessly, bringing life and convenience to your exterior spaces</h3>
                        </div>
                    </div>
                </Link>
                <Link href="services/sewer">
                        <div className="servicePageItem">
                        <div className="servicePageImgContainer">
                            <Image
                                className="servicePageImg"
                                src={sewer}
                                alt="sewer plumbing"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                placeholder='blur'
                                
                            />
                            <h3 className="servicePageHoverText">Learn More</h3>
                        </div>
                        <div className="servicePageTextContainer">
                            <h2>Sewer</h2>
                            <h3>For swift and reliable sewer plumbing solutions, our expert plumbers are just a call away.</h3>
                        </div>
                    </div>
                </Link>
                <Link href="services/inspection">
                        <div className="servicePageItem">
                        <div className="servicePageImgContainer">
                            <Image
                                className="servicePageImg"
                                src={inspection}
                                alt="inspection and permit"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                placeholder='blur'
                                
                            />
                            <h3 className="servicePageHoverText">Learn More</h3>
                        </div>
                        <div className="servicePageTextContainer">
                            <h2>Inspection and Permits</h2>
                            <h3>Plumbing permits and inspections safeguard your water systems and community by ensuring proper installation and adherence to safety codes</h3>
                        </div>
                    </div>
                </Link>
                

            </div>
            <ContactForm/>
            </main>
            <Footer/>
        </div>
    );
};