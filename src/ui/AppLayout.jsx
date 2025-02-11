import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      {/* Header */}
      <p>Header</p>
      {/* Side bar */}
      <p>Side Bar</p>
      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
