import { PATHS } from "@/shared/constants/paths";
import Image from "next/image";
import Link from "next/link";
import { Fragment, MouseEvent } from "react";
import cart from '@/shared/assets/icons/cart.svg';
import user from '@/shared/assets/icons/user.svg';

type Props = {
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void,
}

export const MenuLinks = ({ onClick }: Props) => {

  return (
    <Fragment>
      <Link href={PATHS.CART} onClick={onClick}>
        <Image src={cart} alt='user cart' width={20} />
      </Link>
      <Link href={PATHS.DASHBOARD} onClick={onClick}>
        <Image src={user} alt='user dashboard' width={20} />
      </Link>
    </Fragment>
  )
}