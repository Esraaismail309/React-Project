import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup";

const Login = () => {
    const initialValues = {
        email: "",
        password: "",
        rememberMe: false,
    };
    const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
    const validationSchema = yup.object({
        email: yup
            .string()
            .email("Please enter a valid email address")
            .required("Email field is required"),
        password: yup.string().required("Password field is required"),
    });
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    })
    return (
       <div className="bg-light vh-100">
            <div className="w-50  m-auto">
            <h2 className="text-center p-4">Log In Form</h2>
            <form onSubmit={formik.handleSubmit} className="w-75 m-auto border bg-white mt-4 shadow">
                <div className="p-4">
                    <div className="form-group">
                        <label className="m-3 d-block" htmlFor="email">
                            email
                        </label>
                        <input className="form-control bg-light" type="email" id="email"
                            name="email"
                            {...formik.getFieldProps("email")}

                        />
                    </div>
                    {formik.touched.email && formik.errors.email && (
                        <div className="alert alert-danger mt-2 p-2">{formik.errors.email}</div>
                    )}
                    <div className="form-group">

                        <label className="m-3 d-block" htmlFor="password" >
                            password
                        </label>
                        <input className="form-control bg-light" type="password" id="password"
                            name="password"
                            {...formik.getFieldProps("password")}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <div className="alert alert-danger mt-2 p-2">{formik.errors.password}</div>
                        )}
                    </div>
                    <input className="me-3 mt-3" type="checkbox" id="rememberMe" name="rememberMe"
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.rememberMe} />
                    <label htmlFor="rememberMe" className=" my-3">
                        remember me
                    </label>
                
                    <button className="d-block btn btn-success w-75 rounded-pill m-auto my-3 " >Login</button>
                </div>
            </form>
        </div>

       </div>
    )
}

export default Login
