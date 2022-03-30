import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header>
            <h2>Hi,</h2>
            <h2>I'm Marco!</h2>
            <h4>Welcome to my landing page</h4>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            </p>
            <Link to='/about'>
                <button className='btn'>Read more...</button>
            </Link>
        </header>
    );
}
