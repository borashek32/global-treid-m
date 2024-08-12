export default function Page() {

  return (
    <div className="flex p-12 flex-col items-center md:container md:mx-auto">
      <h2>Информация для наших партнеров:</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquid autem nostrum, quis quisquam esse incidunt facilis dolor. Mollitia enim libero at reiciendis voluptates rerum, quibusdam obcaecati nisi, cumque laudantium magni provident quisquam illo ullam labore voluptas qui atque esse.</p>

      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-xl">
            <tbody className="text-blue-gray-900">
              <tr className="border-b border-blue-gray-200">
                <td className="py-3 px-4 w-200">Наименование организации:</td>
                <td className="py-3 px-4 w-200">ООО «ЛЕММА-АВТО»</td>
              </tr>
              <tr className="border-b border-blue-gray-200">
                <td className="py-3 px-4 w-200">Юридический адрес:</td>
                <td className="py-3 px-4 w-200">111673, Москва г, Суздальская ул, дом № 12, корпус 1, квартира 35</td>
              </tr>
              <tr className="border-b border-blue-gray-200">
                <td className="py-3 px-4 w-200">Фактический адрес:</td>
                <td className="py-3 px-4 w-200">111673, Москва г, пос. Коммунарка, дом № 12, корпус 1, квартира 35</td>
              </tr>
              <tr className="border-b border-blue-gray-200">
                <td className="py-3 px-4 w-200">ИНН:</td>
                <td className="py-3 px-4 w-200">7720447162/772001001</td>
              </tr>
              <tr className="border-b border-blue-gray-200">
                <td className="py-3 px-4 w-200">Номер счера:</td>
                <td className="py-3 px-4 w-200">40702810902410003279 в АО «АЛЬФА-БАНК»</td>
              </tr>
              <tr className="border-b border-blue-gray-200">
                <td className="py-3 px-4 w-200">К/С:</td>
                <td className="py-3 px-4 w-200">к\с 30101810200000000593</td>
              </tr>
              <tr className="border-b border-blue-gray-200">
                <td className="py-3 px-4 w-200">БИК:</td>
                <td className="py-3 px-4 w-200">044525593</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}