import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { profileState } from "../atoms/profileAtoms.ts";

export default function Home() {
  const router = useRouter();
  const setProfileUrl = useSetRecoilState(profileState);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [stalk, setStalk] = useState(true);
  const fetchProfileData = async (profileUrl) => {
    const toastId = toast.loading("Looking up the profile...");
    const options = {
      method: "GET",
      url: "https://linkedin-profile-data.p.rapidapi.com/linkedin-data",
      params: { url: profileUrl },
      headers: {
        "X-RapidAPI-Key": "e9681673famshafacdda02c1e855p1d73a4jsnf0e3ecef6ff0",
        "X-RapidAPI-Host": "linkedin-profile-data.p.rapidapi.com",
      },
    };
    try {
      let { data } = await axios(options);
      if (typeof data !== "object") {
        toast.error("Please provide a valid profile url!", {
          id: toastId,
        });
      } else {
        toast.success("Profile found!", {
          id: toastId,
        });
        data.Courses = data.accomplishment_courses;
        delete data.accomplishment_courses;
        data.Languages = data.languages;
        delete data.languages;
        data.Education = data.education;
        delete data.education;
        data.Patents = data.accomplishment_patents;
        delete data.accomplishment_patents;
        data.Certs = data.certifications;
        delete data.certifications;
        data.Projects = data.accomplishment_projects;
        delete data.accomplishment_projects;
        data.Publications = data.accomplishment_publications;
        delete data.accomplishment_publications;
        data.Volunteering = data.volunteer_work;
        delete data.volunteer_work;
        data.Test_Scores = data.accomplishment_test_scores;
        delete data.accomplishment_test_scores;
        data.Experiences = data.experiences;
        delete data.experiences;

        setProfileUrl(data);
        router.push("/profile/" + data.last_name);
        setValue("profileUrl", "");
      }
    } catch (err) {
      toast.error("Error!", {
        id: toastId,
      });
      console.log(err);
    }
  };
  const onSubmit = (data) => {
    fetchProfileData(data.profileUrl);
  };

  return (
    <div className="relative flex flex-col font-bold justify-center items-center font-serif h-screen w-screen">
      <div className="flex space-x-2 items-center text-xl">
        {stalk ? (
          <h1
            onClick={() => setStalk(!stalk)}
            className="text-red-500 cursor-pointer font-mono"
          >
            Stalk
          </h1>
        ) : (
          <h1
            onClick={() => setStalk(!stalk)}
            className="text-sky-500 cursor-pointer font-mono"
          >
            Search
          </h1>
        )}
        <h1 className="font-mono">the Linkedin Profile</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
          {...register("profileUrl", { required: true })}
          className="bg-gray-600 p-2 rounded-md mt-3 w-80 font-mono"
          type={"url"}
          placeholder="https://www.linkedin.com/in/profile/..."
        />
        {errors.profileUrl?.type === "required" && (
          <span className="text-red-300 mt-4 text-center font-light font-mono">
            Please enter the profile url.
          </span>
        )}

        <button
          type={"submit"}
          className={`${
            stalk ? "bg-red-500" : "bg-sky-500"
          } p-2 text-xs px-4 mt-4 rounded-md font-mono`}
        >
          {stalk ? "Stalk the profile" : "Search the profile"}
        </button>
      </form>
      <div className="fixed bottom-2 font-mono">
        Total profile searched so far: 12
      </div>
    </div>
  );
}
