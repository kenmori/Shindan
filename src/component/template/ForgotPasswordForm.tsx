import React from "react";

type Props = {
  children: React.ReactElement;
  isDisabled?: boolean;
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange: (
    eventOrPath: string | React.ChangeEvent<any>
  ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
  values: { email: string };
};

export function ForgotPasswordForm(props: Props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={props.handleChange}
        value={props.values.email}
      />
      {props.children}
      <div style={{ marginTop: "30px;" }}>
        <button type="submit" disabled={props.isDisabled}>
          パスワード再発行
        </button>
      </div>
    </form>
  );
}

export default ForgotPasswordForm;
