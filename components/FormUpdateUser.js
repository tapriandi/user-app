import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Loader from "components/Loader";
import { createUser } from "services/users";

export default function FormUpdateUser({ id, title, titleButton }) {
  const [loading, setLoading] = useState(false);
  const [messageUpdateUser, setMessageUpdateUser] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const UpdateUser = async (user) => {
    try {
      setLoading(true);
      let newUser = {
        email: user.email,
        username: user.username,
        password: user.password,
        name: {
          firstname: user.firstname,
          lastname: user.lastname,
        },
        address: {
          city: user.city,
          street: user.street,
          number: user.number,
          zipcode: user.zipcode,
          geolocation: {
            lat: user.geolocationLat,
            long: user.geolocationLong,
          },
        },
        phone: user.phone,
      };

      createUser(newUser);
      setLoading(false);
      setMessageUpdateUser({msg:"Add New User, Success!", color: 'text-green-500'});

    } catch (error) {
      setLoading(false);
      setMessageUpdateUser({msg:"Add New User, Gagal!", color: 'text-red-500'});
    }
  };

  return (
    <div>
      {loading && <Loader />}
      <form
        onSubmit={handleSubmit(createNewUser)}
        className="flex flex-col w-full"
      >
        <h2 className="text-lg font-semibold pb-6 text-center">Form</h2>

        <input
          id="email"
          type="text"
          required
          placeholder="email"
          className="text-sm border px-3 py-2 my-2 focus:border-black"
          {...register("email", { required: true })}
        />
        <span className="text-red-600 pb-3 pt-1 text-[9px]">
          {errors?.email?.message}
        </span>

        <input
          id="username"
          type="text"
          required
          placeholder="username"
          className="text-sm border px-3 py-2 my-2 focus:border-black"
          {...register("username", { required: true })}
        />
        <span className="text-red-600 pb-3 pt-1 text-[9px]">
          {errors?.username?.message}
        </span>

        <input
          id="password"
          type="password"
          required
          placeholder="password"
          className="text-sm border px-3 py-2 focus:border-black"
          {...register("password", { required: true })}
        />
        <span className="text-red-600 pb-3 pt-1 text-[9px]">
          {errors?.password?.message}
        </span>

        <input
          id="firstname"
          type="text"
          required
          placeholder="firstname"
          className="text-sm border px-3 py-2 my-2 focus:border-black"
          {...register("firstname", { required: true })}
        />
        <span className="text-red-600 pb-3 pt-1 text-[9px]">
          {errors?.firstname?.message}
        </span>

        <input
          id="lastname"
          type="text"
          required
          placeholder="lastname"
          className="text-sm border px-3 py-2 my-2 focus:border-black"
          {...register("lastname", { required: true })}
        />
        <span className="text-red-600 pb-3 pt-1 text-[9px]">
          {errors?.lastname?.message}
        </span>

        <input
          id="city"
          type="text"
          required
          placeholder="city"
          className="text-sm border px-3 py-2 my-2 focus:border-black"
          {...register("city", { required: true })}
        />
        <span className="text-red-600 pb-3 pt-1 text-[9px]">
          {errors?.city?.message}
        </span>

        <input
          id="street"
          type="text"
          required
          placeholder="street"
          className="text-sm border px-3 py-2 my-2 focus:border-black"
          {...register("street", { required: true })}
        />
        <span className="text-red-600 pb-3 pt-1 text-[9px]">
          {errors?.street?.message}
        </span>

        <input
          id="number"
          type="number"
          required
          placeholder="number"
          className="text-sm border px-3 py-2 my-2 focus:border-black"
          {...register("number", { required: true })}
        />
        <span className="text-red-600 pb-3 pt-1 text-[9px]">
          {errors?.number?.message}
        </span>

        <input
          id="zipcode"
          type="number"
          required
          placeholder="zipcode"
          className="text-sm border px-3 py-2 my-2 focus:border-black"
          {...register("zipcode", { required: true })}
        />
        <span className="text-red-600 pb-3 pt-1 text-[9px]">
          {errors?.zipcode?.message}
        </span>

        <input
          id="geolocationLat"
          type="text"
          required
          placeholder="geolocationLat"
          className="text-sm border px-3 py-2 my-2 focus:border-black"
          {...register("geolocationLat", { required: true })}
        />
        <span className="text-red-600 pb-3 pt-1 text-[9px]">
          {errors?.geolocationLat?.message}
        </span>

        <input
          id="geolocationLong"
          type="text"
          required
          placeholder="geolocationLong"
          className="text-sm border px-3 py-2 my-2 focus:border-black"
          {...register("geolocationLong", { required: true })}
        />
        <span className="text-red-600 pb-3 pt-1 text-[9px]">
          {errors?.geolocationLong?.message}
        </span>

        <input
          id="phone"
          type="text"
          required
          placeholder="phone"
          className="text-sm border px-3 py-2 my-2 focus:border-black"
          {...register("phone", { required: true })}
        />
        <span className="text-red-600 pb-3 pt-1 text-[9px]">
          {errors?.phone?.message}
        </span>

        <button
          type="submit"
          className="text-sm border font-semibold mt-5 py-2 px-6 hover:bg-green-200"
        >
          Add New User
        </button>
        <span className={`${messageUpdateUser.color} pb-3 pt-1 text-[9px]`}>
            {messageUpdateUser.msg}
          </span>
      </form>
    </div>
  );
}

