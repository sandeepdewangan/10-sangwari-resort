import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Setup React Router
const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 60 * 1000,
  },
});

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/account",
          element: <Account />,
        },
        {
          path: "/bookings",
          element: <Bookings />,
        },
        {
          path: "/cabins",
          element: <Cabins />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/users",
          element: <Users />,
        },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
