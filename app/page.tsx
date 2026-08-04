import data from '@/data/data.json';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Footer, GoalSection, LatestVideo, StorySection, SupportCards, SupportersBoard, Timeline } from '@/components/sections';

export default function Home() { return <main><Header /><Hero goal={data.goal} raised={data.raised} /><StorySection story={data.story} /><GoalSection goal={data.goal} raised={data.raised} /><SupportCards services={data.services} products={data.products} /><SupportersBoard supporters={data.supporters} /><Timeline timeline={data.timeline} /><LatestVideo video={data.video} /><Footer /></main>; }
