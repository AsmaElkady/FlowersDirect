import Features from "../../sections/home/features.tsx";
import HeadConponent from "../../sections/home/head.tsx";
import MultiImagesSlider from "../../sections/home/carousel.tsx"
import HotProduct from "../../sections/home/hotProduct.tsx";
import Delivered from "../../sections/home/delivered.tsx";
import Special from "../../sections/home/special.tsx";
// import { useDispatch } from "react-redux";
// import { fetchUser } from "../../redux/slices/cartApi.ts";



export default function HomePage() {
    // const dispatch = useDispatch()
    // dispatch(fetchUser());
    return (
        <>
            <HeadConponent />
            <Features />
            <MultiImagesSlider title="Shop by category" all="ALL CATEGORY" />
            <HotProduct/>
            <br />
            <br />
            <MultiImagesSlider title="Hot products" all="ALL HOT PRODUCTS" />
            <br />
            <br />
            <Delivered/>
            <br />
            <br />
            <Special/>
            <br />
            <br />
        </>
    )
}


