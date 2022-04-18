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
  onClickUpdate,
  onClickDelete,
}) {
  return (
    <div className={`text-sm p-2 m-1 rounded-md border ${className}`}>
      <table className="table-auto">
        <tbody className="leading-6">
          <tr>
            <td>Email</td>
            <td>: {email}</td>
          </tr>
          <tr>
            <td>Username</td>
            <td>: {username}</td>
          </tr>
          <tr>
            <td>Password</td>
            <td>: {password}</td>
          </tr>
          <tr>
            <td>Firstname</td>
            <td>: {firstname}</td>
          </tr>
          <tr>
            <td>Lastname</td>
            <td>: {lastname}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>: {city}</td>
          </tr>
          <tr>
            <td>Street</td>
            <td>: {street}</td>
          </tr>
          <tr>
            <td>Number</td>
            <td>: {number}</td>
          </tr>
          <tr>
            <td>Zipcode</td>
            <td>: {zipcode}</td>
          </tr>
          <tr>
            <td className="font-semibold">Geolocation</td>
          </tr>
          <tr>
            <td>Lat</td>
            <td>: {lat}</td>
          </tr>
          <tr>
            <td>Long</td>
            <td>: {long}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>: {phone}</td>
          </tr>
        </tbody>
      </table>
      <div className="py-5 flex space-x-3">
        <span
          className="cursor-pointer text-xs pt-2 text-blue-500 hover:underline"
          onClick={onClickUpdate}
        >
          Update
        </span>
        <span
          className="cursor-pointer text-xs pt-2 text-blue-500 hover:underline"
          onClick={onClickDelete}
        >
          Delete
        </span>
      </div>
    </div>
  );
}
