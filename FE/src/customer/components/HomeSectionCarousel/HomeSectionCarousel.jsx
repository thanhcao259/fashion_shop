import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({ data }) => {
  const customeResponsive = {
    0: { items: 1 },
    500: { items: 2 },
    850: { items: 3 },
    1100: { items: 3.5 },
    1230: {items: 4},
    1350: { items: 4.3 },
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  }
  const slideNext = () => {
    if (activeIndex < data.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  }
  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item)
  }
  const items = data.slice(0, 10).map((item) => (
    <HomeSectionCard key={item.id} product={item} />
  ));

  return (
    <div className="relative px-5  lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={customeResponsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {activeIndex !== items.length - 1 &&
          (<Button onClick={slideNext}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(40%) translateY(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon onClick={slideNext}
              sx={{
                transform: "rotate(90deg)",
                color: "black",
              }}
            />
          </Button>)}

        {activeIndex !== 0 &&
          (<Button onClick={slidePrev}
            variant="contained"
            className="z-50 bg-white"

            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-30%) translateY(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon onClick={slidePrev}
              sx={{
                transform: "rotate(-90deg)",
                color: "black",
              }}
            />
          </Button>)}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
