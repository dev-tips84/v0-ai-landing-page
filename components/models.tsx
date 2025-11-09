import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const models = [
  {
    name: "Neural-4.1",
    description: "複雑なタスクに最適なモデル",
    features: ["テキストとビジョン対応", "128Kコンテキストウィンドウ", "マルチステップ推論", "高度なコード生成"],
  },
  {
    name: "Neural-4.1 Mini",
    description: "スピードとインテリジェンスのバランス",
    features: ["テキストとビジョン対応", "64Kコンテキストウィンドウ", "コスト効率的な処理", "高速レスポンス"],
  },
  {
    name: "Neural-4.1 Nano",
    description: "低レイテンシータスクに最適",
    features: ["テキストとビジョン対応", "32Kコンテキストウィンドウ", "最速のレスポンス", "超コスト効率"],
  },
]

export function Models() {
  return (
    <section id="models" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">フラッグシップモデル</h2>
          <p className="text-lg text-muted-foreground">
            2025年6月の最新知識を持つ、様々な実世界タスクに対応する強力な汎用モデル
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {models.map((model, index) => (
            <Card
              key={index}
              className="border-border bg-card transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{model.name}</CardTitle>
                <CardDescription className="text-base">{model.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
