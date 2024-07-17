'use client'

import Image from 'next/image';
import arrow from '@/shared/assets/icons/arrow.svg';
import { FC, useState } from 'react';
import { DeliveryType } from '@/shared/lib/types';
import { CallSupport } from "@/shared/components/call-support/CallSupport"

type Props = {
	items: DeliveryType[]
}

export const Delivery: FC<Props> = ({ items }: Props) => {
	const [activeItemId, setActiveItemId] = useState<string | null>(null);

	const showDescription = (id: string) => {
    setActiveItemId(prevId => (prevId === id ? null : id));
  };

	
  return (
		<section className='bg-gray-100'>
			<div className="py-10  sm:py-16 lg:py-24">
				<div className="">
					<h2>Доставка</h2>
					<h4 className="">Доставка в интернет-магазине может быть осуществлена несколькими способами. Вот несколько вариантов:
					</h4>
				</div>
				<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
					<div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
						{items && items.map((item: DeliveryType) => {
							return (
								<div 
									key={item.id}
									onClick={() => showDescription(item.id)} 
									className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
								>
									<button type="button" className="flex flex-row gap-4 w-full px-4 py-5 sm:p-6">
										<span className="flex text-lg font-semibold text-black">
											{item.title}
										</span>
										<Image src={arrow} alt='arrow' />
									</button>
									{activeItemId === item.id &&
										<div className="px-4 pb-5 sm:px-6 sm:pb-6">
											{item.description}
										</div>
									}
								</div>
							)
						})}
					</div>
					<CallSupport />
				</div>
			</div>
		</section>
  )
}