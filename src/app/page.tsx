import { Promo } from '@/features/promo/Promo';
import { Autoparts } from '@/features/autoparts/Autoparts';
import { FAQ } from '@/features/faq/FAQ';
import { fetchAutoparts, fetchFaqs } from '@/shared/lib/fetch-data-from-internal-db';

export default async function Page() {
	const faqs = await fetchFaqs()
  const autoparts = await fetchAutoparts()

  return (
    <>
      <Promo />
      <Autoparts autoparts={autoparts} />
      <FAQ faqs={faqs} />
    </>
  )
}