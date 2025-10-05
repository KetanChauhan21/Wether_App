import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, getApiOptions } from "../../api.js";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        getApiOptions
      );
      const data = await response.json();

      if (!data || !data.data) return { options: [] };

      return {
        options: data.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        })),
      };
    } catch (error) {
      console.error("Error fetching cities:", error);
      return { options: [] };
    }
  };

  const handleOnChange = (searchdata) => {
    setSearch(searchdata);
    onSearchChange(searchdata);
  };
  return (
    <AsyncPaginate
      placeholder="Search for City..."
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
