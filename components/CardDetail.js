import React from "react";

export default function CardDetail({
  email,
  username,
  password,
  firstname,
  lastname,
  city,
  street,
  number,
  zipcode,
  lat,
  long,
  phone,
  className,
}) {
  return (
    <div className={`text-sm p-2 m-1 rounded-md border ${className}`}>
      <table className="table-auto">
        <tbody className="leading-6">
          <tr>
            <td>Email:</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Username:</td>
            <td>{username}</td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>{password}</td>
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
            <td>City:</td>
            <td>{city}</td>
          </tr>
          <tr>
            <td>Street:</td>
            <td>{street}</td>
          </tr>
          <tr>
            <td>Number:</td>
            <td>{number}</td>
          </tr>
          <tr>
            <td>Zipcode:</td>
            <td>{zipcode}</td>
          </tr>
          <tr>
            <td>Geolocation:</td>
          </tr>
          <tr>
            <td>Lat:</td>
            <td>{lat}</td>
          </tr>
          <tr>
            <td>Long:</td>
            <td>{long}</td>
          </tr>
          <tr>
            <td>Phone Number:</td>
            <td>{phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
