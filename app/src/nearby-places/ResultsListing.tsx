import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface ResultsListingProps {
  location?: string;
  loading: boolean;
  error?: { message: string };
  data?: object;
}

function ResultsListing({
  location,
  loading,
  error,
  data
}: ResultsListingProps) {
  if (loading) {
    return <FontAwesomeIcon icon={faSpinner} spin size="6x" />;
  }

  if (error) {
    return <h2>{error.message || "Sorry, we got an unexpected error"}</h2>;
  }

  if (data) {
    return (
      <>
        <CityLabelHeader>
          <ListName>Nearby places to</ListName>
          <LocationName>{location}</LocationName>
        </CityLabelHeader>

        {JSON.stringify(data, null, 2)}
      </>
    );
  }

  return <></>;
}

const CityLabelHeader = styled.h2`
  font-size: 21px;
  line-height: 140%;
  position: relative;
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ListName = styled.span``;

const LocationName = styled.span`
  background: #fff;
  font-weight: 500;
  padding: 0 10px;
  position: relative;
`;

export default ResultsListing;
