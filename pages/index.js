import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getUsers, getUser } from "services/users";
import Loader from "components/Loader";
import CardUser from "components/CardUser";
import CardDetail from "components/CardDetail";

export default function Home() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [detail, setDetail] = useState(false);
  const [loading, setLoading] = useState();

  const getUsersData = async () => {
    setLoading(true);
    const { data } = await getUsers();
    setUsers(data);
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    router.push("/login");
  };

  const handleDetail = async (id) => {
    let temp = [];
    setLoading(true);
    setDetail(true);
    const { data } = await getUser(id);
    temp.push(data);
    setUser(temp);
    setLoading(false);
  };

  const onDetail = () => {
    setDetail(false)
    setUser([])
  }
 
  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className="px-[10%] md:[3%]">
      {loading && <Loader />}
      <Head title="Home" />

      <p
        className="cursor-pointer pt-4 pb-6 hover:underline"
        onClick={() => logout()}
      >
        logout
      </p>

      <div className={`flex md:flex-col`}>
        <div className={`flex flex-wrap ${detail ? "w-[65%]" : "w-full"}`}>
          {users.map((e) => (
            <CardUser
              key={e.id}
              name={e.name}
              email={e.email}
              className="w-[24%] md:w-1/2 sm:w-full"
              onClick={() => handleDetail(e.id)}
            />
          ))}
        </div>

        {detail && (
          <div>
            <span className="cursor-pointer" onClick={() => onDetail() }>
              X
            </span>
            <p className="text-base pt-5 text-semibold">Detail User</p>
            <div className="flex flex-col w-[35%] md:w-full">
              {user?.map((e) => (
                <CardDetail
                  key={e.id}
                  email={e.email}
                  password={e.password}
                  username={e.username}
                  firstname={e.firstname}
                  lastname={e.lastname}
                  className="border-0 w-1/4 md:w-1/2 sm:w-full"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
