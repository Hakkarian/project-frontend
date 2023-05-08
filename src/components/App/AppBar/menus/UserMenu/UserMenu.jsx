import { ButtonCss } from "components/App/App.styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "redux/auth/auth-operations";
import { selectUser, selectisAvatar } from "redux/auth/auth-selectors";
import { UserContainerCss, UserTitle } from "./UserMenu.styled";
import { useState } from "react";
import { instance } from "shared/services/auth";

const UserMenu = () => {
    const { email } = useSelector(selectUser);
    const avatarURL = useSelector(selectisAvatar);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    }

    return (
      <UserContainerCss>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <UserTitle>Glad to see you here, {email}</UserTitle>{' '}
          <img src={avatarURL} alt="avatar" width={50} />
        </div>
        <ButtonCss type="button" onClick={handleLogout}>
          Logout
        </ButtonCss>
      </UserContainerCss>
    );
}

export default UserMenu;