import { Container } from "@mui/material";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";

const HomePage = lazy(() => import("./Modules/HomePage/Pages/HomePage"));
const RoomPage = lazy(() => import("./Modules/RoomPage/Pages/RoomPage"));
const BlogPage = lazy(() => import("./Modules/BlogPage/Pages/BlogPage"));
const RoomDetail = lazy(() => import("./Modules/RoomDetail/Pages/RoomDetail"));
const ContactPage = lazy(() => import("./Modules/ContactPage/Pages/ContactPage"));
const Register = lazy(() => import("./Modules/Auth/Pages/Register"));
const Login = lazy(() => import("./Modules/Auth/Pages/Login"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
        <Route exact path="/login">
            <Layout>
              <Login />
            </Layout>
          </Route>

          <Route exact path="/register">
            <Layout>
              <Register />
            </Layout>
          </Route>



          <Route exact path="/room">
            <Layout>
              <RoomPage />
            </Layout>
          </Route>

          <Route exact path="/blog">
            <Layout>
              <BlogPage />
            </Layout>
          </Route>

          <Route exact path="/room-detail">
            <Layout>
              <RoomDetail />
            </Layout>
          </Route>

          <Route exact path="/contact">
            <Layout>
              <ContactPage />
            </Layout>
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}
