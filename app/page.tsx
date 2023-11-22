import Main from "@/components/Main";
import MainSidebar from "@/components/MainSidebar";
export default function Home() {
  return (
    <main className="h-[100vh] flex w-[100vw] bg-white">
      <MainSidebar />
      <Main />
    </main>
  );
}
