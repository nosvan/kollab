import { animated, useSpring } from '@react-spring/web';
import axios from 'axios';
import { ApiRoutes } from 'lib/api/api_routes';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './account_reset.module.css';
import * as Yup from 'yup';
import { setErrorTruthy } from 'utils/formValidateUtils';
import { UserReset } from 'lib/types/user';

interface AccountResetProps {
  setSelection: Dispatch<SetStateAction<string>>;
}

export default function AccountReset(props: AccountResetProps) {
  const { setSelection } = props;
  const [formValues, setFormValues] = useState({
    email: '',
    confirm_email: '',
  });

  const modalSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 250 },
  });

  const yupValidationSchema = Yup.object().shape({
    email: Yup.string().email().required('email invalid'),
    confirm_email: Yup.string().email().required('email invalid'),
  });

  const [yupValidationError, setValidationError] = useState({
    email: false,
    confirm_email: false,
  });

  const [emailMatching, setEmailMatching] = useState(true);

  return (
    <animated.div
      style={modalSpring}
      className="flex flex-col bg-stone-900 rounded-xl pt-4"
    >
      <div className="text-white text-center text-2xl mb-4">
        Login <span className="text-blue-700">kollab</span> with email
      </div>
      <div className="px-1">
        <form onSubmit={handlePasswordReset}>
          <div className="flex flex-col">
            <label className="text-white pl-1">email to send link</label>
            <input
              onFocus={() =>
                setValidationError({ ...yupValidationError, email: false })
              }
              onChange={(event) => {
                setFormValues({
                  ...formValues,
                  email: event.target.value,
                });
              }}
              className="text-white bg-stone-800 rounded-xl px-2"
              type="text"
            />
            {yupValidationError.email && (
              <span className={`${styles['field-error-styling']}`}>
                invalid email
              </span>
            )}
            <label className="text-white pl-1">confirm email</label>
            <input
              onFocus={() => {
                setValidationError({
                  ...yupValidationError,
                  confirm_email: false,
                });
                setEmailMatching(true);
              }}
              onChange={(event) => {
                setFormValues({
                  ...formValues,
                  confirm_email: event.target.value,
                });
              }}
              className="text-white bg-stone-800 rounded-xl px-2"
              type="text"
            />
            {yupValidationError.confirm_email && (
              <span className={`${styles['field-error-styling']}`}>
                invalid email
              </span>
            )}
            {!emailMatching && (
              <span className={`${styles['field-error-styling']}`}>
                email not matching
              </span>
            )}
            <div className="flex flex-row py-5 text-center space-x-1">
              <div
                onClick={() => setSelection('')}
                className="basis-2/5 bg-stone-800 border-2 border-white 
            hover:bg-stone-700 text-white rounded-xl px-1 cursor-pointer"
              >
                <span>{'back'}</span>
              </div>
              <button
                type="submit"
                className="basis-3/5 bg-blue-700 hover:bg-blue-600 
            w-full rounded-xl text-white"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </animated.div>
  );

  async function handlePasswordReset(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const yupValidateResult = await yupValidationSchema
      .validate(formValues, { abortEarly: false })
      .catch((err) => {
        setErrorTruthy(err.inner, yupValidationError);
        setValidationError({ ...yupValidationError });
      });
    if (formValues.email === formValues.confirm_email) {
      setEmailMatching(true);
      if (JSON.stringify(yupValidateResult) === JSON.stringify(formValues)) {
        const userReset: UserReset = {
          email: formValues.email as unknown as string,
          locationOrigin: window.location.origin,
        };
        await callAccountResetApi(userReset);
      }
    } else setEmailMatching(false);
  }

  async function callAccountResetApi(formValues: UserReset) {
    try {
      await axios({
        method: 'post',
        url: ApiRoutes.RESET,
        data: JSON.stringify(formValues),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        switch (res.data.message.toLowerCase()) {
          case 'email sent':
            alert('email sent');
            setSelection('');
            return;
          case 'email not sent':
            alert('email error, try again');
            return;
          default:
            alert('error');
            return;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}
