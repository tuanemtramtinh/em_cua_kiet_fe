import { useContext, useState, useEffect } from "react";
import AppContext from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import UserItem from "../components/AdminPage/UserItem";
import ChartItem from "../components/AdminPage/ChartItem";
import UserDetail from "../components/AdminPage/UserDetail";

const Admin = () => {
  const navigate = useNavigate();
  const { user } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Scroll to top when user detail is shown
  useEffect(() => {
    if (showDetail && selectedUser) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showDetail, selectedUser]);

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
        <div className="flex gap-6">
          {/* Thanh taskbar bên trái */}
          <div className="w-64 flex-shrink-0 rounded-md bg-white p-4 shadow-2xl">
            <h3 className="mb-4 text-xl font-bold">Menu</h3>
            <div className="space-y-2">
              <button
                className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                  activeTab === "overview"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => {
                  setActiveTab("overview");
                  setSelectedUser(null);
                }}
              >
                Tổng quan
              </button>
              <button
                className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                  activeTab === "users"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => {
                  setActiveTab("users");
                  setSelectedUser(null);
                  setShowDetail(false);
                }}
              >
                Danh sách người dùng
              </button>
            </div>
          </div>

          {/* Nội dung bên phải */}
          <div className="flex-1">
            {activeTab === "overview" && (
              <div className="rounded-md bg-white p-4 shadow-2xl">
                <ChartItem />
              </div>
            )}

            {activeTab === "users" && (
              <div className="flex items-stretch gap-6">
                {/* Danh sách người dùng bên trái */}
                <div className="flex min-h-[600px] flex-1 flex-col rounded-md bg-white p-4 shadow-2xl">
                  <h3 className="mb-4 text-2xl font-bold">
                    Danh sách người dùng
                  </h3>
                  <div className="flex-1">
                    <UserItem
                      onUserClick={(user) => {
                        setSelectedUser(user);
                        setShowDetail(true);
                      }}
                      refreshTrigger={refreshTrigger}
                    />
                  </div>
                </div>

                {/* Chi tiết người dùng bên phải */}
                {showDetail && selectedUser && (
                  <div className="flex w-96 flex-1 flex-col rounded-md bg-white p-4 shadow-2xl">
                    <UserDetail
                      user={selectedUser}
                      onClose={() => {
                        setShowDetail(false);
                        setSelectedUser(null);
                      }}
                      onApprovalChange={() => {
                        setRefreshTrigger((prev) => prev + 1);
                      }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
