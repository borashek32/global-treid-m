import { useSelector } from "react-redux";
import { RootState } from "@/shared/providers/store-provider/model/store";

export const useAppSelector = useSelector.withTypes<RootState>()