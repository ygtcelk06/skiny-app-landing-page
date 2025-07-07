import { Camera, Target, Calendar, RotateCcw, BarChart3, Info, User, Star, Handshake } from "lucide-react"

export const features = [
  {
    id: "ai-analysis",
    number: "1",
    title: "Yüzünü Tara",
    description:
      "Harika bir cilde ulaşmak, onu anlamakla başlar. Skiny ile yüzünüzü taramak hızlı, kolay ve doğrudur.",
    image: "/images/step-01.png",
    iconColor: "#1bcee0",
    iconBgColor: "#ddf8fa",
    points: [
      {
        icon: Camera,
        text: "Anında analiz için telefon kamerasını kullan.",
      },
      {
        icon: Target,
        text: "Sorunlu bölgeleri ve cilt problemlerini saniyeler içinde belirle.",
      },
      {
        icon: Calendar,
        text: "Randevuya veya pahalı ekipmanlara gerek yok.",
      },
    ],
  },
  {
    id: "personalized-score",
    number: "2",
    title: "Kişiselleştirilmiş Cilt Skorunu Al",
    description:
      "Cildini hiç olmadığı kadar iyi tanı. Nelerin iyi olduğunu ve nelere dikkat etmen gerektiğini gösteren detaylı bir skor al.",
    image: "/images/step-02.png",
    iconColor: "#6b88eb",
    iconBgColor: "#e9edfc",
    points: [
      {
        icon: RotateCcw,
        text: "Sivilce, nem, tahriş ve doku durumunu takip et.",
      },
      {
        icon: BarChart3,
        text: "Mevcut rutininde ne işe yarıyor, ne yaramıyor gör.",
      },
      {
        icon: Info,
        text: "Benzersiz cilt tipine özel içgörüler elde et.",
      },
    ],
  },
  {
    id: "personalized-routine",
    number: "3",
    title: "Kişiselleştirilmiş Rutinini Al",
    description: "Cildine özel önerilen ürünleri ve rutinleri al.",
    image: "/images/step-03.png",
    iconColor: "#c838f8",
    iconBgColor: "#f7e1fe",
    points: [
      {
        icon: User,
        text: "Eşsiz ihtiyaçların için tarafsız öneriler.",
      },
      {
        icon: Star,
        text: "Cildinin ışıltısını artırmak için en iyisini seç.",
      },
      {
        icon: Handshake,
        text: "Marka bağı yok—sadece güvenilir sonuçlar.",
      },
    ],
  },
]
