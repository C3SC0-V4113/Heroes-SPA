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

    // screen.debug();
  });

  test("debe de mostrar a batman y el input con el valor de queryString", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("batman");

    const img = screen.getByRole("img");
    expect(img.src).toContain("/heroes/dc-batman.jpg");

    const divSearch = screen.getByLabelText("div_search");
    expect(divSearch.style.display).toBe("none");
  });
});
