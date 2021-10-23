
import React from 'react';
import { FieldArray } from 'formik';

export const FormArray = ({name}) => (
    <div>
        <h6>Hobbies</h6>
        <FieldArray
            name={name}
            render={arrayHelpers => (
                <div>
                    { arrayHelpers.form.values["hobbies"].length > 0 ? (
                        arrayHelpers.form.values["hobbies"].map((hobby, index) => (
                            <div key={index} className="d-flex my-2">
                                <input className="form-control w-25" name={`hobbies.${index}`} />
                              <div className="">
                                    <button className="btn btn-danger px-3" type="button" onClick={() => arrayHelpers.remove(index)}
>
                                    -
                                </button>
                                <button className="btn btn-primary  ms-1 px-3"
                                    type="button"
                                    onClick={() => arrayHelpers.insert(index, '')}
                                >
                                    +
                                </button>
                              </div>
                            </div>
                        ))
                    ) : (
                        <button className="btn btn-dark mb-3" type="button" onClick={() => arrayHelpers.push('')}>
                            Add your hoppy
                        </button>
                    )}

                </div>
            )}
        />
    </div>
);
export default FormArray