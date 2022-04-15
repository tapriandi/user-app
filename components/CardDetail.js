import React from "react";

export default function CardDetail({ username, firstname, lastname, password, email,  className }) {
  return (
    <div className={`text-sm p-2 m-1 rounded-md border ${className}`}>
      <table className="table-auto">
        <tbody>
          <tr>
            <td>Email:</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Firstname:</td>
            <td>{firstname}</td>
          </tr>
          <tr>
            <td>Lastname:</td>
            <td>{lastname}</td>
          </tr>
          <tr>
            <td>Username</td>
            <td>{username}</td>
          </tr>
          <tr>
            <td>Password</td>
            <td>{password}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
