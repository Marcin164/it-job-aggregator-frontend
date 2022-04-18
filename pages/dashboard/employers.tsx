import React, { ReactElement, useState, useEffect } from "react";
import EmployerCard from "../../components/EmployerCard";
import Pagination from "../../components/Pagination";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router"

const Employers = () => {
  const [cookies, setCookies] = useCookies(["accessToken"])
  const router = useRouter()

  useEffect(() => {
    if(cookies.accessToken === undefined) router.push("/login")
  }, [])

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
