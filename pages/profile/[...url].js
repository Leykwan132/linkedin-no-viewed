import Image from "next/image";
import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { profileState, canvasState } from "../../atoms/profileAtoms.ts";
import FloatingButton from "../../components/FloatingButton.tsx";
import Link from "next/link";

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
const LinkedinProfile = () => {
  const profileData = useRecoilValue(profileState);
  const canvasData = useRecoilValue(canvasState);

  console.log(profileData);
  return (
    <div className="flex flex-col h-screen pt-24 px-20">
      <div className="flex items-center justify-center space-x-32 ">
        <div className="relative w-[300px] h-[300px] fadeLeftMini">
          <Image
            src={profileData.profile_pic_url}
            className="rounded-full"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col h-[300px] w-[600px] border border-gray-400 rounded-2xl py-2 px-6 items-center space-y-4 justify-center fadeRightMini">
          {canvasData === "Bio" && (
            <>
              <div className="text-gray-300 font-mono font-bold text-3xl">
                {profileData.full_name}
              </div>
              <div className="text-gray-300 font-mono font-semibold">
                {`${profileData?.city}, ${profileData?.country_full_name}`}
              </div>
              <p className="text-gray-300 font-mono font-semibold max-w-[500px] text-center">
                {`${profileData?.Education[0]?.degree_name}, ${profileData?.Education[0]?.field_of_study}`}
              </p>
              <div className="flex items-center space-x-2">
                <Image
                  src={profileData?.Education[0]?.logo_url}
                  className="rounded-full flex-shrink-0"
                  objectFit="contain"
                  width="25px"
                  height="25px"
                />
                <p className="text-gray-300 font-mono font-semibold text-center">
                  {profileData?.Education[0].school}
                </p>
              </div>
              <p className="text-gray-300 font-mono font-semibold text-center">
                {`Current ${profileData?.headline}`}
              </p>
            </>
          )}
        </div>
      </div>
      <div className="mt-20 grid grid-cols-5 gap-10 fade">
        {arrayTest.map((item, i) => (
          <FloatingButton title={arrayTitle[i]} key={i} />
        ))}
      </div>
      <Link href="/">
        <button className="font-mono mt-10 bg-gray-700 py-3 px-9 rounded-lg self-center text-xs ">
          Search another Profile
        </button>
      </Link>
    </div>
  );
};

export default LinkedinProfile;
