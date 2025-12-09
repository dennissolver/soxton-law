// config/client.ts
// Auto-generated for: Soxton Law
// Platform Type: founder_service_provider
// Platform Mode: coaching
// Generated: 2025-12-09T12:41:39.374Z

export const clientConfig = {
  // Platform Configuration
  platformType: "founder_service_provider" as const,
  platformMode: "coaching" as const,
  
  company: {
    name: "Soxton Law",
    legalName: "Soxton Law",
    tagline: "Pitch Coaching for Advisory Clients",
    description: "Help your startup clients perfect their investor pitch with AI-powered coaching",
    website: "https://www.soxton.ai/",
    platformUrl: "https://soxton-law.vercel.app",
    supportEmail: "mcmdennis@gmail.com",
    salesEmail: "mcmdennis@gmail.com",
    social: { linkedin: "", twitter: "", youtube: "" },
    logo: { light: "/logo-light.svg", dark: "/logo-dark.svg", favicon: "/favicon.ico" },
  },
  
  admin: {
    firstName: "Logan",
    lastName: "Brown",
    email: "mcmdennis@gmail.com",
    phone: "+61402612471",
    position: "Partner",
    linkedIn: "",
  },
  
  offices: [{ city: "Office", country: "", address: "", phone: "+61402612471", isPrimary: true }],
  
  theme: {
    mode: "dark" as const,
    colors: {
      primary: "#3B82F6",
      primaryHover: "#2563EB",
      accent: "#10B981",
      accentHover: "#059669",
      background: "#0F172A",
      surface: "#1E293B",
      text: "#F8FAFC",
      textMuted: "#94A3B8",
      border: "#334155",
      gradient: { from: "#3B82F6", via: "#0F172A", to: "#10B981" },
      success: "#22C55E",
      warning: "#F59E0B",
      error: "#EF4444",
    },
    gradients: { hero: "from-blue-600 to-purple-600", button: "from-blue-500 to-blue-600", card: "from-slate-800 to-slate-900" },
    fonts: { heading: "Inter", body: "Inter" },
    borderRadius: "0.5rem",
  },
  
  coaching: {
    coachName: "Sarah",
    coachPersonality: "friendly",
    voiceAgentId: "agent_1801kc1j378ye7183zvpf2jqeerh",
    scoringFocus: "pitch_quality" as const,
    scoringCriteria: [
          {
                "key": "problem_clarity",
                "label": "Problem Clarity",
                "weight": 0.12
          },
          {
                "key": "solution_clarity",
                "label": "Solution Clarity",
                "weight": 0.12
          },
          {
                "key": "market_sizing",
                "label": "Market Sizing",
                "weight": 0.1
          },
          {
                "key": "business_model",
                "label": "Business Model",
                "weight": 0.12
          },
          {
                "key": "competitive_position",
                "label": "Competitive Positioning",
                "weight": 0.1
          },
          {
                "key": "team_credibility",
                "label": "Team Credibility",
                "weight": 0.12
          },
          {
                "key": "traction",
                "label": "Traction Evidence",
                "weight": 0.1
          },
          {
                "key": "ask_clarity",
                "label": "Ask Clarity",
                "weight": 0.1
          },
          {
                "key": "storytelling",
                "label": "Storytelling",
                "weight": 0.06
          },
          {
                "key": "visual_design",
                "label": "Visual Design",
                "weight": 0.06
          }
    ],
    welcomeMessages: {
      discovery: "Welcome! I'm Sarah, your AI pitch coach provided by Soxton Law. Let's uncover the compelling story behind your startup.",
      practice: "Ready to practice? I'm Sarah, and I'll give you real-time feedback to sharpen your investor pitch.",
      simulation: "Let's simulate an investor meeting. I'll play different investor types so you're prepared for tough questions.",
    },
  },
  
  platform: {
    urlPrefix: "soxton",
    adminRole: "portal_admin",
    features: {"voiceCoaching":true,"investorMatching":false,"deckVersioning":true,"teamMembers":false,"analytics":true,"apiAccess":false,"clientPortfolio":true,"progressTracking":true,"referralNetwork":false},
    founderJourney: [
          {
                "id": "upload",
                "label": "Upload Deck",
                "icon": "Upload"
          },
          {
                "id": "analysis",
                "label": "AI Analysis",
                "icon": "Brain"
          },
          {
                "id": "coaching",
                "label": "Coaching Sessions",
                "icon": "MessageSquare"
          },
          {
                "id": "practice",
                "label": "Practice Pitch",
                "icon": "Mic"
          },
          {
                "id": "refine",
                "label": "Refine & Improve",
                "icon": "FileEdit"
          }
    ],
    readinessLevels: [
          {
                "key": "needs-work",
                "label": "Needs Work",
                "minScore": 0,
                "color": "red"
          },
          {
                "key": "developing",
                "label": "Developing",
                "minScore": 40,
                "color": "orange"
          },
          {
                "key": "good",
                "label": "Good",
                "minScore": 60,
                "color": "yellow"
          },
          {
                "key": "excellent",
                "label": "Investor Ready",
                "minScore": 80,
                "color": "green"
          }
    ],
  },
  
  services: {
    supabase: { projectId: "gdvgacsvozagsqeqpkku", url: "https://gdvgacsvozagsqeqpkku.supabase.co" },
    vercel: { projectId: "", deploymentUrl: "https://soxton-law.vercel.app" },
    elevenlabs: { agentId: "agent_1801kc1j378ye7183zvpf2jqeerh", voiceId: "" },
  },
  
  footer: {
    description: "AI-powered pitch coaching for advisory clients",
    serviceLinks: [{"label":"For Founders","href":"/signup/founder"},{"label":"Client Portal","href":"/login"}],
    companyLinks: [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }],
    legalLinks: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }],
    copyright: "© 2025 Soxton Law. All rights reserved.",
  },
  
  legal: { privacyUrl: "/privacy", termsUrl: "/terms", copyrightYear: 2025, complianceRegions: ["GDPR", "CCPA"] },
  
  thesis: {
      "focusAreas": [
          "Compelling narrative",
          "Clear problem-solution fit",
          "Strong presentation skills"
      ],
      "sectors": [],
      "stages": [],
      "geographies": [
          "Global"
      ],
      "ticketSize": {
          "min": "N/A",
          "max": "N/A",
          "sweet": "N/A"
      },
      "philosophy": "Soxton Law helps founders tell their story effectively and secure funding.",
      "idealFounder": "Ambitious founders ready to refine their pitch and presentation skills.",
      "dealBreakers": []
  },
  
  landing: {
    hero: {
          "headline": "Perfect Your Pitch",
          "subHeadline": "AI-powered coaching from Soxton Law to help you nail your investor presentation",
          "ctaText": "Start Coaching",
          "ctaLink": "/signup/founder",
          "secondaryCtaText": "Learn More",
          "secondaryCtaLink": "#how-it-works"
    },
    stats: [
          {
                "value": "10x",
                "label": "Pitch Improvement"
          },
          {
                "value": "85%",
                "label": "Client Satisfaction"
          },
          {
                "value": "24/7",
                "label": "AI Coaching Available"
          },
          {
                "value": "100+",
                "label": "Founders Coached"
          }
    ],
    valueProps: [
          {
                "icon": "Brain",
                "title": "AI-Powered Analysis",
                "description": "Get instant, detailed feedback on your pitch deck from our AI coach."
          },
          {
                "icon": "Mic",
                "title": "Practice Sessions",
                "description": "Rehearse your pitch with AI and get real-time coaching on delivery."
          },
          {
                "icon": "TrendingUp",
                "title": "Track Improvement",
                "description": "Monitor your pitch quality score as you refine your presentation."
          }
    ],
    howItWorks: [
          {
                "step": 1,
                "title": "Upload Your Deck",
                "description": "Submit your pitch deck for comprehensive AI analysis."
          },
          {
                "step": 2,
                "title": "Get Coached",
                "description": "Work with our AI coach to improve each aspect of your pitch."
          },
          {
                "step": 3,
                "title": "Practice & Perfect",
                "description": "Rehearse until you're confident and investor-ready."
          }
    ],
  },
  
  serviceProvider: {
    providerType: "advisory",
    targetClientStages: [],
    targetClientSectors: [],
    coachingFocusAreas: ["problem_solution_clarity","market_sizing","business_model","ask_clarity","team_credibility","competitive_positioning","storytelling","traction_evidence","visual_design"],
    referralTrackingEnabled: false,
  },
};

