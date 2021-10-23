
import React from 'react';
import { Field, FieldArray } from 'formik';

export const FormArray = ({name}) => (
    <div>
        <h4>your hoppies</h4>
        <FieldArray
            name={name}
            render={arrayHelpers => (
                <div>
                    { arrayHelpers.form.values["hoppies"].length > 0 ? (
                        arrayHelpers.form.values["hoppies"].map((hoppy, index) => (
                            <div key={index}>
                                <Field name={`hoppies.${index}`} />
                                <button
                                    type="button"
                                    onClick={() => arrayHelpers.remove(index)}
                                >
                                    -
                                </button>
                                <button
                                    type="button"
                                    onClick={() => arrayHelpers.insert(index, '')}
                                >
                                    +
                                </button>
                            </div>
                        ))
                    ) : (
                        <button type="button" onClick={() => arrayHelpers.push('')}>
                            Add your hoppy
                        </button>
                    )}

                </div>
            )}
        />
    </div>
);
export default FormArray