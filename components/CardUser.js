import React from "react";

export default function CardUser({ name, email, className, onClick }) {
  return (
    <div className={`text-sm p-2 m-1 rounded-md border ${className}`}>
      <p className="py-1">
        {name.firstname} {name.lastname}
      </p>
      <p className="py-1">{email}</p>
      <span
        className="cursor-pointer text-xs pt-2 text-blue-500 hover:underline"
        onClick={onClick}
      >
        Detail
      </span>
    </div>
  );
}
