import * as React from "react";
import { render } from "@testing-library/react";
import ResultsListing from "./ResultsListing";

it("renders empty initially", () => {
  const { queryByTestId } = render(<ResultsListing loading={false} />);
  const loadingIcon = queryByTestId("loadingIcon");
  expect(loadingIcon).toBeNull();
});

it("renders the loading icon", () => {
  const { getByTestId } = render(<ResultsListing loading={true} />);
  const loadingIcon = getByTestId("loadingIcon");
  expect(loadingIcon).toBeInTheDocument();
});

it("renders the error message", () => {
  const message = "Testy Error";
  const { getByText } = render(
    <ResultsListing loading={false} error={{ message }} />
  );
  const errorMessage = getByText(message);
  expect(errorMessage).toBeInTheDocument();
});

it("renders a table with data", () => {
  const data = {
    getPlaces: [
      {
        id: "test",
        name: "Testerson",
        formattedAddress: ["Testy Avenue"]
      }
    ]
  };
  const { getByRole } = render(<ResultsListing loading={false} data={data} />);
  const table = getByRole("table");
  expect(table).toBeInTheDocument();
});
