import React from 'react'
import { Field } from 'formik'
import FormikInput from '../../utilities/FormikInput'

type Props = {
    className?: string,
    as?: string,
    type: string,
    name: string,
    label: string,
    placeholder?: string
}

const ProfileInput = (props: Props) => {
    return (
        // <Field
        //     as={props.as}
        //     type={props.type}
        //     name={props.name}
        //     label={props.label}
        //     placeHolder={props.placeholder}
        // />
        <FormikInput
        type={props.type}
        name={props.name}
        label={props.label}
        placeHolder={props.placeholder}
    />
    )
}

export default ProfileInput