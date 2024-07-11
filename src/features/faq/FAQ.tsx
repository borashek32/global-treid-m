'use client'

import Image from 'next/image';
import arrow from '@/shared/assets/icons/arrow.svg';
import { useState } from 'react';

export const FAQ = () => {
	const [active, setActive] = useState(false)

  return (
		<div className="py-10 bg-gray-50 sm:py-16 lg:py-24">
			<div>
				<h2>Часто задаваемые вопросы</h2>
				<h4>Вы сможете найти ответы на часто задаваемые вопросы в этом разделе</h4>
			</div>
			<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
				<div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
					<div onClick={() => setActive(!active)} className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
						<button type="button" className="flex flex-row gap-4 w-full px-4 py-5 sm:p-6">
							<span className="flex text-lg font-semibold text-black">
								Как мне зарегистрироваться на портале, в качестве юридического лица?
							</span>
							<Image src={arrow} alt='arrow' />
						</button>
						{active &&
							<div className="px-4 pb-5 sm:px-6 sm:pb-6">
								<p>Если вы регистрируетесь, то перейдите на страницу регистрации. Заполните регистрационные данные и отметьте галочкой чекбокс &quot;юридическое лицо&quot;. Под формой регистрации откроется форма добавления реквизитов вашей компании. Заполните все обязательные поля.</p>
								<p>Если вы уже рарегистрировались, как физическое лицо, то перейдите на страницу вашего профиля, в настройках отметьте галочкой чекбокс &quot;юридическое лицо&quot;. Откроется форма для внесения реквизитов вашей компании. Заполните все обязательные поля.</p>
							</div>
						}
					</div>
				</div>
				<p className="text-center text-gray-600 textbase mt-9">
					Still have questions? 
					<span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">Contact
						our support
					</span>
				</p>
			</div>
		</div>
  )
}