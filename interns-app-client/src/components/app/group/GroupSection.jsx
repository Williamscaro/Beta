import React from "react";
import Group from "./Group";
import GroupFilter from "./GroupFilter";
import GroupNav from "./GroupNav";
export default function GroupSection() {
  return (
    <>
      <GroupNav />
      <div className="container">
        <div className="row py-5 border-bottom">
          <div className="col-sm-12 col-md-8 shadow p-3 mb-5 bg-body rounded card">
            <h5 className="mb-3">Group</h5>
            <Group />
          </div>

          <div className="col-md-1 col-12 pt-4 d-none d-sm-none d-md-block"></div>

          <div className="col-12 col-md-3 text-center card">
            <h4 className="mt-3 mb-3">Filtración</h4>
            <GroupFilter />
          </div>
        </div>
      </div>
    </>
  );
}
