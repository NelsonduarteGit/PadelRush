import React, { useState, useEffect } from "react";

import FilterFields from "./FilterFields";

const FilterBar = ({ handleFilterChange }) => {
  const [location, setLocation] = useState("");
  const [tournamentType, setTournamentType] = useState("");
  const [calendarDate, setCalendarDate] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (isMobile) {
    return (
      <>
        <button onClick={toggleModal}>Procurar</button>
        {isModalOpen && (
          <div className="filter-modal">
            <FilterFields
              location={location}
              setLocation={setLocation}
              tournamentType={tournamentType}
              setTournamentType={setTournamentType}
              calendarDate={calendarDate}
              setCalendarDate={setCalendarDate}
              handleFilterChange={handleFilterChange}
            />
          </div>
        )}
      </>
    );
  }

  return (
    <div className="filter-bar">
      <FilterFields
        location={location}
        setLocation={setLocation}
        tournamentType={tournamentType}
        setTournamentType={setTournamentType}
        calendarDate={calendarDate}
        setCalendarDate={setCalendarDate}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default FilterBar;
