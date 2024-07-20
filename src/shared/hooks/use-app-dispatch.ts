import { useDispatch } from "react-redux";
import { AppDispatch } from "../providers/store-provider/model/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()