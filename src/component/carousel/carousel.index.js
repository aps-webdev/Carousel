import { useState } from "react";
import "./carousel.styles.scss";
import Images from "./images.index";
import img1 from "../../utils/image/jr-korpa-krkc41IZwtU-unsplash.jpg";
import img2 from "../../utils/image/jose-pedro-ortiz-1CkoH0n6oys-unsplash.jpg";
import img3 from "../../utils/image/immm.jpg";
import img4 from "../../utils/image/kevin-solbrig-cYrfEMdPwOw-unsplash.jpg";
import img5 from "../../utils/image/li-lin-HBPQ3ikDitM-unsplash.jpg";
import leftArrow from "../../utils/image/left-arrow.png";
import rightArrow from "../../utils/image/right-arrow.png";
const img = [
  <Images src={img1} />,
  <Images src={img2} />,
  <Images src={img3} />,
  <Images src={img4} />,
  <Images src={img5} />,
];
const Carousel = () => {
  const [x, setX] = useState(0);
  const prevSlide = () => {
    x === 0 ? setX(-100 * (img.length - 1)) : setX(x + 100);
  };
  const nextSlide = () => {
    x === -100 * (img.length - 1) ? setX(0) : setX(x - 100);
  };
  const handleDotClick = (index) => {
    setX(-100 * index);
  };
  return (
    <div className="carouselContainer">
      {img.map((item, index) => {
        return (
          <div
            key={index}
            className="carouselImage"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button
        className="carouselButtonWrap carouselButtonWrap_left"
        onClick={prevSlide}
      >
        <img src={leftArrow} className="carouselButton" alt="left-arrow" />
      </button>
      <button
        className="carouselButtonWrap carouselButtonWrap_right"
        onClick={nextSlide}
      >
        <img src={rightArrow} className="carouselButton" alt="right-arrow" />
      </button>
      <div className="carouselDotWrap">
        {img.map((i, index) => {
          return (
            <div
              key={index}
              className={
                x === -100 * index
                  ? "carouselDot carouselDot_mark"
                  : "carouselDot"
              }
              onClick={() => handleDotClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Carousel;
