
import TeamsHero from "@/components/teams/TeamsHero";
import TeamPacks from "@/components/teams/TeamPacks";
import EventProcess from "@/components/teams/EventProcess";
import LeadsPreview from "@/components/teams/LeadsPreview";
import PilotForm from "@/components/teams/PilotForm";

export default function TeamsPage() {
  return (
    <main>
      <TeamsHero />
      <TeamPacks />
      <EventProcess />
      <LeadsPreview />
      <PilotForm />
    </main>
  );
}
