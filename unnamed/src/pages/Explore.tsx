import { Navbar } from "../components/home/Navbar"

export const Explore = () => {
  return (
    <main className="bg-[#0f0e13] text-white min-h-screen">
      <Navbar home={false} />
      <div className="absolute z-20 top-0 left-10 w-[2px] h-full bg-white/40"></div>
    </main>
  )
}
