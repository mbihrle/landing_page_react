import React from 'react';

export default function Login() {
    return (
        <section>
            <h2>Login</h2>
            <form>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='username'
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    autoComplete='current-password'
                />
                <button className='btn' type='submit'>
                    Sign Up
                </button>
            </form>
        </section>
    );
}
