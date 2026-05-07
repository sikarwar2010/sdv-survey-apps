'use client';

import * as React from 'react';

import { NavMain } from '@/components/commons/nav-main';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { BookOpenIcon, Settings2Icon, TerminalIcon, Building2Icon, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
              <Link href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Image src="/logo.svg" alt="SDV EDUTECH PVT LTD" width={32} height={32} loading="eager" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">SDV EDUTECH PVT LTD</span>
                  <span className="truncate text-xs">Survey App</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="text-xs text-muted-foreground text-center py-2">
          Copyright © 2026
          <br />
          SDV EDUTECH PVT LTD.
          <br />
          All rights reserved.
          <br />
          <span className="text-xs text-muted-foreground">Version 1.0.0</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
