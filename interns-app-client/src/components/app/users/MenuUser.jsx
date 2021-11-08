import React from "react";
import TimeLine from "./TimelineUser";
import GeneralInformation from "./GeneralInformation";

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Academic from "./AcademicUser";
import PersonalLinks from "./PersonalLink";

export default function Menu() {
  let url = "/register";

  return (
    <div className="container container-bg">
      <Router>
        <ul className="nav nav-tabs ul-down">
          <li className="nav-item">
            <Link className="nav-link " to={`${url}/Timeline`}>
                Timeline
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${url}/info-general`}>
              Informacion general
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={`${url}/academic`}>
              Academicos
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={`${url}/links`}>
              Links
            </Link>
          </li>


        </ul>

        <Switch>

          <Route path={`${url}/Timeline`}>
            <TimeLine />
          </Route>

          <Route path={`${url}/info-general`}>
          <GeneralInformation />
          </Route>

          <Route path={`${url}/academic`}>
            <Academic />
          </Route>

          
          <Route path={`${url}/links`}>
            <PersonalLinks />
          </Route>
    
        </Switch>
      </Router>
    </div>
  );
}
