import { TopNavBar } from "@/components/layout/TopNavBar";
import { CreateCollectiveForm } from "@/components/collectives/CreateCollectiveForm";

export const metadata = {
  title: "Create a Collective — Ecobond",
};

export default function CreateCollectivePage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="h-1.5 bg-black w-full" />
      <TopNavBar />
      <main className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-xl font-bold text-gray-900 mb-6">
          Create a collective
        </h1>
        <CreateCollectiveForm />
      </main>
    </div>
  );
}
