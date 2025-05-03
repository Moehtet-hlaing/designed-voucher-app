import React from "react";
import {
  HiCircleStack,
  HiDocumentDuplicate,
  HiMiniComputerDesktop,
  HiUserCircle,
} from "react-icons/hi2";
import Container from "../../../components/Container";
import ModuleBtn from "../components/ModuleBtn";
import LogOutButton from "../../../components/LogOutButton";
import { LuDatabaseBackup, LuFiles, LuMonitor, LuUsers } from "react-icons/lu";

const DashboardPage = () => {
  return (
    <Container>
      <section className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        <div className=" col-span-1">
          <ModuleBtn
            name={"Product Module"}
            icon={<LuDatabaseBackup className=" size-12" />}
            url={"/dashboard/products"}
          />
        </div>
        <div className=" col-span-1">
          <ModuleBtn
            name={"Sale Module"}
            icon={<LuMonitor className=" size-12" />}
            url={"/dashboard/sale"}
          />
        </div>
        <div className=" col-span-1">
          <ModuleBtn
            name={"Voucher Module"}
            icon={<LuFiles className=" size-12" />}
            url={"/dashboard/vouchers"}
          />
        </div>
        <div className=" col-span-1">
          <ModuleBtn
            name={"User Profile"}
            icon={<LuUsers className=" size-12" />}
            url={"/dashboard/user-profile"}
          />
        </div>
      </section>
      <div className=" text-end underline text-blue-500 mt-10">
        <LogOutButton />
      </div>
    </Container>
  );
};

export default DashboardPage;