
import StoryHero from "@/components/story/StoryHero";
import StoryMeaning from "@/components/story/StoryMeaning";
import StoryBeliefs from "@/components/story/StoryBeliefs";
import StoryOrigin from "@/components/story/StoryOrigin";
import StoryFuture from "@/components/story/StoryFuture";
import StoryCTA from "@/components/story/StoryCTA";

export default function StoryPage() {
  return (
    <main>
      <StoryHero />
      <StoryMeaning />
      <StoryBeliefs />
      <StoryOrigin />
      <StoryFuture />
      <StoryCTA />
    </main>
  );
}