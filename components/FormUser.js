import axios from "axios";
import { useForm } from "react-hook-form";
import { getUser } from "services/users";
import { useState, useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Loader from "components/Loader";
// import { createUser } from "services/users";
// import { updateUser } from "services/users";

export default function FormAddUser({ title, id }) {
  const { users } = useStoreState((state) => state);
  const { setUsers } = useStoreActions((action) => action);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [messageAddUser, setMessageAddUser] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const handleUser = (user) => {
    if (id && id >= 0) {
      updateUser(user);
    } else {
      createNewUser(user);
    }
  };

  const createId = () => {
    const initId = users[users.length - 1] + 100;
    console.log(initId, "ini init id");
    return initId;
  };

  const formatUser = (user) => {
    let newUser = {
      id: createId(),
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
    return newUser;
  };

  const createNewUser = async (user) => {
    try {
      setLoading(true);
      const newUser = formatUser(user);
      const tempNewUsers = [newUser, ...users];
      // tempNewUsers.push(newUser);
      setUsers(tempNewUsers);

      console.log(tempNewUsers)

      setLoading(false);
      setMessageAddUser({
        msg: "Add New User, Success!",
        color: "text-green-600",
      });
      reset();
    } catch (error) {
      setLoading(false);
      setMessageAddUser({ msg: "Add New User, Gagal!", color: "text-red-600" });
    }
  };

  const updateUser = async () => {
    try {
      setLoading(true);
      let tempUsers = users;
      const newUser = formatUser(user);
      const index = tempUsers.indexOf(id);
      tempUsers[index] = newUser;
      setUsers(tempUsers);
      setLoading(false);
      setMessageAddUser({
        msg: "Update User, Success!",
        color: "text-green-500",
      });
      reset();
    } catch (error) {
      setLoading(false);
      setMessageAddUser({ msg: "Update User, Gagal!", color: "text-red-500" });
    }
  };

  const detailUser = async () => {
    if (id < 1000) {
      const _user = await getUser(id);
      setUser(_user.data);
    } else {
      const _user = users.filter((e) => e.id == id);
      setUser(_user);
      setValue("email", _user.email);
      setValue("username", _user.username);
      setValue("firstname", firstname);
      setValue("lastname", lastname);
      setValue("city", _user.city);
      setValue("number", _user.number);
      setValue("street", _user.street);
      setValue("zipcode", _user.zipcode);
      setValue("lat", _user.geolocationLat);
      setValue("long", _user.geolocationLong);
      setValue("phone", _user.phone);
    }
  };

  useEffect(() => {
    if (id) {
      detailUser();
    }
  }, []);

  return (
    <div>
      {loading && <Loader />}
      <form
        onSubmit={handleSubmit(handleUser)}
        className="flex flex-col w-full"
      >
        <h2 className="text-lg font-semibold py-5 text-center">Form {title}</h2>

        <input
          id="email"
          type="text"
          placeholder="email"
          className="text-xs border px-3 py-2 mt-2 focus:border-black"
          {...register("email", { required: true })}
        />
        <span className="text-red-600 text-[9px]">
          {errors?.email?.message}
        </span>

        <input
          id="username"
          type="text"
          placeholder="username"
          className="text-xs border px-3 py-2 mt-2 focus:border-black"
          {...register("username", { required: true })}
        />
        <span className="text-red-600 text-[9px]">
          {errors?.username?.message}
        </span>

        <input
          id="password"
          type="password"
          placeholder="password"
          className="text-xs border px-3 py-2 mt-2 focus:border-black"
          {...register("password", { required: true })}
        />
        <span className="text-red-600 text-[9px]">
          {errors?.password?.message}
        </span>

        <input
          id="firstname"
          type="text"
          placeholder="firstname"
          className="text-xs border px-3 py-2 mt-2 focus:border-black"
          {...register("firstname", { required: true })}
        />
        <span className="text-red-600 text-[9px]">
          {errors?.firstname?.message}
        </span>

        <input
          id="lastname"
          type="text"
          placeholder="lastname"
          className="text-xs border px-3 py-2 mt-2 focus:border-black"
          {...register("lastname", { required: true })}
        />
        <span className="text-red-600 text-[9px]">
          {errors?.lastname?.message}
        </span>

        <input
          id="city"
          type="text"
          placeholder="city"
          className="text-xs border px-3 py-2 mt-2 focus:border-black"
          {...register("city", { required: true })}
        />
        <span className="text-red-600 text-[9px]">{errors?.city?.message}</span>

        <input
          id="street"
          type="text"
          placeholder="street"
          className="text-xs border px-3 py-2 mt-2 focus:border-black"
          {...register("street", { required: true })}
        />
        <span className="text-red-600 text-[9px]">
          {errors?.street?.message}
        </span>

        <input
          id="number"
          type="number"
          placeholder="number"
          className="text-xs border px-3 py-2 mt-2 focus:border-black"
          {...register("number", { required: true })}
        />
        <span className="text-red-600 text-[9px]">
          {errors?.number?.message}
        </span>

        <input
          id="zipcode"
          type="number"
          placeholder="zipcode"
          className="text-xs border px-3 py-2 mt-2 focus:border-black"
          {...register("zipcode", { required: true })}
        />
        <span className="text-red-600 text-[9px]">
          {errors?.zipcode?.message}
        </span>

        <input
          id="geolocationLat"
          type="text"
          placeholder="geolocationLat"
          className="text-xs border px-3 py-2 mt-2 focus:border-black"
          {...register("geolocationLat", { required: true })}
        />
        <span className="text-red-600 text-[9px]">
          {errors?.geolocationLat?.message}
        </span>

        <input
          id="geolocationLong"
          type="text"
          placeholder="geolocationLong"
          className="text-xs border px-3 py-2 mt-2 focus:border-black"
          {...register("geolocationLong", { required: true })}
        />
        <span className="text-red-600 text-[9px]">
          {errors?.geolocationLong?.message}
        </span>

        <input
          id="phone"
          type="text"
          placeholder="phone"
          className="text-xs border px-3 py-2 mt-2 focus:border-black"
          {...register("phone", { required: true })}
        />
        <span className="text-red-600 text-[9px]">
          {errors?.phone?.message}
        </span>

        <button
          type="submit"
          className="text-sm border font-semibold mt-5 py-2 px-6 hover:bg-green-200"
        >
          {title}
        </button>
        <span className={`${messageAddUser.color} text-[9px]`}>
          {messageAddUser.msg}
        </span>
      </form>
    </div>
  );
}
