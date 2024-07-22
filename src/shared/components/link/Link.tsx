import Image from "next/image";
import Link from "next/link";
import emailImg from '@/shared/assets/icons/email.svg';
import phoneImg from '@/shared/assets/icons/phone.svg';

type Props = {
  phone?: string,
  email?: string,
}

export const AppLink = ({ email, phone }: Props) => {

  return (
    <Link href={`tel:${phone ?? email}`} className="flex gap-2 align-center mb-2">
      <Image src={phone ? phoneImg : emailImg} alt='позвоните' />
      <p className="font-normal text-gray-700 dark:text-gray-400">{phone ?? email}</p>
    </Link>
  )
}