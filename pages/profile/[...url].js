import Image from "next/image";
import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { profileState } from "../../atoms/profileAtoms.ts";
const LinkedinProfile = () => {
  const profileData = useRecoilValue(profileState);
  return (
    <div className="pt-24 px-5 flex flex-col justify-center items-center">
      <div className="flex space-x-32 ">
        <div className="relative w-[300px] h-[300px] fadeLeftMini">
          <Image
            src={profileData.profile_pic_url}
            className="rounded-full"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col h-[300px] w-[600px] border border-gray-400 rounded-2xl py-2 px-6 items-center space-y-4 justify-center fadeRightMini">
          <div className="text-gray-300 font-mono font-bold text-3xl">
            {profileData.full_name}
          </div>
          <div className="text-gray-300 font-mono font-semibold">
            {`${profileData?.city}, ${profileData?.country_full_name}`}
          </div>
          <div className="text-gray-300 font-mono font-semibold">
            {`${profileData?.education[0]?.degree_name}, ${profileData?.education[0]?.field_of_study}`}
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src={profileData?.education[0]?.logo_url}
              className="rounded-full"
              objectFit="contain"
              width="25px"
              height="25px"
            />
            <p className="text-gray-300 font-mono font-semibold">
              {profileData?.education[0].school}
            </p>
          </div>
          <div className="text-gray-300 font-mono font-semibold">
            {`Current ${profileData?.headline}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedinProfile;
