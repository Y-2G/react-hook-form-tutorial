import React from "react";
import ReactSelect from "react-select";
import { TextField, Checkbox } from "@material-ui/core";
import { useForm, Controller, useController } from "react-hook-form";

// ========== COMPONENT ========== 

// const App = () => {
//   const methods = useForm();
//   const  { handleSubmit, control, reset } = methods;
//   const onSubmit = (data: any) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Controller as={TextField} name="TextField" control={control} defaultValue="" />

//       <Controller
//         name="MyCheckbox"
//         control={control}
//         defaultValue={false}
//         rules={{ required: true }}
//         render={props => 
//           <Checkbox
//             onChange={ e => props.onChange(e.target.checked)}
//             checked={props.value}
//           />
//         }
//       />

//       <input type="submit" />
//     </form>
//   )
// }

// ========== HOOK ========== 

const Input = ({ control, name }: any) => {
  const {
    field: { ref, ...inputProps },
    meta: { invalid, isTouched, isDirty },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return <TextField {...inputProps} inputRef={ref} />
}

const App = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data: any) => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="firstName" control={control} />
      <input type="submit" />
    </form>
  );
}

export default App