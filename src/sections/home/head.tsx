
import Button from 'react-bootstrap/Button';
import "../../style/home/head.css"
import Carousel from 'react-bootstrap/Carousel';

export default function HeadConponent() {

    return (
        <>

            <div className="carousel-container position-relative ">

                <Carousel controls={false}>
                    <Carousel.Item interval={3000} style={{ height: "90vh" }}>
                        <img
                            src="/img/Home/1.png"
                            alt="slide 1"
                            className="d-block w-100"
                            style={{ objectFit: "cover", height: "100%" }}
                        />                    </Carousel.Item>
                    <Carousel.Item interval={3000} style={{ height: "90vh" }}>
                        <img
                            src="/img/Home/2.png"
                            alt="slide 2"
                            className="d-block w-100"
                            style={{ objectFit: "cover", height: "100%" }}
                        />                    </Carousel.Item>
                    <Carousel.Item interval={3000} style={{ height: "90vh" }}>
                        <img
                            src="/img/Home/3.png"
                            alt="slide 3"
                            className="d-block w-100"
                            style={{ objectFit: "cover", height: "100%" }}
                        />                    </Carousel.Item>
                    <Carousel.Item interval={3000} style={{ height: "90vh" }}>
                        <img
                            src="/img/Home/4.png"
                            alt="slide 4"
                            className="d-block w-100"
                            style={{ objectFit: "cover", height: "100%" }}
                        />
                    </Carousel.Item>
                </Carousel>



                <header className=" header-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-center">
                    <div className='headerText' >
                        <h4 className='text-primary fs-1'>FRESH WHOLESALE FLOWERS</h4>
                        <h4 className='line text-primary'>DIRECT TO YOU</h4>
                        <Button variant="secondary" className=" rounded-4 text-white position-relative" >START SHOPPING</Button>
                    </div>
                </header>
            </div>
        </>
    )
}