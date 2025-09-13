import React, { useState, useContext, useEffect } from 'react';
import LeftProfileSection from './LeftProfileSection';
import RightProfileSection from './RightProfileSection';
import AppContext from '../../contexts/AppContext';
import api from '../../lib/axios';

const ProfileSection = () => {
  const { user, setUser } = useContext(AppContext);
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    email: '',
    username: '',
    sex: '',
    avatar: '',
    hobby: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || user.name || '',
        dob: user.dob || user.dateOfBirth || '',
        email: user.email || '',
        username: user.username || '',
        sex: user.sex || user.gender || '',
        avatar: user.avatar || '',
        hobby: user.hobby || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarFile(e.target.files[0]);
      // Preview
      const reader = new FileReader();
      reader.onload = (ev) => {
        setFormData((prev) => ({
          ...prev,
          avatar: typeof ev.target.result === 'string' ? ev.target.result : ''
        }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = async () => {
    setLoading(true);
    try {
      const data = new FormData();
      data.append('name', formData.fullName);
      data.append('dob', formData.dob);
      data.append('email', formData.email);
      data.append('sex', formData.sex);
      data.append('hobby', formData.hobby);
      if (avatarFile) {
        data.append('avatar', avatarFile);
      }
      // Debug log
      console.log('Username for update:', formData.username);
      console.log('Endpoint:', `/user/update-profile/${formData.username}`);
      if (!formData.username) {
        alert('Username không hợp lệ!');
        setLoading(false);
        return;
      }
      const res = await api.post(`/user/update-profile/${formData.username}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const updatedUser = res.data.data.user;
      setUser(updatedUser);
      localStorage.setItem('userInfo', JSON.stringify(updatedUser));
      setEditMode(false);
      setAvatarFile(null);

      setFormData({
        fullName: updatedUser.fullName || updatedUser.name || '',
        dob: updatedUser.dob || updatedUser.dateOfBirth || '',
        email: updatedUser.email || '',
        username: updatedUser.username || '',
        sex: updatedUser.sex || updatedUser.gender || '',
        avatar: updatedUser.avatar || '',
        hobby: updatedUser.hobby || '',
      });
    } catch (err) {
      alert('Cập nhật thông tin thất bại!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-between max-w-6xl mx-auto">
      <div>
        <LeftProfileSection
          formData={formData}
          handleChange={handleChange}
          editMode={editMode}
        />
      </div>
      <RightProfileSection
        formData={formData}
        editMode={editMode}
        onEditClick={handleEditClick}
        onSaveClick={handleSaveClick}
        loading={loading}
        handleAvatarChange={handleAvatarChange}
      />
    </div>
  );
};

export default ProfileSection;