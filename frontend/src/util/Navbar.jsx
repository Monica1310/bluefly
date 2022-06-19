
import './Navbar.css'
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  // const [hover, setHover] = React.useState(false);
  return (
    // <h2>hello</h2>
    // <>
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

          </ul>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
