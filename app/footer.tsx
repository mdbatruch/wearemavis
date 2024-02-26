import React from 'react';
import Social from './social';

const Footer = () => {

    return (
        <footer id="contact" className="bg-mavis-yellow p-16 w-screen flex flex-wrap relative">
            <h2 className="font-bold text-2xl row-100 mb-4">Contact:</h2>

            <div className="flex flex-1 my-30">
                <div className="flex-1 mr-4">Band | MGMT
                    <p>talktomavis@gmail.com</p>
                </div>
                <div className="flex-1 mr-4">North America booking
                    <p>None!</p>
                </div>
                <div className="flex-1 mr-4">Europe booking
                    <p>None!</p>
                </div>
            </div>

            <Social align="right-8" />
        </footer>
    );
};

export default Footer;
