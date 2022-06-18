import styles from "./home.module.css";
import Slider from "./bannerslider/Slider";
import BlackSlider from "./bannerslider/blackSlider";
import BannerGrid from "./banner grid/BannerGrid";
import ShopCat from "./shop by category/ShopCat";
import BottomSlider from "./bannerslider/bottomslider";
import NewArrived from "./newTrend/NewArrival";
import Trending from "./newTrend/Trending";
import BottomOffer from "./offerGrid/BottomOffer";
const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.blackdiv}>
        <BlackSlider />
      </div>

      <Slider />
      <BannerGrid />
      <ShopCat />
      <BottomSlider />
      <NewArrived />
      <Trending />
      <BottomOffer />
    </div>
  );
};

export default Home;
