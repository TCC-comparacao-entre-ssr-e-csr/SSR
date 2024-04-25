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
              <img src="/images/breadcrumb.svg" alt="" />
              <h4>Mobile Phone</h4>
            </li>
            <li>
              <img src="/images/breadcrumb.svg" alt="" />
              <h4>Apple</h4>
            </li>
            <li>
              <img src="/images/breadcrumb.svg" alt="" />
              <h4 className="active">Apple Iphone 7, 128 GB</h4>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="breadcrumb__social__media">
            <li>Share: </li>
            <li>
              <img src="/images/facebook icon.svg" alt="" />
            </li>
            <li className="count__breadcrumb__social">45</li>
            <li>
              <img src="/images/twitter icon.svg" alt="" />
            </li>
            <li className="count__breadcrumb__social">12</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
