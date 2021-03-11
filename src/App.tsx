import React from "react";
import Select from "react-select";
import Input from "@material-ui/core/Input";
import { Input as InputField } from "antd";
import { useForm, Controller } from "react-hook-form";


const App = () => {
  const { control, handleSubmit, setValue, register } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const handleChange = (e: any) => {
    setValue("AntdInput", e.target.value);
  }

  React.useEffect(() => {
    register("AntdInput")
  }, [register])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller 
        name="componetName"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => <input onChange={onChange} value={value} />}
      />

      <Controller 
        name="muiName"
        control={control}
        defaultValue=""
        as={<Input name="muiName" />}
        // render={({ onChange, value }) => <Input onChange={onChange} value={value} />}
      />

      <InputField name="antdName" onChange={handleChange} />

      <Controller 
        name="iceCreamType"
        control={control}
        options={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" }
        ]}
        as={Select}
      />

      <input type="submit" />
    </form>
  )

}

export default App