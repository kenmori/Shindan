import * as React from "react";

type Props = {
  children: React.ReactElement;
  isDisabled?: boolean;
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange: (
    eventOrPath: string | React.ChangeEvent<any>
  ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
  values: { email: string; password?: string };
};
function FormUserInput(props: Props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="email">email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={props.handleChange}
        value={props.values.email}
      />
      {/* ここがあるから分岐が起きる　メルアド変更ぺーじのため */}
      {!!props.values.password && (
        <>
          <label htmlFor="password">password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={props.handleChange}
            value={props.values.password}
          />
        </>
      )}
      {props.children}
      <button type="submit" disabled={props.isDisabled}>
        Submit
      </button>
    </form>
  );
}

export default FormUserInput;
