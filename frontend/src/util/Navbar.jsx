
import React from 'react';
import { Link } from "react-router-dom"
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from './NavbarElements';
import './Navbar.css'

const Navbar = () => {
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
            </li>
          </ul>
        </div>
        <div className="SecNav" id="UnderNav">
          <ul>
            <li><a href="#">SHOP BY PRICEPOINT</a>
              <ul>
                <li><a href="#">UNDER $25</a></li>
                <li><a href="#">$25-$49.99</a></li>
                <li><a href="#">Shop All Under $50</a></li>
              </ul>
            </li>
            <li><a href="#">SHOP BY CATEGORY</a>
              <ul>
                <li><a href="#">Women</a></li>
                <li><a href="#">Shoes</a></li>
                <li><a href="#">Handbags & Accessories</a></li>
                <li><a href="#">Jwelry</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Kids</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="SecNav" id="BeautyNav">
          <ul>
            <li><a href="#">FRAGRANCE</a>
              <ul>
                <li><a href="#">Shop All</a></li>
              </ul>
            </li>
            <li><a href="#">SKINCARE</a>
              <ul>
                <li><a href="#">Shop All</a></li>
              </ul>
            </li>
            <li><a href="#">HAIRCARE</a>
              <ul>
                <li><a href="#">Shop All</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="SecNav" id="ClearanceNav">
          <ul>
            <li><a href="#"><img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/clearance_8fa5acf3-7405-41aa-8c98-b0891649c9ab.jpg?v=1598516564" alt="" />
              <h5>CLEARANCE</h5>
            </a>
              <p>70.90% OFF</p>
            </li>
            <li><a href="#">WOMEN'S</a>
              <ul>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Activewear</a></li>
                <li><a href="#">Coats & Jackets</a></li>
                <li><a href="#">Dresses</a></li>
                <li><a href="#">Handbags</a></li>
                <li><a href="#">Jeans & Denims</a></li>
                <li><a href="#">Jewelry</a></li>
                <li><a href="#">Lingerie & Hosiery</a></li>
                <li><a href="#">Pants & Leggings</a></li>
                <li><a href="./BootPage.html">Shoes</a></li>
                <li><a href="#">Sunglasses</a></li>
                <li><a href="#">Swimwears</a></li>
                <li><a href="#">Tops</a></li>
              </ul>
            </li>
            <li><a href="#">MEN'S</a>
              <ul>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Coats & Jackets</a></li>
                <li><a href="#">Dress Shirts</a></li>
                <li><a href="#">Pants</a></li>
                <li><a href="#">Polo Shirts</a></li>
                <li><a href="./BootPage.html">Shoes</a></li>
                <li><a href="#">Suits & Separates</a></li>
                <li><a href="#">Sunglasses</a></li>
                <li><a href="#">Sweaters</a></li>
                <li><a href="#">T-Shirts</a></li>
                <li><a href="#">Watches</a></li>
              </ul>
            </li>
          </ul>
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;