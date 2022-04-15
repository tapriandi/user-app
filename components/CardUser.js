import React from "react";

export default function CardUser({
  name,
  email,
  className,
  onClickDetail,
  onClickUpdate,
  onClickDelete,
}) {
  return (
    <div className={`text-sm p-2 m-1 rounded-md border ${className}`}>
      <p className="py-1">
        {name.firstname} {name.lastname}
      </p>
      <p className="py-1">{email}</p>
      <div className="flex space-x-3">
        <span
          className="cursor-pointer text-xs pt-2 text-blue-500 hover:underline"
          onClick={onClickDetail}
        >
          Detail
        </span>
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
