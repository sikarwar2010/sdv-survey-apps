'use client';

import * as React from 'react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  BookOpenIcon,
  Settings2Icon,
  TerminalIcon,
  Building2Icon,
  LayoutDashboard,
} from 'lucide-react';

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: <LayoutDashboard />,
      isActive: true,
    },
    {
      title: 'Property Survey',
      url: '#',
      icon: <Building2Icon />,
      items: [
        {
          title: 'All Surveys',
          url: '#',
        },
        {
          title: 'Progress Surveys',
          url: '#',
        },
        {
          title: 'QC Surveys',
          url: '#',
        },
        {
          title: 'Completed Surveys',
          url: '#',
        },
        {
          title: 'Report Survey',
          url: '#',
        },
      ],
    },
    {
      title: 'Users Management',
      url: '#',
      icon: <BookOpenIcon />,
      items: [
        {
          title: 'All Users',
          url: '#',
        },
        {
          title: 'Add User',
          url: '#', 
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: <Settings2Icon />,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <TerminalIcon className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">SDV EDUTECH PVT LTD</span>
                  <span className="truncate text-xs">Survey App</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
