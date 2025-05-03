import CustomerInfo from "./CustomerInfo";
import SaleProductSelect from "./SaleProductSelect";
import SaleRecordTable from "./SaleRecordTable";
import { tailspin } from "ldrs";
tailspin.register();

const SaleForm = () => {

  return (
    <div className=" grid grid-cols-4 gap-3">
      <div className="col-span-3 ">
        <SaleProductSelect />
        <SaleRecordTable />
      </div>
      <div className="col-span-1">
        <CustomerInfo />
      </div>
    </div>
  );
};

export default SaleForm;
