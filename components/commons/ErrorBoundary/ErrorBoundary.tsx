import React, { ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * Reusable ErrorBoundary component that catches errors within its child components.
 */
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  /**
   * Invoked when an error is caught within the component or its child components.
   *
   * @param error - The error object.
   * @param errorInfo - Additional error information.
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error or send it to an error tracking service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ hasError: true });
  }

  /**
   * Renders the component or fallback UI based on whether an error occurred.
   *
   * @returns The rendered component or fallback UI.
   */
  render(): ReactNode {
    if (this.state.hasError) {
      // You can customize the fallback UI to your needs
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
