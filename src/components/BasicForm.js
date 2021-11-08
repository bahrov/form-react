import { useState } from 'react';
import useMyInput from '../hooks/use-my-input';

const BasicForm = (props) => {
  const {
    valueChangeHandler: nameChangeHandler,
    valueOnBlurHandler: nameOnBlurHandler,
    enteredValue: enteredName,
    valueIsValid: nameIsValid,
    valueIsInvalid: nameIsInvalid,
    reset: resetName,
  } = useMyInput((value) => value.trim().length !== 0);

  const {
    valueChangeHandler: lastNameChangeHandler,
    valueOnBlurHandler: lastNameOnBlurHandler,
    enteredValue: enteredLastName,
    valueIsValid: lastNameIsValid,
    valueIsInvalid: lastNameIsInvalid,
    reset: resetLastName,
  } = useMyInput((value) => value.trim().length !== 0);

  const {
    valueChangeHandler: emailChangeHandler,
    valueOnBlurHandler: emailOnBlurHandler,
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    valueIsInvalid: emailIsInvalid,
    reset: resetEmail,
  } = useMyInput((value) => value.includes('@'));

  const formIsValid = emailIsValid && lastNameIsValid && nameIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    resetEmail();
    resetLastName();
    resetName();
  };

  const nameInputClasses = nameIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const lastNameInputClasses = lastNameIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='l-name'>First Name</label>
          <input
            type='text'
            id='l-name'
            onChange={nameChangeHandler}
            onBlur={nameOnBlurHandler}
            value={enteredName}
          />
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={lastNameChangeHandler}
            onBlur={lastNameOnBlurHandler}
            value={enteredLastName}
          />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailOnBlurHandler}
          value={enteredEmail}
        />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} onClick={submitHandler}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
