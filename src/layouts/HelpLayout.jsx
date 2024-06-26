import { Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
        illum.
      </p>
      <Outlet />
    </div>
  );
}

export default HelpLayout;
