import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import * as Sentry from "@sentry/react";


// Sentry.init({
//   dsn: "https://b3f7d4ef30b9e55cffcb4c2d573fbe62@o4509661202284544.ingest.us.sentry.io/4509661205102592",
//   integrations: [
//     Sentry.browserTracingIntegration(),
//     Sentry.metrics.metricsAggregatorIntegration(),
//     Sentry.reactRouterV6BrowserTracingIntegration({
//       useEffect: React.useEffect,
//     }),
//     Sentry.replayIntegration({
//       maskAllText: false,
//       blockAllMedia: false,
//     }),
//   ],
//   tracesSampleRate: 1.0, 
//   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0, 
// });


Sentry.init({
  dsn: "https://b3f7d4ef30b9e55cffcb4c2d573fbe62@o4509661202284544.ingest.us.sentry.io/4509661205102592",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
