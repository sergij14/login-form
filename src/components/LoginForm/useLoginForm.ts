import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  email: string;
  password: number;
}

const schema = yup.object({
  email: yup.string().required('Email is required').email('Email is not valid'),
  password: yup.string().required('Password is required'),
});

export default function useLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
  const onSubmit = (data: IFormInputs) => console.log(data);
  return {
    submitHanlder: handleSubmit(onSubmit),
    register,
    errors,
  };
}
