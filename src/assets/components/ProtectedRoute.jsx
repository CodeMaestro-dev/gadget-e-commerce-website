import PropTypes from "prop-types";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { listenAuthState } from "../../redux-features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux-features/loadingSlice";

const ProtectedRoute = ({ component: Component }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.loading.loading);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(listenAuthState());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(setLoading(false));
    }
  }, [user, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? <Component /> : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
