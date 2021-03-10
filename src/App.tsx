import React from "react";
import { useForm } from "react-hook-form";

const Input = ({ label, register, required }: any ) => ( 
  <>
    <label>{label}</label>
    <input name={label} ref={register({ required })} />
  </>
);

const Select = React.forwardRef(({ label }: any, ref: any) => (
  <>
    <label>{label}</label>
    <select name={label} ref={ref}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
))

const App = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any)=> console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
      <Select label="Age" ref={register} />
      <input type="submit" />
    </form>
  )

}

export default App