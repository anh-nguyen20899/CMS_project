import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { storyblokInit, apiPlugin, useStoryblokBridge } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};
storyblokInit({
  accessToken: "kgkw4shONSDzaXgyt2OTlAtt",
  use: [apiPlugin],
  components: components,
});
  
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
