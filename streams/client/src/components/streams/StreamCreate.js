import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createStream } from '../../actions'

const StreamCreate = props => {
  const navigate = useNavigate()

  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {renderError(meta)}
      </div>
    )
  }

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  const onSubmit = async formValues => {
    const res = await props.createStream(formValues)
    if (res.status === 201) {
      navigate('/')
    }
  }

  console.log('redender')
  return (
    <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field name="description" component={renderInput} label="Enter Description" />
      <button className="ui button primary">Submit</button>
    </form>
  )
}

const validate = formValues => {
  // attach error message by key of field name and value of error message
  const errors = {}
  if (!formValues.title) {
    errors.title = 'You must enter a title'
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description'
  }
  return errors
}

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate)

export default connect(null, { createStream })(formWrapped)
