import React from "react";
import { Row, Image } from "antd";
import galaxy from "../../assets/img/galaxy.png";
import heineken from "../../assets/img/heineken.png";
import fpt from "../../assets/img/fpt.png";
import vtco from "../../assets/img/vtco.png";
import icool from "../../assets/img/icool.png";

const partnerItems = [
  {
    src: galaxy,
    class: "mx-auto object-contain md:m-0",
    height: "34px",
    width: "170px",
  },
  {
    src: heineken,
    class: "mx-auto object-contain md:m-0",
    height: "34px",
    width: "170px",
  },
  {
    src: fpt,
    class: "mx-auto object-contain md:m-0",
    height: "34px",
    width: "170px",
  },
  {
    src: vtco,
    class: "mx-auto object-contain md:m-0",
    height: "34px",
    width: "170px",
  },
  {
    src: icool,
    class: "mx-auto object-contain md:m-0",
    height: "34px",
    width: "170px",
  },
];

const Partner = () => {
  return (
    <Row className="partner-wrap">
      <div className="partner-grid">
        {partnerItems.map((item, index) => (
          <Image
            preview={false}
            key={index}
            src={item.src}
            className={item.class}
            height={item.height}
            width={item.width}
          />
        ))}
      </div>
    </Row>
  );
};

export default Partner;
