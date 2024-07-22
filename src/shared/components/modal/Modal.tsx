import Image from "next/image";
import { Button } from "../button/Button";
import emailImg from '@/shared/assets/icons/email.svg';
import phoneImg from '@/shared/assets/icons/phone.svg';
import Link from "next/link";

type Props = {
  title?: string,
  desc?: string,
  buttonName?: string,
  phone?: string,
  email?: string,
}

export const Modal = ({
  title,
  desc,
  buttonName,
  phone,
  email,
}: Props) => {

  return (
    <div className="w-64 p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      <p className="mb-3 font-normal text-center text-gray-900">{desc}</p>
      <div className="m-4">
        <Link href={`tel:${phone}`} className="flex gap-2 align-center mb-2">
          <Image src={phoneImg} alt='позвоните' />
          <p className="font-normal text-gray-700 dark:text-gray-400">+7 (916) 917-46-30</p>
        </Link>
        <Link href={`mailto:${email}`} className="flex gap-2 align-center">
          <Image src={emailImg} alt='позвоните' />
          <p className="font-normal text-gray-700 dark:text-gray-400">borashek@inbox.ru</p>
        </Link>
      </div>
      {buttonName && <Button name={buttonName} type='button' />}
    </div>
  )
}