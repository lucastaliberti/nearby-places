import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export function useGetPlacesQuery(location: string) {
  const GET_PLACES_QUERY = gql`
    query GetPlaces($location: String!) {
      getPlaces(geocodableLocation: $location) {
        id
        name
        formattedAddress
      }
    }
  `;

  return useLazyQuery(GET_PLACES_QUERY, {
    variables: { location }
  });
}
