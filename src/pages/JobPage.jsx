import { useLoaderData, useParams } from "react-router-dom";
import jobs from "../jobs.json";
import {
  Briefcase,
  MapPin,
  DollarSign,
  Building2,
  Mail,
  Phone,
} from "lucide-react";

const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div key={job.id} className="bg-white shadow-md rounded-2xl p-6 border">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{job.title}</h2>
        <div className="text-sm text-gray-500 mb-4">
          {job.type} • {job.workMode}
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="w-4 h-4" /> {job.location}
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <DollarSign className="w-4 h-4" /> {job.salary}
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Briefcase className="w-4 h-4" /> {job.company.name}
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Mail className="w-4 h-4" /> {job.company.contactEmail}
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Phone className="w-4 h-4" /> {job.company.contactPhone}
          </div>
        </div>

        <p className="text-gray-600 mb-2 whitespace-pre-line">
          {job.completeDescription}
        </p>

        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">About the Company</h3>
          <p className="text-gray-600">{job.company.description}</p>
        </div>
      </div>
    </div>
  );
};
const jobLoader = async ({ params }) => {
  console.log(params);
  console.log(jobs);
  const job = jobs.find((job) => job.id === params.id);
  console.log(job);
  if (!job) {
    throw new Response("Job not found", { status: 404 });
    // OR: return null;
  }
  return job;
};

// eslint-disable-next-line react-refresh/only-export-components
export { JobPage as default, jobLoader };
