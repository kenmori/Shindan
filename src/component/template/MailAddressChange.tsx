import React from "react";

type Props = {
  handleClickClearUserInput(): void;
  handleClickSubmitEmail(values: { email: string }): void;
};
const MailAddressChange: React.FC<Props> = (props: Props) => {
  console.log(props);

  return (
    <div>
      <h2>メールアドレスを変更する</h2>
    </div>
  );
};

export default MailAddressChange;
