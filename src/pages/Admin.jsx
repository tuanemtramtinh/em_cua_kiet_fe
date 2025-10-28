import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import UserItem from "../components/AdminPage/UserItem";
import ChartItem from "../components/AdminPage/ChartItem";

const Admin = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppContext);

  return !user || user.username !== "admin" ? (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-4xl font-bold">
        Bạn không có quyền hạn để truy cập trang này
      </h2>
      <button
        className="rounded-md bg-blue-500 px-4 py-2 text-white"
        onClick={() => navigate("/")}
      >
        Quay về trang chủ
      </button>
    </div>
  ) : (
    <div className="bg-[url(/background.svg)] bg-cover bg-center">
      <div className="container mx-auto py-10">
        <h2 className="mb-10 text-4xl font-bold">Admin Page</h2>
        <div className="flex justify-between gap-10">
          <div className="flex-3 rounded-md bg-white p-4 shadow-2xl">
            <h3 className="mb-4 text-2xl font-bold">Danh sách người dùng</h3>
            <div>
              <UserItem />
            </div>
          </div>
          <div className="flex-1 rounded-md bg-white p-4 shadow-2xl">
            <ChartItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
