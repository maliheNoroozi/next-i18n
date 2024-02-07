import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";

interface PageProps {
  params: {
    lang: Locale;
  };
}
export default async function Page({ params }: PageProps) {
  const { page } = await getDictionary(params.lang);

  return (
    <section className="py-24">
      <h1 className="text-3xl font-bold">{page.home.title}</h1>
      <p className="text-gray-500">{page.home.description}</p>
    </section>
  );
}
