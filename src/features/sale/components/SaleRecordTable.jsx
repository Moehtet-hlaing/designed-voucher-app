import useSaleProductStore from '../../../stores/useSaleProductStore';
import SaleRecordRow from './SaleRecordRow';

const SaleRecordTable = () => {
  const {records}= useSaleProductStore();
  const total = records?.reduce((pv, cv) => pv + cv.cost, 0);
  const tax = total * 0.07;
  const net_total = total + tax;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className=" text-[10px] md:text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
      <th scope="col" className="p-2 sm:px-6 sm:py-4 text-end">#</th>

        <th scope="col" className="p-2 sm:px-6 sm:py-4">Product name</th>
        <th scope="col" className="p-2 sm:px-6 sm:py-4 text-end">Price</th>
        <th scope="col" className="p-2 sm:px-6 sm:py-4 text-end">Quantity</th>
        <th scope="col" className="p-2 sm:px-6 sm:py-4 text-end">Cost</th>
        <th scope="col" className="p-2 sm:px-6 sm:py-4 text-end">{""}</th>

      </tr>
    </thead>
    <tbody id="recordGroup">
      {records.length ? records.map((record, index) => <SaleRecordRow key={record.product.id} record={record} index={index }/>) : <tr className="hidden last:table-row odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th scope="row" colSpan={6} className="p-2 sm:px-6 sm:py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
          There is no record yet
        </th>
      </tr>}
    </tbody>
    <tfoot>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" colSpan={4} className="p-2 sm:px-6 sm:py-4 font-medium text-end text-gray-900 whitespace-nowrap dark:text-white">
          Total
        </th>
        <td className="p-2 sm:px-6 sm:py-4 text-end" >{total.toFixed(2)}</td>
        <td className="p-2 sm:px-6 sm:py-4 text-end" >{""}</td>

      </tr>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" colSpan={4} className="p-2 sm:px-6 sm:py-4 font-medium text-end text-gray-900 whitespace-nowrap dark:text-white">
          Tax
        </th>
        <td className="p-2 sm:px-6 sm:py-4 text-end" >{tax.toFixed(2)}</td>
        <td className="p-2 sm:px-6 sm:py-4 text-end" >{""}</td>

      </tr>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" colSpan={4} className="p-2 sm:px-6 sm:py-4 font-medium text-end text-gray-900 whitespace-nowrap dark:text-white">
          Net Total
        </th>
        <td className="p-2 sm:px-6 sm:py-4 text-end" >{parseFloat(net_total).toFixed(2)}</td>
        <td className="p-2 sm:px-6 sm:py-4 text-end" >{""}</td>

      </tr>
    
    </tfoot>
  </table>
</div>

  )
}

export default SaleRecordTable