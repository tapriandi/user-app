import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { getUsers, getUser, deleteUser } from "services/users";
import Close from "components/CloseBtn";
import Loader from "components/Loader";
import Header from "components/Header";
import CardUser from "components/CardUser";
import FormUser from "components/FormUser";
import CardDetail from "components/CardDetail";

export default function Home() {
  const { users } = useStoreState((state) => state);
  const { setUsers } = useStoreActions((action) => action);
  const router = useRouter();
  const [user, setUser] = useState([]);
  const [detail, setDetail] = useState(false);
  const [IdUserUpdate, setIdUserUpdate] = useState();
  const [openFormUser, setOpenFormUser] = useState(false);
  const [formUserTitle, setFormUserTitle] = useState("");
  const [loading, setLoading] = useState();

  const getUsersData = async () => {
    setLoading(true);
    const { data } = await getUsers();
    setUsers(data);
    setLoading(false);
  };

  const logout = () => {
    document.cookie = `token=''; path='';expires=${new Date().toUTCString()}`
    router.push("/login");
  };

  const handleDetail = async (id) => {
    setOpenFormUser(false);
    setLoading(true);
    setDetail(true);
    setUser([]);
    let temp = [];
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
    const newUsers = users.filter((e) => e.id !== id);
    setUsers(newUsers);
  };

  const handleCreate = () => {
    setDetail(false);
    setOpenFormUser(true);
    setFormUserTitle("Add User");
  };

  const handleUpdate = (id) => {
    setDetail(false);
    setOpenFormUser(true);
    setIdUserUpdate(id);
    setFormUserTitle("Update User User");
  };

  useEffect(() => {
    getUsersData();
  }, []);

  console.log(users, "home <====");

  return (
    <div className="relative min-h-screen pb-20 px-[5%] md:px-0">
      {loading && <Loader />}
      <Head title="Home" />
      <Header
        onClickAdd={() => handleCreate()}
        onClickLogout={() => logout()}
      />

      <div
        className={`relative flex md:flex-col space-x-5 md:space-x-0 md:px-[4%]`}
      >
        {/* card users */}
        <div
          className={`flex flex-wrap h-full items-start ${
            detail || openFormUser ? "w-[65%] md:w-full" : "w-full"
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
            detail || openFormUser
              ? "w-[36%] md:w-full md:h-screen md:bg-[#00000060]"
              : "hidden"
          } md:fixed md:border md:top-0 md:left-0 md:z-10 md:py-4 md:px-[10%] sm:px-[5%]`}
        >
          {/* detail user */}
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
                        className="!border-0 w-full"
                        onClickUpdate={() => handleUpdate(e.id)}
                        onClickDelete={() => handleDelete(e.id)}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}

            {openFormUser && (
              <>
                <Close onClick={() => setFormAddOpen(false)} />
                <div className="w-full">
                  <FormUser title={formUserTitle} id={IdUserUpdate} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
