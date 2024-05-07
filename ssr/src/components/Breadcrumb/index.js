import Image from "next/image";

import "./index.css";

const Breadcrumb = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-8">
          <ul className="breadcrumb__item">
            <li>
              <h4>Main</h4>
            </li>
            <li>
              <Image src="/images/e-commercebreadcrumb.svg" width={5} height={5} alt="" />
              <h4 className="active">PROMOTION - 40% OFF</h4>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="breadcrumb__social__media">
            <li>Share: </li>
            <li>
              <Image
                src="/images/e-commercefacebook icon.svg"
                width={9}
                height={9}
                alt=""
              />
            </li>
            <li className="count__breadcrumb__social">45</li>
            <li>
              <Image
                src="/images/e-commercetwitter icon.svg"
                width={9}
                height={9}
                alt=""
              />
            </li>
            <li className="count__breadcrumb__social">12</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
