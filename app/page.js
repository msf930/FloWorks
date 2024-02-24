

import Image from "next/image";
import og from '../public/og.png';
import hero from '../public/heroTemp.jpeg';
import aboutImg from '../public/aboutImg.webp';
import servicesImg2 from '../public/servicesPlaceholder.jpg';
import servicesImg1 from '../public/homeWaterHeater.jpg';
import servicesImg3 from '../public/homeBathroom.jpg';
import servicesImg4 from '../public/homeAllServices.jpg';
import floWorksMan from '../public/floWorksMan.png';

import { FaLocationDot } from "react-icons/fa6";


import Link from "next/link";
import GoogleRating from "@/components/GoogleRating/GoogleRating";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";





export default function Home() {

    return (
    <div>
        <main>
      <section className="hero">
          <div className="heroImgContainer">
              <Image
                  src={hero}
                  alt="plumbing van"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  sizes="100vh"
              />
          </div>
          <div className="logoFull">
              <div className="logoContainer">
                  <Image
                      className="heroLogo"
                      src={og}
                      alt="FloWorks logo"
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                  />

              </div>
              <div className="heroCTA">
                  <a href="tel:+7202631345">Call Now: 720-263-1345</a>
              </div>
          </div>
      </section>
        <section className="about">
            <div className="aboutContainer">
                <div className="aboutLeft">
                    <div className="aboutTextContainer">
                        <div className="aboutLocation">
                            <FaLocationDot className="aboutLocationIcon"/>
                            <h3>Lakewood, Colorado</h3>
                        </div>
                        <h1>Get the Job Done Right</h1>
                        <p className="aboutPFull">
                            Neglecting plumbing issues can bring significant financial and convenience hardships.
                            Ignored leaks lead to water damage and high bills, while inefficient water heaters
                            result in cold showers and increased energy costs. FloWorks Plumbing delivers timely,
                            professional solutions, preventing minor issues from becoming major headaches.
                            Choose us for peace of mind and a worry-free plumbing experience, avoiding the high costs of inaction.
                        </p>
                        <p className="aboutPMobile">
                            FloWorks Plumbing delivers timely, professional solutions, preventing minor issues from becoming major headaches.
                            Choose us for peace of mind and a worry-free plumbing experience, avoiding the high costs of inaction.
                        </p>
                    </div>
                </div>
                <div className="aboutRight">
                    <div className="aboutRightContainer">
                        <div className="aboutImgContainer">
                            <Image
                                src={aboutImg}
                                alt="Kaleb Smith Plumber"
                                layout="fill"
                                objectFit="contain"
                                placeholder="blur"

                            />
                            
                        </div>
                        <p>Kaleb Smith - Owner</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="values">
            <div className="valuesContainer">
                <div className="valuesItem">
                    <div className="valuesTitleContainer">
                        <h2 className="valuesItemTitle">Exceptional <br/> Service</h2>
                    </div>
                    <p className="valuesItemBody">Our commitment to excellence means you’ll receive top-tier plumbing solutions that exceed your expectations.</p>
                </div>
                <div className="valuesItem">
                    <div className="valuesTitleContainer">
                        <h2 className="valuesItemTitle">Transparent Communication</h2>
                    </div>
                    <p className="valuesItemBody">Expect clear updates and honest explanations throughout your plumbing service</p>
                </div>
                <div className="valuesItem">
                    <div className="valuesTitleContainer">
                        <h2 className="valuesItemTitle">Unwavering <br/> Integrity</h2>
                    </div>
                    <p className="valuesItemBody">Straight pipes, honest answers: Fixing your leaks with integrity, one flow at a time</p>
                </div>
                <div className="valuesItem">
                    <div className="valuesTitleContainer">
                        <h2 className="valuesItemTitle">Local Colorado Expertise</h2>
                    </div>
                    <p className="valuesItemBody">From mountain towns to cityscapes, our Colorado-proud plumbers fix your flow with local knowledge and practices</p>
                </div>
                <div className="valuesItem">
                    <div className="valuesTitleContainer">
                        <h2 className="valuesItemTitle">Right the <br/> First Time</h2>
                    </div>
                    <p className="valuesItemBody">No second guesses - We fix it right, the first time, every time</p>
                </div>

            </div>
        </section>
        <section className="services">
            <div className="servicesContainer">
                <div className="servicesTitle">
                    <h1>Our Services</h1>
                </div>
                <div className="servicesItemContainer">
                    <Link href="/services/waterheater" className="servicesItem">
                        <h2 className="servicesItemTitle">Water Heaters</h2>
                        <Image 
                            className="serviceImg" 
                            src={servicesImg1} 
                            alt="water heater services"
                            layout="fill" 
                            objectFit="cover"
                            objectPosition="center"
                            placeholder='blur'
                        />
                    </Link>
                    <Link href="/services/kitchen" className="servicesItem">
                        <h2 className="servicesItemTitle">Kitchen</h2>
                        <Image 
                            className="serviceImg" 
                            src={servicesImg2} 
                            alt="kitchen services"
                            layout="fill" 
                            objectFit="cover"
                            objectPosition="center"
                            placeholder='blur'
                        />
                    </Link>
                    <Link href="/services/bathroom" className="servicesItem">
                        <h2 className="servicesItemTitle">Bathroom</h2>
                        <Image 
                            className="serviceImg" 
                            src={servicesImg3} 
                            alt="bathroom services"
                            layout="fill" 
                            objectFit="cover"
                            objectPosition="center"
                            placeholder='blur'
                        />
                    </Link>
                    <Link href="/services" className="servicesItemAll">
                        <h2 className="servicesItemTitle">View All Services</h2>
                        <Image 
                            className="serviceImg" 
                            src={servicesImg4} 
                            alt="bathroom services"
                            layout="fill" 
                            objectFit="cover"
                            objectPosition="center"
                            placeholder='blur'
                        />
                    </Link>
                </div>
                <div className="servicesLinkContainer">
                    <Link href="/services" className="servicesLink">See All Services</Link>
                </div>

            </div>
        </section>
        <section className="why">
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
        <section className="area">
            <div className="areaContainer">
                <div className="areaLeft">
                    <div className="areaTextContainer">
                        <h1>Our Mobile Plumbing Service Area</h1>
                        <div className="areaListContainer">
                            <ul className="areaList">
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
                        <div className="areaLinkContainer1">
                            <Link href="/area" className="areaLink">View Service Area</Link>
                         </div>
                    </div>
                </div>
                <div className="areaRight">
                    <div className="areaRightContainer">
                        <div className="areaImgContainer">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392872.46795334556!2d-105.24021044213202!3d39.710077068597435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac25818a89637caf%3A0xafe61565b38a090b!2sFloWorks%20Plumbing%20LLC!5e0!3m2!1sen!2sus!4v1708111626323!5m2!1sen!2sus" 
                            width="100%" 
                            height="100%" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        </div>                                          
                    </div>
                        <div className="areaLinkContainer2">
                            <Link href="/area" className="areaLink">View Service Area</Link>
                         </div> 
                </div>
            </div>
        </section>
        <GoogleRating/>
        <ContactForm/>
        </main>
        <Footer/>
        
    </div>
  );
}
