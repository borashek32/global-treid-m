'use client'

import { FC } from 'react';
import { CallSupport } from "@/shared/components/call-support/CallSupport"
import { ReturnType } from '@/shared/types/types';

type Props = {
	items: ReturnType[]
}

export const Return: FC<Props> = ({ items }: Props) => {
	
  return (
		<section className="bg-white flex flex-col justify-center">
			<div className="py-2 sm:py-2 lg:py-2">
				<div className="flex flex-col justify-center">
					<h2>Возврат</h2>
					<h4>Возврат товара в интернет-магазине может быть осуществлен по разным причинам. Вот несколько примеров причин и способов возврата товара:</h4>
				</div>
				<div className='flex gap-8 flex-wrap justify-center items-center'>
					{items && items.map((item: ReturnType) => {
						return (
							<div key={item.id} className="relative flex flex-col content-center mt-6 text-gray-700 bg-gray-100 shadow-md bg-clip-border rounded-xl w-96">
								<div className="p-6">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
										className="w-12 h-12 mb-4 text-gray-900">
										<path d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
										<path
											d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z">
										</path>
									</svg>
									<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">{item.description}</p>
								</div>
							</div> 
						)
					})}
				</div>
				<CallSupport />
			</div>
		</section>
  )
}