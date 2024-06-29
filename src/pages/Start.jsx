import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BanknotesIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import illustration from "../assets/illustration.jpg";
import Intro from "../components/Intro";
import { fetchData } from "../helpers";

export function startLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  const expenses = fetchData("expenses");
  return { userName, budgets, expenses };
}

export async function startAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (e) {
      throw new Error("There was a problem creating your account.");
    }
  }
}

const Start = () => {
  const { userName } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="intro">
          <div>
            <h2 className="hover-heading">
              Welcome, Dear{" "}
              <span className="accent hover-accent">{userName}</span>
            </h2>
            <p className="hover-heading">
              <span className="accent hover-accent">Manage your finances</span>{" "}
              effortlessly with our personal budget dashboard.{" "}
              <span className="accent hover-accent">
                Track expenses, create budgets,
              </span>{" "}
              and stay informed with{" "}
              <span className="accent hover-accent">
                intuitive tools for financial control.
              </span>
            </p>
            <div className="flex-sm">
              <Link to={`/dashboard`} className="btn">
                <span>Skip To The Budget Page</span>
                <BanknotesIcon width={20} />
              </Link>
            </div>
          </div>
          <img
            src={illustration}
            alt="Person with money"
            className="illustration-animation"
            width={600}
          />
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Start;
