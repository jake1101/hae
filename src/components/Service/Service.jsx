import React from "react";
import "./Service.css";

import offer from "../../image/offer.png";

const Item = (props) => {
  return(
    <article className="hae_service_item">
      <div>
        <img className="hae_service_thumbnail" src={offer} alt="sample image" />
      </div>
      <div>
        <div className="hae_service_expl">
          <div>
            <h3>{props.title}</h3>
          </div>
          <div>
            <p>
              Do occaecat culpa nostrud quis laboris labore ipsum fugiat non cillum incididunt. Nostrud in velit ullamco labore nulla Lorem consectetur ea occaecat. Sunt incididunt dolore commodo reprehenderit velit excepteur magna labore adipisicing velit adipisicing dolor laboris mollit. Voluptate consectetur voluptate cupidatat eiusmod id Lorem esse officia ipsum labore ipsum.
            </p>
          </div>
        </div>
        <div className="hae_service_more">
          <div>
            -&gt; 더보기
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Service() {
  return(
    <main className="hae_service_wrap">
      <div className="hae_service_top">
        <div>
          item1
        </div>
        <div>
          item2
        </div>
        <div>
          item3
        </div>
        <div>
          item4
        </div>
      </div>
      <div className="hae_service_mid">
        <Item title={"이동형 비전센서 활용 접근 통제"} />
        <Item title={"이동형 비전센서 활용 작업자 안전 관리"} />
      </div>
    </main>
  )
}