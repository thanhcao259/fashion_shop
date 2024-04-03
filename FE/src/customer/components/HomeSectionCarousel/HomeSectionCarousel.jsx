import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_data } from "../../../Data/mens";

const HomeSectionCarousel = () => {
  const customeResponsive = {
    0: { items: 1 },
    500: { items: 2 },
    720: { items: 3 },
    1024: { items: 4.2 },
    1350: { items: 5 },
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const slidePrev = () => {
    setActiveIndex(activeIndex - 1);
  }
  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
  }
  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item)
  }
  const items = mens_data.slice(0,5).map((item) => <HomeSectionCard product={item}/>);

  return (
    <div className="relative px-5  lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          // autoPlay
          // autoPlayInterval={5000}
          // infinite
          responsive={customeResponsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {activeIndex !== items.length - 3 && <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(40%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{
              transform: "rotate(90deg)",
              color: "black",
            }}
          />
        </Button>}

        {activeIndex !== 0 && <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-10%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="previous"
        >
          <KeyboardArrowLeftIcon
            sx={{
              transform: "rotate(-90deg)",
              color: "black",
            }}
          />
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
