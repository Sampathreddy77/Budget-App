import React from "react";
import { Form, NavLink } from "react-router";
//library
import { TrashIcon } from '@heroicons/react/24/solid'


//asset
import logomark from "../assets/logomark.svg";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to Home">
        <img src={logomark} alt="logomark" height={30} />
        <span>Home Page</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Do want to delete all Data?")) {
              {
                event.preventDefault();
              }
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>DeleteUser</span>
            <TrashIcon width={20}/>
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
