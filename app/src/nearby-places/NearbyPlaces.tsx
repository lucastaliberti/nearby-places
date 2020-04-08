import React, { useState } from "react";
import styled from "styled-components";

import { useGetPlacesQuery } from "./useGetPlacesQuery";
import SearchInput from "./SearchInput";
import ResultsListing from "./ResultsListing";

export function NearbyPlaces() {
  const [location, setLocation] = useState();
  const [getPlaces, queryResults] = useGetPlacesQuery(location);

  return (
    <>
      <SearchContainer>
        <SearchInput
          handleLocationChange={setLocation}
          handleSearchDispatch={getPlaces}
        />
      </SearchContainer>
      <ResultsWrapper>
        <ResultsListing location={location} {...queryResults} />
      </ResultsWrapper>
    </>
  );
}

const SearchContainer = styled.div`
  background: rgba(45, 91, 227, 0.3);
`;

const ResultsWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0 0 0;
  @media (max-width: 768px) {
    width: auto;
  }
`;
