import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

import offer from "../../images/offer.png";

const Item = ({sub_title}) => {
  return(
    <article className="hae_service_item">
      <div>
        <img className="hae_service_thumbnail" src={offer} alt="sample image" />
      </div>
      <div>
        <div className="hae_service_expl">
          <div>
            <h3>{sub_title}</h3>
          </div>
          <div>
            <p>
              Do occaecat culpa nostrud quis laboris labore ipsum fugiat non cillum incididunt. Nostrud in velit ullamco labore nulla Lorem consectetur ea occaecat. Sunt incididunt dolore commodo reprehenderit velit excepteur magna labore adipisicing velit adipisicing dolor laboris mollit. Voluptate consectetur voluptate cupidatat eiusmod id Lorem esse officia ipsum labore ipsum.
              Do occaecat culpa nostrud quis laboris labore ipsum fugiat non cillum incididunt. Nostrud in velit ullamco labore nulla Lorem consectetur ea occaecat. Sunt incididunt dolore commodo reprehenderit velit excepteur magna labore adipisicing velit adipisicing dolor laboris mollit. Voluptate consectetur voluptate cupidatat eiusmod id Lorem esse officia ipsum labore ipsum.
              Do occaecat culpa nostrud quis laboris labore ipsum fugiat non cillum incididunt. Nostrud in velit ullamco labore nulla Lorem consectetur ea occaecat. Sunt incididunt dolore commodo reprehenderit velit excepteur magna labore adipisicing velit adipisicing dolor laboris mollit. Voluptate consectetur voluptate cupidatat eiusmod id Lorem esse officia ipsum labore ipsum.
              Do occaecat culpa nostrud quis laboris labore ipsum fugiat non cillum incididunt. Nostrud in velit ullamco labore nulla Lorem consectetur ea occaecat. Sunt incididunt dolore commodo reprehenderit velit excepteur magna labore adipisicing velit adipisicing dolor laboris mollit. Voluptate consectetur voluptate cupidatat eiusmod id Lorem esse officia ipsum labore ipsum.
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

export default function Service({group, list}) {
  return(
    <main className="hae_service_wrap">
      <div>
        <div className="hae_service_tab_wrap">
          {group.map((g, i) => (<NavLink className="hae_service_tab" to={`/service/${i}`} key={i}>{g}</NavLink>))}
        </div>
      </div>
      <div className="hae_service_mid">
        {list.map((s, i) => (<Item key={i} sub_title={s} />))}
      </div>
    </main>
  )
}