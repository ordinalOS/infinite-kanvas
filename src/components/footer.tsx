import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/icons/logo";

export default function Footer() {
  return (
    <>
      <div className="md:mt-auto py-4 border-t border-border">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span className="text-sm">Powered by</span>
            <Link
              href="https://fal.ai"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              <Logo className="h-6 w-12 text-foreground" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="https://fal.ai/docs"
              target="_blank"
              className={buttonVariants({
                variant: "secondary",
                size: "sm",
              })}
            >
              Build Your Own AI App
            </Link>

            <Link
              href="https://github.com/fal-ai-community/fal-flux-kontext-demo"
              target="_blank"
              className={buttonVariants({ size: "sm" })}
            >
              <svg className="w-5 h-5 mr-2" fill="#000000" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              View Source Code
            </Link>
          </div>

          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            This demo showcases fal's powerful AI image generation capabilities.
            Build your own AI-powered applications with our fast, scalable
            infrastructure.
          </p>
        </div>
      </div>
    </>
  );
}
