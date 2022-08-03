import React from "react";
import { Row, Typography, Image, Button } from "antd";
import banner from "../../assets/img/banner.png";
const Banner = () => {
  const { Title, Paragraph } = Typography;

  return (
    <Row className="banner-wrap">
      <div className="container flex md:max-w-full">
        <div className="md:w-3/5">
          <Title className="lg:w-4/5 md:w-full">
            True Technology Ultimate Life
          </Title>
          <Paragraph className="pt-6 pb-8 text-lg text-gray-400 ">
            VTCode, the true technology that optimizes life. We will bring you
            the best solutions.
          </Paragraph>
          <Button type="primary" className="bg-blue-600 rounded" size="large">
            Bắt đầu
          </Button>
        </div>
        <Row className="hidden md:block md:w-2/5">
          <Image
            preview={false}
            src={banner}
            className="flex object-contain mx-auto lg:w-full md:m-0"
            height="100%"
          />
        </Row>
      </div>
    </Row>
  );
};

export default Banner;
