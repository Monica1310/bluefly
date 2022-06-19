import { useSelector } from "react-redux"


const Cartx = () => {

  
     const cartdata = useSelector((state) => state.cartData);
    console.log(cartdata,"cartdata");

  
    return <>
    
    <h1>cart</h1>

    {cartdata.map((el) => {
      return <>
      <h1>{el.title}</h1>
      </>
    })}
    
    </>
}

export default Cartx