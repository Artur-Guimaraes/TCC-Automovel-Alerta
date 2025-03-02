import { Header } from "@/components/header";
import { Outlet } from "react-router"
export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow p-4">
      <Outlet />
    </main>
  </div>
  )
}