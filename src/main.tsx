import React, { ErrorInfo, ReactNode, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

class AppErrorBoundary extends React.Component<
  { children: ReactNode },
  { error: Error | null }
> {
  state = { error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Portfolio render failed:", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <main style={{ minHeight: "100vh", background: "#05070d", color: "#e7edf6", padding: "40px", fontFamily: "system-ui, sans-serif" }}>
          <h1 style={{ fontSize: "28px", marginBottom: "16px" }}>Portfolio failed to render</h1>
          <p style={{ marginBottom: "12px" }}>A runtime error is preventing the page from displaying. Share this error with support:</p>
          <pre style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere", padding: "16px", background: "#10141f", borderRadius: "8px", color: "#67e8f9" }}>{this.state.error.message}</pre>
          <p style={{ marginTop: "16px" }}>Open the browser Console for the full stack trace.</p>
        </main>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </StrictMode>,
);
