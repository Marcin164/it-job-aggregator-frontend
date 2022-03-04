import React, { ReactElement } from "react";
import EmployerCard from "../../components/EmployerCard";
import Pagination from "../../components/Pagination";
import DashboardLayout from "../../layouts/DashboardLayout";

type Props = {};

const Employers = (props: Props) => {
  return (
    <>
      <Pagination />
      <div className="grid grid-cols-2 justify-items-center">
        <EmployerCard />
      </div>
    </>
  );
};

Employers.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Employers;
