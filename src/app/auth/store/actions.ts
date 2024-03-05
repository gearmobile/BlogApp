import {createActionGroup, emptyProps} from "@ngrx/store";

export const authActions = createActionGroup({
  source: "auth",
  events: {
    authenticated: emptyProps(),
    unauthenticated: emptyProps(),
  },
});
