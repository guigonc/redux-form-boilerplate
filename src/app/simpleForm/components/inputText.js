import React from 'react'

const InputText = ({ input, label, meta: { touched, error }}) => (<div>
    <label htmlFor={input.name}>{label}</label>
    <input {...input} type="text" />
    { touched && error && <span className="error">{error}</span>}
</div>)

export default InputText
