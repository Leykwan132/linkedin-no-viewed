import React from "react";

type Props = {
  data?: Object;
  showRange?: Boolean;
  startDateOnly?: Boolean;
};

const Month = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "June",
  7: "Jul",
  8: "Aug",
  9: "Sept",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

export const dateRangeFormatter = (data, startDateOnly: Props) => {
  let start_date;
  let end_date;
  if (data.starts_at.month) {
    start_date = Month[data.starts_at.month] + data.starts_at.year;
  } else {
    start_date = data.starts_at.year;
  }

  if (startDateOnly) {
    return start_date;
  }

  if (data.ends_at.month) {
    end_date = Month[data.ends_at.month] + data.ends_at.year;
  } else {
    if (data.ends_at.year) {
      end_date = data.ends_at.year;
    } else {
      end_date = "Present";
    }
  }

  if (!data.starts_at.year && !data.ends_at.year) {
    return "";
  }

  return `${start_date} - ${end_date}`;
};
