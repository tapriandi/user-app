import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "components/Loader";
import Head from "components/Head";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userLogin, setUserLogin] = useState();
  const [messageLogin, setMessageLogin] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const login = async (form) => {
    setLoading(true);
    try {
      const log = await axios.post("https://fakestoreapi.com/auth/login", {
        username: form.username,
        password: form.password,
      });
      document.cookie()
      setLoading(false);
      setUserLogin(log);
      setMessageLogin({msg:"Login Sukses!", color: 'text-green-400'});
      router.push("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setMessageLogin({msg:"Login Gagal!", color: "text-reed-500"});
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head title="Login" />
      {loading && <Loader />}
      <div className="relative flex justify-center items-center h-screen px-[4%]">
        <form
          onSubmit={handleSubmit(login)}
          className="flex flex-col w-full max-w-[300px]"
        >
          <h2 className="text-lg font-semibold pb-6 text-center">Login Form</h2>
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

          <button
            type="submit"
            className="text-sm border font-semibold mt-5 py-2 px-6 hover:bg-green-200"
          >
            Login
          </button>
          <span className={`${messageLogin.color} pb-3 pt-1 text-[9px]`}>
            {messageLogin.msg}
          </span>
        </form>
      </div>
    </>
  );
}
