import React, { Fragment } from 'react';
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../assets/logo.png';
import { FaSearch } from 'react-icons/fa'

import './style.css';
import { useState } from 'react';
import { useEffect } from 'react';

import Content from './DinamicContent';
import Background1 from '../../assets/fundo.png';
import Background2 from '../../assets/fundo2.png';
import Background3 from '../../assets/fundo3.jpg';
import imgWork from '../../assets/imgWork.jpg';
import icon1 from '../../assets/icon1.png';
import iconPeople from '../../assets/iconPeople.png';
import iconHat from '../../assets/iconHat.png';
import iconPincel from '../../assets/iconPincel.png';
import iconPaint from '../../assets/iconPaint.png';
import port1 from '../../assets/port1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';
import port4 from '../../assets/port4.png';
import member1 from '../../assets/member1.png'
import member2 from '../../assets/member2.png'
import member3 from '../../assets/member3.png'
import avatar from '../../assets/avatar.png'
import newImage1 from '../../assets/newImage1.png'
import newImage2 from '../../assets/newImage2.png'
import newImage3 from '../../assets/newImage3.png'
import offer1 from '../../assets/offer1.png'
import offer2 from '../../assets/offer2.png'
import offer3 from '../../assets/offer3.png'
import offer4 from '../../assets/offer4.png'
import offer5 from '../../assets/offer5.png'
import offer6 from '../../assets/offer6.png'
import star from '../../assets/star.png'
import email from '../../assets/email.png'

// import { Container } from './styles';

