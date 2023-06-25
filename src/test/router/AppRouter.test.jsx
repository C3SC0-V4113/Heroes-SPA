import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth";
import { AppRouter } from "../../router/AppRouter";

describe("pruebas en <AppRouter/>", () => {
  test("debe de mostrar el login si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };

    const router = createMemoryRouter(AppRouter, {
      initialEntries: ["/marvel", "/login"],
      initialIndex: 1,
    });

    render(
      <AuthContext.Provider value={contextValue}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    );

    expect(screen.getAllByText("Login").length).toBe(2);
  });

  test("debe de mostrar el componente de Marvel si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Cecy",
        id: "ABC123",
      },
    };
    const router = createMemoryRouter(AppRouter, {
      initialEntries: ["/", "/marvel"],
      initialIndex: 1,
    });

    render(
      <AuthContext.Provider value={contextValue}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    );

    // screen.debug();
    expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
  });
});
