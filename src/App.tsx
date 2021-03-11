import React from "react";
import { useForm } from "react-hook-form";


const App = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true })} />
      {errors.firstName && "First name is required"}
      <input name="lastName"  ref={register({ required: true })} />
      {errors.lastName && "Last name is required"}
      <input type="submit" />
    </form>
  );
}

export default App