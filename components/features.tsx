import { Brain, Zap, Shield, Code } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "高度な推論能力",
    description: "複雑なタスクに対応する最先端の言語モデルで、深い洞察と正確な結果を提供します。",
  },
  {
    icon: Zap,
    title: "超高速処理",
    description:
      "最適化されたインフラストラクチャにより、リアルタイムレスポンスを実現。低レイテンシーで大規模展開が可能です。",
  },
  {
    icon: Shield,
    title: "エンタープライズセキュリティ",
    description: "データプライバシーとセキュリティを最優先。SOC 2準拠で、エンドツーエンドの暗号化を提供します。",
  },
  {
    icon: Code,
    title: "開発者フレンドリー",
    description:
      "シンプルなAPIと包括的なドキュメントで、数分で統合が可能。Python、Node.js、その他多数の言語をサポート。",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">すべてを備えたプラットフォーム</h2>
          <p className="text-lg text-muted-foreground">
            AIアプリケーション構築に必要なすべてのツールとインフラストラクチャを提供
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
