import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";

export const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1) Load authenticated user
  const { isFetching, isAuthenticated } = useUser();

  // 2) No auth user, redirect to login page
  useEffect(() => {
    if (!isAuthenticated && !isFetching) navigate("/login");
  }, [isAuthenticated, navigate, isFetching]);

  // 3) While loading, show spinner
  if (isFetching)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4) If there is user, render app
  return children;
}
export default ProtectedRoute;
