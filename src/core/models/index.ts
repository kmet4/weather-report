import {LoadingStage} from "../enum";

export type ErrorMessageType = {
  message: string
}

export interface ApiStatusState<T> {
  apiData: T | null;
  apiStatus: LoadingStage | null;
  apiError: ErrorMessageType | null;
}