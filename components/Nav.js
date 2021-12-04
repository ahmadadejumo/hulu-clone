import request from "../utils/request";

const Nav = () => {
  return (
    <Nav>
      <div>
        {Object.entries(request).map(([key, { title, url }]) => (
          <h2>{title}</h2>
        ))}
      </div>
    </Nav>
  );
};

export default Nav;
