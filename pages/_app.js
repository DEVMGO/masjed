import { useRouter } from "next/router";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
// Layouts
import HomeLayout from "../components/layouts/homeLayout";
import AuthLayout from "../components/layouts/authLayout";
// Styles
import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';

const layouts = {
  L1: HomeLayout,
  L2: AuthLayout,
};

export default function App({ Component, pageProps }) {
  const route = useRouter();
  const login = false;
  useEffect(() => {
    if (!login) route.push("/auth");
  }, []);

  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        theme="light"
        autoClose={3000}
        // hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Layout>
  );
}
