import React from "react";
import { Image, Menu, PageHeader } from "antd";
import logo from "../../assets/img/logo.png";

const menuItems = [
  {
    key: "1",
    label: "Trang chủ",
  },
  {
    key: "2",
    label: "Dịch vụ",
  },
  {
    key: "3",
    label: "Dự án",
  },
  {
    key: "4",
    label: "Đội ngũ",
  },
  {
    key: "5",
    label: "Liên hệ",
  },
];

const Header = () => {
  return (
    <div className="fixed z-50 w-full ">
      <PageHeader ghost={false}>
        <div className="flex items-center justify-between xl:px-48 lg:px-24 md:px-0 sm:px-0">
          <Image preview={false} src={logo} width={150} />
          <Menu
            className="flex items-center font-sans text-lg font-normal text-gray-400 border-0"
            items={menuItems}
            defaultSelectedKeys={["1"]}
          ></Menu>
        </div>
      </PageHeader>
    </div>
  );
};

export default Header;