export default function Home() {
    const [button, setButton] = useState('1');
    const [buttonActive, setButtonActive] = useState(["change-content-button-active", "change-content-button", "change-content-button"]);
    let h4 = <p>Contruction Booststrap Template is a responsive, clean and modern designed HTML5 <br /> template for landing pages.</p>;
    let h1 = <strong>Free Psd <br /> Template</strong>;
    let highligth = "Construction";
    const [background, setBackground] = useState(Background1);

    useEffect(() => {
        console.log(button);
        if (button === 1) {
            setButtonActive(["change-content-button-active", "change-content-button", "change-content-button"])
            setBackground(Background1);
        } else if (button === 2) {
            setButtonActive(["change-content-button", "change-content-button-active", "change-content-button"])
            setBackground(Background2);
        } else if (button === 3) {
            setButtonActive(["change-content-button", "change-content-button", "change-content-button-active"])
            setBackground(Background3);
        }
    }, [button]);

    return (
        <Fragment>
            <header id="first-content">
                <div className="header-contact">
                    <div className="header-email">
                        <img src={email} alt="emailIcon" />
                        <p>example@compan.com</p>
                    </div>
                    <p>Call: +9888 5554 5445 3334</p>
                </div>

                <nav className="menu">
                    <img src={logo} alt="Logomarca" />
                    <div className="menu-desktop">
                        <ul className="menu-desktop-ul">
                            <li className="menu-desktop-li"><Link to="#third-content">HOME</Link>
                                <div className="teste">
                                    <ul>
                                        <li><Link to="#first-content">Secçao 1</Link></li>
                                        <li><Link to="#second-content">Secçao 2</Link></li>
                                        <li><Link to="#third-content">Secçao 3</Link></li>
                                        <li><Link to="#fourth-content">Secçao 4</Link></li>
                                        <li><Link to="#fifth-content">Secçao 5</Link></li>
                                        <li><Link to="#sixth-content">Secçao 6</Link></li>
                                        <li><Link to="#seventh-content">Secçao 7</Link></li>
                                        <li><Link to="#eigth-content">Secçao 8</Link></li>
                                        <li><Link to="#nineth-content">Secçao 9</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="menu-desktop-li"><Link >FEATURES</Link></li>
                            <li className="menu-desktop-li"><Link>PROJECTS</Link></li>
                            <li className="menu-desktop-li"><Link>SERVICE</Link></li>
                            <li className="menu-desktop-li"><Link>CONTACT</Link></li>
                            <li className="menu-desktop-li"><Link><FaSearch /></Link></li>
                        </ul>
                    </div>

                    <input type="checkbox" id="bt-menu" />
                    <label className="button-menu" for="bt-menu"> &#9776;</label>

                    <div className="menu-mobile">

                        <ul className="menu-mobile-ul">
                            <li className="menu-mobile-li"><Link to="/">HOME</Link>
                                <div className="teste-mobile">
                                    <ul>
                                        <li><Link to="#first-content">Secçao 1</Link></li>
                                        <li><Link to="#second-content">Secçao 2</Link></li>
                                        <li><Link to="#third-content">Secçao 3</Link></li>
                                        <li><Link to="#fourth-content">Secçao 4</Link></li>
                                        <li><Link to="#fifth-content">Secçao 5</Link></li>
                                        <li><Link to="#sixth-content">Secçao 6</Link></li>
                                        <li><Link to="#seventh-content">Secçao 7</Link></li>
                                        <li><Link to="#eigth-content">Secçao 8</Link></li>
                                        <li><Link to="#nineth-content">Secçao 9</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="menu-mobile-li"><Link >FEATURES</Link></li>
                            <li className="menu-mobile-li"><Link>PROJECTS</Link></li>
                            <li className="menu-mobile-li"><Link>SERVICE</Link></li>
                            <li className="menu-mobile-li"><Link>CONTACT</Link></li>
                            <li className="menu-mobile-li"><Link><FaSearch /></Link></li>
                        </ul>
                    </div>
                </nav>


            </header>

            <section className="content-list">
                <Content
                    highligth={highligth}
                    h1={h1}
                    h4={h4}
                    background={background}
                    setButton1={() => { setButton(1) }}
                    setButton2={() => { setButton(2) }}
                    setButton3={() => { setButton(3) }}
                    buttonActive={buttonActive}
                />
            </section>
            <section className="secondary-content">
                <div className="secondary-content-menu" id="second-content">
                    <h4>We offer</h4>
                    <h2><strong>Welcome</strong> To Free Psd Construction Template</h2>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliaua. Ut enim ad minim venta, quis nostrud exercitation</h4>
                </div>

                <div className="second-content-main" name="second-content">
                    <div className="blocks">
                        <img src={iconPaint} alt="Icon" />
                        <h3>CREATIVE IDEAS</h3>
                        <h4>Lorem ipsum dolor sit amet, consectur adipisicing elit, sed do eiusmod tempor</h4>
                    </div>
                    <div className="blocks">
                        <img src={iconPincel} alt="Icon" />
                        <h3>CREATIVE IDEAS</h3>
                        <h4>Lorem ipsum dolor sit amet, consectur adipisicing elit, sed do eiusmod tempor</h4>
                    </div>
                    <div className="blocks">
                        <img src={iconHat} alt="Icon" />
                        <h3>CREATIVE IDEAS</h3>
                        <h4>Lorem ipsum dolor sit amet, consectur adipisicing elit, sed do eiusmod tempor</h4>
                    </div>
                    <div className="blocks">
                        <img src={iconPeople} alt="Icon" />
                        <h3>CREATIVE IDEAS</h3>
                        <h4>Lorem ipsum dolor sit amet, consectur adipisicing elit, sed do eiusmod tempor</h4>
                    </div>

                </div>

                <div className="second-content-last">
                    <img className="img-work" src={imgWork} alt="ImgWork" />
                    <div className="second-content-last-text">
                        <h2>Our Service</h2>
                        <div className="service">
                            <img src={icon1} alt="IconService" />
                            <div className="service-text">
                                <h3>REPAIR SERVICES</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea facilis unde illum esse temporibus? Dolorem, deleniti quaerat nulla quos unde expedita quasi, rerum, nisi provident corporis cum voluptatum. Itaque.</p>
                            </div>
                        </div>

                        <div className="service">
                            <img src={icon1} alt="IconService" />
                            <div className="service-text">
                                <h3>WALL PAINTING</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea facilis unde illum esse temporibus? Dolorem, deleniti quaerat nulla quos unde expedita quasi, rerum, nisi provident corporis cum voluptatum. Itaque.</p>
                            </div>
                        </div>

                        <div className="service">
                            <img src={icon1} alt="IconService" />
                            <div className="service-text">
                                <h3>PREMIUM SUPPORT</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea facilis unde illum esse temporibus? Dolorem, deleniti quaerat nulla quos unde expedita quasi, rerum, nisi provident corporis cum voluptatum. Itaque.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="third-content" id="third-content">
                    <div className="watch-content">
                        <h3>Completed Project</h3>
                        <h2><strong>2641</strong></h2>
                    </div>

                    <div className="watch-content">
                        <h3>Material Use</h3>
                        <h2><strong>6641</strong></h2>
                    </div>

                    <div className="watch-content">
                        <h3>Work People</h3>
                        <h2><strong>10641</strong></h2>
                    </div>

                    <div className="watch-content">
                        <h3>Happy Clients</h3>
                        <h2><strong>2434</strong></h2>
                    </div>
                </div>


                <div className="fourth-content" id="fourth-content">
                    <div className="secondary-content-menu">
                        <h4>We offer</h4>
                        <h2><strong>What</strong> We Are Offering</h2>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliaua. Ut enim ad minim venta, quis nostrud exercitation</h4>
                    </div>

                    <div className="fourth-content-main">
                        <div className="offers">
                            <img src={offer1} alt="IconOffers" />
                            <div className="offers-text">
                                <h3>Architectures</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia, laborum quaerat cupiditate, inventore eligendi id officia commodi iusto eos voluptatibus quam doloremque. Modi fugiat recusandae deserunt ipsa assumenda itaque!</p>
                            </div>
                        </div>

                        <div className="offers">
                            <img src={offer2} alt="IconOffers" />
                            <div className="offers-text">
                                <h3>Best Support</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia, laborum quaerat cupiditate, inventore eligendi id officia commodi iusto eos voluptatibus quam doloremque. Modi fugiat recusandae deserunt ipsa assumenda itaque!</p>
                            </div>
                        </div>

                        <div className="offers">
                            <img src={offer3} alt="IconOffers" />
                            <div className="offers-text">
                                <h3>Self Transport</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia, laborum quaerat cupiditate, inventore eligendi id officia commodi iusto eos voluptatibus quam doloremque. Modi fugiat recusandae deserunt ipsa assumenda itaque!</p>
                            </div>
                        </div>

                        <div className="offers">
                            <img src={offer4} alt="IconOffers" />
                            <div className="offers-text">
                                <h3>Repair Service</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia, laborum quaerat cupiditate, inventore eligendi id officia commodi iusto eos voluptatibus quam doloremque. Modi fugiat recusandae deserunt ipsa assumenda itaque!</p>
                            </div>
                        </div>

                        <div className="offers">
                            <img src={offer5} alt="IconOffers" />
                            <div className="offers-text">
                                <h3>Painting & Tiling</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia, laborum quaerat cupiditate, inventore eligendi id officia commodi iusto eos voluptatibus quam doloremque. Modi fugiat recusandae deserunt ipsa assumenda itaque!</p>
                            </div>
                        </div>

                        <div className="offers">
                            <img src={offer6} alt="IconOffers" />
                            <div className="offers-text">
                                <h3>Professional</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia, laborum quaerat cupiditate, inventore eligendi id officia commodi iusto eos voluptatibus quam doloremque. Modi fugiat recusandae deserunt ipsa assumenda itaque!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fifth-content" id="fifth-content">
                    <div className="secondary-content-menu">
                        <h4>We offer</h4>
                        <h2><strong>View</strong>  Our Projects Gallary</h2>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliaua. Ut enim ad minim venta, quis nostrud exercitation</h4>
                    </div>

                    <div className="fifth-content-main">
                        <h3>ALL WORKS</h3>
                        <h3>CONSTRUCTION</h3>
                        <h3>ARCHTECTURES</h3>
                        <h3>INTERIOR</h3>
                    </div>

                    <div className="fifth-content-img">
                        <img src={port1} alt="Foto1" />
                        <img src={port2} alt="Foto2" />
                        <img src={port3} alt="Foto3" />
                        <img src={port4} alt="Foto4" />
                    </div>

                </div>

                <div className="sixth-content" id="sixth-content">
                    <div className="secondary-content-menu">
                        <h4>We offer</h4>
                        <h2><strong>Team</strong> Members</h2>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliaua. Ut enim ad minim venta, quis nostrud exercitation</h4>
                    </div>
                    <div className="sixth-content-main">
                        <div className="sixth-content-card">
                            <img src={member1} alt="imgMembers" />
                            <h3><strong>TIMOTHY REID</strong></h3>
                            <h3>Project Manager</h3>
                        </div>

                        <div className="sixth-content-card">
                            <img src={member2} alt="imgMembers" />
                            <h3><strong>MARTHA DOE</strong></h3>
                            <h3>Project Manager</h3>
                        </div>

                        <div className="sixth-content-card">
                            <img src={member3} alt="imgMembers" />
                            <h3><strong>RIBIUL SIDDIK</strong></h3>
                            <h3>Project Manager</h3>
                        </div>
                    </div>
                </div>

                <div className="seventh-content" id="seventh-content">
                    <div className="secondary-content-menu">
                        <h4>We offer</h4>
                        <h2>Testimonials</h2>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliaua. Ut enim ad minim venta, quis nostrud exercitation</h4>
                    </div>

                    <div className="seventh-content-main">
                        <div className="seventh-content-first">
                            <img src={avatar} alt="imgOwner" />
                            <div className="seventh-content-first-text">
                                <h3><strong>JONH DOE</strong></h3>
                                <h3>OWNER PROJECT</h3>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptate odio perspiciatis accusamus nesciunt eum sunt nobis cum iusto molestiae. Amet quibusdam officia necessitatibus eum eos. Debitis tenetur ullam ex!</p>
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                    </div>
                </div>

                <div className="eigth-content" id="eigth-content">
                    <div className="secondary-content-menu">
                        <h4>We offer</h4>
                        <h2><strong>World</strong> News Contruction</h2>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliaua. Ut enim ad minim venta, quis nostrud exercitation</h4>
                    </div>

                    <div className="eigth-content-main">
                        <div className="eigth-content-cards">
                            <img src={newImage1} alt="newImage1Img" />
                            <div className="eigth-content-cards-text">
                                <h3><strong>The Intersection Where Blockchain Meets Energy</strong></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eum reiciendis. Molestias ea minus neque dolores assumenda non, nemo nobis sequi porro ullam unde necessitatibus provident aliquid consequatur dolor. Dolorum.</p>
                                <div className="eigth-content-cards-extra">
                                    <p>01 Jan</p>
                                    <p>Read more</p>
                                </div>
                            </div>
                        </div>

                        <div className="eigth-content-cards">
                            <img src={newImage2} alt="newImage1Img" />
                            <div className="eigth-content-cards-text">
                                <h3><strong>The Intersection Where Blockchain Meets Energy</strong></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eum reiciendis. Molestias ea minus neque dolores assumenda non, nemo nobis sequi porro ullam unde necessitatibus provident aliquid consequatur dolor. Dolorum.</p>
                                <div className="eigth-content-cards-extra">
                                    <p>01 Jan</p>
                                    <p>Read more</p>
                                </div>
                            </div>
                        </div>

                        <div className="eigth-content-cards">
                            <img src={newImage3} alt="newImage1Img" />
                            <div className="eigth-content-cards-text">
                                <h3><strong>The Intersection Where Blockchain Meets Energy</strong></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eum reiciendis. Molestias ea minus neque dolores assumenda non, nemo nobis sequi porro ullam unde necessitatibus provident aliquid consequatur dolor. Dolorum.</p>
                                <div className="eigth-content-cards-extra">
                                    <p>01 Jan</p>
                                    <p>Read more</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nineth-content" id="nineth-content">
                    <h2>Don't miss out, Stay updated</h2>
                    <div className="nineth-content-main">
                        <input type="text" name="" id="" placeholder="Enter your email adress" />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>

            </section>

            <footer>
                <p>Copyright 2018, free psd-templates.com Template Made by free-psd-templates designers.</p>
                <p>All trademarks and copyrights belong to their respective owners.</p>
            </footer>
        </Fragment>
    );
}
/*<section className="second-content">
<div className="second-content-menu">
<h4>We offer</h4>
<h2><strong>Welcome</strong> To Free Psd Construction Template</h2>
<h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliaua. Ut enim ad minim venta, quis nostrud exercitation</h4>
</div>

<div className="second-content-main">
<div className="blocks">
    <img src={iconPaint} alt="Icon" />
    <h3>CREATIVE IDEAS</h3>
    <h4>Lorem ipsum dolor sit amet, consectur adipisicing elit, sed do eiusmod tempor</h4>
</div>
<div className="blocks">
    <img src={iconPincel} alt="Icon" />
    <h3>CREATIVE IDEAS</h3>
    <h4>Lorem ipsum dolor sit amet, consectur adipisicing elit, sed do eiusmod tempor</h4>
</div>
<div className="blocks">
    <img src={iconHat} alt="Icon" />
    <h3>CREATIVE IDEAS</h3>
    <h4>Lorem ipsum dolor sit amet, consectur adipisicing elit, sed do eiusmod tempor</h4>
</div>
<div className="blocks">
    <img src={iconPeople} alt="Icon" />
    <h3>CREATIVE IDEAS</h3>
    <h4>Lorem ipsum dolor sit amet, consectur adipisicing elit, sed do eiusmod tempor</h4>
</div>

</div>

<div className="second-content-last">
<img src={imgWork} alt="ImgWork" />
<div className="second-content-last-text">
    <h2>Our Service</h2>
    <div className="service">
        <img src={icon1} alt="IconService" />
        <div className="service-text">
        <h3>REPAIR SERVICES</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea facilis unde illum esse temporibus? Dolorem, deleniti quaerat nulla quos unde expedita quasi, rerum, nisi provident corporis cum voluptatum. Itaque.</p>
        </div>
    </div>

    <div className="service">
        <img src={icon1} alt="IconService" />
        <div className="service-text">
        <h3>WALL PAINTING</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea facilis unde illum esse temporibus? Dolorem, deleniti quaerat nulla quos unde expedita quasi, rerum, nisi provident corporis cum voluptatum. Itaque.</p>
        </div>
    </div>

    <div className="service">
        <img src={icon1} alt="IconService" />
        <div className="service-text">
        <h3>PREMIUM SUPPORT</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea facilis unde illum esse temporibus? Dolorem, deleniti quaerat nulla quos unde expedita quasi, rerum, nisi provident corporis cum voluptatum. Itaque.</p>
        </div>
    </div>
</div>
</div>

</section>*/