import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsUserVerified, selectUser } from "redux/auth/auth-selectors";



const PublicView = () => {
    const auth = useSelector(selectUser);
    const verify = useSelector(selectIsUserVerified);
    if (verify && auth.token) {
      return <Navigate to="/contacts" />;
    }
    return <Outlet />;
}

export default PublicView;