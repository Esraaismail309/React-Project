import { Field } from "formik";
import FormikError from "./FromikErrors";


const FormikSelect = ({ name }) => {
    return (
        <Field name={name}>
            {(FormikSelect) => {
                return (
                    
                     <div className="form-group">
                     <div className="d-block mt-2 ms-1 h6">Gender</div>
                        <select as="select" name={name} className=" btn border p-1 mt-1 bg-light">
                            <option value="female">female</option>
                            <option value="male">male</option>
                        </select>
                        <FormikError name={name} />
                     </div>
                    
                );
            }}
        </Field>
    );
}


export default FormikSelect;