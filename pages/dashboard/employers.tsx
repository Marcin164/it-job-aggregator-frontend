import React, { ReactElement } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

type Props = {};

const Employers = (props: Props) => {
  return <h1>Employers</h1>
};

Employers.getLayout = function getLayout(page:ReactElement) {
  return (
    <DashboardLayout>
        {page}
    </DashboardLayout>
  )
}

export default Employers;
