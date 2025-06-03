import { ChangeEvent } from "react";

export const handleFormChange = <T extends Record<string, string>>(
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setFormData: React.Dispatch<React.SetStateAction<T>>
) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value,
  }));

  // setFormData(prev => {
  //   console.log({ ...prev, [name]: value });
  //   return { ...prev, [name]: value };
  // });
};
