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
    <div className=" fixed w-full z-50">
      <PageHeader ghost={false}>
        <div className="flex items-center justify-between xl:px-48 lg:px-24 md:px-0 sm:px-0">
          <Image src={logo} width={150} />
          <Menu
            className="flex items-center border-0 text-lg text-gray-400 font-sans font-normal"
            items={menuItems}
            defaultSelectedKeys={["1"]}
          ></Menu>
        </div>
      </PageHeader>
    </div>
  );
};

export default Header;
