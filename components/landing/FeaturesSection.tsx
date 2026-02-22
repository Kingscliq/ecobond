const features = [
  {
    title: "Onboarding and Management",
    description: "Streamline member onboarding and collective management.",
    preview: (
      <div className="bg-white border border-gray-200 rounded-lg p-3 text-xs text-gray-600 shadow-sm">
        <div className="bg-green-50 border border-green-200 rounded p-2 text-green-700 text-[10px] font-medium mb-2">
          ✓ Your account has been created successfully!
        </div>
        <div className="space-y-1.5">
          {["John Doe", "John Doe", "John Doe"].map((name, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gray-200 shrink-0" />
              <div>
                <div className="font-medium text-[10px]">{name}</div>
                <div className="text-gray-400 text-[9px]">Manager, ABC Collective</div>
              </div>
              <div className="ml-auto text-[9px] text-gray-400">Sep 14, 2025</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Membership Management",
    description: "Manage members, roles, and permissions seamlessly.",
    preview: (
      <div className="bg-white border border-gray-200 rounded-lg p-3 text-xs shadow-sm">
        <div className="flex gap-2 mb-2">
          <div className="text-[10px] font-medium text-gray-500">John Doe</div>
          <div className="text-[10px] font-medium text-gray-500 ml-auto">Evita Admin</div>
        </div>
        <div className="space-y-1.5">
          {["John Doe", "John Doe", "John Doe"].map((name, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gray-200 shrink-0" />
              <div className="text-[10px] text-gray-600">{name}</div>
              <div className="ml-auto text-[9px] text-gray-400">Sep 14, 2025</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Opportunities Management",
    description: "Discover and invest in curated opportunities.",
    preview: (
      <div className="bg-white border border-gray-200 rounded-lg text-xs shadow-sm overflow-hidden">
        <div className="px-3 py-2 bg-gray-50 border-b border-gray-100">
          <div className="text-[10px] font-semibold text-gray-700">ABC Collective</div>
          <div className="text-[9px] text-gray-400 mt-0.5">Stears provides economic and industry data &amp; insight to facilitate decision-making…</div>
        </div>
        <div className="px-3 py-2 space-y-1.5">
          {["Real Estate", "$1,000,000.00", "Closing in 5 days"].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 text-[10px] text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Multi-Currency Payments",
    description: "Accept payments in multiple currencies with ease.",
    preview: (
      <div className="bg-white border border-gray-200 rounded-lg p-3 text-xs shadow-sm space-y-2">
        {[
          { flag: "🇺🇸", label: "US Dollar (USD)" },
          { flag: "🇬🇧", label: "British Pound Sterling (GBP)" },
          { flag: "🇨🇦", label: "Canadian Dollar (CAD)" },
          { flag: "🇭🇺", label: "Hungarian Forint — Ftm (HUF)" },
          { flag: "🇳🇬", label: "Nigerian Naira (NGN)" },
          { flag: "🇰🇪", label: "Kenyan Shillings (Ksh)" },
        ].map(({ flag, label }) => (
          <div key={label} className="flex items-center gap-2 text-[10px] text-gray-600">
            <span className="text-sm leading-none">{flag}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Assets Management",
    description: "Track and manage collective assets in one place.",
    preview: (
      <div className="bg-white border border-gray-200 rounded-lg p-3 text-xs shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded bg-orange-400 shrink-0" />
          <div>
            <div className="text-[10px] font-semibold">ABC Collective</div>
            <div className="text-[9px] text-gray-400">Real Estate</div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[10px]">
          <div>
            <div className="text-gray-400">Current value</div>
            <div className="font-semibold text-gray-800">$6.00</div>
          </div>
          <div>
            <div className="text-gray-400">Invested</div>
            <div className="font-semibold text-gray-800">$1,000.00</div>
          </div>
        </div>
        <div className="mt-2 text-[9px] text-gray-400">Managed by Ecobond Collective</div>
      </div>
    ),
  },
  {
    title: "Reporting",
    description: "Get insights and reports on your collective's performance.",
    preview: (
      <div className="bg-white border border-gray-200 rounded-lg p-3 text-xs shadow-sm">
        <div className="space-y-1">
          {[["#00b341", 80], ["#00b341", 60], ["#00b341", 90], ["#ff4444", 40], ["#00b341", 70]].map(
            ([color, width], i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${width}%`, backgroundColor: color as string }}
                  />
                </div>
                <div className="text-[9px] text-gray-400">{(Math.random() * 5000).toFixed(2)}</div>
              </div>
            )
          )}
        </div>
      </div>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-instrument)] text-3xl font-bold text-gray-900 mb-2">Our Features</h2>
        <p className="text-sm text-gray-500 mb-12 max-w-xl">
          From shared vision to shared ownership. Our key features help you start, engage and scale
          your global investment collectives/syndicates
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-3">
              <div className="text-xs font-semibold text-gray-700 leading-snug min-h-[32px]">
                {feature.title}
              </div>
              <div className="w-full">{feature.preview}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
