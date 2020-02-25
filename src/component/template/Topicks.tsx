import * as React from "react";
import styled from "styled-components";
import COLOR from "component/const/Color";
import * as BaseLayout from "component/template/ContentWrap";

type Topick = {
  sportName: string;
  title: string;
  postDate: string;
  url: string;
  imgUrl: string;
};
type Props = {
  topicks: Topick[];
};
export function Component(props: Props) {
  console.log(props.topicks);
  return (
    <>
      <>
        <H2>トピックス</H2>
        {props.topicks.length === 0 && (
          <BaseLayout.Component>トピックスはありません</BaseLayout.Component>
        )}
        {props.topicks.length !== 0 &&
          props.topicks.map<React.ReactElement>((e: any) => {
            return (
              <Linked href={e.url} target="_blank">
                <Topicked>
                  <Text>
                    <Day>
                      <span>バスケット</span>
                      <time>{e.postDate}</time>
                    </Day>
                    <Title>
                      <p>{e.title}</p>
                    </Title>
                  </Text>
                  <Photo>
                    <img src={e.url} alt={e.title} width="131" height="87" />
                  </Photo>
                </Topicked>
              </Linked>
            );
          })}
      </>
    </>
  );
}

const H2 = styled.h2`
  font-size: 14px;
  padding: 12px 0px 12px 16px;
  border-top: 1px solid ${COLOR.border};
  font-weight: bold;
`;

const Linked = styled.a`
  text-decoration: none;
  display: block;
`;

const Topicked = styled.div`
  display: flex;
  border-top: 1px solid ${COLOR.border};
  padding: 16px 14px 16px 18px;
`;

const Text = styled.div`
  width: 60%;
`;

const Day = styled.div`
  font-size: 10px;
  color: #9b9b9b;
  margin: 3px 0;
`;

const Title = styled.div`
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  color: #000;
`;

const Photo = styled.div`
  margin: 0 0 0 15px;
`;
export default Component;
