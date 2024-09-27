import React from "react";
import './HomePage.css';
import USA from '../Images/USA.webp'
import NBC from '../Images/NBC.webp'
import TIME from '../Images/Time.webp'
import BBC from '../Images/BBC.webp'
import TL from '../Images/TL.webp'
import Travel from '../Images/Travel.jpg'
import Des from '../Images/Destination.jpg'
import about from '../Images/orion2.jpg'
import Image1 from '../Images/orion.jpg'


function HomePage(){
    return(
        <>
            <div class="featured">Featured</div>
            <div className="news-name">
                <img src={USA} alt="company-1"/>
                <img src={NBC} alt="company-2"/>
                <img src={TIME} alt="company-3"/>
                <img src={BBC} alt="company-4"/>
                <img src={TL} alt="company-5"/>
            </div>
            <div className="Links">
                <img src={Travel} alt="Links"/>
                <img src={Des} alt="Links"/>
                <img src={about} alt="Links"/>
            </div>
            <div className="Links-format">
                <p>TRAVEL BLOGS</p>
                <p>DESTINATIONS</p>
                <p>ABOUT</p>
            </div>
            <div className="Featured-context">
                <img src={Image1} alt="context" />
                <div className="Featured-font">
                <p className="title">Thanks For Looking!</p>
                <p className="title1">
I'm <b>Orion Gray</b>, the guy behind this blog. I’m a fictional character who has spent the last decade exploring the hidden corners of the world, discovering unique cultures, and immersing myself in unforgettable experiences.

I created this travel blog in 2019 to share my adventures, photos, and insights with fellow wanderers. My goal is to help people find lesser-known gems and navigate the world with curiosity and confidence.

Currently, I’m "based" in a small mountain village where I enjoy the simplicity of nature, but my heart is always yearning for the next big adventure. From hiking remote trails to exploring ancient cities, I’ve experienced it all, and I love bringing these stories to life.

Through this blog, I hope to inspire you to travel differently—whether it’s seeking out hidden treasures or simply appreciating the beauty in unexpected places. So come along with me on this journey, and let’s explore the world together, one adventure at a time!
</p>

<button className="Read-button">Read More &rarr;</button>
            </div>
            </div>
        </>
    );
}

export default HomePage