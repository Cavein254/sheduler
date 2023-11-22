import MainSidebar from "@/components/MainSidebar";
import MinorSidebar from "@/components/MinorSidebar";
export default function Home() {
  return (
    <main className="h-[100vh] flex">
      <MainSidebar />
      <MinorSidebar />
    </main>
  );
}
