import Lottie from "lottie-react";
import flowerAnimation from "../../../public/cherry flowers (1).json";
export default function NotFound() {
  return (
    <>
      <div style={{ height: "95vh" }}>
        <Lottie animationData={flowerAnimation} loop={true} />
      </div>
      <div className="position-absolute top-50 " style={{ right: "20%" }}>
        <h1 style={{fontSize:"60px", textAlign:"center"}}>404</h1>
        <h1 className="fs-1">Not Found</h1>
      </div>
    </>
  );
}
