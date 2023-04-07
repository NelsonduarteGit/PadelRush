import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    id: 1,
    src: "/assets/padelhub/template.jpg",
    clubUrl: "https://www.example.com/club1",
  },
  {
    id: 2,
    src: "/assets/padelhub/template.jpg",
    clubUrl: "https://www.example.com/club2",
  },
  {
    id: 3,
    src: "/assets/padelhub/template.jpg",
    clubUrl: "https://www.example.com/club3",
  },
];

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <Box
      className={className}
      onClick={onClick}
      sx={{ position: "absolute", top: "50%", left: "5px", zIndex: "1" }}
    >
      <Typography variant="h4">&#10094;</Typography>
    </Box>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <Box
      className={className}
      onClick={onClick}
      sx={{ position: "absolute", top: "50%", right: "5px", zIndex: "1" }}
    >
      <Typography variant="h4">&#10095;</Typography>
    </Box>
  );
};

const HeroSection = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const handleVisitClub = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1200px",
        minWidth: "80vw",
        margin: "0 auto",
        marginTop: "30px",
        marginBottom: "30px",
        borderRadius: "15px",
        overflow: "hidden",
        position: "relative",
        border: "2px solid red",
        maxHeight: "70vh",
      }}
    >
      <Slider {...settings}>
        {images.map((image) => (
          <Box
            key={image.id}
            sx={{
              height: "0",
              paddingTop: "50%",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                component="img"
                src={image.src}
                alt=""
                sx={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleVisitClub(image.clubUrl)}
              >
                Visitar clube
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection;
