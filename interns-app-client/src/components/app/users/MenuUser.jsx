import React from "react";
import TimeLine from "./TimelineUser";
import GeneralInformation from "./GeneralInformation";

import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from "react-router-dom";

export default function Menu() {
  let url = "/register";

  return (
    <div className="container container-bg">
      <Router>
        <ul className="nav nav-tabs ul-down">
          <li className="nav-item">
            <Link className="nav-link " to={`${url}/general-info`}>
                Timeline
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${url}/academic`}>
              Informacion general
            </Link>
          </li>


        </ul>

        <Switch>

          <Route path={`${url}/general-info`}>
            <TimeLine />
          </Route>

          <Route path={`${url}/academic`}>
          <GeneralInformation />


          </Route>
          {/*           <Route path={`${url}/self-appraisal`}>
            <SelfAppraisal />
          </Route> */}

        </Switch>
      </Router>
    </div>
  );
}
