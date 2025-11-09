import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent/20 via-background to-background p-12 md:p-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.2),transparent_50%)]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              今すぐAIの力を
              <br />
              ビジネスに取り入れよう
            </h2>
            <p className="mb-10 text-lg text-muted-foreground text-balance">
              数分で始められます。クレジットカード不要、無料トライアルで全機能をお試しください。
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="h-12 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                無料で始める
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 border-border hover:bg-secondary bg-transparent">
                営業に相談する
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
