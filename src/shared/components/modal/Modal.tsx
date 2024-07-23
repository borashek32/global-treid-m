import { Button } from "../button/Button";

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
      {buttonName && <Button name={buttonName} type='button' />}
    </div>
  )
}