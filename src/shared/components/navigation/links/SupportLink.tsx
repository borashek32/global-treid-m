import Image from "next/image";
import Link from "next/link";
import emailImg from '@/shared/assets/icons/email.svg';
import phoneImg from '@/shared/assets/icons/phone.svg';

type Props = {
  phone?: string,
  email?: string,
}

export const SupportLink = ({ email, phone }: Props) => {

  return (
    <Link href={phone ? `tel:${phone}` : `mailto:${email}`} className="flex gap-2 align-center mb-2">
      <Image src={phone ? phoneImg : emailImg} alt='позвоните' />
    </Link>
  )
}