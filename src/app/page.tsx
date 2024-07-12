import { Promo } from '@/features/promo/Promo';
import { Autoparts } from '@/features/autoparts/Autoparts';
import { FAQ } from '@/features/faq/FAQ';
import { fetchFaqs } from '@/shared/lib/fetch-data';

export default async function Page() {
	const faqs = await fetchFaqs()

  return (
    <>
      <Promo />
      <Autoparts />
      <FAQ faqs={faqs} />
    </>
  )
}