import { ServerStatus } from "@/components/server-status";
import { SiDiscord, SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/img/tc14_bg.webp')] bg-cover bg-center bg-fixed" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <nav className="relative z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/img/tc14.png" alt="Trailblazer Colony 14" className="h-8 w-8" width="128" height="128" />
              <span className="text-xl font-bold text-white">Trailblazer Colony 14</span>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative z-40 pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="backdrop-blur-lg bg-black/40 rounded-3xl p-8 md:p-12 border border-white/10">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
                  Trailblazer Colony 14
                </h1>
                <p className="text-l md:text-xl text-gray-200 mb-8">
                  Rimworld-inspired fork of Space Station 14.
                </p>
                <div className="flex flex-row flex-wrap gap-4">
                  <Link href="https://discord.gg/x6BSUAr8cH">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      <SiDiscord className="h-5 w-5 mr-2" />
                      Join Discord
                    </Button>
                  </Link>

                  <Link href="https://tc14.ar-iss.net">
                    <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white">
                      <Book className="h-5 w-5 mr-2" />
                      Wiki
                    </Button>
                  </Link>

                  <Link href="https://github.com/spess14/trailblazer-colony-14">
                    <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white">
                      <SiGithub className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <ServerStatus />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
