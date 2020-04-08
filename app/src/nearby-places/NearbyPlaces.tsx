import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { useGetPlacesQuery } from "./useGetPlacesQuery";
import SearchInput from "./SearchInput";

export function NearbyPlaces() {
  const { loading, error, data } = useGetPlacesQuery("Chicago, IL");
  return (
    <>
      <SearchContainer>
        <SearchInput />
      </SearchContainer>
      {loading && <FontAwesomeIcon icon={faSpinner} spin />}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
}

const SearchContainer = styled.div`
  background: rgba(45, 91, 227, 0.3);
`;

