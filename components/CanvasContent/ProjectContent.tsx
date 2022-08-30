import React from "react";
import { useRecoilValue } from "recoil";
import { canvasState, profileState } from "../../atoms/profileAtoms.ts";
import ProjectContentRow from "./components/ProjectContentRow.tsx";

type Props = {};

const ProjectContent = (props: Props) => {
  const profileData = useRecoilValue(profileState);
  const canvasData = useRecoilValue(canvasState);
  const projectData = profileData[canvasData];
  const counter = [0, 1, 2];

  return (
    <div className="space-y-6 fade w-full">
      {projectData.length <= 2
        ? projectData.map((item, i) => (
            <ProjectContentRow key={i} data={item} />
          ))
        : counter.map((item, i) => (
            <ProjectContentRow key={i} data={projectData[item]} />
          ))}
    </div>
  );
};

export default ProjectContent;
