import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "components/Loader";

export default function FormUser({ title, titleButton }) {
  const [loading, setLoading] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      {loading && <Loader />}
      <form
        onSubmit={handleSubmit(login)}
        className="flex flex-col w-full max-w-[300px]"
      >
        <h2 className="text-lg font-semibold pb-6 text-center">{title} Form</h2>

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
          defaultValue="mor_2314"
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
          defaultValue="83r5^_"
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
          defaultValue="mor_2314"
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
          defaultValue="mor_2314"
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
          defaultValue="mor_2314"
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
          defaultValue="mor_2314"
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
          defaultValue="mor_2314"
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
          defaultValue="mor_2314"
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
          defaultValue="mor_2314"
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
          defaultValue="mor_2314"
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
          defaultValue="mor_2314"
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
          {titleButton}
        </button>
      </form>
    </div>
  );
}