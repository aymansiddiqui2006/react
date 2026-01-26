import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // Page requires login, but user is not logged in
    if (authentication && !authStatus) {
      navigate("/login");
    }

    // Page requires logout, but user is logged in
    if (!authentication && authStatus) {
      navigate("/");
    }

    setLoader(false);
  }, [authStatus, authentication, navigate]);

  if (loader) {
    return <h1 className="text-center py-8">Loading...</h1>;
  }

  return <>{children}</>;
}
