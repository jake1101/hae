import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import sample from "Images/offer.png";
import arrow_r from "Images/arrow-r.png";

const Item = ({sub_title}) => {
  return(
    <Article>
      <div>
        <Thumbnail src={sample} alt="sample image" />
      </div>
      <div>
        <Expl>
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
        </Expl>
        <More>
          <img src={arrow_r} alt="arrow right" />
          <span>더보기</span>
        </More>
      </div>
    </Article>
  )
}

const Article = styled.article`
  display: flex;
  gap: 40px;

  & > div:first-child {
    border: 1px solid black;
  }

  & > div:last-child {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Thumbnail = styled.img`
  width: 300px;

  @media (max-width: 1023px) {
    & {
      width: 200px;
      height: 200px;
    }
  }
`;

const Expl = styled.div`
  & h3 {
    padding-bottom: 30px;
    font-size: var(--h3-f);
    font-weight: var(--h3-b);
  }

  & p {
    height: 150px;
    line-height: 30px;

    word-break: break-all;
    overflow-y: scroll;
  }

  @media (max-width: 1023px) {
    & p {
      height: 50px;
      line-height: normal;
    }
  }
`;

const More = styled.div`
  width: 130px;
  display: flex;
  align-items: center;
  text-align: center;
  gap: 10px;

  & > span {
    margin-top: 5px;
  }
`;

export default function Service({group, list}) {
  return(
    <Main>
      <section>
        <TabWrap>
          {group.map((g, i) => (<SNL to={`/service${i}`} key={i}>{g}</SNL>))}
        </TabWrap>
      </section>
      <Section>
        {list.map((s, i) => (<Item key={i} sub_title={s} />))}
      </Section>
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;

  font-size: var(--p-f);
  font-weight: var(--p-b);
`;

const TabWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
`;

const SNL = styled(NavLink)`
  border: 1px solid black;
  padding: 10px;
  text-decoration: none;
  color: #000;

  &.active {
    background-color: #666 !important;
    color: #fff !important;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;