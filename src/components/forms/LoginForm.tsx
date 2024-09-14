import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
// Api
import client from '../../api/client';
// Constants
import { LOGIN_API, RESET_PASS_PAGE_URL, SIGN_UP_PAGE_URL } from '../../utils/Constants';
import LoadingSpinner from '../utils/LoadingSpinner';
// Styles
import { ButtonStyle, InputStyle } from '../../utils/Styles';

// Define the shape of the login form data
interface LoginFormData {
  email: string;
  password: string;
  keepMeLoggedIn: boolean;
}

const LoginForm: React.FC = () => {
  const [loginInProgress, setLoginInProgress] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<boolean>(false);
  const [loginFormData, setLoginFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    keepMeLoggedIn: false,
  });

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginInProgress(true);

    client
      .post(LOGIN_API, loginFormData, false)
      .then((res) => {
        localStorage.setItem(process.env.REACT_APP_USER_TOKEN || 'userToken', res.data.data.token);
        setLoginInProgress(false);
        // Handle user setting or redirect here
      })
      .catch((err) => {
        setLoginError(true);
        setLoginInProgress(false);
        console.error('Unable to login', err);
      });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginError(false);
    const { name, value } = event.target;

    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const handleCheckedKeepMeLoggedIn = () => {
    setLoginFormData({
      ...loginFormData,
      keepMeLoggedIn: !loginFormData.keepMeLoggedIn,
    });
  };

  return (
    <form className='space-y-4 md:space-y-6' onSubmit={handleLogin}>
      <div>
        <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Your email:
        </label>
        <input
          type='email'
          name='email'
          id='email'
          className={InputStyle}
          placeholder='name@email.com'
          onChange={handleChange}
          required
          aria-invalid={loginError ? 'true' : 'false'}
          aria-describedby={loginError ? 'email-error' : undefined}
        />
        {loginError && (
          <p id='email-error' className='text-error-red text-sm'>
            Invalid email address or password.
          </p>
        )}
      </div>
      <div>
        <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Password:
        </label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='••••••••'
          className={InputStyle}
          required
          onChange={handleChange}
          aria-invalid={loginError ? 'true' : 'false'}
          aria-describedby={loginError ? 'password-error' : undefined}
        />
      </div>
      <div className='grid gap-2 items-center justify-between'>
        <div className='form-check flex justify-center mb-6'>
          <input
            className='form-check-input h-4 w-4 border border-gray-300 rounded-sm transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer'
            type='checkbox'
            id='keepMeLoggedIn'
            name='keepMeLoggedIn'
            checked={loginFormData.keepMeLoggedIn}
            onChange={handleCheckedKeepMeLoggedIn}
            aria-label='Keep me logged in'
          />
          <label className='form-check-label inline-block text-gray-800' htmlFor='keepMeLoggedIn'>
            Keep me logged in
          </label>
        </div>
      </div>
      <div className='grid justify-center'>
        <Link
          to={RESET_PASS_PAGE_URL}
          className='text-sm font-medium text-blue-600 hover:underline'
          aria-label='Forgot password?'
        >
          Forgot password?
        </Link>
      </div>

      <div>
        <button type='submit' className={ButtonStyle} aria-label='Sign in to your account' disabled={loginInProgress}>
          {loginInProgress ? <LoadingSpinner sm={true} /> : <span>Sign in</span>}
        </button>
      </div>

      <div className='text-center'>
        <p className='font-light text-gray-500 dark:text-gray-400'>
          Don’t have an account yet?{' '}
          <Link to={SIGN_UP_PAGE_URL} className='font-medium text-blue-600 hover:underline' aria-label='Sign up for a new account'>
            Sign up now!
          </Link>
        </p>
      </div>

      {loginError && (
        <div role='alert' aria-live='assertive' className='text-error-red'>
          Unable to login. Please check your credentials.
        </div>
      )}
    </form>
  );
};

export default LoginForm;
