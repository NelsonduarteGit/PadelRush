import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faHome,
  faCocktail,
  faTrophy,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

const IconSection = () => {
  const [selectedIconIndex, setSelectedIconIndex] = useState(null);
  const [iconData, setIconData] = useState({
    outdoor: {
      icon: faSun,
      description: "Outdoor",
    },
    indoor: {
      icon: faHome,
      description: "Indoor",
    },
    social: {
      icon: faCocktail,
      description: "Social",
    },
    federados: {
      icon: faTrophy,
      description: "Federados",
    },
    mistos: {
      icon: faUserFriends,
      description: "Mistos",
    },
  });

  const handleIconClick = (index) => {
    setSelectedIconIndex(index);
  };

  return (
    <Box
      sx={{
        width: "90vw",
        maxWidth: "1200px",
        minWidth: "80vw",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "1.5rem 0",
        cursor: "pointer",
      }}
    >
      {Object.values(iconData).map((icon, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: selectedIconIndex === index ? "black" : "grey",
            borderBottom:
              selectedIconIndex === index ? "1px solid black" : "none",
          }}
          onClick={() => handleIconClick(index)}
        >
          <FontAwesomeIcon icon={icon.icon} size="l" />
          <Typography
            variant="h5"
            sx={{ marginTop: "0.5rem", fontSize: "13px" }}
          >
            {icon.description}
          </Typography>
        </Box>
      ))}

      <Box>
        <Button variant="contained" color="neutral">
          Filter
        </Button>
      </Box>
    </Box>
  );
};

export default IconSection;
