import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";

const FilterFields = ({
  location,
  setLocation,
  tournamentType,
  setTournamentType,
  calendarDate,
  setCalendarDate,
  handleFilterChange,
}) => {
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    handleFilterChange({ location: e.target.value });
  };

  const handleTournamentTypeChange = (e) => {
    setTournamentType(e.target.value);
    handleFilterChange({ tournamentType: e.target.value });
  };

  const handleCalendarChange = (e) => {
    setCalendarDate(e.target.value);
    handleFilterChange({ calendarDate: e.target.value });
  };

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "primary.main",
      },
      "&:hover fieldset": {
        borderColor: "primary.main",
      },
      "&.Mui-focused fieldset": {
        borderColor: "primary.main",
      },
    },
  };

  return (
    <div className="filter-fields">
      <TextField
        id="location"
        variant="outlined"
        type="text"
        placeholder="Lisboa"
        size="small"
        color="primary"
        value={location}
        onChange={handleLocationChange}
        sx={textFieldStyles}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="tournament-type"
        variant="outlined"
        type="text"
        placeholder="Social"
        size="small"
        color="primary"
        value={tournamentType}
        onChange={handleTournamentTypeChange}
        sx={textFieldStyles}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SportsHandballIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
      <DatePicker
        variant="outlined"
        inputFormat="dd/MM/yyyy"
        size="small"
        value={calendarDate}
        onChange={handleCalendarChange}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={textFieldStyles}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <EventIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default FilterFields;
