import { useCallback, useReducer } from "react";
import { Sub } from "../types";

interface FormState {
  inputValues: Sub;
}

type FormReducerAction =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "clear";
    };

const initialState = {
  nick: "",
  subMonths: 0,
  avatar: "",
  description: "",
};

const formReducer = (
  state: FormState["inputValues"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };

    case "clear":
      return initialState;
  }
};

const useNewSubForm = () => {
  const [inputValues, dispatch] = useReducer(formReducer, initialState);
  const clearForm = useCallback(() => dispatch({ type: "clear" }), []);

  const changeValue = useCallback(
    (name: string, value: string) =>
      dispatch({
        type: "change_value",
        payload: { inputName: name, inputValue: value },
      }),
    []
  );

  return {
    formState: inputValues,
    clearForm,
    changeValue,
  };
};

export default useNewSubForm;
