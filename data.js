// Edit this file to update all portfolio content.
const PORTFOLIO = {
  name: "Vishnu Priyadharsan R",
  initials: "VP",
  headline: "Research & Policy Analysis · Sustainable & Impact Finance · ESG",
  properties: [
    { label: "Focus", tags: ["Green Bonds", "Carbon Markets", "ESG", "Climate Policy"] },
    { label: "Education", text: "M.A. Natural Resources & Governance, TISS Hyderabad (Climate Futures)" },
    { label: "Location", text: "Kerala, India · Open to relocation" },
    { label: "Status", status: "Available immediately" },
  ],
  email: "vishnupriyadharsan21@gmail.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  resumeUrl: "",

  summary:
    "Research and sustainability professional working at the intersection of climate policy and finance. I analyse large datasets, run sector-wide assessments, and turn evidence into structured reports and policy recommendations, with applied work across sustainable finance, carbon markets, governance, and development-sector projects.",

  highlights: [
    { value: "350+", label: "listed companies mapped for emissions & CBAM exposure" },
    { value: "2,900", label: "Environmental Product Declarations benchmarked" },
    { value: "95", label: "CSR projects validated for global reporting at PwC" },
    { value: "Rs 57,697 Cr", label: "sovereign green bond programme analysed" },
  ],

  // type: "Research" | "Consulting" | "Analysis"
  projects: [
    {
      title: "Beyond the Benchmark: India's Green Bond Market",
      type: "Research",
      org: "Capstone · TISS Hyderabad · 2026",
      metric: "Greenium fell from 9 bps to zero",
      tags: ["Green Bonds", "Sustainable Finance", "Policy Design"],
      problem:
        "India has issued Rs 57,697 Cr of Sovereign Green Bonds, yet the domestic corporate green bond market reached only Rs 11,229 Cr across eight years. Why did the sovereign programme fail to catalyse corporate issuance?",
      approach: [
        "Built the primary dataset from SEBI's ESG Debt Securities register.",
        "Tracked the sovereign greenium across auctions to December 2024.",
        "Applied a Policy Architecture Approach with comparative cases: France (OAT 2017) and Indonesia (Green Sukuk 2018).",
      ],
      findings: [
        "The greenium collapsed from 9 bps to zero, removing the pricing signal the sovereign benchmark was meant to create.",
        "Gaps in market architecture, not issuance volume, explain the weak corporate response.",
        "Proposed five costed, feasible policy interventions to activate domestic corporate issuance.",
      ],
      link: "",
    },
    {
      title: "Designing a Credible Carbon Market for India",
      type: "Research",
      org: "Independent research · TISS Hyderabad · 2026",
      metric: "CBAM stress test at $10–$76/tCO₂",
      tags: ["Carbon Markets", "CBAM", "Emissions Data"],
      problem:
        "India is moving from the PAT scheme to a Carbon Credit Trading Scheme (CCTS) while the EU's CBAM puts a price on embedded carbon in exports. How concentrated are India's industrial emissions, and what does carbon pricing mean for exposed sectors?",
      approach: [
        "Mapped firm-level Scope 1 and 2 disclosures across India's top 350 listed companies (Nifty 50, Next 50, Smallcap 250).",
        "Built a scenario model pricing emissions at $10, $30, $50 and $76 per tonne.",
        "Assessed market design using the Policy Triad framework: policy framework, institutions, and instruments.",
      ],
      findings: [
        "Emissions are structurally concentrated in power, metals & mining, construction, and oil & gas, and within a small set of large firms.",
        "Steel and aluminium face material CBAM liabilities as prices approach EU-referenced levels.",
        "Credibility depends on coherent design: policy ambiguity, fragmented governance, and incomplete MRV and price-stabilisation tools are the key gaps.",
      ],
      link: "",
    },
    {
      title: "Cross-Sector Emissions Benchmarking Model",
      type: "Analysis",
      org: "Self-directed · 2025",
      metric: "6 companies · 20 ESG data fields",
      tags: ["ESG Data", "Scope 1-2-3", "Excel"],
      problem:
        "Corporate emissions disclosures vary widely in scope, methodology, and assurance, which makes like-for-like comparison difficult.",
      approach: [
        "Built a structured dataset for Tata Steel, ArcelorMittal, IOCL, Shell, Unilever and Microsoft from integrated and BRSR reports.",
        "Captured Scope 1, 2 and 3 emissions, Scope 3 share, revenue, EBITDA and production to derive intensity metrics.",
        "Recorded Scope 2 method, reporting standard (GRI, BRSR, CDP), assurance provider and verification standard.",
      ],
      findings: [
        "Added a data-quality score so users can weigh each figure by how reliable the disclosure is.",
        "Showed how location-based and market-based Scope 2 choices change cross-company comparisons.",
      ],
      link: "",
    },
    {
      title: "CSR Portfolio Monitoring & Data Validation",
      type: "Consulting",
      org: "PwC · Hyderabad · Dec 2025 – Jun 2026",
      metric: "95 projects validated · 960 volunteer hours",
      tags: ["CSR", "Impact Measurement", "Stakeholder Engagement"],
      problem:
        "PwC's global reporting depends on accurate, audit-ready beneficiary data from CSR projects across India.",
      approach: [
        "Managed 4 concurrent CSR projects in Telangana through field visits, monitoring, and feasibility assessment.",
        "Evaluated NGO proposals and presented projects to PwC's CSR Trustees for funding approval.",
        "Tracked CAPEX/OPEX use, milestones, and risk flags in monthly and quarterly management reviews.",
      ],
      findings: [
        "Led beneficiary data review across 95 All-India projects and advised on calculation methods for complex, multi-component projects.",
        "Ran the Hyderabad volunteering programme, which logged 960 hours of employee volunteering.",
      ],
      link: "",
    },
    {
      title: "India's Bamboo Economy: Risk & Finance",
      type: "Consulting",
      org: "ISB Research · Corporate Chanakya · 2025",
      metric: "Sector risk register + state project proposal",
      tags: ["Risk Assessment", "Value Chains", "Public Finance"],
      problem:
        "India's bamboo sector has high potential but is held back by overlapping governance, regulatory gaps, and supply-chain risk.",
      approach: [
        "ISB: mapped governance overlaps across ministries, state agencies, NGOs and financial institutions.",
        "Built a risk register with likelihood-impact ratings across operational, regulatory, market and supply-chain risks.",
        "Corporate Chanakya: developed a proposal and concept note for a hi-tech bamboo nursery lab for the State of Goa.",
      ],
      findings: [
        "Wrote mitigation strategies for each risk category, which fed into a policy report for ISB faculty.",
        "Identified financing routes through MNRE and the National Bamboo Mission, and presented the feasibility findings to senior management.",
      ],
      link: "",
    },
    {
      title: "Environmental Product Declaration Benchmarking",
      type: "Analysis",
      org: "Growlity · Jun – Jul 2025",
      metric: "2,900 EPDs analysed",
      tags: ["EPD", "Disclosure", "Whitepaper"],
      problem:
        "Environmental Product Declarations are becoming central to green procurement, but disclosure practices differ widely across sectors and registries.",
      approach: [
        "Analysed 2,900 EPDs from international registries.",
        "Benchmarked disclosure practices across sectors.",
      ],
      findings: ["Wrote a whitepaper that turned the analysis into strategic insights for the firm."],
      link: "",
    },
  ],

  experience: [
    {
      role: "CSR Intern",
      org: "PricewaterhouseCoopers (PwC)",
      period: "Dec 2025 – Jun 2026",
      place: "Hyderabad",
      points: [
        "Managed 4 concurrent CSR projects across Telangana, from field monitoring to management reviews.",
        "Presented NGO projects to PwC's CSR Trustees for funding approval.",
        "Led beneficiary data validation across 95 All-India CSR projects for global reporting.",
        "Led the Hyderabad volunteering function, which logged 960 volunteering hours.",
      ],
    },
    {
      role: "Management Consultant Intern",
      org: "Corporate Chanakya",
      period: "Sep – Dec 2025",
      place: "Remote",
      points: [
        "Developed the proposal and concept note for a hi-tech bamboo nursery lab for the State of Goa.",
        "Mapped government financing schemes (MNRE, National Bamboo Mission) to find funding routes for the client.",
        "Ran stakeholder mapping, SWOT and risk assessments across bamboo value chains.",
      ],
    },
    {
      role: "Research Intern",
      org: "Indian School of Business (ISB)",
      period: "Jun – Aug 2025",
      place: "Remote",
      points: [
        "Ran a sector-wide risk assessment of India's bamboo economy.",
        "Built a likelihood-impact risk register with mitigation strategies for each risk category.",
      ],
    },
    {
      role: "ESG & EPD Research Intern",
      org: "Growlity",
      period: "Jun – Jul 2025",
      place: "Remote",
      points: ["Analysed 2,900 EPDs and wrote a whitepaper on disclosure practices."],
    },
  ],

  skills: [
    { group: "Research", color: "blue", items: ["Policy Research", "Sector Analysis", "Literature Review", "Qual & Quant Analysis", "Risk Assessment", "Data Validation"] },
    { group: "Sustainable Finance", color: "green", items: ["Green Bonds", "Carbon Markets", "CBAM", "ESG", "Impact Research"] },
    { group: "Stakeholder & Projects", color: "orange", items: ["Stakeholder Engagement", "Field Research", "Project Monitoring", "Proposal Development"] },
    { group: "Tools", color: "purple", items: ["Excel", "Python", "Power BI", "Tableau", "QGIS", "STATA", "AI-augmented workflows"] },
  ],

  education: [
    { degree: "M.A. Natural Resources & Governance", org: "School of Public Policy and Governance, TISS Hyderabad", period: "2024 – 2026", note: "Specialisation: Climate Futures" },
    { degree: "B.Sc. Geography", org: "Government Arts College, Tamil Nadu", period: "2019 – 2022", note: "Physical geography, spatial analysis, environmental systems" },
  ],

  certifications: [
    "Sustainable Finance — UNITAR",
    "CSRD Fundamentals — CSRD Institute",
    "Net Zero 101 — UN Academy",
    "Introduction to ESG — CFI",
    "Principles of Environmental Impact Assessment — Alison",
    "End-to-End Analytics using Microsoft Fabric — Microsoft",
    "Enterprise Product Management Fundamentals — Microsoft / Coursera",
  ],

  languages: ["English", "Malayalam", "Tamil", "Hindi"],
};
