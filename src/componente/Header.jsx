import React from "react";
import { Outlet, Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <>
      <div style={{ width: "100%", height: "104px", background: "#add8e6" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
            padding: '40px'
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: '20px'
            }}
          >
            Acasa
          </Link>
          <Link
            to="/anunturi"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: '20px'
            }}
          >
            Anunturi
          </Link>
          <Link
            to="/examene"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: '20px'
            }}
          >
            Examene
          </Link>
          <Link
            to="/catalog"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: '20px'
            }}
          >
            Catalog
          </Link>
        </div>
      </div>
      <div style={{ height: "100%-104px", padding: '40px' }}>{children}</div>
    </>
  );
};

export default Header;
