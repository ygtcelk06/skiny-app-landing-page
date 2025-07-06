import { Camera, Target, Calendar, RotateCcw, BarChart3, Info, User, Star, Handshake } from "lucide-react"

export const features = [
  {
    id: "ai-analysis",
    number: "1",
    title: "Scan Your Face",
    description:
      "Achieving great skin starts with understanding it. With Skiny scanning your face is quick, easy, and accurate.",
    image: "/images/step-01.png",
    iconColor: "#1bcee0",
    iconBgColor: "#ddf8fa",
    points: [
      {
        icon: Camera,
        text: "Use your phone's camera for an instant analysis.",
      },
      {
        icon: Target,
        text: "Identify problem areas and skin concerns in seconds.",
      },
      {
        icon: Calendar,
        text: "No appointments or expensive equipment needed.",
      },
    ],
    
  },
  {
    id: "personalized-score",
    number: "2",
    title: "Get Your Personalized Skin Score",
    description:
      "Understand your skin like never before. Get a detailed score highlighting what's great and what needs attention.",
    image: "/images/step-02.png",
    iconColor: "#6b88eb",
    iconBgColor: "#e9edfc",
    points: [
      {
        icon: RotateCcw,
        text: "Track acne, hydration, irritation, and texture.",
      },
      {
        icon: BarChart3,
        text: "See what's working and what's not in your current routine.",
      },
      {
        icon: Info,
        text: "Gain insights tailored to your unique skin type.",
      },
    ],
    
  },
  {
    id: "personalized-routine",
    number: "3",
    title: "Get Your Personalized Routine",
    description: "Receive expert-recommended products and routines tailored to your skin.",
    image: "/images/step-03.png",
    iconColor: "#c838f8",
    iconBgColor: "#f7e1fe",
    points: [
      {
        icon: User,
        text: "Unbiased recommendations for your unique needs.",
      },
      {
        icon: Star,
        text: "Choose what's best to help your skin glow.",
      },
      {
        icon: Handshake,
        text: "No brand affiliations—just results you can trust.",
      },
    ],
    
  },
]
