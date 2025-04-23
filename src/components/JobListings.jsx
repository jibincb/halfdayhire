import React from "react";
import JobListing from "./JobListing";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import jobs from "../jobs.json";

const JobListings = ({ isHome = false }) => {
  const [fetchedjobs, setFetchedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // const fetchJobs = async () => {
    //   const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
    //   try {
    //     const res = await fetch(apiUrl);
    //     const data = await res.json();
    //     setJobs(data);
    //   } catch (error) {
    //     console.log("Error fetching Data", error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    const fetchJobs = () => {
      setTimeout(() => {
        const jobsNeeded = isHome ? jobs.slice(0, 3) : jobs;
        console.log(jobsNeeded);
        setFetchedJobs(jobsNeeded);
        setLoading(false);
      }, 1000);
    };
    fetchJobs();
  }, []);
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fetchedjobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default JobListings;
