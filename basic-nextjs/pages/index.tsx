
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Head from "next/head"
import { StoryblokComponent, getStoryblokApi, useStoryblokState } from '@storyblok/react'

export default function Home(props: any) {
  const story = useStoryblokState(props.story);
  return (
    <main>
      <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <header>
        <h1>
          { props.story ? props.story.name : 'My Site' }
        </h1>
      </header>
 
      <main>
      <StoryblokComponent blok={story?.content} />
      </main>
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

