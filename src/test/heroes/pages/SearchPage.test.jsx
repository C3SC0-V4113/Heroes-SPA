import { render, screen } from "@testing-library/react";
import { SearchPage } from "../../../heroes/pages/SearchPage";
import { MemoryRouter } from "react-router-dom";

describe("pruebas en <SearchPage/>", () => {
  test("debe de mostrarse correctamente con valores por defecto", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();

    screen.debug();
  });
});
