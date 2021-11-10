import React from "react";
import Buttons_f_b from "../Buttons_f_b";

export default function PersonalLinks() {
  return (
    <div className="main-container">
      <form action="">
        <div className="col-sm-6">
          <label htmlFor="github" className="form-label">
            GitHub
          </label>
          <input
            type="url"
            className="form-control"
            name="github-link"
            id="github-link"
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="cv-lb" className="form-label">
            Curriculum Vitae (Link)
          </label>
          <input
            type="url"
            className="form-control"
            name="cv-link"
            id="cv-link"
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="linkenin-link" className="form-label">
            LinkedIn
          </label>
          <input
            type="url"
            className="form-control"
            name="likedin-link"
            id="linkedin-link"
          />
        </div>
        <br /><br />

        <Buttons_f_b/>
        
      </form>
    </div>
  );
}
