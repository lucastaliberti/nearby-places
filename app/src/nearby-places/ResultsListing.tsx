import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface ResultsListingProps {
  location?: string;
  loading: boolean;
  error?: { message: string };
  data?: {
    getPlaces: Array<{
      id: string;
      name: string;
      formattedAddress: string[];
    }>;
  };
}

function ResultsListing({
  location,
  loading,
  error,
  data
}: ResultsListingProps) {
  if (loading) {
    return <LoadingIcon icon={faSpinner} spin size="6x" />;
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
        <Table>
          <thead>
            <tr>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Address</TableHeadCell>
            </tr>
          </thead>
          <tbody>
            {data.getPlaces.map(venue => (
              <TableDataRow key={venue.id}>
                <TableDataCell>{venue.name}</TableDataCell>
                <TableDataCell>
                  {venue.formattedAddress && venue.formattedAddress.join(", ")}
                </TableDataCell>
              </TableDataRow>
            ))}
          </tbody>
        </Table>
      </>
    );
  }

  return <></>;
}

const LoadingIcon = styled(FontAwesomeIcon)`
  display: block;
  margin: auto;
`;

const CityLabelHeader = styled.h2`
  font-size: 21px;
  line-height: 140%;
  position: relative;
  width: 50%;
  margin: 0 auto;
`;

const ListName = styled.span``;

const LocationName = styled.span`
  background: #fff;
  font-weight: 500;
  padding: 0 10px;
  position: relative;
`;

const Table = styled.table`
  margin: 30px auto 0;
  color: #4e595d;
`;

const TableDataRow = styled.tr`
  border-top: 1px solid #efeff4;
`;

const TableDataCell = styled.td`
  height: 40px;
  padding: 10px 20px;
  vertical-align: middle;
`;

const TableHeadCell = styled(TableDataCell)`
  font-weight: bold;
`;

export default ResultsListing;
