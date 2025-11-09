import Link from "next/link"
import { Sparkles } from "lucide-react"

const footerLinks = {
  product: [
    { label: "機能", href: "#features" },
    { label: "モデル", href: "#models" },
    { label: "料金", href: "#pricing" },
    { label: "API", href: "#api" },
  ],
  company: [
    { label: "会社概要", href: "#about" },
    { label: "ブログ", href: "#blog" },
    { label: "採用情報", href: "#careers" },
    { label: "お問い合わせ", href: "#contact" },
  ],
  resources: [
    { label: "ドキュメント", href: "#docs" },
    { label: "ガイド", href: "#guides" },
    { label: "サポート", href: "#support" },
    { label: "ステータス", href: "#status" },
  ],
  legal: [
    { label: "プライバシー", href: "#privacy" },
    { label: "利用規約", href: "#terms" },
    { label: "セキュリティ", href: "#security" },
    { label: "Cookie設定", href: "#cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <Sparkles className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="font-semibold text-lg">NeuralAI</span>
            </Link>
            <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
              次世代のAIプラットフォームで、
              <br />
              ビジネスの可能性を最大限に引き出します。
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">プロダクト</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">企業情報</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">リソース</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">法務</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">© 2025 NeuralAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
