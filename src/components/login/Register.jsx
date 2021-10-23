import React from 'react'
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikField from '../shared/FormikField';
import FormArray from '../shared/ForrmArray';
import FormikSelect from '../shared/FormikSelect';
import FormikCheckBox from '../shared/FormikCheckBox';

const Register = () => {
    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        active: false,
        hobbies: [],

    };
    const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
    const validationSchema = yup.object({
        name: yup.string().required(),
        email: yup.string().email("Please enter a valid email address")
            .required("Email field is required"),
        password: yup.string().required("Password field is required").min(8),
        confirmPassword: yup.string().required().min(8).oneOf([yup.ref("password"), null], 'Passwords does not match'),
        gender: yup.string().required("Gender is required"),
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {(formik) => {
                return (
                    <div className="bg-light">
                        <h2 className="text-center p-4">Registration Form</h2>
                        <Form className="w-50 shadow m-auto mt-4 border p-5 bg-white">
                            <FormikField label="UserName" name="name" type="name" />
                            <FormikField label="Email" name="email" type="email" />
                            <FormikField label="Password" name="password" type="password" />
                            <FormikField label="Confirm Password" name="confirmPassword" type="password" />
                            <FormikSelect name="gender" />
                            <FormikCheckBox label="Active" name="active" type="checkbox" />
                            <FormArray name="hobbies" />

                            <button type="submit" className="mt-3 btn btn-success w-75 rounded-pill m-auto" style={{ display: "block" }}>submit</button>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    )
}


export default Register
