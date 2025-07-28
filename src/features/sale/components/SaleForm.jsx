import CustomerInfo from "./CustomerInfo";
import SaleProductSelect from "./SaleProductSelect";
import SaleRecordTable from "./SaleRecordTable";
import { tailspin } from "ldrs";
tailspin.register();

const SaleForm = () => {

  return (
    <div className=" md:grid md:grid-cols-4 gap-3">
      <div className="md:col-span-3 flex flex-col">
        <SaleProductSelect />
        <SaleRecordTable />
      </div>
      <div className="md:col-span-1">
        <CustomerInfo />
      </div>
    </div>
  );
};

export default SaleForm;
