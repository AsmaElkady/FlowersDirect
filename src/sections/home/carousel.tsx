import Container from "react-bootstrap/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";
// import type { IProduct } from "../../Types/productType";

type Category = {
  id: string;
  name: string;
  description?: string;
  image: string;
};

interface MultiImageSliderProps {
  title: string;
  all: string;
  data: Category[] | undefined;
}

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1.2 },
};

const defaultCategories: Category[] = [
  { id: "1", name: "Flower", image: "/img/Home/category/1.png" },
  { id: "2", name: "Tulip", image: "/img/Home/category/2.png" },
  { id: "3", name: "Rose", image: "/img/Home/category/3.png" },
];

export default function MultiImageSlider({
  title,
  all,
  data,
}: MultiImageSliderProps) {
  const displayData = data?.length ? data : defaultCategories;

  const renderCategory = (data: Category[]) =>
    data.map((item, i) => (
      <div
        key={item.id ?? i}
        className="border border-dark rounded-3 p-2 mx-2"
        style={{ width: 210 }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-100 rounded-3"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <p className="text-center mt-2 fw-bold">{item.name}</p>
      </div>
    ));

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-secondary">{title}</h3>
        <Button variant="secondary" className="rounded-4 text-white">
          {all}
        </Button>
      </div>

      <div style={{ padding: "40px" }}>
        <Carousel
          autoPlay
          arrows
          swipeable
          draggable
          responsive={responsive}
          infinite
          autoPlaySpeed={2500}
          keyBoardControl
          transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          {renderCategory(displayData)}
        </Carousel>
      </div>
    </Container>
  );
}
