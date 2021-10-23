import React from "react";
import { Field } from "formik";
import FormikError from "./FromikErrors";


const FormikField = ({ name, type, label }) => {
    return (
        <Field name={name}>
            {(formikField) => {
                return (
                    <div className="form-group">
                        <label className="h6 d-block my-2" htmlFor={name} >
                            {label}
                        </label>
                        <input
                        className="form-control bg-light"
                            type={type}
                            id={name}
                            {...formikField.field}
                            defaultChecked={formikField.field.value}
                        />
                        <FormikError name={name} />
                    </div>
                );
            }}
        </Field>
    );
}

export default FormikField;