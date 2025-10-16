// import Container from "react-bootstrap/esm/Container";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Button from "react-bootstrap/esm/Button";
// // import axios from "axios";
// // import { baseUrl } from "../../constants/main";
// // import { useEffect } from "react";

// type Item = { id?: number; src: string; name: string; price?: number }

// interface MultiImageSliderProps {
//   title: string;
//   all: string;
//   items?: Item[];
// }
// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 1024 },
//     items: 4,
//   },
//   desktop: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 768, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1.2,
//   },
// };



// export default function MultiImageSlider({ title, all, items = [] }: MultiImageSliderProps) {


//   const defultProduct: Item[] = [
//     { id: 1, src: "/img/Home/category/1.png", name: "flower", price: 100 },
//     { id: 2, src: "/img/Home/category/2.png", name: "flower", price: 200 },
//     { id: 3, src: "/img/Home/category/3.png", name: "flower", price: 300 },
//     { id: 4, src: "/img/Home/category/4.png", name: "flower", price: 400 },
//     { id: 5, src: "/img/Home/category/5.png", name: "flower", price: 500 },
//     { id: 6, src: "/img/Home/category/6.png", name: "flower", price: 600 },
//     { id: 7, src: "/img/Home/category/1.png", name: "flower", price: 100 },
//   ]

//   const renderProduct = (data: Item[]) =>
//     data.map((item, i) => (
//       <div key={item.id ?? i} className="border border-dark rounded-3 p-2 mx-2 " style={{ width: 210 }}>
//         <img
//           src={item.src}
//           alt={item.name}
//           className="w-100 rounded-3"
//           style={{ height: "200px", objectFit: "cover" }} />
//         <p className="text-center mt-2 fw-bold">{item.name}</p>
//       </div>
//     ))

//   return (
//     <>

//       <Container >

//         <div className="d-flex justify-content-between">
//           <h3 className="text-secondary">{title}</h3>
//           <Button variant="secondary" className="  rounded-4 text-white" >{all} </Button>

//         </div>
//         <div style={{ padding: "40px" }}>
//           <Carousel

//             autoPlay={true}
//             arrows={true}
//             swipeable={true}
//             draggable={true}
//             showDots={false}
//             responsive={responsive}
//             infinite={true}
//             autoPlaySpeed={2500}
//             keyBoardControl={true}
//             transitionDuration={500}
//             containerClass="carousel-container"
//             removeArrowOnDeviceType={["tablet", "mobile"]}
//             dotListClass="custom-dot-list-style"
//             itemClass="carousel-item-padding-40-px"
//           >


//             {renderProduct(items.length ? items : defultProduct)}

//           </Carousel>
//         </div>
//       </Container>
//     </>
//   );
// }

import { useQuery } from "@tanstack/react-query";
import Container from "react-bootstrap/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { baseUrl } from "../../constants/main";
import Spinner from "react-bootstrap/Spinner";

type Category = {
  id: string;
  name: string;
  description?: string;
  image: string;
};

interface MultiImageSliderProps {
  title: string;
  all: string;
}

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1.2 },
};

const fetchCategories = async (): Promise<Category[]> => {
  const res = await axios.get(baseUrl + "categories");
  console.log(res.data)
  return res.data.categories;
};

export default function MultiImageSlider({ title, all }: MultiImageSliderProps) {
  const { data, isLoading, isError } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const defaultCategories: Category[] = [
    { id: "1", name: "Flower", image: "/img/Home/category/1.png" },
    { id: "2", name: "Tulip", image: "/img/Home/category/2.png" },
    { id: "3", name: "Rose", image: "/img/Home/category/3.png" },
  ];

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
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="secondary" />
          </div>
        ) : isError ? (
          <p className="text-center text-danger">Failed to load categories.</p>
        ) : (
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
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px"
          >
            {renderCategory(displayData)}
          </Carousel>
        )}
      </div>
    </Container>
  );
}
