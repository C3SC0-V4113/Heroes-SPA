import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../../router/components/PublicRoute";
import { AuthContext } from "../../../auth";

describe("pruebas en <PublicRoute/>", () => {
  test("Debe de mostrar el children si no está autenticado", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    // screen.debug();
    expect(screen.getByText("Ruta publica")).toBeTruthy();
  });

  test("debe de navegar si no esta autenticado", () => {});
});
