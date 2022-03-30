import React from 'react';

export default function Signup() {
    return (
        <section>
            <h2>Sign Up</h2>
            <form>
                <label htmlFor='fullName'>Full name</label>
                <input type='text' name='fullName' id='fullName' />
                {/* <label htmlFor='userName'>User name</label>
                <input type='text' name='userName' id='userName' /> */}
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email' />
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' autoComplete='new-password' />
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input
                    type='password'
                    name='confirmPassword'
                    id='confirmPassword'
                    autoComplete='new-password'
                />
                <button className='btn' type='submit'>
                    Sign Up
                </button>
            </form>
        </section>
    );
}
