import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae vero
        rerum commodi, unde fugit fugiat itaque dolorem, possimus voluptate
        quaerat impedit ipsum assumenda esse dicta consectetur provident tempore
        natus suscipit.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div className="explore-menu-list-item" key={index}>
            <img src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;