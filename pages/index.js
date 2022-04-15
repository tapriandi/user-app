import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getUsers, getUser, deleteUser } from "services/users";
import Close from "components/CloseBtn";
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
    <div className="relative min-h-screen pb-20 px-[5%] md:px-0">
      {loading && <Loader />}
      <Head title="Home" />

      <div className="flex w-full items-center border-b py-5 mb-8 space-x-10 md:px-[4%] md:text-sm md:space-x-5">
        <Link href="/" >
          <a className="text-base font-bold hover:underline">User App</a>
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

      <div className={`relative flex md:flex-col space-x-5 md:space-x-0 md:px-[4%]`}>
        <div
          className={`flex flex-wrap ${
            detail || formAddOpen || formUpdateOpen
              ? "w-[70%] md:w-full"
              : "w-full"
          }`}
        >
          {users.map((e) => (
            <CardUser
              key={e.id}
              name={e.name}
              email={e.email}
              className="w-[32%] md:w-[48%] sm:w-full"
              onClickDetail={() => handleDetail(e.id)}
              onClickUpdate={() => handleUpdate(e.id)}
              onClickDelete={() => handleDelete(e.id)}
            />
          ))}
        </div>

        <div
          className={`${
            detail || formAddOpen || formUpdateOpen
              ? "w-[30%] md:w-full md:h-screen md:bg-[#00000060]"
              : "hidden"
          } md:fixed md:bg-white md:border md:top-0 md:left-0 md:z-10 md:py-4 md:px-[10%] sm:px-[5%]`}
        >
          <div className="w-full md:bg-white md:p-5">
            {detail && (
              <>
                <Close onClick={() => onDetail(false)} />
                <div>
                  <p className="text-base pt-5 font-bold">Detail User</p>
                  <div className="w-full">
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
                        className="!border-0 w-1/4 md:w-1/2 sm:w-full"
                      />
                    ))}
                  </div>
                </div>
              </>
            )}

            {formAddOpen && (
              <>
                <Close onClick={() => setFormAddOpen(false)} />
                <div className="w-full">
                  <FormAddUser />
                </div>
              </>
            )}

            {formUpdateOpen && (
              <>
                <Close onClick={() => setFormUpdateOpen(false)} />
                <div className="w-full">
                  <FormUpdateUser id={id} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

