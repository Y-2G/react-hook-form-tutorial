import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
}

const App = () => {
  const { register, setValue, handleSubmit } = useForm<FormData>()
  const onSubmit = handleSubmit(({firstName, lastName}) => { 
    console.log(firstName, lastName);
  }) 

  return (
    <form onSubmit={onSubmit}>

      <label>First Name</label>
      <input type="text" name="firstName" ref={register} />

      <br />

      <label>Last Name</label>
      <input type="text" name="lastName" ref={register} />

      <button
        type="button"
        onClick={() => {
          setValue("lastName", "luo");
          setValue("firstName", true);
        }}
      >
        SetValue
      </button>

    </form>
  );
}

export default App