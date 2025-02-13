import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Istok_Web } from "next/font/google"

const istokWeb = Istok_Web({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-istok",
})

// This data would typically come from a database or API
const gfPizzaEateries = [
  {
    name: "OTTO",
    category: "Pizza",
    isOpen: true,
    address: "225 Congress St, Portland, ME 04101",
    website: "https://www.ottoportland.com/",
    gfLabeledMenu: true,
    dedicatedGfWorkspace: false,
    dedicatedGfFryer: false,
    hasGfBreadCrust: true,
    uncommonGfOfferings: "Gluten-free crust available",
  },
  {
    name: "Foundation Brewing",
    category: "Brewery, Pizza",
    isOpen: true,
    address: "1 Industrial Way #5, Portland, ME 04103",
    website: "https://foundationbrew.com/",
    gfLabeledMenu: true,
    dedicatedGfWorkspace: true,
    dedicatedGfFryer: true,
    hasGfBreadCrust: true,
    uncommonGfOfferings: "GF Detroit style pizza!",
  },
  {
    name: "Portland Pie Co.",
    category: "Pizza",
    isOpen: true,
    address: "51 York St, Portland, ME 04101",
    website: "https://portlandpie.com/",
    gfLabeledMenu: true,
    dedicatedGfWorkspace: false,
    dedicatedGfFryer: false,
    hasGfBreadCrust: true,
    uncommonGfOfferings: "Variety of gluten-free crusts",
  },
  {
    name: "Il Leone",
    category: "Italian, Pizza",
    isOpen: true,
    address: "24 Monument Square, Portland, ME 04101",
    website: "https://www.illeoneportland.com/",
    gfLabeledMenu: true,
    dedicatedGfWorkspace: false,
    dedicatedGfFryer: false,
    hasGfBreadCrust: true,
    uncommonGfOfferings: "Gluten-free pizza options",
  },
]

export default function GFPizza() {
  return (
    <div className={`min-h-screen bg-gradient-to-r from-[#ECF3F0] to-[#D2EEE2] ${istokWeb.variable} font-sans`}>
      <header className="p-4">
        <Link href="/" className="text-[#3E8667] inline-flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Pallergen
        </Link>
      </header>

      <main className="px-10 pb-20">
        <h1 className="text-3xl font-normal text-center mb-6 mt-2 text-[#476558]">
          GF Pizza
          <br />
          in Portland, Maine
        </h1>

        <div className="space-y-4">
          {gfPizzaEateries.map((eatery, index) => (
            <section key={index} className="p-5 bg-white rounded-xl">
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
      </main>
    </div>
  )
}

