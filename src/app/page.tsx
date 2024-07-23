import { Promo } from '@/features/promo/Promo';
import { Autoparts } from '@/features/autoparts/Autoparts';
import { fetchDeliveries, fetchFaqs, fetchReturns } from '@/shared/lib/fetch-static-data';
import { FAQ } from '@/features/faq/FAQ';
import { Delivery } from '@/features/delivery/Delivery';
import { Return } from '@/features/return/Return';

export default async function Page() {
	const faqs = await fetchFaqs();
  const deliveries = await fetchDeliveries();
  const returns = await fetchReturns();

  return (
    <>
      <Promo />
      <Autoparts />
      <Delivery items={deliveries} />
      <Return items={returns} />
      <FAQ items={faqs} />
    </>
  )
}