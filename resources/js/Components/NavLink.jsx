import { Link } from '@inertiajs/inertia-react';
import React from 'react'

function NavLink({children,href}) {
  return (
     
          <Link
              className="font-light py-1 transiton duration-200 hover:font-semibold hover:text-green-200"
              href={href}
          >
              {children}
          </Link>
      
  );
}

export default NavLink