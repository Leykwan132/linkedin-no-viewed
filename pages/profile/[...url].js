import Image from "next/image";
import React, { useEffect, useState } from "react";
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
import { objKeyMapper } from "../../utils/objKeyMapping.ts";
import { Avatar } from "@mui/material";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { TbHandClick } from "react-icons/tb";
import FadeInOut from "../../utils/FadeInOut";
import { mobileMenuState } from "../../atoms/profileAtoms.ts";
import { isMobileState } from "../../atoms/profileAtoms.ts";

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
  const [showMobileMenu, setShowMobileMenu] = useRecoilState(mobileMenuState);
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);
  const [width, setWidth] = useState(0); // default width, detect on server.
  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    const renamed_data = objKeyMapper(userData);
    setProfile(renamed_data);
    setLinkedinUrl(officialUrl);
    if (window.innerWidth <= 800) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (window.innerWidth <= 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [handleResize]);

  return (
    <div className="relative flex flex-col h-screen pt-20 md:pt-24 px-5 md:px-20">
      {Object.values(profile).length > 0 && (
        <>
          <div
            className="flex items-center justify-center md:space-x-32"
            onClick={isMobile ? () => setShowMobileMenu(true) : undefined}
          >
            <div
              className={`relative w-[300px] h-[300px] fadeLeftMini hidden md:inline`}
            >
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
            <div
              className={`${
                isMobile ? "fade" : "fadeRightMini"
              } relative  mt-2 p-5 md:pt-2 md:flex flex-col h-[72vh] md:h-[300px] w-[600px] border border-gray-400 rounded-2xl  text-center md:items-center space-y-4 md:justify-center `}
            >
              <div className="fixed top-[18%] left-[50%] translate-x-[-50%] md:hidden">
                <Avatar
                  src={profile?.profile_pic_url}
                  sx={{ width: 180, height: 180 }}
                />
              </div>
              <CanvasContent />
            </div>
          </div>
          <div className="hidden mt-5 md:mt-20 md:grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-10 fade">
            {arrayTitle.map((item, i) => (
              <FloatingButton title={item} key={i} />
            ))}
          </div>
          <div className="flex md:flex-row flex-col items-center justify-center md:space-x-8">
            <a
              href={linkedinUrl}
              target="_blank"
              className="mt-5 font-mono w-60 md:mt-10 bg-[#0077b5] py-3 px-9 rounded-lg text-center md:self-center text-xs "
            >
              Lookup on Linkedin
            </a>

            <Link href="/">
              <button
                onClick={() => {
                  setCanvas("Bio");
                }}
                className="mt-5 font-mono w-60 md:mt-10 bg-gray-700 py-3 px-9 rounded-lg self-center text-xs "
              >
                Search another Profile
              </button>
            </Link>
          </div>
        </>
      )}
      <FadeInOut show={showMobileMenu} duration={500}>
        <div>
          <div className=" absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-80 bg-gray-900"></div>
          <ArrowUturnLeftIcon
            onClick={() => setShowMobileMenu(false)}
            className="right-[50%] bottom-[26%] translate-x-[50%] absolute inline-flex h-7 w-7 rounded-full border border-gray-500 p-2 z-30"
          />
          <div
            className={`md:hidden right-[50%] bottom-[50%] z-20 absolute translate-x-[50%] translate-y-[50%] grid grid-cols-2 min-w-[280px] gap-2`}
          >
            {arrayTitle.map((item, i) => (
              <FloatingButton title={item} key={i} mobile={true} />
            ))}
          </div>
        </div>
      </FadeInOut>
      {!showMobileMenu && (
        <>
          <div className="md:hidden animate-ping right-[10%] bottom-[20%] absolute block h-4 w-4 rounded-full bg-yellow-600 z-[-1] "></div>
          <TbHandClick className="md:hidden right-[8%] bottom-[18%] absolute block h-4 w-4 z-[-1]" />
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
