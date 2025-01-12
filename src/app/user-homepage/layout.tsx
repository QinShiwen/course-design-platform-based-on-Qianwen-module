"use client";
import React, { useState } from "react";
import { UserSidebar } from "@/components";
import { USER_HOMEPAGE_EN, USER_HOMEPAGE_CN } from "@/locales";
import { useLanguage, UserLanguageType } from "@/context";

interface LayoutProps {
  children: React.ReactNode;
}

const UserHomepageLayout: React.FC<LayoutProps> = ({ children }) => {
  const { language } = useLanguage();
  const [activePage, setActivePage] = useState<number>(0);
  const pageText =
    language === UserLanguageType.ENG ? USER_HOMEPAGE_EN : USER_HOMEPAGE_CN;

  const handleActivatePage = (pageIndex: number): void => {
    setActivePage(pageIndex);
  };

  const sidebarItems = [
    {
      title: pageText.MY_COURSES,
      icon: <i className="fas fa-tachometer-alt"></i>,
      url: "/user-homepage/courses",
    },
  ];
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <UserSidebar
        sidebarItems={sidebarItems}
        activePage={activePage}
        handleActivatePage={handleActivatePage}
      />
      <main style={{ flex: 1, padding: "20px" }}>{children}</main>
    </div>
  );
};

export default UserHomepageLayout;
