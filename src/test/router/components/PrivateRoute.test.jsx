import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../../auth";
import { PrivateRoute } from "../../../router/components/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <PrivateRoute/>", () => {
  test("Debe de mostrar el children si está autenticado", () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: "XYZ",
        name: "Carolina",
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["marvel"]}>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // screen.debug();
    expect(screen.getByText("Ruta privada")).toBeTruthy();

    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "marvel");
  });
});
