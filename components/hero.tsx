import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),transparent_50%)]" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-muted-foreground">AIパワードプラットフォーム</span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance md:text-7xl">
            次世代のAIで
            <br />
            <span className="text-accent">ビジネスを加速</span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground text-balance md:text-xl">
            業界最先端のAIモデルとツールで、革新的な体験を構築。
            <br className="hidden md:block" />
            あなたの組織を思考のスピードで創造する力を解き放ちます。
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-12 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              今すぐ始める
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 gap-2 border-border bg-secondary/50 hover:bg-secondary">
              <Play className="h-4 w-4" />
              デモを見る
            </Button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              クレジットカード不要
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              無料トライアル
            </div>
          </div>
        </div>

        <div className="mt-20">
          <p className="mb-8 text-center text-sm uppercase tracking-wider text-muted-foreground">
            世界のリーディングカンパニーから信頼されています
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale">
            {["TechCorp", "InnovateLabs", "FutureAI", "DataSync", "CloudScale"].map((company) => (
              <div key={company} className="text-2xl font-semibold">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
