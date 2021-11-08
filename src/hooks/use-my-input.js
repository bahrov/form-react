import { useState } from 'react';

const useMyInput = (validation = () => {}) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validation(enteredValue);
  const valueIsInvalid = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueOnBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    valueChangeHandler,
    valueOnBlurHandler,
    enteredValue,
    valueIsValid,
    valueIsInvalid,
    reset,
  };
};

export default useMyInput;
