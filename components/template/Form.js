'use client'
import { useRef } from "react";
const Form = ({ action, ...props }) => {
  const formRef = useRef(null);
  const handleSubmit = async (formData) => {
    const form = formRef.current
    await action(formData, form)
  }
  return (
    <form {...props} ref={formRef} action={handleSubmit} />
  );
};

export default Form;