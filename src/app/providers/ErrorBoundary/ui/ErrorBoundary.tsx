import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
  children: ReactNode,
}

interface ErrorBoundaryState {
  hasError: boolean,
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info.componentStack);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense fallback="">
          <PageError />
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;