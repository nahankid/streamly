import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

class StreamCreate extends React.Component {
  renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className={`field ${touched && (error || warning) ? "error" : ""}`}>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span style={{ color: "red" }}>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );

  onSubmit = values => {
    console.log(values);
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form className="ui form" onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="title"
          type="text"
          component={this.renderField}
          label="Title"
        />
        <Field
          name="description"
          type="text"
          component={this.renderField}
          label="Description"
        />
        <div>
          <button
            className="ui right floated primary button"
            type="submit"
            disabled={submitting}
          >
            Submit
          </button>
          <button
            className="ui left floated button"
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = "Required";
  }

  if (!values.description) {
    errors.description = "Required";
  }

  return errors;
};

const mapStateToProps = state => ({});

const withForm = reduxForm({ form: "createStream", validate });
const withConnect = connect(
  mapStateToProps,
  {}
);

export default compose(
  withForm,
  withConnect
)(StreamCreate);
