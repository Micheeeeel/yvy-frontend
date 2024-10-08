import React, { useState } from "react";

interface SearchFormProps {
  onFilterChange: (country: string, type: string) => void;
  countries: string[];
  types: string[];
}

const SearchForm: React.FC<SearchFormProps> = ({
  onFilterChange,
  countries,
  types,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    onFilterChange(e.target.value, selectedType);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
    onFilterChange(selectedCountry, e.target.value);
  };

  return (
    <div className="px-10 py-5">
      <div className="divider divider-primary font-bold text-4xl">MISSIONS</div>
      <div className="mb-8 flex flex-row gap-5 justify-evenly">
        <label className="text-outline-secondary text-xl">
          Country:
          <select
            className="select select-ghost w-full max-w-xs border-primary"
            onChange={handleCountryChange}
          >
            <option value="">All</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
        <label className="text-outline-secondary text-xl">
          Type:
          <select
            className="select select-ghost w-full max-w-xs border-primary"
            onChange={handleTypeChange}
          >
            <option value="">All</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default SearchForm;
