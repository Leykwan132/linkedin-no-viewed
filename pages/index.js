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
            className="text-red-500 cursor-pointer"
          >
            Stalk
          </h1>
        ) : (
          <h1
            onClick={() => setStalk(!stalk)}
            className="text-sky-500 cursor-pointer"
          >
            Search
          </h1>
        )}
        <h1>the Linkedin Profile</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
          {...register("profileUrl", { required: true })}
          className="bg-gray-600 p-2 rounded-md mt-3 w-80"
          type={"url"}
          placeholder="https://www.linkedin.com/in/..."
        />
        {errors.profileUrl?.type === "required" && (
          <span className="text-red-300 mt-4 text-center font-light">
            Please enter the profile url.
          </span>
        )}

        <button
          type={"submit"}
          className={`${
            stalk ? "bg-red-500" : "bg-sky-500"
          } p-2 text-xs px-4 mt-4 rounded-md`}
        >
          {stalk ? "Stalk the profile" : "Search the profile"}
        </button>
      </form>
      <div className="fixed bottom-2">Total profile searched so far: 12</div>
    </div>
  );
}
