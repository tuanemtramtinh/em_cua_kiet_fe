import React from 'react';

const LeftProfileSection = ({ formData, handleChange, editMode }) => {
  return (
    <div className="p-6 rounded-lg shadow-lg w-[600px]" style={{ backgroundColor: '#f9e46f' }}>
      <form>
        <div className="mb-4">
          <label className="block font-bold text-black">Họ và tên:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 rounded"
            style={{ backgroundColor: '#fff8ce' }}
            disabled={!editMode}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold text-black">Ngày sinh:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-2 rounded"
            style={{ backgroundColor: '#fff8ce' }}
            disabled={!editMode}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold text-black">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded"
            style={{ backgroundColor: '#fff8ce' }}
            disabled={!editMode}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold text-black">Sở thích:</label>
          <input
            type="text"
            name="hobby"
            value={formData.hobby}
            onChange={handleChange}
            className="w-full p-2 rounded mb-2"
            style={{ backgroundColor: '#fff8ce' }}
            disabled={!editMode}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold text-black">Tên đăng nhập:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            className="w-full p-2 rounded"
            style={{ backgroundColor: '#fff8ce' }}
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold text-black">Giới tính:</label>
          <div className="flex justify-center space-x-8 mt-2">
            <label className="flex items-center text-lg">
              <input
                type="radio"
                name="sex"
                value="male"
                checked={formData.sex === "male"}
                onChange={handleChange}
                className="mr-2 scale-125"
                disabled={!editMode}
              />
              Nam
            </label>
            <label className="flex items-center text-lg">
              <input
                type="radio"
                name="sex"
                value="female"
                checked={formData.sex === "female"}
                onChange={handleChange}
                className="mr-2 scale-125"
                disabled={!editMode}
              />
              Nữ
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LeftProfileSection;