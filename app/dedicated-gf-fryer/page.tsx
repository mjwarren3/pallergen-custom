import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Istok_Web } from "next/font/google"

const istokWeb = Istok_Web({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-istok",
})

// This data would typically come from a database or API
const dedicatedGfFryerEateries = [
  {
    name: "Zen Chinese Bistro",
    category: "Chinese",
    isOpen: true,
    address: "45 Danforth St, Portland, ME 04101",
    website: "https://zenchinesebistro.com/",
    gfLabeledMenu: true,
    dedicatedGfWorkspace: true,
    dedicatedGfFryer: true,
    hasGfBreadCrust: false,
    uncommonGfOfferings: "Gluten-free Chinese dishes",
  },
  {
    name: "Maíz Colombian Street Food",
    category: "Latin American",
    isOpen: true,
    address: "621 Forest Ave, Portland, ME 04101",
    website: "https://www.maizportland.com/",
    gfLabeledMenu: true,
    dedicatedGfWorkspace: true,
    dedicatedGfFryer: true,
    hasGfBreadCrust: false,
    uncommonGfOfferings: "100% gluten-free kitchen",
  },
  {
    name: "Smoked & Stacked",
    category: "BBQ",
    isOpen: true,
    address: "35 Oak Hill Plaza, Scarborough, ME 04074",
    website: "https://smokedandstackedmaine.com/",
    gfLabeledMenu: true,
    dedicatedGfWorkspace: false,
    dedicatedGfFryer: true,
    hasGfBreadCrust: true,
    uncommonGfOfferings: "Gluten-free BBQ options",
  },
]

export default function DedicatedGFFryer() {
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
          Dedicated GF Fryer
          <br />
          in Portland, Maine
        </h1>

        <div className="space-y-4">
          {dedicatedGfFryerEateries.map((eatery, index) => (
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

