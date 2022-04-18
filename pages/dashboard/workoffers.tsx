import React, { ReactElement, useEffect } from "react";
import Button from "../../components/Button";
import OfferCard from "../../components/OfferCard";
import Pagination from "../../components/Pagination";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router"

type Props = {};

const WorkOffers = (props: Props) => {
  const [cookies, setCookies] = useCookies(["accessToken", "isPreferences"])
  const router = useRouter()
  
  useEffect(() => {
    if(cookies.accessToken === undefined) router.push("/login")
    if(cookies.isPreferences === false) router.push("/preferences/work")
  }, [])

  return (
    <div className="w-full">
      <div className="w-full">ADD</div>

      <div className="w-full flex flex-wrap justify-center">
        <Button className="bg-gray-200" value="Show favourites"/>
        <Pagination/>
        <OfferCard/>
        <OfferCard/>
        <OfferCard/>
        <OfferCard/>
        <OfferCard/>
        <OfferCard/>
        <OfferCard/>
      </div>

      <div className="w-full">ADD</div>
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
