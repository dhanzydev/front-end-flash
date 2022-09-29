import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Container } from "react-bootstrap";
import { carouselItem } from "../../data";
import "./index.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2 },
};

const items = carouselItem.map((item) => {
  return (
    <div className="m-3" data-value={item.id}>
      <img src={item.img} className="img-fluid rounded w-100" alt="" />
    </div>
  );
});

const Carousel = () => {
  return (
    <div>
      <Container>
        <AliceCarousel
          infinite
          items={items}
          mouseTracking
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={2500}
          responsive={responsive}
          controlsStrategy="responsive"
          disableButtonsControls
        />
      </Container>
    </div>
  );
};

export default Carousel;
