import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import _ from "lodash";
import { supabase } from "../utils/supabaseClient.tsx";
import Head from "next/head";

export default function Home({ searchCount }) {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

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
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        "X-RapidAPI-Host": "linkedin-profile-data.p.rapidapi.com",
      },
    };
    try {
      let { data } = await axios(options);
      if (data === "Server is busy. Please try again later.") {
        toast.error(data, {
          id: toastId,
        });
      } else if (typeof data !== "object") {
        toast.error("Please provide a valid profile url!", {
          id: toastId,
        });
      } else {
        toast.success("Profile found!", {
          id: toastId,
        });

        router.push("/profile/" + data.public_identifier);
        setValue("profileUrl", "");

        const updatedCount = searchCount + 1;
        await supabase
          .from("times_visited")
          .update({ searches_made: updatedCount })
          .eq("id", 1);
      }
    } catch (err) {
      toast.error("Error!", {
        id: toastId,
      });
    }
  };
  const onSubmit = (data) => {
    setIsClicked(true);
    fetchProfileData(data.profileUrl);
  };

  return (
    <div className="relative flex flex-col font-bold justify-center items-center font-serif h-screen w-screen text-white bg-gray-800">
      <Head>
        <title>StalkyourLinkedin</title>
        <meta
          name="description"
          content="I hope this tutorial is helpful for you"
        />
      </Head>
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
          disabled={isClicked}
          type={"submit"}
          className={`${
            stalk ? "bg-red-500" : "bg-sky-500"
          } p-2 text-xs px-4 mt-4 rounded-md font-mono`}
        >
          <div className="flex items-center justify-center">
            {isClicked ? (
              <div
                className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : stalk ? (
              <span>Stalk the profile</span>
            ) : (
              <span>Search the profile</span>
            )}
          </div>
        </button>
      </form>
      <p className="fixed bottom-8 font-mono text-sm md:text-white">
        {`Total profile searched so far: ${searchCount}`}
      </p>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  let { data: times_visited, error } = await supabase
    .from("times_visited")
    .select("searches_made");

  const searchCount = times_visited[0].searches_made;

  // Pass data to the page via props
  return { props: { searchCount } };
}
