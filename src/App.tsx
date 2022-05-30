import React from "react";
import { MainRoutes } from './routes/main.routes';
import { MainProviders } from './providers/main.providers';
import { StatusBar,View } from "react-native";
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://ab0d3241e70e4c71a9f6ef86f73aa22a@o1174254.ingest.sentry.io/6270130",
});

const App = () => (
  <MainProviders>
    <StatusBar 
       backgroundColor="transparent"
       translucent
       barStyle='dark-content'
    />
    <MainRoutes />
  </MainProviders>
)

export default Sentry.wrap(App);