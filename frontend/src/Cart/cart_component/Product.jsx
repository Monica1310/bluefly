import React from 'react';

const Product = ({ val, setVal }) => {
  return (
    <div>
      <div className="prod_grid">
        <div className="product">
          <div className="product_img">
            <img
              src="https://cdn.shopify.com/s/files/1/0248/3473/6191/products/DiorByDior-2-00086-1_720x.jpg?v=1609777367"
              alt="product-img"
            />
          </div>
          <div className="product_title">
            <div>
              DIOR SQUARE SUNGLASSES DIORBYDIOR 2 00086 GOLD 58MM BY DIOR Gold
            </div>
            <div className="btndiv">
              <button>remove</button>
            </div>
          </div>
        </div>

        <div className="prduct_info">
          <div className="price info">
            <label htmlFor="rate">price</label>
            <div className="rate">${4365}</div>
          </div>
          <div className="quanty info">
            <label htmlFor="quant">quantity</label>
            <div className="quant">
              <input
                type="number"
                min={1}
                value={val}
                onChange={(e) => setVal(e.target.value)}
              />
            </div>
          </div>
          <div className="total info">
            <label htmlFor="all">Total</label>
            <div className="all">${val * 4365}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
