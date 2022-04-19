import React from "react";
import useNewSubForm from "../hooks/useNewSubForm";
import { Sub } from "../types";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

export const Form = ({ onNewSub }: FormProps) => {
  const { formState, changeValue, clearForm } = useNewSubForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(formState);
    handleClear();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    changeValue(name, value);
  };

  const handleClear = () => {
    clearForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={formState.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />

        <input
          onChange={handleChange}
          value={formState.subMonths}
          type="text"
          name="subMonths"
          placeholder="subMonths"
        />

        <input
          onChange={handleChange}
          value={formState.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />

        <textarea
          onChange={handleChange}
          value={formState.description}
          name="description"
          placeholder="description"
        />

        <button onClick={handleClear} type="button">
          Clear the form
        </button>
        <button type="submit">Save new sub!</button>
      </form>
    </div>
  );
};
