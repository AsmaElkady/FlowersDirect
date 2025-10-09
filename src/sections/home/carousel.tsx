import Container from "react-bootstrap/esm/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/esm/Button";

type Item = { id?: number; src: string; name: string ; price?: number}

interface MultiImageSliderProps {
  title: string;
  all: string;
  items?: Item[];
}
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.2,
  },
};



export default function MultiImageSlider({ title, all, items = [] }: MultiImageSliderProps) {

  const defultProduct : Item[] = [
    { id: 1, src: "/img/Home/category/1.png" , name : "flower" , price : 100},
    { id: 2, src: "/img/Home/category/2.png" , name : "flower" , price : 200},
    { id: 3, src: "/img/Home/category/3.png" , name : "flower" , price : 300},
    { id: 4, src: "/img/Home/category/4.png" , name : "flower" , price : 400},
    { id: 5, src: "/img/Home/category/5.png" , name : "flower" , price : 500},
    { id: 6, src: "/img/Home/category/6.png" , name : "flower" , price : 600},
    { id: 7, src: "/img/Home/category/1.png" , name : "flower" , price : 100},
  ]

  const renderProduct = (data:Item[])=>
    data.map((item, i) => (
      <div key={item.id ?? i} className="border border-dark rounded-3 p-2 mx-2 " style={{ width: 210 }}>
        <img
          src={item.src}
          alt={item.name}
          className="w-100 rounded-3"
          style={{ height: "200px", objectFit: "cover" }} />
        <p className="text-center mt-2 fw-bold">{item.name}</p>
      </div>
    ))
  
  return (
    <>

      <Container >

        <div className="d-flex justify-content-between">
          <h3 className="text-secondary">{title}</h3>
          <Button variant="secondary" className="  rounded-4 text-white" >{all} </Button>

        </div>
        <div style={{ padding: "40px" }}>
          <Carousel

            autoPlay={true}
            arrows={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={2500}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >


            {renderProduct(items.length ? items : defultProduct )}
            {/* {items.length ? (items.map((item, i) => (
              <div key={item.id ?? i} className="border border-dark rounded-3 p-2 mx-2 " style={{ width: 210 }}>
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-100 rounded-3"
                  style={{ height: "200px", objectFit: "cover" }} />
                <p className="text-center mt-2 fw-bold">{item.name}</p>
              </div>
            ))
            ) : (
              <>

                <div className="border border-dark rounded-3 p-2 mx-2 " style={{ width: 210 }}>
                  <img
                    src="/img/Home/category/1.png"
                    alt="flower1"
                    className="w-100 rounded-3"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <p className="text-center mt-2 fw-bold">Name 1</p>
                </div>

                <div className="border border-dark rounded-3 p-2 mx-2 " style={{ width: 210 }}>
                  <img
                    src="/img/Home/category/2.png"
                    alt="flower1"
                    className="w-100 rounded-3"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <p className="text-center mt-2 fw-bold">Name 1</p>
                </div>

                <div className="border border-dark rounded-3 p-2 mx-2 " style={{ width: 210 }}>
                  <img
                    src="/img/Home/category/3.png"
                    alt="flower1"
                    className="w-100 rounded-3"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <p className="text-center mt-2 fw-bold">Name 1</p>
                </div>

                <div className="border border-dark rounded-3 p-2 mx-2 " style={{ width: 210 }}>
                  <img
                    src="/img/Home/category/4.png"
                    alt="flower1"
                    className="w-100 rounded-3"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <p className="text-center mt-2 fw-bold">Name 1</p>
                </div>

                <div className="border border-dark rounded-3 p-2 mx-2 " style={{ width: 210 }}>
                  <img
                    src="/img/Home/category/5.png"
                    alt="flower1"
                    className="w-100 rounded-3"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <p className="text-center mt-2 fw-bold">Name 1</p>
                </div>

                <div className="border border-dark rounded-3 p-2 mx-2 " style={{ width: 210 }}>
                  <img
                    src="/img/Home/category/6.png"
                    alt="flower1"
                    className="w-100 rounded-3"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <p className="text-center mt-2 fw-bold">Name 1</p>
                </div>

                <div className="border border-dark rounded-3 p-2 mx-2 " style={{ width: 210 }}>
                  <img
                    src="/img/Home/category/6.png"
                    alt="flower1"
                    className="w-100 rounded-3"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <p className="text-center mt-2 fw-bold">Name 1</p>
                </div>
              </> */}
            {/* )} */}
          </Carousel>
        </div>
      </Container>
    </>
  );
}
