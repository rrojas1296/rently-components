import type { Meta, StoryObj } from "@storybook/react-vite";
import SideNavigation from "../components/SideNavigation";
import {
  ChartBarIncreasing,
  LayoutDashboardIcon,
  MenuIcon,
  SettingsIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
import withColorSchema from "../decorators/withColorSchema";

const meta: Meta<typeof SideNavigation> = {
  title: "Components/SideNavigation",
  component: SideNavigation,
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<typeof SideNavigation>;

export const Default: Story = {
  args: {
    pathname: "/dashboard/users",
    sections: [
      {
        id: 1,
        title: "Main",
        options: [
          {
            label: "Dashboard",
            href: "/dashboard",
            Icon: LayoutDashboardIcon,
            onClick: () => {},
          },
          {
            label: "Users",
            href: "/users",
            Icon: UsersIcon,
            onClick: () => {},
          },
          {
            label: "Settings",
            href: "/settings",
            Icon: SettingsIcon,
            onClick: () => {},
          },
        ],
      },
      {
        id: 2,
        title: "Admin",
        options: [
          {
            label: "Profile",
            href: "/profile",
            Icon: UserIcon,
            onClick: () => {},
          },
        ],
      },
    ],
  },

  render: ({ pathname, sections }) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <SideNavigation
          open={open}
          setOpen={setOpen}
          pathname={pathname}
          sections={sections}
          IconHeader={ChartBarIncreasing}
          textHeader="Rently"
        />
        <Button variant="icon" onClick={() => setOpen((prev) => !prev)}>
          <MenuIcon className="w-5 h-5 text-text-1" />
        </Button>
      </>
    );
  },
};
