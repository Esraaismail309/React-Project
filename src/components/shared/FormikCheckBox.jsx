import { Field } from "formik";

const FormikCheckBox = ({ label, name, type }) => {

    return (
        <Field name={name}>
            {(FormikCheckBox) => {
                return (
                    <div className="d-block">
                        <input className="me-3 mt-3" type={type} name={name}
                              {...FormikCheckBox.field}
                              defaultChecked={FormikCheckBox.field.value} />
                        <label htmlFor={name} className=" my-3">
                            {label}
                        </label>
                    </div>
                );
            }}

        </Field>
    )

}

export default FormikCheckBox
