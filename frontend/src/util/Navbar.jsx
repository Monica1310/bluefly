

import React from 'react';
import { Link } from "react-router-dom"
import './Navbar.css'
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [hover, setHover] = React.useState(false);
  return (
    <>
      <div id="Header">
        <div id="Fixed">
          <div id="Home_Buttons">
            <Link to="#"><img id="Blue_Logo" src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?v=1574278243" alt="" /></Link>
            <div>
              <Link to="#"><img className="H_but" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXI_JyOVRGL5fOKjn9qMUF3pWkgFcfDm1oQ&usqp=CAU" alt="" /></Link>
              <Link to="#" className="search">SEARCH</Link>
              <Link to="/login"><img className="H_but" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwJnHBJdUyCsrW7qVQ8vdXeTmdRD6Js9Pmg&usqp=CAU" alt="" /></Link>
              <Link to="#"><img className="H_but" src="https://media.istockphoto.com/vectors/thin-line-shopping-bag-icon-illustration-design-vector-id653355496?k=20&m=653355496&s=170667a&w=0&h=VQQIU3uqbQuubef1qJCnAobIImZwE1LLbx51XIqQlPY=" alt="" /></Link>
            </div>
          </div>
          {/* <nav>
            <p className="hoverEff" id="Shoe_Hover"><a href="#">SHOES</a>
              <div className="SecNav" id="ShoesNav" style={{ display: "none" }}>
                <ul>
                  <li><a href="#"><img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/women_shoes.jpg?v=1598516516" alt="" />
                    <h5>SANDAL</h5>
                  </a>
                    <p>UPTO 70% OFF</p>
                  </li>
                  <li><a href="#">WOMEN'S SHOES</a>
                    <ul>
                      <li><a href="./BootPage.html">Shop All</a></li>
                      <li><a href="./BootPage.html">Boots</a></li>
                      <li><a href="#">Espadrilles</a></li>
                      <li><a href="#">Flats</a></li>
                      <li><a href="#">Mules & Sliders</a></li>
                      <li><a href="#">Oxfords & Loafers</a></li>
                      <li><a href="#">Pumps & Heels</a></li>
                      <li><a href="#">Sandals</a></li>
                      <li><a href="#">Slippers</a></li>
                      <li><a href="#">Sneakers</a></li>
                      <li><a href="#">Wedges</a></li>
                    </ul>
                  </li>
                  <li><a href="#">WOMEN'S DESIGNER'S</a>
                    <ul>
                      <li><a href="#">Burberry</a></li>
                      <li><a href="#">Chloe</a></li>
                      <li><a href="#">Christians</a></li>
                      <li><a href="#">Dolce & Gobbana</a></li>
                      <li><a href="#">Guiseppe</a></li>
                      <li><a href="#">Gucci</a></li>
                      <li><a href="#">Jimmy Choo</a></li>
                      <li><a href="#">Manolo Blahnik</a></li>
                      <li><a href="#">Prada</a></li>
                      <li><a href="#">Saint Laurent</a></li>
                      <li><a href="#">Salvatore Ferragamo</a></li>
                      <li><a href="#">Tod's</a></li>
                      <li><a href="#">Valentino</a></li>
                    </ul>
                  </li>
                  <li><a href="#">MEN'S SHOES</a>
                    <ul>
                      <li><a href="./BootPage.html">Shop All</a></li>
                      <li><a href="./BootPage.html">Boots</a></li>
                      <li><a href="./BootPage.html">Drivers, Loafers, Slip-Ons</a></li>
                      <li><a href="./BootPage.html">Oxford & Debry Shoes</a></li>
                      <li><a href="#">Sandals & Flip Flops</a></li>
                      <li><a href="#">Slippers</a></li>
                      <li><a href="#">Sneakers</a></li>
                    </ul>
                  </li>
                  <li><a href="#">MEN'S DESIGNER'S</a>
                    <ul>
                      <li><a href="./BootPage.html">Antonio Maurizi</a></li>
                      <li><a href="#">Aquatalia</a></li>
                      <li><a href="./BootPage.html">Balenciaga</a></li>
                      <li><a href="#">Christian Louboutin</a></li>
                      <li><a href="#">Cole Haan</a></li>
                      <li><a href="#">Common Projects</a></li>
                      <li><a href="#">Giuseppe Zanotti</a></li>
                      <li><a href="#">Gucci</a></li>
                      <li><a href="#">Prada</a></li>
                      <li><a href="#">Saint Laurent</a></li>
                      <li><a href="#">Salvatore Ferragamo</a></li>
                      <li><a href="#">Tod's</a></li>
                      <li><a href="#">Valentino</a></li>
                    </ul>
                  </li>
                  <li><a href="#"><img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/SHOES-MEN.jpg?4112" alt="" />
                    <h5>DRIVERS, LOAFERS & SLIP_ONS</h5>
                  </a>
                    <p>UPTO 60% OFF</p>
                  </li>
                </ul>
              </div>
            </p>
            <p className="hoverEff" id="Hand_Hover"><a href="#">HANDBAGS & ACCESSORIES</a></p>
            <p className="hoverEff" id="Design_Hover"><a href="#">DESIGNERS</a></p>
            <p className="hoverEff" id="Women-Hover"><a href="#">WOMEN</a></p>
            <p className="hoverEff" id="Men_Hover"><a href="#">MEN</a></p>
            <p className="hoverEff" id="Sunglass_Hover"><a href="#">SUNGLASSES</a></p>
            <p className="hoverEff" id="Watch_Hover"><a href="#">JEWELRY & WATCHES</a></p>
            <p className="hoverEff" id="Under_Hover"><a href="#">UNDER $50</a></p>
            <p className="hoverEff" id="Beauty_Hover"><a href="#">BEAUTY</a></p>
          </nav> */}
          {/* <div id="clearance"><a href="#" id="Clearance">CLEARANCE</a></div> */}
          <div id="navThird">
            <ul className="sub-items" id="navThirdList">
              {/* <!-- Items --> */}
              <li className="nav-item">
                <Link to="/makeup">SHOES</Link>
                {/* <!-- Sub-Items --> */}
                <div className="sub-items">
                  <div className="sub-img">
                    <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/women_shoes.jpg?v=1598516516" width="200" height={"130"} alt="" />
                    <h5>SANDAL</h5>
                    <p>UPTO 70% OFF</p>
                  </div>
                  <div className="sub-list">
                    <ul>
                      <li><Link to="" >WOMEN'S SHOES</Link></li>
                      <li><Link to="" >Shop All</Link></li>
                      <li><Link to="" >Boots</Link></li>
                      <li><Link to="" >Espadrilles</Link></li>
                      <li><Link to="" >Flats</Link></li>
                      <li><Link to="" >Mules & Sliders</Link></li>
                      <li><Link to="" >Oxfords & Loafers</Link></li>
                      <li><Link to="" >Pumps & Heels</Link></li>
                      <li><Link to="" >Sandals</Link></li>
                      <li><Link to="" >Slippers</Link></li>
                      <li><Link to="" >Sneakers</Link></li>
                      <li><Link to="" >Wedges</Link></li>
                    </ul>
                    {/*  */}
                    <ul>
                      <li><Link to="" >WOMEN'S DESIGNER'S</Link></li>
                      <li><Link to="" >Burberry</Link></li>
                      <li><Link to="" >Chloe</Link></li>
                      <li><Link to="" >Christians</Link></li>
                      <li><Link to="" >Dolce & Gobbana</Link></li>
                      <li><Link to="" >Guiseppe</Link></li>
                      <li><Link to="" >Gucci</Link></li>
                      <li><Link to="" >Jimmy Choo</Link></li>
                      <li><Link to="" >Manolo Blahnik</Link></li>
                      <li><Link to="" >Prada</Link></li>
                      <li><Link to="" >Saint Laurent</Link></li>
                      <li><Link to="" >Salvatore Ferragamo</Link></li>
                      <li><Link to="" >Tod's</Link></li>
                      <li><Link to="" >Valentino</Link></li>
                    </ul>
                    {/*  */}
                    <ul>
                      <li><Link to="" >MEN'S SHOES</Link></li>
                      <li><Link to="" >Shop All</Link></li>
                      <li><Link to="" >Boots</Link></li>
                      <li><Link to="" >Drivers, Loafers, Slip-Ons</Link></li>
                      <li><Link to="" >Oxford & Debry Shoes</Link></li>
                      <li><Link to="" >Sandals & Flip Flops</Link></li>
                      <li><Link to="" >Slippers</Link></li>
                      <li><Link to="" >Sneakers</Link></li>
                    </ul>
                    {/*  */}
                    <ul>
                      <li><Link to="" >MEN'S DESIGNER'S</Link></li>
                      <li><Link to="" >Antonio Maurizi</Link></li>
                      <li><Link to="" >Aquatalia</Link></li>
                      <li><Link to="" >Balenciaga</Link></li>
                      <li><Link to="" >Christian Louboutin</Link></li>
                      <li><Link to="" >Cole Haan</Link></li>
                      <li><Link to="" >Common Projects</Link></li>
                      <li><Link to="" >Giuseppe Zanotti</Link></li>
                      <li><Link to="" >Gucci</Link></li>
                      <li><Link to="" >Prada</Link></li>
                      <li><Link to="" >Saint Laurent</Link></li>
                      <li><Link to="" >Salvatore Ferragamo</Link></li>
                      <li><Link to="" >Tod's</Link></li>
                      <li><Link to="" >Valentino</Link></li>
                    </ul>
                  </div>
                  <div className="sub-img">
                    <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/SHOES-MEN.jpg?4112" alt="" />
                    <h5>DRIVERS, LOAFERS & SLIP_ONS</h5>
                    <p>UPTO 60% OFF</p>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/skin">HANDBAGS & ACCESSORIES</Link>
                {/* <!-- sub-items --> */}
                <div className="sub-items">
                  <div className="sub-img">
                    <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/handbag2.jpg?v=1598516541" alt="" />
                    <h5>SATCHELS</h5>
                    <p>UPTO 60% OFF</p>
                  </div>
                  <div className="sub-list">
                    <ul>
                      <li><Link to="" >ALL HANDBAGS</Link></li>
                      <li><Link to="" >Shop All</Link></li>
                      <li><Link to="" >Backpacks</Link></li>
                      <li><Link to="" >Bucket Bags</Link></li>
                      <li><Link to="" >Clutches</Link></li>
                      <li><Link to="" >Crossbody Bags</Link></li>
                      <li><Link to="" >Hobo Bags</Link></li>
                      <li><Link to="" >Satchels</Link></li>
                      <li><Link to="" >Shoulder Bags</Link></li>
                      <li><Link to="" >Tote Bag</Link></li>
                      <li><Link to="" >Wallets & Cardholders</Link></li>
                    </ul>

                    <ul>
                      <li><Link to="" >TOP DESIGNER'S</Link></li>
                      <li><Link to="" >Balenciaga</Link></li>
                      <li><Link to="" >Bottega Veneta</Link></li>
                      <li><Link to="" >Burberry</Link></li>
                      <li><Link to="" >Celine</Link></li>
                      <li><Link to="" >Chloe</Link></li>
                      <li><Link to="" >Dolce & Gabbana</Link></li>
                      <li><Link to="" >Fendi</Link></li>
                      <li><Link to="" >Givenchy</Link></li>
                      <li><Link to="" >Gucci</Link></li>
                      <li><Link to="" >Prada</Link></li>
                      <li><Link to="" >Salvatore Ferragamo</Link></li>
                      <li><Link to="" >Saint Laurent</Link></li>
                      <li><Link to="" >Stella McCartney</Link></li>
                      <li><Link to="" >Valentino</Link></li>
                    </ul>

                    <ul>
                      <li><Link to="" >PRE-OWNED</Link></li>
                      <li><Link to="" >Shop All</Link></li>
                      <li><Link to="" >Bucket Bags</Link></li>
                      <li><Link to="" >Clutches</Link></li>
                      <li><Link to="" >Crossbody Bags</Link></li>
                      <li><Link to="" >Hobo Bags</Link></li>
                      <li><Link to="" >Satchels</Link></li>
                      <li><Link to="" >Shoulder Bags</Link></li>
                      <li><Link to="" >Tote Bag</Link></li>
                      <li><Link to="" >Wallets & Cardholders</Link></li>
                    </ul>

                    <ul>
                      <li><Link to="" >ACCESSORIES</Link></li>
                      <li><Link to="" >Bag Charms, Straps</Link></li>
                      <li><Link to="" >Belts</Link></li>
                      <li><Link to="" >Cosmetics Bag</Link></li>
                      <li><Link to="" >Hats</Link></li>
                      <li><Link to="" >Gloves</Link></li>
                      <li><Link to="" >Scarves & Wraps</Link></li>
                      <li><Link to="" >Optical & Reading Glasses</Link></li>
                      <li><Link to="" >Sunglasses</Link></li>
                    </ul>
                  </div>
                  {/* <div className="sub-img">
                                <img
                                    src="https://www.beautybebo.com/pub/media/mega-menu/SKIN_cATA.jpg"
                                    alt=""
                                />
                            </div> */}
                </div>
              </li>
              <li className="nav-item">
                <Link to="/hair">DESIGNERS</Link>
                {/* <!-- sub-items --> */}
                <div className="sub-items">

                  <div className="sub-img">
                    <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/handbag.jpg?v=1598514963" alt="" />
                    <h5>GUCCI</h5>
                    <p>UPTO 64% OFF</p>
                  </div>
                  <div className="sub-list">
                    <ul>
                      <li><Link to="" >FEATURED DESIGNERS</Link></li>
                      <li><Link to="" >Balenciaga</Link></li>
                      <li><Link to="" >Bottega Veneta</Link></li>
                      <li><Link to="" >Burberry</Link></li>
                      <li><Link to="" >Celine</Link></li>
                      <li><Link to="" >Chloe</Link></li>
                      <li><Link to="" >Christian Louboutin</Link></li>
                      <li><Link to="" >Dior</Link></li>
                      <li><Link to="" >Dolce & Gabbana</Link></li>
                      <li><Link to="" >Fendi</Link></li>
                      <li><Link to="" >Giuseppe Zanotti</Link></li>
                      <li><Link to="" >Givenchy</Link></li>
                      <li><Link to="" >Gucci</Link></li>
                      <li><Link to="" >Jimmy Choo</Link></li>
                      <li><Link to="" >Kate Spade</Link></li>
                    </ul>
                    <ul>
                      <li><Link to="" >Miu Miu</Link></li>
                      <li><Link to="" >Moncler</Link></li>
                      <li><Link to="" >Moose Knucles</Link></li>
                      <li><Link to="" >Moschino</Link></li>
                      <li><Link to="" >Prada</Link></li>
                      <li><Link to="" >Roberto Cavalli</Link></li>
                      <li><Link to="" >Saint Laurent</Link></li>
                      <li><Link to="" >Salvatore Ferragamo</Link></li>
                      <li><Link to="" >Stella McCartney</Link></li>
                      <li><Link to="" >Stuart Weitzman</Link></li>
                      <li><Link to="" >Tod's</Link></li>
                      <li><Link to="" >Tom Ford</Link></li>
                      <li><Link to="" >Valentino</Link></li>
                      <li><Link to="" >Versace</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/fragrance">SUNGLASSES</Link>
                {/* <!-- sub-items --> */}
                <div className="sub-items">
                  <div className="sub-img">
                    <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/sunglasses_df9c0648-8d79-459a-ad8d-a7c1869f40db.jpg?v=1598516553" alt="" />
                    <h5>SUNGLASSES</h5>
                    <p>UPTO 80% OFF</p>
                  </div>
                  <div className="sub-list">
                    <ul>
                      <li><Link to="" >WOMEN'S SUNGLSSES</Link></li>
                      <li><Link to="" >Shop All</Link></li>
                      <li><Link to="" >Burberry</Link></li>
                      <li><Link to="" >Chanel</Link></li>
                      <li><Link to="" >Chloe</Link></li>
                      <li><Link to="" >Dior</Link></li>
                      <li><Link to="" >Dolce & Gabbana</Link></li>
                      <li><Link to="" >Fendi</Link></li>
                      <li><Link to="" >Givenchey</Link></li>
                      <li><Link to="" >Gucci</Link></li>
                      <li><Link to="" >Jimmy Choo</Link></li>
                      <li><Link to="" >Miu Miu</Link></li>
                      <li><Link to="" >Prada</Link></li>
                      <li><Link to="" >Saint Laurent</Link></li>
                      <li><Link to="" >Stella McCartney</Link></li>
                    </ul>
                    <ul>
                      <li><Link to="" >MEN'S SUNGLASSES</Link></li>
                      <li><Link to="" >Shop All</Link></li>
                      <li><Link to="" >Burberry</Link></li>
                      <li><Link to="" >Bottega Veneta</Link></li>
                      <li><Link to="" >Cartier</Link></li>
                      <li><Link to="" >Dior</Link></li>
                      <li><Link to="" >Dolce & Gabbana</Link></li>
                      <li><Link to="" >Ermenegildo Zegna</Link></li>
                      <li><Link to="" >Givenchey</Link></li>
                      <li><Link to="" >Gucci</Link></li>
                      <li><Link to="" >Persol</Link></li>
                      <li><Link to="" >Ray Ban</Link></li>
                      <li><Link to="" >Prada</Link></li>
                      <li><Link to="" >Saint Laurent</Link></li>
                      <li><Link to="" >Costa Del Mar</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/makeup">JEWELRY & WATCHES</Link>
                {/* <!-- Sub-Items --> */}
                <div className="sub-items">
                  <div className="sub-img">
                    <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/watch.jpg?v=1598517674" alt="" />
                    <h5>WATCHES</h5>
                    <p>UPTO 80% OFF</p>
                  </div>
                  <div className="sub-list">
                    <ul>
                      <li><Link to="" >JWELLERY</Link></li>
                      <li><Link to="" >Shop All</Link></li>
                      <li><Link to="" >Bracelets</Link></li>
                      <li><Link to="" >Brooches & Pins</Link></li>
                      <li><Link to="" >Earrings</Link></li>
                      <li><Link to="" >Neacklaces</Link></li>
                      <li><Link to="" >Rings</Link></li>
                      <li><Link to="" >Watches</Link></li>
                      <li><Link to="" >Men's Jwellery</Link></li>
                    </ul>
                    <div>
                      <h4><Link to="" >TOP DESIGNER WATCHES A_J</Link></h4>
                      <div>
                        <ul>

                          <li><Link to="" >Anne Klein</Link></li>
                          <li><Link to="" >Armani</Link></li>
                          <li><Link to="" >Baume & Mercier</Link></li>
                          <li><Link to="" >Bulova</Link></li>
                          <li><Link to="" >Bomberg</Link></li>
                          <li><Link to="" >Breitling</Link></li>
                          <li><Link to="" >Briston</Link></li>
                          <li><Link to="" >Celvin Klein</Link></li>
                          <li><Link to="" >Cartier</Link></li>
                          <li><Link to="" >CCCP</Link></li>
                          <li><Link to="" >Casio</Link></li>
                          <li><Link to="" >Certina</Link></li>
                          <li><Link to="" >Charriol</Link></li>
                          <li><Link to="" >Christian Dior</Link></li>
                        </ul>
                        <ul>
                          <h4><Link to="" ></Link></h4>
                          <h4><Link to="" >Ferrari</Link></h4>
                          <li><Link to="" >Fossil</Link></li>
                          <li><Link to="" >Frederique</Link></li>
                          <li><Link to="" >Gevril</Link></li>
                          <li><Link to="" >Glam Rock</Link></li>
                          <li><Link to="" >Glycine</Link></li>
                          <li><Link to="" >Gucci</Link></li>
                          <li><Link to="" >Hamilton</Link></li>
                          <li><Link to="" >Hugo Boss</Link></li>
                          <li><Link to="" >Ingersoll</Link></li>
                          <li><Link to="" >Invicta</Link></li>
                          <li><Link to="" >ISW</Link></li>
                          <li><Link to="" >Jacques Lemans</Link></li>
                          <li><Link to="" >Jaquet Droz</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4><Link to="" >TOP DESIGNER WATCHES K-Z</Link></h4>
                      <div>
                        <ul>
                          <li><Link to="" >Kate Spade</Link></li>
                          <li><Link to="" >Longines</Link></li>
                          <li><Link to="" >Marc Jacobs</Link></li>
                          <li><Link to="" >Mathey Tissot</Link></li>
                          <li><Link to="" >Michael Kors</Link></li>
                          <li><Link to="" >Michele</Link></li>
                          <li><Link to="" >Mido</Link></li>
                          <li><Link to="" >Movado</Link></li>
                          <li><Link to="" >Nautica</Link></li>
                          <li><Link to="" >Nixon</Link></li>
                          <li><Link to="" >Oceanaut</Link></li>
                          <li><Link to="" >Porsche</Link></li>
                          <li><Link to="" >Rado</Link></li>
                        </ul>
                        <ul>
                          <li><Link to="" >Red Line</Link></li>
                          <li><Link to="" >Revue Thommen</Link></li>
                          <li><Link to="" >Roberto Bianci</Link></li>
                          <li><Link to="" >Seapro</Link></li>
                          <li><Link to="" >Sector</Link></li>
                          <li><Link to="" >Seiko</Link></li>
                          <li><Link to="" >Skagen</Link></li>
                          <li><Link to="" >Spinnaker</Link></li>
                          <li><Link to="" >Suunto</Link></li>
                          <li><Link to="" >Tag Heuer</Link></li>
                          <li><Link to="" >Timex</Link></li>
                          <li><Link to="" >Tissot</Link></li>
                          <li><Link to="" >Swaravski</Link></li>
                        </ul>
                      </div>

                    </div>

                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/makeup">UNDER $50</Link>
                {/* <!-- Sub-Items --> */}
                <div className="sub-items cat1">
                  <div className="sub-list">
                    <ul>
                      <li><Link to="" >SHOP BY PRICEPOINT</Link></li>
                      <li><Link to="" >UNDER $25</Link></li>
                      <li><Link to="" >$25-$49.99</Link></li>
                      <li><Link to="" >Shop All Under $50</Link></li>
                    </ul>

                    <ul>
                      <li><Link to="" >SHOP BY CATEGORY</Link></li>
                      <li><Link to="" >Women</Link></li>
                      <li><Link to="" >Shoes</Link></li>
                      <li><Link to="" >Handbags & Accessories</Link></li>
                      <li><Link to="" >Jwelry</Link></li>
                      <li><Link to="" >Men</Link></li>
                      <li><Link to="" >Kids</Link></li>
                    </ul>

                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/makeup">BEAUTY</Link>
                {/* <!-- Sub-Items --> */}
                <div className="sub-items cat1">
                  <div className="sub-list">

                    <ul>
                      <li><Link to="" >FRAGRANCE</Link></li>
                      <li><Link to="" >Shop All</Link></li>
                    </ul>
                    <ul>
                      <li><Link to="" >SKINCARE</Link></li>
                      <li><Link to="" >Shop All</Link></li>
                    </ul>
                    <ul>
                      <li><Link to="" >HAIRCARE</Link></li>
                      <li><Link to="" >Shop All</Link></li>
                    </ul>

                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/makeup">CLEARANCE</Link>
                {/* <!-- Sub-Items --> */}
                <div className="sub-items">
                  <div className="sub-img">
                    <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/clearance_8fa5acf3-7405-41aa-8c98-b0891649c9ab.jpg?v=1598516564" alt="" />
                    <h5>CLEARANCE</h5>
                    <p>70-90% OFF</p>
                  </div>
                  <div className="sub-list" id="clearance">

                    <ul>
                      <li><Link to="" >WOMEN'S</Link></li>
                      <li><Link to="" >Accessories</Link></li>
                      <li><Link to="" >Activewear</Link></li>
                      <li><Link to="" >Coats & Jackets</Link></li>
                      <li><Link to="" >Dresses</Link></li>
                      <li><Link to="" >Handbags</Link></li>
                      <li><Link to="" >Jeans & Denims</Link></li>
                      <li><Link to="" >Jewelry</Link></li>
                      <li><Link to="" >Lingerie & Hosiery</Link></li>
                      <li><Link to="" >Pants & Leggings</Link></li>
                      <li><Link to="" >Shoes</Link></li>
                      <li><Link to="" >Sunglasses</Link></li>
                      <li><Link to="" >Swimwears</Link></li>
                      <li><Link to="" >Tops</Link></li>
                    </ul>
                    <ul>
                      <li> <Link to="" >MEN'S</Link></li>
                      <li><Link to="" >Accessories</Link></li>
                      <li><Link to="" >Coats & Jackets</Link></li>
                      <li><Link to="" >Dress Shirts</Link></li>
                      <li><Link to="" >Pants</Link></li>
                      <li><Link to="" >Polo Shirts</Link></li>
                      <li><Link to="" >Shoes</Link></li>
                      <li><Link to="" >Suits & Separates</Link></li>
                      <li><Link to="" >Sunglasses</Link></li>
                      <li><Link to="" >Sweaters</Link></li>
                      <li><Link to="" >T-Shirts</Link></li>
                      <li><Link to="" >Watches</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>

            {/* <div className="SecNav" id="ShoesNav">
          <ul>
            <li>
            <a href="#">
            <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/women_shoes.jpg?v=1598516516" alt="" />
              <h5>SANDAL</h5>
            </a>
              <p>UPTO 70% OFF</p>
            </li>
            <li><a href="#">WOMEN'S SHOES</a>
              <ul>
                <li><a href="./BootPage.html">Shop All</a></li>
                <li><a href="./BootPage.html">Boots</a></li>
                <li><a href="#">Espadrilles</a></li>
                <li><a href="#">Flats</a></li>
                <li><a href="#">Mules & Sliders</a></li>
                <li><a href="#">Oxfords & Loafers</a></li>
                <li><a href="#">Pumps & Heels</a></li>
                <li><a href="#">Sandals</a></li>
                <li><a href="#">Slippers</a></li>
                <li><a href="#">Sneakers</a></li>
                <li><a href="#">Wedges</a></li>
              </ul>
            </li>
            <li><a href="#">WOMEN'S DESIGNER'S</a>
              <ul>
                <li><a href="#">Burberry</a></li>
                <li><a href="#">Chloe</a></li>
                <li><a href="#">Christians</a></li>
                <li><a href="#">Dolce & Gobbana</a></li>
                <li><a href="#">Guiseppe</a></li>
                <li><a href="#">Gucci</a></li>
                <li><a href="#">Jimmy Choo</a></li>
                <li><a href="#">Manolo Blahnik</a></li>
                <li><a href="#">Prada</a></li>
                <li><a href="#">Saint Laurent</a></li>
                <li><a href="#">Salvatore Ferragamo</a></li>
                <li><a href="#">Tod's</a></li>
                <li><a href="#">Valentino</a></li>
              </ul>
            </li>
            <li><a href="#">MEN'S SHOES</a>
              <ul>
                <li><a href="./BootPage.html">Shop All</a></li>
                <li><a href="./BootPage.html">Boots</a></li>
                <li><a href="./BootPage.html">Drivers, Loafers, Slip-Ons</a></li>
                <li><a href="./BootPage.html">Oxford & Debry Shoes</a></li>
                <li><a href="#">Sandals & Flip Flops</a></li>
                <li><a href="#">Slippers</a></li>
                <li><a href="#">Sneakers</a></li>
              </ul>
            </li>
            <li><a href="#">MEN'S DESIGNER'S</a>
              <ul>
                <li><a href="./BootPage.html">Antonio Maurizi</a></li>
                <li><a href="#">Aquatalia</a></li>
                <li><a href="./BootPage.html">Balenciaga</a></li>
                <li><a href="#">Christian Louboutin</a></li>
                <li><a href="#">Cole Haan</a></li>
                <li><a href="#">Common Projects</a></li>
                <li><a href="#">Giuseppe Zanotti</a></li>
                <li><a href="#">Gucci</a></li>
                <li><a href="#">Prada</a></li>
                <li><a href="#">Saint Laurent</a></li>
                <li><a href="#">Salvatore Ferragamo</a></li>
                <li><a href="#">Tod's</a></li>
                <li><a href="#">Valentino</a></li>
              </ul>
            </li>
            <li><a href="#"><img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/SHOES-MEN.jpg?4112" alt="" />
              <h5>DRIVERS, LOAFERS & SLIP_ONS</h5>
            </a>
              <p>UPTO 60% OFF</p>
            </li>
          </ul>
        </div> */}
            {/* <div className="SecNav" id="BagNav">
          <ul>
            <li><a href="#"><img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/handbag2.jpg?v=1598516541" alt="" />
              <h5>SATCHELS</h5>
            </a>
              <p>UPTO 60% OFF</p>
            </li>
            <li><a href="#">ALL HANDBAGS</a>
              <ul>
                <li><a href="#">Shop All</a></li>
                <li><a href="#">Backpacks</a></li>
                <li><a href="#">Bucket Bags</a></li>
                <li><a href="#">Clutches</a></li>
                <li><a href="#">Crossbody Bags</a></li>
                <li><a href="#">Hobo Bags</a></li>
                <li><a href="#">Satchels</a></li>
                <li><a href="#">Shoulder Bags</a></li>
                <li><a href="#">Tote Bag</a></li>
                <li><a href="#">Wallets & Cardholders</a></li>
              </ul>
            </li>
            <li><a href="#">TOP DESIGNER'S</a>
              <ul>
                <li><a href="#">Balenciaga</a></li>
                <li><a href="#">Bottega Veneta</a></li>
                <li><a href="#">Burberry</a></li>
                <li><a href="#">Celine</a></li>
                <li><a href="#">Chloe</a></li>
                <li><a href="#">Dolce & Gabbana</a></li>
                <li><a href="#">Fendi</a></li>
                <li><a href="#">Givenchy</a></li>
                <li><a href="#">Gucci</a></li>
                <li><a href="#">Prada</a></li>
                <li><a href="#">Salvatore Ferragamo</a></li>
                <li><a href="#">Saint Laurent</a></li>
                <li><a href="#">Stella McCartney</a></li>
                <li><a href="#">Valentino</a></li>
              </ul>
            </li>
            <li><a href="#">PRE-OWNED</a>
              <ul>
                <li><a href="#">Shop All</a></li>
                <li><a href="#">Bucket Bags</a></li>
                <li><a href="#">Clutches</a></li>
                <li><a href="#">Crossbody Bags</a></li>
                <li><a href="#">Hobo Bags</a></li>
                <li><a href="#">Satchels</a></li>
                <li><a href="#">Shoulder Bags</a></li>
                <li><a href="#">Tote Bag</a></li>
                <li><a href="#">Wallets & Cardholders</a></li>
              </ul>
            </li>
            <li><a href="#">ACCESSORIES</a>
              <ul>
                <li><a href="#">Bag Charms, Straps</a></li>
                <li><a href="#">Belts</a></li>
                <li><a href="#">Cosmetics Bag</a></li>
                <li><a href="#">Hats</a></li>
                <li><a href="#">Gloves</a></li>
                <li><a href="#">Scarves & Wraps</a></li>
                <li><a href="#">Optical & Reading Glasses</a></li>
                <li><a href="#">Sunglasses</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="SecNav" id="DesignerNav">
          <ul>
            <li><a href="#"><img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/handbag.jpg?v=1598514963" alt="" />
              <h5>GUCCI</h5>
            </a>
              <p>UPTO 64% OFF</p>
            </li>
            <li><a href="#">FEATURED DESIGNERS</a>
              <ul>
                <li><a href="#">Balenciaga</a></li>
                <li><a href="#">Bottega Veneta</a></li>
                <li><a href="#">Burberry</a></li>
                <li><a href="#">Celine</a></li>
                <li><a href="#">Chloe</a></li>
                <li><a href="#">Christian Louboutin</a></li>
                <li><a href="#">Dior</a></li>
                <li><a href="#">Dolce & Gabbana</a></li>
                <li><a href="#">Fendi</a></li>
                <li><a href="#">Giuseppe Zanotti</a></li>
                <li><a href="#">Givenchy</a></li>
                <li><a href="#">Gucci</a></li>
                <li><a href="#">Jimmy Choo</a></li>
                <li><a href="#">Kate Spade</a></li>
              </ul>
            </li>
            <li><a href="#"></a>
              <ul>
                <li><a href="#">Miu Miu</a></li>
                <li><a href="#">Moncler</a></li>
                <li><a href="#">Moose Knucles</a></li>
                <li><a href="#">Moschino</a></li>
                <li><a href="#">Prada</a></li>
                <li><a href="#">Roberto Cavalli</a></li>
                <li><a href="#">Saint Laurent</a></li>
                <li><a href="#">Salvatore Ferragamo</a></li>
                <li><a href="#">Stella McCartney</a></li>
                <li><a href="#">Stuart Weitzman</a></li>
                <li><a href="#">Tod's</a></li>
                <li><a href="#">Tom Ford</a></li>
                <li><a href="#">Valentino</a></li>
                <li><a href="#">Versace</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="SecNav" id="WomenNav">
          <ul>
            <li><a href="#"><img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/women.jpg?v=1598516476" alt="" />
              <h5>DRESSES</h5>
            </a>
              <p>UPTO 80% OFF</p>
            </li>
            <li><a href="#">CLOTHINGS</a>
              <ul>
                <li><a href="#">Activewear</a></li>
                <li><a href="#">Coats & Jackets</a></li>
                <li><a href="#">Dresses</a></li>
                <li><a href="#">Jeans & Denims</a></li>
                <li><a href="#">Jumpsuits & Rompers</a></li>
                <li><a href="#">Lingerie Hosiery</a></li>
                <li><a href="#">Loungwear & Sleepwear</a></li>
                <li><a href="#">Pants & Leggings</a></li>
                <li><a href="#">Shorts</a></li>
                <li><a href="#">Skirts</a></li>
                <li><a href="#">Sweaters</a></li>
                <li><a href="#">Sweatshirts & Hoodies</a></li>
                <li><a href="#">Swimwears & Coverups</a></li>
                <li><a href="#">Tops & Tees</a></li>
              </ul>
            </li>
            <li><a href="#">HANDBAGS</a>
              <ul>
                <li><a href="#">Shop All</a></li>
                <li><a href="#">Backpacks</a></li>
                <li><a href="#">Bucket Bags</a></li>
                <li><a href="#">Clutches</a></li>
                <li><a href="#">Crossbody Bags</a></li>
                <li><a href="#">Hobo Bags</a></li>
                <li><a href="#">Satchles</a></li>
                <li><a href="#">Shoulder Bags</a></li>
                <li><a href="#">Tote Bags</a></li>
                <li><a href="#">Wallets & Cardholders</a></li>
              </ul>
            </li>
            <li><a href="#">SHOES</a>
              <ul>
                <li><a href="./BootPage.html">Shop All</a></li>
                <li><a href="./BootPage.html">Boots</a></li>
                <li><a href="#">Espadrilles</a></li>
                <li><a href="#">Flats</a></li>
                <li><a href="#">Mules & Sliders</a></li>
                <li><a href="#">Oxfords & Loafers</a></li>
                <li><a href="#">Pumps & Heels</a></li>
                <li><a href="#">Sandals</a></li>
                <li><a href="#">Slippers</a></li>
                <li><a href="#">Sneakers</a></li>
                <li><a href="#">Wedges</a></li>
              </ul>
            </li>
            <li><a href="#">JWELLERY</a>
              <ul>
                <li><a href="#">Shop All</a></li>
                <li><a href="#">Bracelets</a></li>
                <li><a href="#">Brooches & Pins</a></li>
                <li><a href="#">Earrings</a></li>
                <li><a href="#">Neacklaces</a></li>
                <li><a href="#">Rings</a></li>
                <li><a href="#">Watches</a></li>
              </ul>
            </li>
            <li><a href="#">ACCESSORIES</a>
              <ul>
                <li><a href="#">Bag Charms, Straps</a></li>
                <li><a href="#">Belts</a></li>
                <li><a href="#">Cosmetics Bag</a></li>
                <li><a href="#">Hats</a></li>
                <li><a href="#">Gloves</a></li>
                <li><a href="#">Scarves & Wraps</a></li>
                <li><a href="#">Optical & Reading Glasses</a></li>
                <li><a href="#">Sunglasses</a></li>
                <li><a href="#">Pens</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="SecNav" id="MenNav">
          <ul>
            <li><a href="#"><img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/men.jpg?v=1598516498" alt="" />
              <h5>DRESS SHIRTS</h5>
            </a>
              <p>UPTO 70% OFF</p>
            </li>
            <li><a href="#">CLOTHINGS</a>
              <ul>
                <li><a href="#">Activewear</a></li>
                <li><a href="#">Casual Button-Down Shirts</a></li>
                <li><a href="#">Coats Jackets</a></li>
                <li><a href="#">Jeans & Denims</a></li>
                <li><a href="#">Dress Shirts</a></li>
                <li><a href="#">Pants</a></li>
                <li><a href="#">Polo Shirts</a></li>
                <li><a href="#">Sport Coats & Blazers</a></li>
                <li><a href="#">Shorts</a></li>
                <li><a href="#">Suits & Separaters</a></li>
                <li><a href="#">Sweaters</a></li>
                <li><a href="#">Sweatshirts & Hoodies</a></li>
                <li><a href="#">Swimwears</a></li>
                <li><a href="#">T-shirts</a></li>
              </ul>
            </li>
            <li><a href="#">SHOES</a>
              <ul>
                <li><a href="./BootPage.html">Shop All</a></li>
                <li><a href="./BootPage.html">Boots</a></li>
                <li><a href="#">Drivers, Loafers & Slip-Ons</a></li>
                <li><a href="#">Sandals & Flip Flops</a></li>
                <li><a href="#">Mules & Sliders</a></li>
                <li><a href="#">Oxfords & Loafers</a></li>
                <li><a href="#">Slippers</a></li>
                <li><a href="#">Sneakers</a></li>
              </ul>
            </li>
            <li><a href="#">ACCESSORIES</a>
              <ul>
                <li><a href="#">Shop All</a></li>
                <li><a href="#">Bag Charms, Straps</a></li>
                <li><a href="#">Belts</a></li>
                <li><a href="#">Pens</a></li>
                <li><a href="#">Hats</a></li>
                <li><a href="#">Gloves</a></li>
                <li><a href="#">Scarves</a></li>
                <li><a href="#">Optical & Reading Glasses</a></li>
                <li><a href="#">Sunglasses</a></li>
                <li><a href="#">Wallets & Cardholders</a></li>
                <li><a href="#">Ties & Pocket Squares</a></li>
              </ul>
            </li>
            <li><a href="#">JWELLERY</a>
              <ul>
                <li><a href="#">Cufflinks</a></li>
                <li><a href="#">Bracelets</a></li>
                <li><a href="#">Watches</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="SecNav" id="SunglassNav">
          <ul>
            <li><a href="#"><img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/sunglasses_df9c0648-8d79-459a-ad8d-a7c1869f40db.jpg?v=1598516553" alt="" />
              <h5>SUNGLASSES</h5>
            </a>
              <p>UPTO 80% OFF</p>
            </li>
            <li><a href="#">WOMEN'S SUNGLSSES</a>
              <ul>
                <li><a href="#">Shop All</a></li>
                <li><a href="#">Burberry</a></li>
                <li><a href="#">Chanel</a></li>
                <li><a href="#">Chloe</a></li>
                <li><a href="#">Dior</a></li>
                <li><a href="#">Dolce & Gabbana</a></li>
                <li><a href="#">Fendi</a></li>
                <li><a href="#">Givenchey</a></li>
                <li><a href="#">Gucci</a></li>
                <li><a href="#">Jimmy Choo</a></li>
                <li><a href="#">Miu Miu</a></li>
                <li><a href="#">Prada</a></li>
                <li><a href="#">Saint Laurent</a></li>
                <li><a href="#">Stella McCartney</a></li>
              </ul>
            </li>
            <li><a href="#">MEN'S SUNGLASSES</a>
              <ul>
                <li><a href="#">Shop All</a></li>
                <li><a href="#">Burberry</a></li>
                <li><a href="#">Bottega Veneta</a></li>
                <li><a href="#">Cartier</a></li>
                <li><a href="#">Dior</a></li>
                <li><a href="#">Dolce & Gabbana</a></li>
                <li><a href="#">Ermenegildo Zegna</a></li>
                <li><a href="#">Givenchey</a></li>
                <li><a href="#">Gucci</a></li>
                <li><a href="#">Persol</a></li>
                <li><a href="#">Ray Ban</a></li>
                <li><a href="#">Prada</a></li>
                <li><a href="#">Saint Laurent</a></li>
                <li><a href="#">Costa Del Mar</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="SecNav" id="JewelryNav">
          <ul>
            <li><a href="#"><img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/watch.jpg?v=1598517674" alt="" />
              <h5>WATCHES</h5>
            </a>
              <p>UPTO 80% OFF</p>
            </li>
            <li><a href="#">JWELLERY</a>
              <ul>
                <li><a href="#">Shop All</a></li>
                <li><a href="#">Bracelets</a></li>
                <li><a href="#">Brooches & Pins</a></li>
                <li><a href="#">Earrings</a></li>
                <li><a href="#">Neacklaces</a></li>
                <li><a href="#">Rings</a></li>
                <li><a href="#">Watches</a></li>
                <li><a href="#">Men's Jwellery</a></li>
              </ul>
            </li>
            <li><a href="#">TOP DESIGNER WATCHES A_J</a>
              <ul>
                <li><a href="#">Anne Klein</a></li>
                <li><a href="#">Armani</a></li>
                <li><a href="#">Baume & Mercier</a></li>
                <li><a href="#">Bulova</a></li>
                <li><a href="#">Bomberg</a></li>
                <li><a href="#">Breitling</a></li>
                <li><a href="#">Briston</a></li>
                <li><a href="#">Celvin Klein</a></li>
                <li><a href="#">Cartier</a></li>
                <li><a href="#">CCCP</a></li>
                <li><a href="#">Casio</a></li>
                <li><a href="#">Certina</a></li>
                <li><a href="#">Charriol</a></li>
                <li><a href="#">Christian Dior</a></li>
              </ul>
            </li>
            <li><a href="#"></a>
              <ul>
                <li><a href="#">Ferrari</a></li>
                <li><a href="#">Fossil</a></li>
                <li><a href="#">Frederique</a></li>
                <li><a href="#">Gevril</a></li>
                <li><a href="#">Glam Rock</a></li>
                <li><a href="#">Glycine</a></li>
                <li><a href="#">Gucci</a></li>
                <li><a href="#">Hamilton</a></li>
                <li><a href="#">Hugo Boss</a></li>
                <li><a href="#">Ingersoll</a></li>
                <li><a href="#">Invicta</a></li>
                <li><a href="#">ISW</a></li>
                <li><a href="#">Jacques Lemans</a></li>
                <li><a href="#">Jaquet Droz</a></li>
              </ul>
            </li>
            <li><a href="#">TOP DESIGNER WATCHES K-Z</a>
              <ul>
                <li><a href="#">Kate Spade</a></li>
                <li><a href="#">Longines</a></li>
                <li><a href="#">Marc Jacobs</a></li>
                <li><a href="#">Mathey Tissot</a></li>
                <li><a href="#">Michael Kors</a></li>
                <li><a href="#">Michele</a></li>
                <li><a href="#">Mido</a></li>
                <li><a href="#">Movado</a></li>
                <li><a href="#">Nautica</a></li>
                <li><a href="#">Nixon</a></li>
                <li><a href="#">Oceanaut</a></li>
                <li><a href="#">Porsche</a></li>
                <li><a href="#">Rado</a></li>
              </ul>
            </li>
            <li><a href="#"></a>
              <ul>
                <li><a href="#">Red Line</a></li>
                <li><a href="#">Revue Thommen</a></li>
                <li><a href="#">Roberto Bianci</a></li>
                <li><a href="#">Seapro</a></li>
                <li><a href="#">Sector</a></li>
                <li><a href="#">Seiko</a></li>
                <li><a href="#">Skagen</a></li>
                <li><a href="#">Spinnaker</a></li>
                <li><a href="#">Suunto</a></li>
                <li><a href="#">Tag Heuer</a></li>
                <li><a href="#">Timex</a></li>
                <li><a href="#">Tissot</a></li>
                <li><a href="#">Swaravski</a></li>
              </ul>
=======
      <div>
        <img
          style={{ width: "200px" }}
          src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?v=1574278243"
          onClick={() => {
            navigate("/");
          }}
          alt="logo"
        />

        <div
          style={{
            display: "flex",
            marginLeft: "85%",
            gap: "8px",
            marginTop: "-20px",
          }}
        >
          <img
            style={{ width: "20px", height: "20px" }}
            src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
            alt=""
          />
          <p>SEARCH</p>
          <img
            onClick={() => {
              navigate("/login");
            }}
            style={{ width: "20px", height: "20px", marginLeft: "10px" }}
            src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
            alt=""
          />
          <img
            style={{ width: "20px", height: "20px", marginLeft: "10px" }}
            src="https://cdn-icons-png.flaticon.com/512/1656/1656850.png"
            alt=""
          />
        </div>
      </div>
      <nav className="menu">
        <div className="wrapper">
          <div className="logo">
            <input type="radio" name="slide" id="menu-btn" />
            <input type="radio" name="slide" id="cancel-btn" />
          </div>
          <ul className="nav-links" id={hover ? "navs__links" : ""}>
            <label className="btn cancel-btn" htmlFor="cancel-btn">
              <i className="fa fa-times"></i>
            </label>
            <li>
              <input type="checkbox" id="showMega" />

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <hr id="horizontal-line" />
                    <ul className="mega-links" id="line-height-new">
                      <li>
                        <Link to="/products/women">Clothing</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Handbags & Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/designer">Designers</Link>
                      </li>
                      <li>
                        <Link to="/products/sunglasses">Sunglasses</Link>
                      </li>
                      <li>
                        <Link to="/products/Jewellery">Jewelry & watches</Link>
                      </li>
                      <li>
                        <Link to="/#">Under $ 50</Link>
                      </li>
                      <li>
                        <Link to="/#">Beauty</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Men</header>
                    <ul className="mega-links" id="line-height-men">
                      <li>
                        <Link to="/products/Men">Clothing</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Watches</Link>
                      </li>
                      <li>
                        <Link to="/#">Accessories</Link>
                      </li>
                      <br />
                      <li>
                        <Link to="/#" id="bold">
                          Designer
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Home</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Art & Wall Decor</Link>
                      </li>
                      <li>
                        <Link to="/#">Bath</Link>
                      </li>
                      <li>
                        <Link to="/#">Bedding</Link>
                      </li>
                      <li>
                        <Link to="/#">Decor</Link>
                      </li>
                      <li>
                        <Link to="/#">Electronic & Tech Acessories</Link>
                      </li>
                      <li>
                        <Link to="/#">Kitchen & Tabletop</Link>
                      </li>
                      <li>
                        <Link to="/#">Storage & Cleaning</Link>
                      </li>
                      <br />
                      <li>
                        <Link to="/#" id="bold">
                          Beauty
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Makeup</Link>
                      </li>
                      <li>
                        <Link to="/#">Skin Care</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                CLOTHING
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>WOMEN'S CLOTHING</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/womens">Activewear</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Blazers</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Coats & Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Dresses</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Jeans & Denim</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Jumpsuits & Rompers</Link>
                      </li>
                      <li>
                        <Link to="/products/women">
                          Lingerie, Hosiery & Shapewear
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women">Loungewear</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Jeans & Denim</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Pants & Leggings</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Skirts</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Sleepwear & Robes</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Sweaters</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Sweatshirts & Hoodies</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Swimsuits & Cover-Ups</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Tops</Link>
                      </li>
                      <br />

                      <li>
                        <Link to="/#">Plus-Size</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>MEN'S CLOTHING</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/men">Athletic & Running</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Boots & Booties</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Clogs</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Comfort</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Espadrilles</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Flats</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Flip-Flops & Slides</Link>
                      </li>
                      <li>
                        <Link to="/#">Heels</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Loafers & Oxfords</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Mules</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Rain Boots</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Sandals</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Slippers</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Sneakers</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Wedges</Link>
                      </li>
                      <br />
                      <li>
                        <Link to="/products/men">
                          Extended Shoe Sizes & Widths
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                SHOES
              </Link>
              <input type="checkbox" id="showMega" />

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>WOMEN'S SHOES</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/shoes" id="bold">
                          Shop All
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Designer Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Contemporary Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Graphic Tees Under $25
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Denim Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Swim & Sun Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Sneakers Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Wedding Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Shop by Occasion
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nike for the Family
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Rack Essentials
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Shop By Brand
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nordstrom Made
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>WOMEN'S DESIGNERS</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Activewear</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Blazers&Sports Coats</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Coats & Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Dress Shirts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Jeans</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Joggers & Sweatpants</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Lounge, Pajamas & Robes</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Pants</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Polo Shirts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shirts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Socks</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Suits & Separates</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Sweaters</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Sweatshirts & Hoodies</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Swimwear&Board Shorts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">T-Shirts</Link>
                      </li>

                      <li>
                        <Link to="/products/Men">Underwear</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>mEN'S SHOES</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Athletic & Running</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Boot Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Boots</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Comfort</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Dress Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Loafers & Slip-Ons</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Oxfords & Derbys</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sandals & Flip-Flops</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Slippers</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sneakers</Link>
                      </li>

                      <br />
                      <li>
                        <Link to="/products/Shoes">
                          Extended Shoe Sizes & Widths
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>MEN'S DESIGNERS</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Clothing</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Shoes</Link>
                      </li>

                      <li>
                        <Link to="/products/bag" id="bold">
                          Accessorise
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag"> Bags & Backpacks</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Sunglasses & Eyewear</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">belt & Suspenders</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Hats</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Ties & Pocket Squares</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Wallets & Card Cases</Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Sunglasses & Eyewear
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Watches
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Luggage & Travel
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Grooming & Cologne
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                HANDBAGS 7 ACCESSORIES
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>HANDBAGS & ACCESSORIES</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Sandals Under $20
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Sneakers Under $30
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nike for the Family
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Swim Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Disney Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Z by Zella for the Family
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Rack Essentials
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Baby Shower Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Shop by Occasion
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Shop By Brand
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nordstrom Made
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>TOP DESIGNERS</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/women">
                          Baby Girl (Sizes 0-24M)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women">
                          Toddler Girls (Sizes 2T-4T)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women">Girls (Sizes 4-6x)</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Girls (Sizes 7-16)</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Tween Girls</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Activewear s</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Coats & Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Dresses & Rompers</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Jeans</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Pajamas & Robes</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Pants & Leggings</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Skirts</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Swimsuits & Cover-Ups</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Tops</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Underwear, Socks & Bra</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>PRE-OWNED</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Men">Baby Boy (Sizes 0-24M)</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">
                          Toddler Boys (Sizes 2T-4T)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Boys (Sizes 4-7)</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Boys (Sizes 8-20)</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Activewear</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Coats & Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Jeans</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Pajamas & Robes</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Pants</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Sets</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shirts & Tops</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Suits & Separates</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Swim Trunks & Rashguards</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">T-Shirts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Underwear & Socks</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>ACCESSORIES</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/#">Toddler (Sizes 4.5-12)</Link>
                      </li>
                      <li>
                        <Link to="/#">Little Kid (Sizes 12.5-3)</Link>
                      </li>
                      <li>
                        <Link to="/#">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Girls' Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Toddler (Sizes 4.5-12)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">
                          Little Kid (Sizes 12.5-3)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Boys' Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Toddler (Sizes 4.5-12)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">
                          Little Kid (Sizes 12.5-3)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                DESIGNERS
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Shoes: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Designer Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Contemporary Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Young Adult Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Sandals Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Sneakers Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Flip-Flops & Slides for the Family
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nike for the Family
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Special Occasion
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Shop by Trend
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nordstrom Made
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Women's Shoes Clearance
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Men's Shoes Clearance
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Kids' Shoes Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Women's Shoes</header>
                    <ul className="mega-links" id="line-height-new">
                      <li>
                        <Link to="/products/Shoes">Athletic & Running</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Boots & Booties</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Clogs</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Comfort</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Espadrilles</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Flats</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Flip-Flops & Slides</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Heels</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Loafers & Oxfords</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Mules</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Rain Boots</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sandals</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Slippers</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sneakers</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Wedges</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">
                          Extended Sizes & Widths
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Men's Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Athletic & Running</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Boots</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Comfort</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Dress Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Loafers & Slip-Ons</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Oxfords & Derbys</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sandals & Flip-Flops</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Slippers</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sneakers</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">
                          Extended Sizes & Widths
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Kids' Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Toddler (Sizes 4.5-12)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">
                          Little Kid (Sizes 12.5-3)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Girls' Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Toddler (Sizes 4.5-12)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">
                          Little Kid (Sizes 12.5-3)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Boys' Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Toddler (Sizes 4.5-12)</Link>
                      </li>

                      <li>
                        <Link to="/products/Shoes">
                          Little Kid (Sizes 12.5-3)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shop By Brand</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">adidas</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">adidas</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">ASICS</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Brooks</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Cole Haan</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Converse</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">New Balance</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Nike</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sam Edelman</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Steve Madden</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">UGG</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                SUNGLASSES
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Activewear: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Adidas
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nike
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Z by Zella
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Clearance
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Shop by Activity
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift">Athleisure</Link>
                      </li>
                      <li>
                        <Link to="/gift">Commuter e</Link>
                      </li>
                      <li>
                        <Link to="/gift">Golf</Link>
                      </li>
                      <li>
                        <Link to="/gift">Hiking</Link>
                      </li>
                      <li>
                        <Link to="/gift">Running</Link>
                      </li>
                      <li>
                        <Link to="/gift">Swim & Surf</Link>
                      </li>
                      <li>
                        <Link to="/gift">Training</Link>
                      </li>
                      <li>
                        <Link to="/gift">Yoga & Barr</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Women's Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/women">Crops & Capris</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Leggings</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Shirts & Tees</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Shorts & Skirts</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Socks</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Sports Bras</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Sweatpants & Joggers</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Sweatshirts & Hoodies</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Swim</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Tanks</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Plus Activewear</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Men's Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Men">Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shirts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Socks</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Sweatpants & Joggers</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Sweatshirts & Hoodies</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Swim</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Tanks</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Women's Active Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Hiking & Trail</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Lifestyle</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Running</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sport Sandals</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Training</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Walking</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Men's Active Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Hiking & Trail</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Lifestyle</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Running</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sport Sandals</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Training</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Walking</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Kids' Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Girls' Activewear</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Boys' Activewear</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Kids' Active Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Girls' Active Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Boys' Active Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Athletic Gear & Equipment
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                JEWELRY & WATCHES
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Bags & Accessories: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Handbags Under $100
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Designer Sunglasses Under $100
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nordstrom Made
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Women's Accessories Clearance
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Men's Accessories Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shop By Brand</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift">Bony Levy</Link>
                      </li>
                      <li>
                        <Link to="/gift">Gucci Sunglasses</Link>
                      </li>
                      <li>
                        <Link to="/gift">Kate Spade New York</Link>
                      </li>
                      <li>
                        <Link to="/gift">Marc Jacobs</Link>
                      </li>
                      <li>
                        <Link to="/gift">Ray-Ban</Link>
                      </li>

                      <li>
                        <Link to="/" id="bold">
                          Designer
                        </Link>
                      </li>
                      <li>
                        <Link to="/">Designer Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Designer Handbags</Link>
                      </li>
                      <li>
                        <Link to="/">Designer Sunglasses & Eyewear</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Handbags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/bag">Backpacks</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Beach & Straw Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Bucket Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Clutches & Pouches</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Crossbody Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Designer Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Fanny Packs & Belt Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Mini Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Satchels</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Shoulder Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Totes</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Wallets r</Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Luggage & Travel
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Tech Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Sunglasses & Eyewea
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Jewelry</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/women">Bracelets</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Earrings</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Necklaces</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Rings</Link>
                      </li>
                      <li>
                        <Link to="/products/women">14K Gold Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Diamond Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Gold Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Rose Gold Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/products/women">
                          Sterling Silver Jewelry
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women" id="bold">
                          Fine Jewelry
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women">Bracelets</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Earrings</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Necklaces</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Rings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Women's Accessories</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/women">Belts</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Hair Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Hats</Link>
                      </li>
                      <li>
                        <Link to="/products/women">
                          Ponchos, Kimonos & Capes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women">
                          Sarongs, Caftans & Cover-Ups
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women">Scarves</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Winter Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/women" id="bold">
                          Men's Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Bags & Backpacks</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Belts & Suspenders</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Hats</Link>
                      </li>
                      <li>
                        <Link to="/gift">Wallets & Card Cases</Link>
                      </li>
                      <li>
                        <Link to="/gift">Winter Accessories</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                UNDER $ 50
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Home: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Bedding Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Home Decor Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Kitchen Appliances Under $100
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Rack Essentials
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nordstrom Made
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Clearance
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Shop By Brand
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Bath</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Home">Bath Rugs & Mats</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Bath Towels</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Bathroom Decor</Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Bedding
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Comforters & Duvet Inserts
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Duvet Covers</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Mattress Pads & Toppers</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Pillow Cases</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Pillows</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Quilts & Blankets</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Sheet Sets</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Throws</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Decor</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Home">Decorative Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Decorative Pillows</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Faux Plants & Stands</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Home Fragrances, Diffusers & Candles
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Lighting & Lamps</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Rugs & Doormats</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Stationery & Desk Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Window Treatments</Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Holiday Decorations
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Art & Wall Decor
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Art by Color</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Art by Subject</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Art by Type</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Clocks</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Mirrors</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Kitchen & Tabletop</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Home">Bar Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Cookware & Bakeware</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Cutlery & Kitchen Knives
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Dinnerware & Flatware</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Drinkware & Glassware</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Serveware</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Small Appliances</Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Outdoor Living
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Beach & Pool Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Outdoor Dining</Link>
                      </li>

                      <li>
                        <Link to="/products/Home" id="bold">
                          Electronic & Tech Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Headphones & Speakers</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Phone Cases</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Smart Home</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Smart Watches & Bands</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Storage & Cleaning</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Home">Bathroom Storage</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Bedroom & Closet Storage
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Kitchen Storage</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Laundry & Cleaning</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Storage Baskets & Bins</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Vacuum & Floor Care</Link>
                      </li>

                      <li>
                        <Link to="/products/Home" id="bold">
                          Pet Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Games
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Luggage & Travel
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                BEAUTY
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Beauty: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Prestige Beauty
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Natural Beauty
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Beauty Under $25
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Hair Care Under $25
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Skin Care Under $20
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Makeup Under $20
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="gift" id="bold">
                          Beauty Gifts & Sets
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Travel & Mini Sizes
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shop By Brand</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Charlotte Tilbury</Link>
                      </li>
                      <li>
                        <Link to="gift">Clinique</Link>
                      </li>
                      <li>
                        <Link to="gift">Drybar</Link>
                      </li>
                      <li>
                        <Link to="gift">L'Occitane</Link>
                      </li>
                      <li>
                        <Link to="gift">M.A.C. Cosmetics</Link>
                      </li>
                      <li>
                        <Link to="gift">Mario Badescu</Link>
                      </li>
                      <li>
                        <Link to="gift">Nudestix</Link>
                      </li>
                      <li>
                        <Link to="gift">Shiseido</Link>
                      </li>
                      <li>
                        <Link to="gift">Too Faced</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Urban Decay</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Makeup</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Blush, Bronzer & Highlighter</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Brushes & Tools</Link>
                      </li>
                      <li>
                        <Link to="gift">Concealer & Foundation</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Eye Makeup</Link>
                      </li>
                      <li>
                        <Link to="gift">Eyebrows</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Eyeshadow & Eyeliner</Link>
                      </li>
                      <li>
                        <Link to="gift">Gifts & Sets</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Lipstick, Lip Gloss & Liner</Link>
                      </li>
                      <li>
                        <Link to="gift">Mascara & Lashes</Link>
                      </li>
                      <li>
                        <Link to="gift">Nail Polish & Care</Link>
                      </li>
                      <li>
                        <Link to="gift">Palettes</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Powder & Setting Sprays</Link>
                      </li>
                      <li>
                        <Link to="gift">Primer</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Skin Care</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Cleansers</Link>
                      </li>
                      <li>
                        <Link to="gift">Exfoliators</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Eye Creams & Treatments</Link>
                      </li>
                      <li>
                        <Link to="gift">Face Mists & Toners</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Face Moisturizers</Link>
                      </li>
                      <li>
                        <Link to="gift">Facial Masks</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Gifts & Sets</Link>
                      </li>
                      <li>
                        <Link to="/gift">Lip Balms & Treatments</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Makeup Remover</Link>
                      </li>
                      <li>
                        <Link to="/gift">Serums</Link>
                      </li>
                      <li>
                        <Link to="/gift">Sunscreen</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Tools & Devices</Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Bath & Body
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Hair Care</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Home">Hair & Scalp Treatments</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Hair Dryers & Styling Tools
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Hair Styling Products</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Shampoo & Conditioner</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home" id="bold">
                          Fragrance
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Candles & Diffusers</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Designer Fragrance</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Gifts & Sets</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Perfume</Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Tools, Brushes & Makeup Bags
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Bath & Body Tools</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Hair Styling Tools</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">
                          Makeup Brushes, Tools, & Bags
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Skin Care Tools</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home" id="bold">
                          Men's Grooming & Cologne
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
