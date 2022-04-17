import {
  BookmarkBorder,
  Home,
  ListAlt,
  MailOutline,
  MoreHoriz,
  NotificationsNone,
  PermIdentity,
  Search,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import SidebarOption from "./SidebarOption";
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
      <Twitter />

      <SidebarOption active title={"Home"} Icon={Home} />
      <SidebarOption title={"Explore"} Icon={Search} />
      <SidebarOption title={"Notifications"} Icon={NotificationsNone} />
      <SidebarOption title={"Messages"} Icon={MailOutline} />
      <SidebarOption title={"Bookmarks"} Icon={BookmarkBorder} />
      <SidebarOption title={"Lists"} Icon={ListAlt} />
      <SidebarOption title={"Profile"} Icon={PermIdentity} />
      <SidebarOption title={"More"} Icon={MoreHoriz} />

      <Button variant="outlined" className="sidebar__tweet">Tweet</Button>
    </div>
  );
}

export default Sidebar;
