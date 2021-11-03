import React from "react";

export default function PersonalLinks() {
  return (
    <div className="main-container">
      <form action="">
        <div className="col-sm-6">
          <label htmlFor="github" className="form-label">
            git hub
          </label>
          <input
            type="text"
            className="form-control"
            name="github"
            id="github"
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="github" className="form-label">
            curriculum vitae
          </label>
          <input
            type="text"
            className="form-control"
            name="github"
            id="github"
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="github" className="form-label">
            linked in
          </label>
          <input
            type="text"
            className="form-control"
            name="github"
            id="github"
          />
        </div>
        <div className="row">
          <button className="w-40 btn btn-primary mx-2 col" type="submit">
            volver
          </button>
          <button className="w-50 btn btn-primary mx-2 col">terminar</button>
        </div>
        l
      </form>
    </div>
  );
}