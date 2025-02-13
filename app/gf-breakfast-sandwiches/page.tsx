import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Istok_Web } from "next/font/google"

const istokWeb = Istok_Web({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-istok",
})

// This data would typically come from a database or API
const gfBreakfastSandwichEateries = [
  {
    name: "Ferry Village Market",
    category: "Market, Cafe",
    isOpen: true,
    address: "323 Broadway, South Portland, ME 04106",
    website: "https://www.ferryvillagemarket.com/",
    gfLabeledMenu: true,
    dedicatedGfWorkspace: false,
    dedicatedGfFryer: false,
    hasGfBreadCrust: true,
    uncommonGfOfferings: "Gluten-free breakfast sandwiches",
  },
  {
    name: "Second Rodeo Coffee",
    category: "Coffee Shop",
    isOpen: true,
    address: "1 Westbrook Common, Westbrook, ME 04092",
    website: "https://www.secondrodeocoffee.com/",
    gfLabeledMenu: true,
    dedicatedGfWorkspace: false,
    dedicatedGfFryer: false,
    hasGfBreadCrust: true,
    uncommonGfOfferings: "Gluten-free breakfast sandwiches and pastries",
  },
  {
    name: "Sinful Kitchen",
    category: "Restaurant",
    isOpen: true,
    address: "906 Brighton Ave, Portland, ME 04102",
    website: "https://www.sinfulkitchen.com/",
    gfLabeledMenu: true,
    dedicatedGfWorkspace: false,
    dedicatedGfFryer: true,
    hasGfBreadCrust: true,
    uncommonGfOfferings: "Gluten-free breakfast options",
  },
  {
    name: "Cia Cafe",
    category: "Cafe",
    isOpen: true,
    address: "72 Ocean St, South Portland, ME 04106",
    website: "https://ciacafe.com/",
    gfLabeledMenu: true,
    dedicatedGfWorkspace: false,
    dedicatedGfFryer: false,
    hasGfBreadCrust: true,
    uncommonGfOfferings: "Gluten-free breakfast sandwiches and other menu items",
  },
  {
    name: "Cafe Luna",
    category: "Cafe",
    isOpen: true,
    address: "188 State St, Portland, ME 04101",
    website: "https://www.cafelunamaine.com/",
    gfLabeledMenu: true,
    dedicatedGfWorkspace: false,
    dedicatedGfFryer: false,
    hasGfBreadCrust: true,
    uncommonGfOfferings: "Gluten-free breakfast options",
  },
  {
    name: "St. Joe's Cafe",
    category: "Cafe",
    isOpen: true,
    address: "1037 Forest Ave, Portland, ME 04103",
    website: "https://www.stjoes.me/",
    gfLabeledMenu: true,
    dedicatedGfWorkspace: false,
    dedicatedGfFryer: false,
    hasGfBreadCrust: true,
    uncommonGfOfferings: "Gluten-free breakfast sandwiches",
  },
  {
    name: "Rover Bagel",
    category: "Bakery",
    isOpen: true,
    address: "91 Ocean St, South Portland, ME 04106",
    website: "https://www.roverbagel.com/",
    gfLabeledMenu: true,
    dedicatedGfWorkspace: false,
    dedicatedGfFryer: false,
    hasGfBreadCrust: true,
    uncommonGfOfferings: "Gluten-free bagel options",
  },
  {
    name: "Indy's",
    category: "Restaurant",
    isOpen: true,
    address: "548 Main St, South Portland, ME 04106",
    website: "https://www.indysportland.com/",
    gfLabeledMenu: true,
    dedicatedGfWorkspace: false,
    dedicatedGfFryer: true,
    hasGfBreadCrust: true,
    uncommonGfOfferings: "Gluten-free breakfast options",
  },
  {
    name: "Catface Cafe",
    category: "Cafe",
    isOpen: true,
    address: "1 Westbrook Common, Westbrook, ME 04092",
    website: "https://www.catfacecafe.com/",
    gfLabeledMenu: true,
    dedicatedGfWorkspace: false,
    dedicatedGfFryer: false,
    hasGfBreadCrust: true,
    uncommonGfOfferings: "Gluten-free breakfast sandwiches",
  },
  {
    name: "Bake Maine Pottery Cafe",
    category: "Cafe",
    isOpen: true,
    address: "1 Westbrook Common, Westbrook, ME 04092",
    website: "https://www.bakemaine.com/",
    gfLabeledMenu: true,
    dedicatedGfWorkspace: false,
    dedicatedGfFryer: false,
    hasGfBreadCrust: true,
    uncommonGfOfferings: "Gluten-free breakfast options",
  },
]

export default function GFBreakfastSandwiches() {
  return (
    <div className={`min-h-screen bg-gradient-to-r from-[#ECF3F0] to-[#D2EEE2] ${istokWeb.variable} font-sans`}>
      <header className="p-4">
        <Link href="/" className="text-[#3E8667] inline-flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Pallergen
        </Link>
      </header>

      <main className="px-10 pb-12">
        <h1 className="text-2xl font-normal text-center mb-4 mt-2 text-[#476558]">
          GF Breakfast Sandwiches
          <br />
          in Portland, Maine
        </h1>

        <div className="max-w-[700px] mx-auto">
          <div className="space-y-4">
            {gfBreakfastSandwichEateries.map((eatery, index) => (
              <section key={index} className="p-4 bg-white rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl text-gray-800">{eatery.name}</h2>
                  {eatery.isOpen && (
                    <span className="px-2 py-1 text-xs bg-[#95ECC7] text-[#1E1E1E] rounded-lg">Open now</span>
                  )}
                </div>
                <p className="text-sm text-[#1E1E1E] opacity-80">{eatery.category}</p>
                {eatery.address && <p className="text-sm text-[#1E1E1E] mt-2">{eatery.address}</p>}
                {eatery.website && (
                  <a
                    href={eatery.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#3E8667] mt-1 inline-flex items-center hover:underline"
                  >
                    <ExternalLink className="w-3 h-3 mr-1 text-[#3E8667]" />
                    Visit Website
                  </a>
                )}
                <div className="mt-3 space-y-1">
                  {eatery.gfLabeledMenu && <p className="text-xs text-[#1E1E1E]">✓ GF Labeled Menu</p>}
                  {eatery.dedicatedGfWorkspace && <p className="text-xs text-[#1E1E1E]">✓ Dedicated GF Workspace</p>}
                  {eatery.dedicatedGfFryer && <p className="text-xs text-[#1E1E1E]">✓ Dedicated GF Fryer</p>}
                  {eatery.hasGfBreadCrust && <p className="text-xs text-[#1E1E1E]">✓ Has GF Bread/Crust</p>}
                  {eatery.uncommonGfOfferings && (
                    <p className="text-xs text-[#1E1E1E] mt-2 italic">{eatery.uncommonGfOfferings}</p>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

