import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../auth";
import { NavBar } from "../../../heroes";
import { MemoryRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Pruebas en <NavBar/>", () => {
  test("el nombre de la persona logueada es mostrado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Cecy",
        id: "ABC123",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <NavBar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // screen.debug();
    expect(screen.getByText(contextValue.user.name)).toBeTruthy();
  });

  test("al dar en click logout se llama el navigate con sus dos argumentos y la funcion logout", () => {
    const contextValue = {
      logout: jest.fn(),
      logged: true,
      user: {
        name: "Cecy",
        id: "ABC123",
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <NavBar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    fireEvent.click(logoutButton);

    expect(contextValue.logout).toHaveBeenCalled();

    expect(mockedUsedNavigate).toHaveBeenCalled();
  });
});
