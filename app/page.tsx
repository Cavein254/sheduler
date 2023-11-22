import MainContent from "@/components/MainContent";
import MainSidebar from "@/components/MainSidebar";
import MinorSidebar from "@/components/MinorSidebar";
export default function Home() {
  return (
    <main className="h-[100vh] flex w-[100vw] bg-white">
      <MainSidebar />
      <MinorSidebar />
      <MainContent />
    </main>
  );
}
