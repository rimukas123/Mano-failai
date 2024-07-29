import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import React from "react";
import './index.css';
import { ErrorBoundary}from"react-error-boundary";

import erorrFalbackComponent from "./components/ErorrFalbackComponent/ErorrFalbackComponent.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
       <ErrorBoundary fallbackRender={erorrFalbackComponent}>
        
        <App />
       </ErrorBoundary>
       </React.StrictMode>,
);
