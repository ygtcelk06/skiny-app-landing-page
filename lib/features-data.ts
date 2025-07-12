import { Camera, Target, Calendar, RotateCcw, BarChart3, Info, User, Star, Handshake } from "lucide-react"

export const features = [
  {
    id: "ai-analysis",
    number: "1",
    title: "Yüzünü Tara",
    description:
      "Harika bir cilt için önce onu tanıman gerekiyor. Skinly ile yüzünü taramak çok kolay ve hızlı!",
    image: "/images/step-01.png",
    iconColor: "#1bcee0",
    iconBgColor: "#ddf8fa",
    points: [
      {
        icon: Camera,
        text: "Telefon kameranı kullanarak anında analiz yap.",
      },
      {
        icon: Target,
        text: "Sorunlu bölgeleri ve cilt problemlerini saniyeler içinde öğren.",
      },
      {
        icon: Calendar,
        text: "Randevuya ya da pahalı cihazlara hiç gerek yok.",
      },
    ],
  },
  {
    id: "personalized-score",
    number: "2",
    title: "Kişiye Özel Cilt Skorunu Öğren",
    description:
      "Cildini şimdiye kadarki en iyi şekilde tanı. Nelerin iyi gittiğini, neleri düzeltmen gerektiğini net bir şekilde gör.",
    image: "/images/step-02.png",
    iconColor: "#6b88eb",
    iconBgColor: "#e9edfc",
    points: [
      {
        icon: RotateCcw,
        text: "Sivilce, nem, tahriş ve cildinin genel durumunu takip et.",
      },
      {
        icon: BarChart3,
        text: "Kullandığın ürünler işe yarıyor mu, yoksa boşa mı gidiyor, öğren.",
      },
      {
        icon: Info,
        text: "Cilt tipine özel öneriler ve ipuçları al.",
      },
    ],
  },
  {
    id: "personalized-routine",
    number: "3",
    title: "Cildine Özel Rutinini Al",
    description: "Cildine en uygun ürün ve bakım önerilerini keşfet. Tamamen sana göre hazırlanmış bir rutin seni bekliyor.",
    image: "/images/step-03.png",
    iconColor: "#c838f8",
    iconBgColor: "#f7e1fe",
    points: [
      {
        icon: User,
        text: "İhtiyacına özel, tarafsız öneriler al.",
      },
      {
        icon: Star,
        text: "Cildinin parlaması için en etkili ürünleri seç.",
      },
      {
        icon: Handshake,
        text: "Marka bağımlılığı yok — sadece işe yarayan güvenilir sonuçlar.",
      },
    ],
  },
]
