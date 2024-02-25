import React from 'react';
import { useRef } from 'react';
import '../styles/layouts/_testimonials.scss';
import next_icon from '../assets/next-icon.png';
import back_icon from '../assets/back-icon.png';
import user_1 from '../assets/user-1.png';
import user_2 from '../assets/user-2.png';
import user_3 from '../assets/user-3.png';
import user_4 from '../assets/user-4.png';

function Testimonials() {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
        if(tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    return (
        <div className='testimonials'>
            <img src={next_icon} className='next-btn' onClick={slideForward} />
            <img src={back_icon} className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Sophia Martinez</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Edusity has revolutionized my learning experience! Their interactive courses and supportive instructors have helped me excel academically. I'm grateful for their innovative approach to education!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing Edusity was the best decision I made for my education. Their comprehensive resources and flexible learning options have empowered me to reach my academic goals with ease. Highly impressed!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Emily Thompson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Edusity goes above and beyond to ensure student success. From top-notch instructors to cutting-edge resources, they provide a dynamic learning environment that fosters growth and achievement. I couldn't be happier with my experience!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Michael Johnson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Edusity's dedication to student learning is unmatched. Their tailored approach to education caters to diverse learning styles, making complex concepts easy to grasp. I'm incredibly thankful for the invaluable skills and knowledge I've gained through their courses.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Testimonials;