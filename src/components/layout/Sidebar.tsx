import React from "react";
import {
  SidebarProvider,
  Sidebar as SidebarUI,
  SidebarGroup,
  SidebarContent,
  SidebarMenu,
  SidebarGroupContent,
  SidebarMenuButton,
} from "../ui/sidebar";

type SidebarItem = {
  title: string;
  icon: React.ReactNode;
  url: string;
  children?: SidebarItem[];
};

type UserSidebarProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  sidebarItems: SidebarItem[];
};

export const UserSidebar: React.FC<UserSidebarProps> = (
  props: UserSidebarProps
) => {
  const { sidebarItems } = props;
  return (
    <SidebarProvider defaultOpen>
      <SidebarUI>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              {sidebarItems.map((item, index) => {
                const { title, icon } = item;
                return (
                  <SidebarMenu key={index}>
                    <SidebarMenuButton asChild>
                      <span>
                        {icon} <span>{title}</span>
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenu>
                );
              })}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </SidebarUI>
    </SidebarProvider>
  );
};
