import { authReducer } from "../../../auth/context/authReducer";
import { types } from "../../../auth/types";

describe("pruebas en authReducer.js", () => {
  const newUser = {
    id: "CBA",
    name: "Karla Valle",
  };

  const initialState = {
    logged: false,
    user: {
      id: "ABC",
      name: "Francisco Valle",
    },
  };

  test("debe retornar el estado por defecto", () => {
    const state = authReducer(initialState, {});
    expect(state).toBe(initialState);
  });

  test("debe de (login) llamar el login autenticar y establecer el user", () => {
    const action = {
      type: types.login,
      payload: newUser,
    };

    const newState = authReducer(initialState, action);

    expect(newState.logged).toBeTruthy();
    expect(newState.user).toBe(newUser);
  });
  test("debe de (logout) borrar el name del usuario y logged en false", () => {
    const action = {
      type: types.logout,
    };
    const newState = authReducer(initialState, action);

    expect(newState.logged).toBeFalsy();
    expect(newState.user).toBeUndefined();
  });
});