export const getCompanyName = () => clientConfig.company.name;
export const getAdminName = () => `${clientConfig.admin.firstName} ${clientConfig.admin.lastName}`;
export const getAdminRole = () => clientConfig.platform.adminRole;
export const getUrlPrefix = () => clientConfig.platform.urlPrefix;
export const getCoachName = () => clientConfig.coaching.coachName;
export const getPlatformType = () => clientConfig.platformType;
export const getPlatformMode = () => clientConfig.platformMode;
export const isScreeningMode = () => clientConfig.platformMode === 'screening';
export const isCoachingMode = () => clientConfig.platformMode === 'coaching';
export const getPortalRoute = (path: string) => `/${clientConfig.platform.urlPrefix}${path}`;
export const getThemeColor = (color: keyof typeof clientConfig.theme.colors) => clientConfig.theme.colors[color];
export const replaceTemplateVars = (text: string): string => {
  return text
    .replace(/{company}/g, clientConfig.company.name)
    .replace(/{coach}/g, clientConfig.coaching.coachName)
    .replace(/{year}/g, String(clientConfig.legal.copyrightYear))
    .replace(/{admin}/g, getAdminName())
    .replace(/{email}/g, clientConfig.company.supportEmail);
};
export const isFeatureEnabled = (feature: keyof typeof clientConfig.platform.features) => clientConfig.platform.features[feature];
export type ClientConfig = typeof clientConfig;
