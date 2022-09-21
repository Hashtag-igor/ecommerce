import Announcement from "../components/Announcement/Announcement";
import Categories from "../components/Categories/Categories";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import Products from "../components/Products/Products";
import Newslatter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

export default function Home(){
    return(
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newslatter />
            <Footer />
        </div>
    )
}