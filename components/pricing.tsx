import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const plans = [
  {
    name: "スターター",
    price: "¥0",
    period: "/月",
    description: "個人利用や小規模プロジェクトに最適",
    features: ["月間10,000リクエスト", "基本的なAIモデル", "標準サポート", "APIアクセス", "基本的な分析"],
    cta: "無料で始める",
    popular: false,
  },
  {
    name: "プロフェッショナル",
    price: "¥9,800",
    period: "/月",
    description: "成長中のチームとビジネスに",
    features: [
      "月間100,000リクエスト",
      "すべてのAIモデル",
      "優先サポート",
      "高度なAPIアクセス",
      "詳細な分析とレポート",
      "カスタムインテグレーション",
      "チームコラボレーション",
    ],
    cta: "今すぐ始める",
    popular: true,
  },
  {
    name: "エンタープライズ",
    price: "カスタム",
    period: "",
    description: "大規模な組織向けのカスタムソリューション",
    features: [
      "無制限リクエスト",
      "専用AIモデル",
      "24/7プレミアムサポート",
      "専用APIエンドポイント",
      "カスタムAIトレーニング",
      "SLA保証",
      "専任アカウントマネージャー",
      "オンプレミス展開オプション",
    ],
    cta: "お問い合わせ",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">シンプルで透明性の高い料金プラン</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            あなたのニーズに合わせた柔軟なプランをご用意しています
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative p-8 flex flex-col ${
                plan.popular ? "border-primary shadow-xl scale-105 bg-card/50" : "bg-card/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  人気プラン
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/80"
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            すべてのプランに14日間の無料トライアルが含まれています。クレジットカード不要。
          </p>
        </div>
      </div>
    </section>
  )
}
