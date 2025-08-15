import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Updates status to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to external service in production
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl text-white font-bold bg-red-600 mb-4">
            Ups, algo correu mal.
          </h1>
          <p className="text-lg mb-4">
            Estamos a trabalhar para resolver o problema.
          </p>
          <p className="text-sm text-gray-500">
            Por favor, tenta novamente mais tarde.
          </p>
          <p className="text-sm text-gray-500">
            Se o problema persistir, por favor,{" "}
            <a
              className="text-blue-500 underline hover:underline"
              href="https://api.whatsapp.com/send?phone=351935895551&text=Problema%20%F0%9F%91%8B%20I%27m%20interested%20in%20the%20services%20of%20Lodex Studio.%20%0A%0ACould%20you%20give%20me%20more%20details%3F"
            >
              contacta-nos.
            </a>
          </p>
          <p className="text-sm text-gray-500">
            Obrigado pela sua compreensão.
          </p>
        </div>
      );
    }
    return this.props.children; // Render children if no error
  }
}

export default ErrorBoundary;
