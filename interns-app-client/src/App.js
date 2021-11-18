import login from "./pages/login";
import Menu from "./components/landing/register/Menu";
import HomeRegister from "./components/landing/register/HomeRegister";
import GeneralInformation from "./components/landing/register/GeneralInformation";

import TopNav from "./components/app/TopNav";
import AssignmentSection from "./components/app/assignments/AssignmentSection";
import Group from "./components/app/group/GroupSection";
import Usersgeneral from "./components/app/users/alluser/UserSection";
import Users from "./components/app/users/UserSectiongeneral";
import Dashboard from "./components/app/dashboard/Dashboard";

import TopNavGroup from "./components/app/group/TopNavGroup";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import {
  TasksIcon,
  TachometerAltIcon,
  UserIcon,
  UserCogIcon,
  StickyNoteIcon,
  CogsIcon,
} from "./components/icons/index";
import LandingPage from "./pages";
const App = () => {
  return (
    //Este Router ha sido comentado por mi para entrar al Landing luego lo configuraremos
    // <Router>
    //   <div className="container-fluid  ">
    //     <div className="row">
    //       <div className="col-sm-auto  bg-dark sticky-top">
    //         <div className="d-flex  bg-dark flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
    //           <Link
    //             to="/"
    //             className="d-block p-3 link-dark text-decoration-none"
    //             title="Icon-only"
    //             data-bs-toggle="tooltip"
    //             data-bs-placement="right"
    //             data-bs-original-title="Icon-only"
    //           ></Link>
    //           <ul className="nav nav-pills nav-flush  flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
    //             <li className="nav-item">
    //               <Link
    //                 to="/assignments"
    //                 className="nav-link  link-light hoverbutton py-3 px-3 "
    //                 title="Home"
    //                 data-bs-toggle="tooltip"
    //                 data-bs-placement="right"
    //                 data-bs-original-title="Home"
    //               >
    //                 <TasksIcon />
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 to="/"
    //                 className="nav-link link-light hoverbutton py-3 px-3"
    //                 title="Dashboard"
    //                 data-bs-toggle="tooltip"
    //                 data-bs-placement="right"
    //                 data-bs-original-title="Dashboard"
    //               >
    //                 <TachometerAltIcon />
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 to="/users"
    //                 className="nav-link link-light hoverbutton py-3 px-3"
    //                 title="Orders"
    //                 data-bs-toggle="tooltip"
    //                 data-bs-placement="right"
    //                 data-bs-original-title="Orders"
    //               >
    //                 <UserIcon />
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 to="/groups"
    //                 className="nav-link link-light hoverbutton py-3 px-3"
    //                 title="Products"
    //                 data-bs-toggle="tooltip"
    //                 data-bs-placement="right"
    //                 data-bs-original-title="Products"
    //               >
    //                 <UserCogIcon />
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 to="/"
    //                 className="nav-link link-light hoverbutton py-3 px-3"
    //                 title="Customers"
    //                 data-bs-toggle="tooltip"
    //                 data-bs-placement="right"
    //                 data-bs-original-title="Customers"
    //               >
    //                 <StickyNoteIcon />
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 top="/"
    //                 className="nav-link link-light hoverbutton py-3 px-3"
    //                 title="Customers"
    //                 data-bs-toggle="tooltip"
    //                 data-bs-placement="right"
    //                 data-bs-original-title="Customers"
    //               >
    //                 <CogsIcon />
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="col-sm p-3 min-vh-100">
    //         <Switch>
    //           <Route exact path="/">
    //           <TopNav />
    //             <Dashboard />
    //           </Route>
    //           <Route path={`/assignments`}>
    //           <TopNav />
    //             <AssignmentSection />
    //           </Route>
    //           <Route path={`/users`}>
    //           <TopNav />
    //             <Usersgeneral />
    //           </Route>
    //           <Route path={`/groups`}>
    //           <TopNavGroup />
    //             <Group />
    //           </Route>
    //         </Switch>
    //       </div>
    //     </div>
    //   </div>
    // </Router>
    <LandingPage />
  );
};

export default App;
