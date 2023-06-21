
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Head from "next/head"
import { StoryblokComponent, getStoryblokApi, useStoryblokState } from '@storyblok/react'
import Layout from "../components/Layout";
export default function Home(props: any) {
  const story = useStoryblokState(props.story);
  return (
    <main>
        <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
      <StoryblokComponent blok={story?.content} />
    </Layout>
    </div>
    </main>
  )
}
export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {version: 'draft'});
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}

