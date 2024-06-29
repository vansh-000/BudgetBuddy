import React from "react";
import logomark from "../assets/logomark.svg";
import { Form, NavLink } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";
import expenseico from "../assets/expense.png";
import budgetico from "../assets/budget.png";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go To Home">
        <img src={logomark} alt="" height={30} />
        <span>Budget Buddy</span>
      </NavLink>
      {userName && (
        <>
          <NavLink to="/dashboard" aria-label="Go To Home">
            <img src={budgetico} alt="" height={30} />
            <span>Add New Expense</span>
          </NavLink>
          <NavLink to="/expenses" aria-label="Go To Expense List">
            <img src={expenseico} alt="" height={30} />
            <span>Expense List</span>
          </NavLink>
          <Form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!confirm("Delete user and all data?")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit" className="btn btn--warning">
              <span className="myid">Delete User</span>
              <TrashIcon width={20} />
            </button>
          </Form>
        </>
      )}
    </nav>
  );
};

export default Nav;
