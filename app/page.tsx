"use client";
import Link from "next/link";
import { Istok_Web } from "next/font/google";
import {
  ArrowRight,
  Wheat,
  Milk,
  NutIcon as Peanut,
  Fish,
  Egg,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const istokWeb = Istok_Web({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-istok",
});

function AllergenTabs() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedTab, setSelectedTab] = useState("gluten-free");

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this value as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const tabOptions = [
    { value: "gluten-free", label: "Gluten-free", icon: Wheat },
    { value: "dairy-free", label: "Dairy-free", icon: Milk },
    { value: "peanut-free", label: "Peanut-free", icon: Peanut },
    { value: "shellfish-free", label: "Shellfish-free", icon: Fish },
    { value: "egg-free", label: "Egg-free", icon: Egg },
  ];

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <>
      {isMobile ? (
        <Select value={selectedTab} onValueChange={handleTabChange}>
          <SelectTrigger className="w-full mb-4">
            <SelectValue>
              {tabOptions.find((tab) => tab.value === selectedTab)?.label}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {tabOptions.map((tab) => (
              <SelectItem key={tab.value} value={tab.value}>
                <div className="flex items-center gap-2">
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : null}
      <Tabs
        value={selectedTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        {!isMobile && (
          <TabsList className="flex flex-wrap justify-start mb-6">
            {tabOptions.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#476558] data-[state=active]:text-[#3e8667] data-[state=active]:border-b-2 data-[state=active]:border-[#3e8667]"
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        )}
        <TabsContent value="gluten-free">
          <GlutenFreeContent />
        </TabsContent>
        <TabsContent value="dairy-free">
          <p className="text-center text-gray-600">
            Dairy-free content coming soon!
          </p>
        </TabsContent>
        <TabsContent value="peanut-free">
          <p className="text-center text-gray-600">
            Peanut-free content coming soon!
          </p>
        </TabsContent>
        <TabsContent value="shellfish-free">
          <p className="text-center text-gray-600">
            Shellfish-free content coming soon!
          </p>
        </TabsContent>
        <TabsContent value="egg-free">
          <p className="text-center text-gray-600">
            Egg-free content coming soon!
          </p>
        </TabsContent>
      </Tabs>
    </>
  );
}

function GlutenFreeContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Link
        href="/gluten-free-eateries"
        className="block p-4 bg-white rounded-xl transition-all duration-200 ease-in-out hover:shadow-md hover:bg-[#ECF3F0] group"
        scroll={true}
      >
        <h3 className="text-xl mb-3 text-gray-800 font-bold">
          100% Gluten-Free
        </h3>
        <div className="space-y-3">
          <div>
            <h4 className="text-base text-gray-800 mb-0.5">
              Orange Bike Brewing
            </h4>
            <p className="text-sm text-[#1E1E1E] opacity-80 leading-tight">
              Brewery
            </p>
          </div>
          <div>
            <h4 className="text-base text-gray-800 mb-0.5">
              Maiz Colombian Street Food
            </h4>
            <p className="text-sm text-[#1E1E1E] opacity-80 leading-tight">
              Latin American
            </p>
          </div>
          <div>
            <h4 className="text-base text-gray-800 mb-0.5">
              Real Maine Flavor Ice Cream
            </h4>
            <p className="text-sm text-[#1E1E1E] opacity-80 leading-tight">
              Ice Cream
            </p>
          </div>
        </div>
        <div className="mt-4 inline-flex items-center text-[#3E8667] font-semibold group-hover:translate-x-1 transition-transform duration-200 ease-in-out">
          <span className="hover:underline">See all</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </Link>

      <Link
        href="/gf-breakfast-sandwiches"
        className="block p-4 bg-white rounded-xl transition-all duration-200 ease-in-out hover:shadow-md hover:bg-[#ECF3F0] group"
        scroll={true}
      >
        <h3 className="text-xl mb-3 text-gray-800 font-bold">
          GF Breakfast Sandwiches
        </h3>
        <div className="space-y-3">
          <div>
            <h4 className="text-base text-gray-800 mb-0.5">
              Ferry Village Market
            </h4>
            <p className="text-sm text-[#1E1E1E] opacity-80 leading-tight">
              Market, Cafe
            </p>
          </div>
          <div>
            <h4 className="text-base text-gray-800 mb-0.5">
              Second Rodeo Coffee
            </h4>
            <p className="text-sm text-[#1E1E1E] opacity-80 leading-tight">
              Coffee Shop
            </p>
          </div>
          <div>
            <h4 className="text-base text-gray-800 mb-0.5">Cia Cafe</h4>
            <p className="text-sm text-[#1E1E1E] opacity-80 leading-tight">
              Cafe
            </p>
          </div>
        </div>
        <div className="mt-4 inline-flex items-center text-[#3E8667] font-semibold group-hover:translate-x-1 transition-transform duration-200 ease-in-out">
          <span className="hover:underline">See all</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </Link>

      <Link
        href="/gf-baked-goods"
        className="block p-4 bg-white rounded-xl transition-all duration-200 ease-in-out hover:shadow-md hover:bg-[#ECF3F0] group"
        scroll={true}
      >
        <h3 className="text-xl mb-3 text-gray-800 font-bold">GF Baked Goods</h3>
        <div className="space-y-3">
          <div>
            <h4 className="text-base text-gray-800 mb-0.5">Bam Bam Bakery</h4>
            <p className="text-sm text-[#1E1E1E] opacity-80 leading-tight">
              Bakery, Cafe
            </p>
          </div>
          <div>
            <h4 className="text-base text-gray-800 mb-0.5">Sweets & Co.</h4>
            <p className="text-sm text-[#1E1E1E] opacity-80 leading-tight">
              Bakery
            </p>
          </div>
          <div>
            <h4 className="text-base text-gray-800 mb-0.5">
              Wild Oats Bakery & Cafe
            </h4>
            <p className="text-sm text-[#1E1E1E] opacity-80 leading-tight">
              Bakery, Cafe
            </p>
          </div>
        </div>
        <div className="mt-4 inline-flex items-center text-[#3E8667] font-semibold group-hover:translate-x-1 transition-transform duration-200 ease-in-out">
          <span className="hover:underline">See all</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </Link>

      <Link
        href="/dedicated-gf-workspace"
        className="block p-4 bg-white rounded-xl transition-all duration-200 ease-in-out hover:shadow-md hover:bg-[#ECF3F0] group"
        scroll={true}
      >
        <h3 className="text-xl mb-3 text-gray-800 font-bold">
          Dedicated GF Workspace
        </h3>
        <div className="space-y-3">
          <div>
            <h4 className="text-base text-gray-800 mb-0.5">Roastys Cafe</h4>
            <p className="text-sm text-[#1E1E1E] opacity-80 leading-tight">
              Cafe
            </p>
          </div>
          <div>
            <h4 className="text-base text-gray-800 mb-0.5">Holy Donut</h4>
            <p className="text-sm text-[#1E1E1E] opacity-80 leading-tight">
              Bakery
            </p>
          </div>
          <div>
            <h4 className="text-base text-gray-800 mb-0.5">Bite into Maine</h4>
            <p className="text-sm text-[#1E1E1E] opacity-80 leading-tight">
              Seafood
            </p>
          </div>
        </div>
        <div className="mt-4 inline-flex items-center text-[#3E8667] font-semibold group-hover:translate-x-1 transition-transform duration-200 ease-in-out">
          <span className="hover:underline">See all</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </Link>

      <Link
        href="/dedicated-gf-fryer"
        className="block p-4 bg-white rounded-xl transition-all duration-200 ease-in-out hover:shadow-md hover:bg-[#ECF3F0] group"
        scroll={true}
      >
        <h3 className="text-xl mb-3 text-gray-800 font-bold">
          Dedicated GF Fryer
        </h3>
        <div className="space-y-3">
          <div>
            <h4 className="text-base text-gray-800 mb-0.5">
              Zen Chinese Bistro
            </h4>
            <p className="text-sm text-[#1E1E1E] opacity-80 leading-tight">
              Chinese
            </p>
          </div>
          <div>
            <h4 className="text-base text-gray-800 mb-0.5">
              Maíz Colombian Street Food
            </h4>
            <p className="text-sm text-[#1E1E1E] opacity-80 leading-tight">
              Latin American
            </p>
          </div>
          <div>
            <h4 className="text-base text-gray-800 mb-0.5">Smoked & Stacked</h4>
            <p className="text-sm text-[#1E1E1E] opacity-80 leading-tight">
              BBQ
            </p>
          </div>
        </div>
        <div className="mt-4 inline-flex items-center text-[#3E8667] font-semibold group-hover:translate-x-1 transition-transform duration-200 ease-in-out">
          <span className="hover:underline">See all</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </Link>

      <Link
        href="/gf-pizza"
        className="block p-4 bg-white rounded-xl transition-all duration-200 ease-in-out hover:shadow-md hover:bg-[#ECF3F0] group"
        scroll={true}
      >
        <h3 className="text-xl mb-3 text-gray-800 font-bold">GF Pizza</h3>
        <div className="space-y-3">
          <div>
            <h4 className="text-base text-gray-800 mb-0.5">OTTO</h4>
            <p className="text-sm text-[#1E1E1E] opacity-80 leading-tight">
              Pizza
            </p>
          </div>
          <div>
            <h4 className="text-base text-gray-800 mb-0.5">
              Foundation Brewing
            </h4>
            <p className="text-sm text-[#1E1E1E] opacity-80 leading-tight">
              Brewery, Pizza
            </p>
          </div>
          <div>
            <h4 className="text-base text-gray-800 mb-0.5">Portland Pie Co.</h4>
            <p className="text-sm text-[#1E1E1E] opacity-80 leading-tight">
              Pizza
            </p>
          </div>
        </div>
        <div className="mt-4 inline-flex items-center text-[#3E8667] font-semibold group-hover:translate-x-1 transition-transform duration-200 ease-in-out">
          <span className="hover:underline">See all</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-r from-[#ECF3F0] to-[#D2EEE2] ${istokWeb.variable} font-sans`}
    >
      <header className="p-4">
        <h1 className="text-lg font-bold text-[#476558]">Pallergen</h1>
      </header>

      <main className="pb-12 pt-6 px-10">
        <h2 className="text-4xl font-bold text-center mb-8 mt-4 text-[#476558]">
          Allergen-Friendly Eats
          <br />
          around Portland, Maine
        </h2>

        <AllergenTabs />
      </main>
      <style jsx global>{`
        .select-trigger {
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 0.375rem;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: #476558;
          font-weight: 500;
        }

        .select-content {
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 0.375rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .select-item {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: #476558;
        }

        .select-item[data-highlighted] {
          background-color: #f3f4f6;
        }
      `}</style>
    </div>
  );
}
