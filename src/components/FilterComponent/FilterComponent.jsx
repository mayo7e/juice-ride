import React from 'react';
import { FilterContainer, Input, Button } from './FilterComponent.styles';

const FilterComponent = () => {
  return (
    <FilterContainer>
      <h2>Find Charging Stations</h2>
      <Input type="text" placeholder="Enter starting location" />
      <Input type="text" placeholder="Enter destination" />
      <Button>Find Route</Button>
      {/* Additional filter options can go here */}
    </FilterContainer>
  );
};

export default FilterComponent;
