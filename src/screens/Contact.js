import React from 'react';

export default function Contact() {
    return (
        <section>
            <h2>Contact</h2>
            <ul>
                <li>
                    <i className='fas fa-globe'></i> Website:{' '}
                    <a href='https://www.legido.de'>www.legido.de</a>
                </li>
                {/* <li>
                    <i className='fab fa-youtube'></i> Youtube:{' '}
                    <a href='#'>Not existing yet</a>
                </li> */}
                <li>
                    <i className='fa-solid fa-envelope'></i> Email:{' '}
                    <a href='mailto:name@domain.de'>name@domain.de</a>
                </li>
                <li>
                    <i className='fa-brands fa-linkedin'></i> LinkedIn:{' '}
                    <a href='#'>www.linkedin.de</a>
                </li>
                <li>
                    <i className='fa-brands fa-xing'></i> Xing:{' '}
                    <a href='#'>www.xing.de</a>
                </li>
            </ul>
        </section>
    );
}
