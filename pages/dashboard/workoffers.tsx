import React, { ReactElement } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

type Props = {};

const WorkOffers = (props: Props) => {
  return (
    <div>
      <h1>WorkOffers</h1>
    </div>
  );
};

WorkOffers.getLayout = function getLayout(page:ReactElement) {
  return (
    <DashboardLayout>
        {page}
    </DashboardLayout>
  )
}

export default WorkOffers;
