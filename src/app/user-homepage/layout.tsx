import React from "react";
import { UserSidebar } from "@/components";

interface LayoutProps {
  children: React.ReactNode;
}

const UserHomepageLayout: React.FC<LayoutProps> = ({ children }) => {
  const sidebarItems = [
    {
      title: "Dashboard",
      icon: <i className="fas fa-tachometer-alt"></i>,
      url: "/user/dashboard",
    },
    {
      title: "Profile",
      icon: <i className="fas fa-user"></i>,
      url: "/user/profile",
    },
    {
      title: "Settings",
      icon: <i className="fas fa-cog"></i>,
      url: "/user/settings",
    },
  ];
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <UserSidebar sidebarItems={sidebarItems} />
      <main style={{ flex: 1, padding: "20px" }}>{children}</main>
    </div>
  );
};

export default UserHomepageLayout;
