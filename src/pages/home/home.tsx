import Features from "./features";
import HeadConponent from "./head";
import MultiImagesSlider from "./carousel.tsx"
import HotProduct from "./hotProduct.tsx";
import Delivered from "./delivered.tsx";
import Special from "./special.tsx";




export default function HomePage() {
    return (
        <>
            <HeadConponent />
            <Features />
            <MultiImagesSlider title="Shop by category" all="ALL CATEGORY" />
            <HotProduct/>
            <br />
            <br />
            <MultiImagesSlider title="Hot products" all="ALL HOT PRODUCTS" />
            <Delivered/>
            <Special/>
        </>
    )
}