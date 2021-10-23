import React from "react";
import { Field } from "formik";
import FormikError from "./FromikErrors";


const FormikSelect = ({ name }) => {
    return (
        <Field name={name}>
            {(FormikSelect) => {
                return (
                    <>
                        <Field name={name} placeholder="Gender" 
                           {...FormikSelect.field}
                            defaultChecked={FormikSelect.field.value} />
                        <Field as="select" name={name}>
                            <option value="female">female</option>
                            <option value="male">male</option>
                        </Field>
                        <FormikError name={name} />
                    </>
                );
            }}
        </Field>
    );
}


export default FormikSelect;