import React from "react";
import AppContext from "../context";

import Admin from "components/Admin/Admin";

const AdminPage = (setIsLoggedIn) => {
  const { handleLogout } = React.useContext(AppContext);

  return (
    <div>
      <Admin />
    </div>
  );
};

export default AdminPage;
