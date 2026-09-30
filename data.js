// Edit this file to update all portfolio content.
const PORTFOLIO = {
  name: "Vishnu Priyadharsan R",
  initials: "VP",
  headline: "ESG Business Development · Customer Success · CSR & Sustainable Finance",
  properties: [
    { label: "Open to", tags: ["Business Development", "Customer Success", "Platform Coordinator", "ESG Consulting"] },
    { label: "Domains", tags: ["ESG & BRSR", "CSR & Impact", "Sustainable & Climate Finance"] },
    { label: "Education", text: "M.A. Natural Resources & Governance, TISS Hyderabad (Climate Futures)" },
    { label: "Location", text: "Kerala, India · Open to relocation" },
    { label: "Status", status: "Available immediately" },
  ],
  email: "vishnupriyadharsan21@gmail.com",
  linkedin: "https://www.linkedin.com/in/vishnu-priyadharsan",
  resumeUrl: "",

  summary:
    "I understand ESG and CSR work from the client's side. At PwC I evaluated NGO proposals, managed 4 CSR projects across Telangana, collected and validated beneficiary data across 95 projects for global reporting, and ran a volunteering programme that logged 960 hours. That is the same data collection, reporting and stakeholder work that ESG and CSR platforms are built to simplify. I also bring subject depth: an M.A. in Natural Resources & Governance (Climate Futures) from TISS Hyderabad, and research on BRSR disclosures, green bonds, carbon markets and CBAM. I'm looking for business development, customer success and platform roles at ESG, CSR and climate-tech companies, where I can find the right clients, get them onboarded and keep them successful.",

  highlights: [
    { value: "4.25×", label: "sovereign green bond issuance vs India's entire corporate green bond market" },
    { value: "2,900", label: "Environmental Product Declarations benchmarked" },
    { value: "95", label: "CSR projects' beneficiary data validated at PwC" },
    { value: "2 banks", label: "BRSR FY25 disclosures benchmarked on financed emissions" },
  ],

  // Each "evidence" entry must match a project title below.
  services: [
    {
      title: "Client acquisition & market mapping",
      text: "Mapping who needs ESG and CSR support and why now, writing proposals and concept notes, and presenting to senior decision-makers.",
      evidence: ["India's Bamboo Economy: Risk & Finance", "CSR Portfolio Monitoring & Data Validation"],
    },
    {
      title: "Client onboarding & success",
      text: "Coordinating stakeholders, collecting and validating data from many sources, tracking milestones, and running regular reviews with management.",
      evidence: ["CSR Portfolio Monitoring & Data Validation"],
    },
    {
      title: "ESG reporting & BRSR",
      text: "Reviewing BRSR and BRSR Core disclosures, finding data gaps and methodology changes, benchmarking against peers.",
      evidence: ["ICICI vs HDFC: BRSR & Financed Emissions Review", "Cross-Sector Emissions Benchmarking Model"],
    },
    {
      title: "Sustainable & transition finance",
      text: "Green bonds, greenium, taxonomies, sustainability-linked instruments, and why capital does or doesn't flow.",
      evidence: ["Beyond the Benchmark: India's Green Bond Market", "Transition Finance for Steel & Cement"],
    },
    {
      title: "Carbon markets & climate risk",
      text: "Carbon-price scenarios, CBAM exposure, PCAF financed emissions, and India's CCTS design.",
      evidence: ["Designing a Credible Carbon Market for India", "ICICI vs HDFC: BRSR & Financed Emissions Review"],
    },
    {
      title: "CSR & impact",
      text: "Evaluating proposals, monitoring projects, validating beneficiary data, and preparing audit-ready reports.",
      evidence: ["CSR Portfolio Monitoring & Data Validation"],
    },
    {
      title: "Research & insight",
      text: "Sector research, feasibility and financing-scheme mapping, risk registers, and whitepapers that turn analysis into client-ready insight.",
      evidence: ["Environmental Product Declaration Benchmarking", "India's Bamboo Economy: Risk & Finance"],
    },
  ],

  // type: "Research" | "Analysis" | "Consulting"
  projects: [
    {
      title: "CSR Portfolio Monitoring & Data Validation",
      type: "Consulting",
      org: "PwC · Hyderabad · Dec 2025 – Jun 2026",
      metric: "95 projects validated · 960 volunteer hours",
      tags: ["CSR", "Stakeholder Management", "Audit-Ready Data"],
      problem:
        "PwC's global reporting depends on accurate, audit-ready beneficiary data from CSR projects across India, collected from many NGOs and regional teams.",
      approach: [
        "Managed 4 concurrent CSR projects in Telangana through field visits, monitoring and feasibility assessment.",
        "Worked with NGO Directors and CEOs to strengthen implementation plans, then presented projects to PwC's CSR Trustees for funding approval.",
        "Tracked CAPEX/OPEX use, milestones and risk flags in monthly and quarterly management reviews.",
      ],
      findings: [
        "Led beneficiary data review across 95 All-India projects, cross-verifying regional submissions and advising on calculation methods for complex, multi-component projects.",
        "Ran the Hyderabad volunteering programme end to end, from NGO partners to inductions and training, logging 960 hours of employee volunteering.",
      ],
      link: "",
    },
    {
      title: "Beyond the Benchmark: India's Green Bond Market",
      type: "Research",
      org: "Capstone · TISS Hyderabad · 2026",
      metric: "Greenium fell from ~9 bps to zero",
      tags: ["Green Bonds", "Sustainable Finance", "Policy Design"],
      problem:
        "India raised about Rs 57,697 Cr through Sovereign Green Bonds from January 2023, and they were expected to kick-start a domestic corporate green bond market. Did they?",
      approach: [
        "Diagnostic policy study combining document analysis, quantitative trend analysis and comparative analysis.",
        "Built the data from official sources only: SEBI's ESG Debt Securities register, RBI auction results and DEA issuance data.",
        "Measured market development by issuer breadth (number and sectoral spread of new corporate issuers), not volume. Volume misleads in a concentrated market.",
        "Used France (OAT 2017) and Indonesia (Green Sukuk 2018) as comparators, since both built supporting architecture before or alongside their sovereign bond.",
      ],
      findings: [
        "The sovereign became the market instead of catalysing it: it issued about 4.25× the entire domestic corporate green bond market (Rs 11,229 Cr across 29 issuances since 2017).",
        "Issuer breadth did not improve. New entrants were municipal bodies and REITs driven by their own regulations, with no hard-to-abate, SME or mid-cap issuers.",
        "The greenium eroded from a ~9 bps peak. RBI cancelled an auction in May 2024 and the December 2024 auction cleared at G-Sec parity.",
        "India lacked the preconditions that worked elsewhere: a taxonomy, disclosure-driven green demand, fiscal incentives, and regulator coordination.",
        "Proposed five costed interventions, each assigned to the body that has the mandate: operationalise the taxonomy, set up a green finance sub-committee under FSDC, give tax incentives to green bond investors, create a credit guarantee for first-time issuers, and subsidise verification for small issues.",
      ],
      link: "",
    },
    {
      title: "ICICI vs HDFC: BRSR & Financed Emissions Review",
      type: "Analysis",
      org: "Case assignment · April 2026",
      metric: "Neither bank discloses full financed emissions",
      tags: ["BRSR", "PCAF", "Banking", "Greenwashing Risk"],
      problem:
        "For a bank, financed emissions (Scope 3, Category 15) usually dwarf operational emissions. How well do two of India's largest private banks disclose what actually matters in their FY2024-25 BRSRs?",
      approach: [
        "Used primary filings only: both banks' BRSR FY2024-25 and annual reports, with no aggregator or rating-agency summaries.",
        "Asked three questions throughout: what was stated vs. delivered, what is absent that should be present, and what year-on-year movement really reveals.",
        "Compared material priorities, disclosure depth, how well strategy and metrics line up, assurance, and ambition.",
      ],
      findings: [
        "HDFC disclosed 23.8 MtCO₂e of financed emissions on only ~Rs 1.90 lakh Cr of a Rs 26.19 lakh Cr advances book. ICICI disclosed none.",
        "HDFC's apparent 45% improvement in carbon intensity came from a methodology revision in a footnote, not from operational change.",
        "HDFC's 18.69% 'sustainable finance' share was mostly social loans (housing, MSME). Pure green loans were Rs 67,111 Cr, or 2.54% of advances, which creates greenwashing risk.",
        "Both banks target Scope 1+2 carbon neutrality by FY2032 with no baseline, interim milestones or SBTi validation.",
        "Recommended six 12-month actions, including publishing PCAF-based financed emissions by sector, releasing scenario-analysis outputs, and adopting ICMA-aligned green lending criteria.",
      ],
      link: "",
    },
    {
      title: "Designing a Credible Carbon Market for India",
      type: "Research",
      org: "Team capstone · TISS Hyderabad · 2026",
      metric: "CBAM stress test at $10 / $30 / $50 / $76 per tCO₂",
      tags: ["Carbon Markets", "CBAM", "CCTS", "Transition Risk"],
      problem:
        "India is moving from the PAT scheme to a compliance Carbon Credit Trading Scheme (CCTS) while the EU's CBAM prices the carbon embedded in imports. Is India's carbon market credible enough to hold a price signal and protect exporters?",
      approach: [
        "Team project. I led the CBAM-exposure stress test and the policy diagnostic, and my collaborator led the firm-level emissions mapping.",
        "Mapped disclosed Scope 1 and 2 emissions across India's top ~350 listed companies to test how concentrated emissions are.",
        "Estimated sector exposure (steel, aluminium, cement, fertilisers, power) at four carbon prices, from a low domestic price up to roughly the EU level.",
        "Assessed CCTS with the Policy Triad: policy framework, institutions (BEE, Ministry of Power, MoEFCC), and instruments.",
      ],
      findings: [
        "Emissions are structurally concentrated in power, metals & mining, construction and oil & gas, and within a small set of large firms. A price aimed at them covers most of the problem.",
        "CBAM exposure is material for steel and aluminium and rises steeply as prices approach EU levels.",
        "CBAM deducts carbon prices already paid at home, so a credible CCTS keeps that revenue in India. That makes it defensive economic policy as well as climate policy.",
        "Credibility depends on design coherence. Fragmented institutions and incomplete MRV and price-stabilisation tools are the main gaps.",
      ],
      link: "",
    },
    {
      title: "Transition Finance for Steel & Cement",
      type: "Analysis",
      org: "Strategy brief · May 2026",
      metric: "Green finance funds what's clean, not the journey",
      tags: ["Transition Finance", "SLL / SLB", "Hard-to-Abate"],
      problem:
        "Steel and cement produce about 21% of India's industrial emissions, and clean alternatives cost several times more. Why isn't climate capital reaching them?",
      approach: [
        "Diagnosed the financing gap rather than the technology gap, using IEA, CPI, GFANZ and RBI sources.",
        "Mapped the barriers from a lender's view: category, definitions, tenor and instruments.",
      ],
      findings: [
        "Green finance funds already-clean assets. A plant cutting emissions 40% doesn't qualify, and India has no official definition of 'transition'.",
        "There is a tenor mismatch: bank loans run 5–7 years, while decarbonising a plant takes 15–20.",
        "Recommended aligning transition plans to PAT and SBTi sector pathways now, using sustainability-linked loans and bonds (as Tata Steel and JSW have), and commissioning independent verification of transition plans.",
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
        "Corporate emissions disclosures vary in scope, methodology and assurance, which makes like-for-like comparison difficult.",
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
      title: "India's Bamboo Economy: Risk & Finance",
      type: "Consulting",
      org: "ISB Research · Corporate Chanakya · 2025",
      metric: "Sector risk register + state project proposal",
      tags: ["Risk Assessment", "Proposals", "Public Finance"],
      problem:
        "India's bamboo sector has high potential but is held back by overlapping governance, regulatory gaps and supply-chain risk.",
      approach: [
        "ISB: mapped governance overlaps across ministries, state agencies, NGOs and financial institutions.",
        "Built a risk register with likelihood-impact ratings across operational, regulatory, market and supply-chain risks.",
        "Corporate Chanakya: wrote the proposal and concept note for a hi-tech bamboo nursery lab for the State of Goa.",
      ],
      findings: [
        "Wrote mitigation strategies for each risk category, which fed into a policy report for ISB faculty.",
        "Identified financing routes through MNRE and the National Bamboo Mission, and presented feasibility findings to senior management.",
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
      approach: ["Analysed 2,900 EPDs from international registries.", "Benchmarked disclosure practices across sectors."],
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
        "Wrote the proposal and concept note for a hi-tech bamboo nursery lab for the State of Goa.",
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
    { group: "ESG & reporting", color: "green", items: ["ESG Research", "BRSR / BRSR Core", "GRI", "GHG Protocol (Scope 1-2-3)", "TCFD / IFRS S2", "CSRD Fundamentals", "EPD Disclosure"] },
    { group: "Sustainable & climate finance", color: "blue", items: ["Sustainable Finance", "Green Bonds (ICMA GBP)", "Sustainability-Linked Loans & Bonds", "Transition Finance", "Climate Taxonomies", "PCAF Financed Emissions", "Carbon Markets (CCTS)", "CBAM", "Impact Research"] },
    { group: "CSR & impact", color: "orange", items: ["CSR Proposal Evaluation", "Project Monitoring", "CAPEX/OPEX & Fund Utilisation Tracking", "Beneficiary Data Validation", "Employee Volunteering Programmes", "Development-Sector Research"] },
    { group: "Research & analysis", color: "purple", items: ["Primary & Secondary Research", "Policy Research", "Sector Analysis", "Literature Review", "Qualitative & Quantitative Analysis", "Disclosure Gap Analysis", "Peer Benchmarking", "Scenario & Stress Testing", "Risk Assessment", "Data Validation", "Field Research"] },
    { group: "Client & delivery", color: "green", items: ["Stakeholder Engagement", "Stakeholder Mapping & SWOT", "Proposal & Concept Note Development", "Research Reporting & Whitepapers", "Management Reporting", "Client & Trustee Presentations"] },
    { group: "Tools", color: "gray", items: ["Excel", "Power BI", "Tableau", "Python", "QGIS", "STATA (basic)", "Microsoft Fabric", "Microsoft Office", "AI-augmented workflows"] },
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
