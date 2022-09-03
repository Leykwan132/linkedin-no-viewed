import Image from "next/image";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  canvasState,
  profileState,
  linkedinState,
} from "../../atoms/profileAtoms.ts";
import FloatingButton from "../../components/FloatingButton.tsx";
import Link from "next/link";
import CanvasContent from "../../components/canvasContent.tsx";
import _ from "lodash";
import axios from "axios";

const keys = {
  accomplishment_courses: "Courses",
  languages: "Languages",
  education: "Education",
  accomplishment_patents: "Patents",
  certifications: "Certs",
  accomplishment_projects: "Projects",
  accomplishment_publications: "Publications",
  volunteer_work: "Volunteering",
  accomplishment_test_scores: "Test_Scores",
  experiences: "Experiences",
};

const objMapper = (obj) => {
  let newObj = _.mapKeys(obj, (value, key) => {
    return key in keys ? keys[key] : key;
  });
  return newObj;
};
const arrayTest = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayTitle = [
  "Languages",
  "Education",
  "Patents",
  "Certs",
  "Projects",
  "Publications",
  "Courses",
  "Volunteering",
  "Test_Scores",
  "Experiences",
];
const LinkedinProfile = ({ userData, officialUrl }) => {
  const [profile, setProfile] = useRecoilState(profileState);
  const [canvas, setCanvas] = useRecoilState(canvasState);
  const [linkedinUrl, setLinkedinUrl] = useRecoilState(linkedinState);

  useEffect(() => {
    const renamed_data = objMapper(userData);
    setProfile(renamed_data);
    setLinkedinUrl(officialUrl);
  }, []);

  return (
    <div className="flex flex-col h-screen pt-24 px-20">
      {Object.values(profile).length > 0 && (
        <>
          <div className="flex items-center justify-center space-x-32 ">
            <div className="relative w-[300px] h-[300px] fadeLeftMini">
              {profile?.profile_pic_url ? (
                <Image
                  src={profile?.profile_pic_url}
                  className="rounded-full"
                  layout="fill"
                  objectFit="contain"
                />
              ) : (
                <Image
                  src="https://thumbs.dreamstime.com/b/no-user-profile-picture-24185395.jpg"
                  className="rounded-full"
                  layout="fill"
                  objectFit="contain"
                />
              )}
            </div>
            <div className="flex  flex-col h-[300px] w-[600px] border border-gray-400 rounded-2xl  items-center space-y-4 justify-center fadeRightMini">
              {canvas === "Bio" ? (
                <>
                  <div className="text-gray-300 font-mono font-bold text-3xl fade ">
                    {profile?.full_name}
                  </div>
                  <div className="text-gray-300 font-mono font-semibold fade ">
                    {`${profile?.city}, ${profile?.country_full_name}`}
                  </div>
                  <p className="text-gray-300 font-mono font-semibold max-w-[500px]  fade text-center">
                    {`${profile?.Education[0]?.degree_name}, ${profile?.Education[0]?.field_of_study}`}
                  </p>
                  <div className="flex items-center fade  space-x-2">
                    <Image
                      src={profile?.Education[0]?.logo_url}
                      className="rounded-full flex-shrink-0"
                      objectFit="contain"
                      width="25px"
                      height="25px"
                    />
                    <p className="text-gray-300 font-mono font-semibold text-center">
                      {profile?.Education[0]?.school}
                    </p>
                  </div>
                  <p className="text-gray-300  fade font-mono font-semibold text-center max-w-[500px]">
                    {`Current ${profile?.headline}`}
                  </p>
                </>
              ) : (
                <CanvasContent />
              )}
            </div>
          </div>
          <div className="mt-20 grid grid-cols-5 gap-10 fade">
            {arrayTest.map((item, i) => (
              <FloatingButton title={arrayTitle[i]} key={i} />
            ))}
          </div>
          <div className="flex items-center justify-center space-x-8">
            <a
              href={linkedinUrl}
              target="_blank"
              className="font-mono mt-10 bg-[#0077b5] py-3 px-9 rounded-lg self-center text-xs "
            >
              Lookup on Linkedin
            </a>

            <Link href="/">
              <button
                onClick={() => {
                  setCanvas("Bio");
                }}
                className="font-mono mt-10 bg-gray-700 py-3 px-9 rounded-lg self-center text-xs "
              >
                Search another Profile
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default LinkedinProfile;

export async function getServerSideProps(ctx) {
  const { url } = ctx.params;
  const officialUrl = `https://www.linkedin.com/in/${url[0]}`;
  const options = {
    method: "GET",
    url: "https://linkedin-profile-data.p.rapidapi.com/linkedin-data",
    params: { url: officialUrl },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": "linkedin-profile-data.p.rapidapi.com",
    },
  };
  let { data: userData } = await axios(options);

  return { props: { userData, officialUrl } };
}
