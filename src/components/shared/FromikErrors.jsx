import { ErrorMessage } from "formik";

const FormikError = ({ name }) => {
    return (
      <ErrorMessage name={name}>
        {(errMessage) => {
          return <div className="alert alert-danger p-2">{errMessage}</div>;
        }}
      </ErrorMessage>
    );
  };
  export default FormikError