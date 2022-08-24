import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { profileState } from "../../atoms/profileAtoms.ts";
const LinkedinProfile = () => {
  const profileData = useRecoilValue(profileState);
  console.log(profileData);
  return <div>LinkedinProfile</div>;
};

export default LinkedinProfile;
