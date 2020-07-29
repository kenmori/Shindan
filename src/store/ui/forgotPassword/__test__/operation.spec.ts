import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as Types from "../types";

export const mockStore = configureMockStore([thunk]);

import * as Operaitons from "../operations";
import * as Actions from "../actions";

describe("fafa", () => {
  it("fafa", async () => {
    // const store = mockStore();
    // store.dispatch()
    const dispatch = jest.fn();
    const getState = jest.fn();
    await Operations.postForgotPasswordRequest()(dispatch, getState);
    expect(dispatch).toBeCalledWith({
      type: Types.POST_FORGOT_PASSWORD,
      payload,
    });
  });
});
