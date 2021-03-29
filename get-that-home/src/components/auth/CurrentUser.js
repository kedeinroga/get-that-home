import { useEffect } from "react";
import PropTypes from "prop-types";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CURRENT_USER_QUERY = gql`
  query {
    currentUser {
      name
      phone
      role
      token
    }
  }
`;

let CurrentUser = ({ children }) => {
  const [currentUser, { error, data, loading, called }] = useLazyQuery(
    GET_CURRENT_USER_QUERY
  );

  useEffect(() => {
    currentUser();
    return () => {};
  }, [currentUser]);

  if (error) return children({ currentUser: null, loaded: false });
  if (!called || loading) return children({ currentUser: null, loaded: false });
  return children({ currentUser: data.me, loaded: true });
};

CurrentUser.propTypes = {
  children: PropTypes.func.isRequired,
};

export default CurrentUser;
export { GET_CURRENT_USER_QUERY };
