import React from "react";
// import * as History from 'history'
type Props = {
  // history: History.History
};

type LocalState = {
  hasError: boolean;
  error?: unknown;
};

class ErrorBoundary extends React.Component<Props, LocalState> {
  state: Readonly<LocalState>;
  constructor(props: Props) {
    // cf. https://github.com/jhusain/eslint-plugin-immutable/issues/16
    super(props);
    this.state = {
      hasError: false
    };
    console.log(props);
  }
  static getDerivedStateFromError(error: unknown) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error: unknown, info: unknown) {
    console.error({ error, info }); // eslint-disable-line no-console
    // this.props.history.push("/error")
  }
  render() {
    if (this.state.hasError) {
      if (this.state.error instanceof Error) {
        return this.state.error.stack;
      }
      throw new TypeError(`${this.state.error} is not an error.`);
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
