

import Logo from "../../public/og.png";
import Image from "next/image";


export default function Footer() {
    
    return (
        <div>
            <div className="footerTop">
                <div className="footerLogoContainer">    
                    <Image
                        src={Logo}
                        alt="logo"
                        layout="fill" 
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                
                <div className="footerLinkContainer">
                    <a href="tel:+7202631345">720-263-1345</a>
                    <a href="mailto:Kaleb@FloWorksplumbing.com">Kaleb@FloWorksplumbing.com</a>
                </div>
            </div>
            <div className="footerBottom">
                <div className="footerCopyContainer">
                    <h3>© Copyright 2021 by FloWorks Plumbing</h3>
                </div>
            </div>
        </div>

    );

}