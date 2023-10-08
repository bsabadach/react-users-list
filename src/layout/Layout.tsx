import * as React from "react";

import cx from "classnames";
import styles from "./layout.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../auth/AuthProvider";

type ActionType = "login" | "logout";
export const Layout = () => {
  const { logout, login, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const handleButtonClicked = (name: ActionType) => () => {
    if (name === "logout") {
      logout();
      navigate("/");
      return;
    }
    login();
    navigate("/users");
  };

  return (
    <>
      <nav
        className={cx(
          styles.nav,
          "mb-16 flex h-32 items-center justify-between overflow-hidden font-sans",
        )}
      >
        <div className="container mx-auto ">
          <div className="flex flex-row items-center justify-between">
            <h1 className={styles.title}>USERS LIST APPLICATION</h1>
            {!isAuthenticated && (
              <button
                data-testid="login-button"
                onClick={handleButtonClicked("login")}
                className="h-full w-1/4 border px-8 text-xl shadow"
              >
                <span className={styles.authAction} data-testid="login-text">
                  Login
                </span>
              </button>
            )}
            {isAuthenticated && (
              <button
                onClick={handleButtonClicked("logout")}
                className="h-full w-1/4 border px-8 text-xl shadow"
              >
                <span className={styles.authAction} data-testid="logout-text">
                  Logout
                </span>
              </button>
            )}
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
        {!isAuthenticated && (
          <div className="container mx-auto rounded py-8 shadow">
            <h1 className="w-full text-center text-2xl">
              User list demo application with fake authentication
            </h1>
            <div className="w-full text-center text-blue-600">
              <a
                href="https://master--prismatic-tarsier-d6698c.netlify.app/"
                target="_blank"
              >
                see storybook &gt;&gt;
              </a>
            </div>
          </div>
        )}
      </main>
    </>
  );
};
