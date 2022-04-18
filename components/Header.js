export default function Header({ onClickAdd, onClickLogout }) {
  return (
    <div className="flex justify-between w-full items-center border-b py-5 mb-8 space-x-10 md:px-[4%] md:text-sm md:space-x-5">
      <p className="text-base font-bold hover:underline">User App</p>
      <div className="text-sm flex space-x-10 items-center md:space-x-5 md:text-xs">
        <p className="cursor-pointer hover:underline" onClick={onClickAdd}>
          Add New User
        </p>
        <p className="cursor-pointer hover:underline" onClick={onClickLogout}>
          logout
        </p>
      </div>
    </div>
  );
}
