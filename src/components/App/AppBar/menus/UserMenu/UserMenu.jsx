import { ButtonCss } from "components/App/App.styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "redux/auth/auth-operations";
import { selectUser, selectisAvatar } from "redux/auth/auth-selectors";
import { UserContainerCss, UserTitle, UserWrapCss } from "./UserMenu.styled";
import { useEffect, useState } from "react";
import { instance } from "shared/services/auth";
import { ModalOpenCss } from "components/Modal/Modal.styled";
import Modal from "components/Modal";

const UserMenu = () => {
    const { email } = useSelector(selectUser);
  const avatarURL = useSelector(selectisAvatar);
  const [open, setOpen] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
  }
  
  const openModal = () => {
    setOpen(true)
  }
  const closeModal = () => {
    setOpen(false);
  }

    return (
      <UserContainerCss>
        <UserWrapCss>
          <UserTitle>Glad to see you here, {email}</UserTitle>{' '}
          <img src={avatarURL} alt="avatar" width={50} />
        </UserWrapCss>
        <ModalOpenCss type="button" onClick={openModal}>Settings</ModalOpenCss>
        <ButtonCss type="button" onClick={handleLogout}>
          Logout
        </ButtonCss>
        { open && <Modal closeModal={closeModal} email={email} open={open} />}
      </UserContainerCss>

    );
}

export default UserMenu;