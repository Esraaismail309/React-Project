import React from "react";
import { Field } from "formik";
import FormikError from "./FromikErrors";


const FormikField = ({ name, type, label }) => {
    return (
        <Field name={name}>
            {(formikField) => {
                return (
                    <>
                        <label className="h6 d-block" htmlFor={name} >
                            {label}
                        </label>
                        <input
                            type={type}
                            id={name}
                            {...formikField.field}
                            defaultChecked={formikField.field.value}
                        />
                        <FormikError name={name} />
                    </>
                );
            }}
        </Field>
    );
}

export default FormikField;