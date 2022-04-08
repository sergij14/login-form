import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginFormData } from "../../state/actions/types";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const schema = yup.object({
  email: yup.string().required("Email is required").email("Email is not valid"),
  password: yup.string().required("Password is required"),
});

export default function useLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const { data, error } = useTypedSelector((state) => state.auth);
  const {logIn } = useActions();

  const onSubmit = (data: LoginFormData) => logIn(data)


  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
    data,
    error,
  };
}
