import React from "react";
import styled from "styled-components";
import SIZE from "component/const/Size";
import media from "styled-media-query";

type Props = {};

export const Component: React.FC<Props> = props => {
  return (
    <Terms>
      <h3>利用規約</h3>
      <p>
        本サービス利用規約（以下、「本規約」と称します）は、当社の様々なウェブサイト、SMS、API、メール通知、アプリケーション、ボタン、ウィジェット、広告、およびeコマースサービスなどのTwitterのサービスと、本規約に関連するTwitterの他の対象サービス（https://help.twitter.com/ja/rules-and-policies/twitter-services-and-corporate-affiliates）（以下、「本サービス」と総称します）、ならびに本サービスにアップロード、ダウンロードまたは表示される情報、テキスト、リンク、グラフィック、写真、音声、動画、その他のマテリアルやアレンジされたマテリアル（以下、「コンテンツ」と総称します）にアクセスし、利用する場合に適用されます。本サービスを利用することによって、ユーザーは本規約に拘束されることに同意したことになります。
      </p>
    </Terms>
  );
};

const Terms = styled.div`
  font-size: ${SIZE.FONT.M}px;
  ${media.lessThan("small")`
    font-size: 10px;
  `}
`;

export default Component;
