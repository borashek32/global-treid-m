'use client'

import Image from 'next/image';
import arrow from '@/shared/assets/icons/arrow.svg';
import { FC, useState } from 'react';
import { FaqType } from '@/shared/types/types';

type Props = {
	items: FaqType[]
}

export const FAQ: FC<Props> = ({ items }: Props) => {
	const [activeItemId, setActiveItemId] = useState<string | null>(null);

	const showDescription = (id: string) => {
    setActiveItemId(prevId => (prevId === id ? null : id));
  };

  return (
		<section id='faq' className='bg-gray-100'>
			<div className="py-2 sm:py-2 lg:py-2">
				<div>
					<h2>Часто задаваемые вопросы</h2>
					<h4>Вы сможете найти ответы на часто задаваемые вопросы в этом разделе</h4>
				</div>
				<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
					<div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
						{items && items.map((item: FaqType) => {
							return (
								<div 
									key={item.id}
									onClick={() => showDescription(item.id)} 
									className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
								>
									<button type="button" className="flex flex-row gap-4 w-full px-4 py-5 sm:p-6">
										<span className="flex text-lg font-semibold text-black">
											{item.question}
										</span>
										<Image src={arrow} alt='arrow' className={"mt-1 transition ease-in-out" + ' ' + (activeItemId !== item.id ? "rotate-180" : "")} />
									</button>
									{activeItemId === item.id &&
										<div className="px-4 pb-5 sm:px-6 sm:pb-6">
											{item.answer}
										</div>
									}
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
  )
}