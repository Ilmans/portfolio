import { Link } from '@inertiajs/inertia-react';
import React from 'react'

function NavLink({ children, className, href, ...props }) {

    return (
        <Link
            {...props}
            className={` ${
                className ? className : ""
            } py-1 font-light duration-200 transiton hover:font-semibold hover:text-green-200`}
            href={href}
        >
            {children}
        </Link>
    );
}

export default NavLink