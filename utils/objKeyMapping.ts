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

export const objKeyMapper = (obj) => {
  let newObj = _.mapKeys(obj, (value, key) => {
    return key in keys ? keys[key] : key;
  });
  return newObj;
};
