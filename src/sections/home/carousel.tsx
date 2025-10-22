// import Container from "react-bootstrap/Container";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Button from "react-bootstrap/Button";
// import { useNavigate } from "react-router";
// // import type { IProduct } from "../../Types/productType";

// type Category = {
//   id: string;
//   name: string;
//   description?: string;
//   image: string;
// };

// interface MultiImageSliderProps {
//   title: string;
//   all: string;
//   data: Category[] | undefined;
// }

// const responsive = {
//   superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
//   desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
//   tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
//   mobile: { breakpoint: { max: 464, min: 0 }, items: 1.2 },
// };

// const defaultCategories: Category[] = [
//   { id: "1", name: "Flower", image: "/img/Home/category/1.png" },
//   { id: "2", name: "Tulip", image: "/img/Home/category/2.png" },
//   { id: "3", name: "Rose", image: "/img/Home/category/3.png" },
// ];

// export default function MultiImageSlider({
//   title,
//   all,
//   data,
// }: MultiImageSliderProps) {
//   const displayData = data?.length ? data : defaultCategories;
//   const navigation = useNavigate();
//   const renderCategory = (data: Category[]) =>
//     data.map((item, i) => (
//       <div
//         key={item.id ?? i}
//         className="border border-dark rounded-3 p-2 mx-2"
//         style={{ width: 210 }}
//       >
//         <img
//           src={item.image}
//           alt={item.name}
//           className="w-100 rounded-3"
//           style={{ height: "200px", objectFit: "cover" }}
//         />
//         <p className="text-center mt-2 fw-bold">{item.name}</p>
//       </div>
//     ));

//   return (
//     <Container>
//       <div className="d-flex justify-content-between align-items-center">
//         <h3 className="text-secondary">{title}</h3>
//         <Button
//           variant="secondary"
//           className="rounded-4 text-white"
//           onClick={() => navigation("/products")}
//         >
//           {all}
//         </Button>
//       </div>

//       <div style={{ padding: "40px" }}>
//         <Carousel
//           autoPlay
//           arrows
//           swipeable
//           draggable
//           responsive={responsive}
//           infinite
//           autoPlaySpeed={2500}
//           keyBoardControl
//           transitionDuration={500}
//           containerClass="carousel-container"
//           // removeArrowOnDeviceType={["tablet", "mobile"]}
//           itemClass="carousel-item-padding-40-px"
//         >
//           {renderCategory(displayData)}
//         </Carousel>
//       </div>
//     </Container>
//   );
// }
import "./carousel.css";

import Container from "react-bootstrap/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

type Category = {
  id: string;
  name: string;
  description?: string;
  desc?: string;
  image: string;
  rating?:string;
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
  {
    id: "1",
    name: "Flower",
    image: "/img/Home/category/1.png",
    description: "Elegant blooms",
  },
  {
    id: "2",
    name: "Tulip",
    image: "/img/Home/category/2.png",
    description: "Bright colors",
  },
  {
    id: "3",
    name: "Rose",
    image: "/img/Home/category/3.png",
    description: "Classic beauty",
  },
];

export default function MultiImageSlider({
  title,
  all,
  data,
}: MultiImageSliderProps) {
  const displayData = data?.length ? data : defaultCategories;
  const navigate = useNavigate();

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="text-secondary fw-bold">{title}</h3>
        <Button
          variant="secondary"
          className="rounded-4 text-white px-4"
          onClick={() => navigate("/products")}
        >
          {all}
        </Button>
      </div>

      <Carousel
        autoPlay
        arrows
        swipeable
        draggable
        responsive={responsive}
        infinite
        autoPlaySpeed={2500}
        keyBoardControl
        transitionDuration={600}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {displayData.map((item) => (
          <div
            key={item.id}
            // className="border border-dark rounded-3 p-2 mx-2"
            className="category-card-small mx-2"
            style={{ width: 210 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-100 rounded-3"
              style={{ height: "200px", objectFit: "cover" }}
            />
            {/* <p className="text-center mt-2 fw-bold">{item.name}</p> */}
            <div className="category-text">
              <h6 className="m-2">{item.name}</h6>
              <p>
                {item.description
                  ? item.description.split(" ").slice(0, 6).join(" ") + "..."
                  : ""}
              </p>
              <p>
                {item.desc
                  ? item.desc.split(" ").slice(0, 6).join(" ") + "..."
                  : ""}
              </p>
              <p className="fw-bold">{item.rating? item.rating : ""}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </Container>
  );
}
