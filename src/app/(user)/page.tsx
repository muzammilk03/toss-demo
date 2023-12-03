import CompanyList from "~/components/company/CompanyList";
import CategoryLinks from "~/components/home/CategoryLinks";
import Search from "~/components/home/Search";
import JobList from "~/components/job/JobList";

const HomePage = () => {
  return (
    <main className=" mx-auto w-full max-w-7xl overflow-hidden px-4 pb-16">
      <Search />
      <CategoryLinks />
      <div className=" grid gap-6 md:grid-cols-2">
        <div className=" hidden md:block">
          <h2 className="py-4 text-center text-[clamp(1rem,6vw,2rem)] font-medium capitalize">
            Companies
          </h2>
          <CompanyList />
        </div>
        <div>
          <h2 className=" py-4 text-center text-[clamp(1rem,6vw,2rem)] font-medium capitalize">
            Jobs
          </h2>
          <JobList />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
