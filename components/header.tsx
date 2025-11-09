import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
            <Sparkles className="h-5 w-5 text-accent-foreground" />
          </div>
          <span className="font-semibold text-lg">NeuralAI</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            機能
          </Link>
          <Link href="#models" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            モデル
          </Link>
          <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            料金
          </Link>
          <Link href="#docs" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            ドキュメント
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            ログイン
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            無料で始める
          </Button>
        </div>
      </div>
    </header>
  )
}
