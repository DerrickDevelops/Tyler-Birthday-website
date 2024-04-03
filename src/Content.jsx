import React from "react";
import StarField from './StarField';
import logo from './logo.png';


const MainContent = () => {
    return (
            <div className="wrapper">
                <StarField />
            <div className="stars"></div>
	            <section className="intro">
		            A long time ago, in a galaxy far,<br /> far away....
	            </section>
	            <section className="logo">
		            <img src={logo} alt="Tylers Birthday Logo Intro" />
	            </section>
	                <div id="scroller">
		                <div id="content">
			                <p id="title">Episode XXVII</p>
                                <p id="subtitle">A New Wrinkle</p>
                                <br />

                                <p>It is a period of celebration. Tyler has reached a significant milestone in his journey through the cosmos. Friends and family gather to commemorate his passage into another orbit around the sun.</p>

                                <p>From the moment Tyler entered this world, he's been on a collision course with destiny... and the occasional asteroid. Here's to another year of navigating life's cosmic curveballs with grace, humor, and a healthy dose of sarcasm.</p>

                                <p>As Tyler's Jedi powers awaken, he finds himself capable of extraordinary feats, including a surprising proficiency in passing wind with more force than Jabba the Hutt.</p>

                                <p>But amidst the festivities, unseen forces stir in the shadows. Challenges and adventures await Tyler on the horizon, testing his courage and resilience as he ventures forth into the unknown.</p>

                                <p>Join us as we embark on this epic saga, celebrating Tyler's birth and the countless wonders that await in the vast expanse of time and space. May the force be with him, today and always.</p>

                            </div>
                        </div>
            </div>
    )
}

export default MainContent