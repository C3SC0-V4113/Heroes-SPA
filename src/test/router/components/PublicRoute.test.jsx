import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../../router/components/PublicRoute";
import { AuthContext } from "../../../auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";

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

  test("debe de navegar si no esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Cecy",
        id: "ABC123",
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="login" element={<h1>Ruta publica</h1>} />
            </Route>

            <Route path="/" element={<h1>Pagina Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Pagina Marvel")).toBeTruthy();
  });
});
