import MainSidebar from "@/components/MainSidebar";
import MinorSidebar from "@/components/MinorSidebar";
export default function Home() {
  return (
    <main className="h-[100vh] flex w-[100vw] border-2 border-green-300 bg-white">
      <MainSidebar />
      <MinorSidebar />
    </main>
  );
}
