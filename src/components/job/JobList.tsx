"use client";

import { api } from "~/utils/api";

import JobCardSkeleton from "~/components/skeleton/JobCardSkeleton";

const JobList = () => {
  const skeleton = [...Array(5).keys()].map((i) => {
    return <JobCardSkeleton key={i} />;
  });

  return <ul className="grid gap-6 ">{skeleton}</ul>;
};

export default api.withTRPC(JobList);
