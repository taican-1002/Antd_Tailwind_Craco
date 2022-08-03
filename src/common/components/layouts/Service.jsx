import React from "react";
import { Button, Carousel, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import slide1 from "../../assets/img/slide1.png";
import slide2 from "../../assets/img/slide2.png";
import slide3 from "../../assets/img/slide3.png";
import slide4 from "../../assets/img/slide4.png";
import slide5 from "../../assets/img/slide5.png";

const serviceItems = [
  {
    img: slide1,
    alt: "slide1",
    class: "w-80",
    title: "Lập trình phần mềm",
    description: "Lập trình phần mềm, ứng dụng theo yêu cầu",
  },
  {
    img: slide2,
    alt: "slide2",
    class: "w-80",
    title: "Lập trình java",
    description: "Lập trình java",
  },
  {
    img: slide3,
    alt: "slide3",
    class: "w-80",
    title: "Lập trình website",
    description: "Lập trình website",
  },
  {
    img: slide4,
    alt: "slide4",
    class: "w-80",
    title: "Lập trình Python",
    description: "Lập trình Python",
  },
  {
    img: slide5,
    alt: "slide5",
    class: "w-80",
    title: "Lập trình Mobile",
    description: "Lập trình Mobile",
  },
];

const Service = () => {
  const { Paragraph, Title } = Typography;
  const settings = {
    draggable: true,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="service-wrap">
      <Title>Dịch vụ</Title>
      <Paragraph>
        Dịch Vụ Chúng tôi cung cấp dịch vụ - giải pháp tốt nhất, toàn diện nhất
        dành cho cá nhân, tổ chức doanh nghiệp.
      </Paragraph>
      <Carousel className="mt-24" {...settings}>
        {serviceItems &&
          serviceItems.map((item, index) => (
            <div className="service-carousel" key={index}>
              <img src={item.img} alt={item.alt} className={item.class} />
              <Title className="cursor-pointer" level={3}>
                {item.title}
              </Title>
              <Paragraph>{item.description}</Paragraph>
              <Button type="text" size="medium" className="btn-more">
                Xem thêm
                <ArrowRightOutlined />
              </Button>
            </div>
          ))}
      </Carousel>
    </div>
  );
};
export default Service;
