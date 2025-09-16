import { Formik } from "formik";
import * as Yup from "yup";
import "./Form.css";
interface FormValues {
  username: string;
  tel: string;
  email: string;
  onSubmit: () => void;
}

export function Form() {
  const initialValues: FormValues = {
    username: "",
    email: "",
    tel: "",
    onSubmit: () => {},
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    tel: Yup.string().required("Telefone obrigatório"),
    username: Yup.string().required("Nome obrigatório"),
  });
  const handleSubmit = (values: FormValues) => {
    const phoneNumber = "+55 35 99810-1112";
    const cleanPhone = phoneNumber.replace(/\D/g, "");
    const message = `Olá! Me chamo ${values.username}.
Meu e-mail é: ${values.email}.
Meu telefone é: ${values.tel}.


`;

    const url = `whatsapp://send?phone=${cleanPhone}&text=${message}
`;

    window.open(url, "_blank");
  };

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values);
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className="form-container" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Digite seu nome"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {errors.username && touched.username && (
              <div style={{ color: "red" }}>{errors.username}</div>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="tel"
              placeholder="Digite seu telefone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tel}
            />
            {errors.tel && touched.tel && (
              <div style={{ color: "red" }}>{errors.tel}</div>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <div style={{ color: "red" }}>{errors.email}</div>
            )}
          </div>

          <button type="submit" disabled={isSubmitting}>
            Enviar
          </button>
        </form>
      )}
    </Formik>
  );
}
