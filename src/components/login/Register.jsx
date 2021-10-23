import React from 'react'
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikField from '../shared/FormikField';
import FormArray from '../shared/ForrmArray';
import FormikSelect from '../shared/FormikSelect';

const Register = () => {
    const initialValues = {
        name: "",
        email: "",
        password: "",
        conPassword:"",
        active:false,
        hoppies:[],
        gender:""
    };
    const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
    const validationSchema = yup.object({
        name: yup.string().required(),
        email: yup.string().email("Please enter a valid email address")
            .required("Email field is required"),
        password: yup.string().required("Password field is required"),
        conPassword: yup.string().required().oneOf([yup.ref("password"), null], 'Passwords does not match'),
    });
   
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {(formik) => {
                return (
                    <Form className="w-75 m-auto mt-5 ">
                        <FormikField label="UserName" name="name" type="name" />
                        <FormikField label="Email" name="email" type="email" />
                        <FormikField label="Password" name="password" type="password" />
                        <FormikField label="Confirm Password" name="conPassword" type="password" />
                        <FormikField label="Active" name="active" type="checkbox" />
                        <FormArray name="hoppies"/>
                        <FormikSelect name="gender"/>
                        <button type="submit" className="mt-3" style={{ display: "block" }}>submit</button>
                    </Form>
                );
            }}
        </Formik>
    )
}


export default Register
