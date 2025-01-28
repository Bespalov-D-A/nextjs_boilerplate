'use client';
/* eslint-disable i18next/no-literal-string */
import { Suspense, type ErrorInfo, type ReactNode } from 'react';
import React from 'react';
import { ErrorPage } from './ErrorPage';
import { LNG } from '@shared/lib/global';

interface IErrorBoundaryState {
  hasError: boolean;
}
interface IErrorBoundaryProps {
  children: ReactNode;
  lng: LNG;
}

export class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    if (error) {
      return { hasError: true };
    }

    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.log(error, errorInfo.componentStack);
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { children, lng } = this.props;

    if (hasError) {
      return (
        <Suspense fallback={<h2>Loading...</h2>}>
          <ErrorPage lng={lng} />
        </Suspense>
      );
    }

    return children;
  }
}
