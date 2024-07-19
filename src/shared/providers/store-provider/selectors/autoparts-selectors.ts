import { RootState } from "../model/store";

const selectAutoparts = (state: RootState) => state.autoparts.autoparts;
const selectIsLoading = (state: RootState) => state.autoparts.isLoading;
const selectError = (state: RootState) => state.autoparts.error;

export {
  selectAutoparts,
  selectIsLoading,
  selectError,
}