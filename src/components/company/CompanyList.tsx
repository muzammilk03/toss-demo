"use client";

import { api } from "~/utils/api";
import CompanyCardSkeleton from "../skeleton/CompanyCardSkeleton";

const CompanyList = () => {
  const skeleton = [...Array(9).keys()].map((i) => {
    return <CompanyCardSkeleton key={i} />;
  });

  return (
    <ul className=" grid h-fit  gap-6 md:grid-cols-[repeat(auto-fit,clamp(150px,30vw,175px))]">
      {skeleton}
    </ul>
  );
};

export default api.withTRPC(CompanyList);
