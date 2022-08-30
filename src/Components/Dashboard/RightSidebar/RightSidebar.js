import React from "react";
import'./Right.css'
const RightSidebar = (props) => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/salman.jpg", name: "Fawad Khan" },
    { id: 2, image: "/images/ami.jpg", name: "Aasad Khan" },
    { id: 3, image: "/images/pic1.jpg", name: "Kamran Khan" },
    { id: 4, image: "/images/sakib.jpg", name: "Javed Khan" },
    { id: 5, image: "/images/cr7.jpg", name: "Fazal Khan" },
    { id: 6, image: "/images/cr7.jpg", name: "Rahim Khan" },
    { id: 6, image: "/images/cr7.jpg", name: "Imran Khan" },
    { id: 7, image: "/images/profile.jfif", name: "Saeed Khan" },
    { id: 8, image: "/images/salman.jpg", name: "Bilal Khan" },
    { id: 9, image: "/images/ami.jpg", name: "Umer Khan" },
    { id: 10, image: "/images/pic1.jpg", name: "Usman Khan" },
  ]);

  return (
    <div className="chatBar">
      {state.map((user) => (
        <div
          className="chatBar__list"
          key={user.id}
       
        >
          <div className="chatBar__list-img">
            <img src={user.image} alt="user" />
            <span className="status"></span>
          </div>
          <div className="chatBar__list-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default RightSidebar;
