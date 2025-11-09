import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    company: "TechCorp",
    author: "佐藤健太",
    role: "CTO",
    content: "NeuralAIの導入により、開発スピードが3倍に向上しました。API統合も驚くほど簡単でした。",
    rating: 5,
  },
  {
    company: "InnovateLabs",
    author: "田中美咲",
    role: "プロダクトマネージャー",
    content: "最先端のAIモデルを使って、顧客体験を劇的に改善できました。サポートも素晴らしいです。",
    rating: 5,
  },
  {
    company: "DataSync",
    author: "鈴木大輔",
    role: "AIエンジニア",
    content: "エンタープライズグレードのセキュリティと高いパフォーマンスの両立が実現できています。",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">導入企業の声</h2>
          <p className="text-lg text-muted-foreground">世界中の企業がNeuralAIで革新を実現しています</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
