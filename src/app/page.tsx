import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
class tool {
  title: string;
  description?: string;
  link: string;
}
const webTextGenerator = new tool();
webTextGenerator.title = "Web Text Generator";
webTextGenerator.description = "laver text basereret på linkedIn og website links, samt kommentare fra dig";
webTextGenerator.link = "/WebTextGenerator";

const linkedInWingman = new tool();
linkedInWingman.title = "LinkedIn Wingman";
linkedInWingman.description = "Hjælper dig med at bryde isen med en potentiel kunde på linkedIn. Laver en besked baseret på din og kundens LinkedIn profil";
linkedInWingman.link = "/LinkedInWingman";

const richResultsGenerator = new tool();
richResultsGenerator.title = "Rich Results Generator";
richResultsGenerator.description = "En skabelon for såkaldt 'structured data', til avanceret SEO";
richResultsGenerator.link = "/RichResultsGenerator";

const toolList = [webTextGenerator, linkedInWingman, richResultsGenerator];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-6 p-4">
      {toolList.map((tool) => {
        return (
          <Link href={tool.link} key={tool.link.replace("/", "")} className="w-full max-w-[600px]">
            <Card className="bg-background hover:bg-input relative">
              <CardContent className="p-6 grid gap-2">
                <CardTitle>{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </main>
  );
}
