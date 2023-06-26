import { fireEvent, render, screen } from "@testing-library/react";
import { SearchPage } from "../../../heroes/pages/SearchPage";
import { MemoryRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  jest.clearAllMocks();
});

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

  test("debe de mostrar un error si no se encuentra el hero (batman123)", () => {
    const inputValue = "batman123";
    render(
      <MemoryRouter initialEntries={[`/search?q=${inputValue}`]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    const divNotFound = screen.getByLabelText("div_not-found");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    screen.debug();
    expect(divNotFound.style.display).toBe("");
  });

  test("debe de llamar el navigate a la pantalla nueva", () => {
    const inputValue = "batman123";
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(mockedUsedNavigate).toHaveBeenCalledWith(
      `?q=${inputValue.toLowerCase()}`
    );
  });
});
