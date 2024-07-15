'use client'

import Image from 'next/image';
import arrow from '@/shared/assets/icons/arrow.svg';
import { FC, useState } from 'react';
import { FaqType } from '@/shared/lib/types';

type Props = {
	faqs: FaqType[]
}

export const FAQ: FC<Props> = ({ faqs }: Props) => {
	const [activeFaqId, setActiveFaqId] = useState<string | null>(null);

	const showAnswer = (id: string) => {
    setActiveFaqId(prevId => (prevId === id ? null : id));
  };

  return (
		<div className="py-10 bg-gray-50 sm:py-16 lg:py-24">
			<div>
				<h2>Часто задаваемые вопросы</h2>
				<h4>Вы сможете найти ответы на часто задаваемые вопросы в этом разделе</h4>
			</div>
			<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
				<div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
					{faqs && faqs.map((faq: FaqType) => {
						return (
							<div 
								key={faq.id}
								onClick={() => showAnswer(faq.id)} 
								className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
							>
								<button type="button" className="flex flex-row gap-4 w-full px-4 py-5 sm:p-6">
									<span className="flex text-lg font-semibold text-black">
										{faq.question}
									</span>
									<Image src={arrow} alt='arrow' />
								</button>
								{activeFaqId === faq.id &&
									<div className="px-4 pb-5 sm:px-6 sm:pb-6">
										{faq.answer}
									</div>
								}
							</div>
						)
					})}
				</div>
				<p className="text-center text-gray-600 textbase mt-9">
					Если у вас есть еще вопросы, <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">свяжитесь с нашей технической поддержкой</span>
				</p>
			</div>
		</div>
  )
}