import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getUsers, getUser, deleteUser } from "services/users";
import Loader from "components/Loader";
import CardUser from "components/CardUser";
import FormAddUser from "components/FormAddUser";
import FormUpdateUser from "components/FormUpdateUser";
import CardDetail from "components/CardDetail";

export default function Home() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [detail, setDetail] = useState(false);
  const [formAddOpen, setFormAddOpen] = useState(false);
  const [formUpdateOpen, setFormUpdateOpen] = useState(false);
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
    setFormUpdateOpen(false);
    setFormAddOpen(false);
    setUser([]);
    let temp = [];
    setLoading(true);
    setDetail(true);
    const { data } = await getUser(id);
    temp.push(data);
    setUser(temp);
    setLoading(false);
  };

  const onDetail = () => {
    setDetail(false);
    setUser([]);
  };

  const handleDelete = (id) => {
    if (id?.length > 0) {
      setLoading(true);
      deleteUser(id);
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setDetail(false);
    setFormUpdateOpen(false);
    setFormAddOpen(true);
  };

  const handleUpdate = () => {
    setDetail(false);
    setFormAddOpen(false);
    setFormUpdateOpen(true);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className="px-[10%] md:[3%]">
      {loading && <Loader />}
      <Head title="Home" />

      <div className="flex items-center border-b py-5 mb-8 space-x-10">
        <Link href="/" className="text-lg font-bold hover:underline">
          <a>User App</a>
        </Link>
        <p
          className="cursor-pointer hover:underline"
          onClick={() => handleCreate()}
        >
          Add New User
        </p>
        <p className="cursor-pointer hover:underline" onClick={() => logout()}>
          logout
        </p>
      </div>

      <div className={`flex md:flex-col space-x-5`}>
        <div className={`flex flex-wrap ${detail ? "w-[70%]" : "w-full"}`}>
          {users.map((e) => (
            <CardUser
              key={e.id}
              name={e.name}
              email={e.email}
              className="w-[32%] md:w-1/2 sm:w-full"
              onClickDetail={() => handleDetail(e.id)}
              onClickUpdate={() => handleUpdate(e.id)}
              onClickDelete={() => handleDelete(e.id)}
            />
          ))}
        </div>

        {detail && (
          <div>
            <span
              className="cursor-pointer hover:underline"
              onClick={() => onDetail()}
            >
              X Close
            </span>
            <p className="text-base pt-5 text-semibold">Detail User</p>
            <div className="flex flex-col w-[30%] md:w-full">
              {user?.map((e) => (
                <CardDetail
                  key={e.id}
                  email={e.email}
                  username={e.username}
                  password={e.password}
                  firstname={e.name.firstname}
                  lastname={e.name.lastname}
                  city={e.address.city}
                  street={e.address.street}
                  number={e.address.number}
                  zipcode={e.address.zipcode}
                  lat={e.address.geolocation.lat}
                  long={e.address.geolocation.long}
                  phone={e.phone}
                  className="border-0 w-1/4 md:w-1/2 sm:w-full"
                />
              ))}
            </div>
          </div>
        )}

        {formAddOpen && (
          <div>
            <span
              className="cursor-pointer hover:underline"
              onClick={() => setFormAddOpen(false)}
            >
              X Close
            </span>
            <div className="flex flex-col w-[30%] md:w-full">
              <FormAddUser />
            </div>
          </div>
        )}

        {formUpdateOpen && (
          <div>
            <span
              className="cursor-pointer hover:underline"
              onClick={() => setFormUpdateOpen(false)}
            >
              X Close
            </span>
            <div className="flex flex-col w-[30%] md:w-full">
              <FormUpdateUser id={id} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
