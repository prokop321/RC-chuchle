import axios from "axios";

const CMSURL = "https://prokop321.github.io/sokol-content";

export const getContent = async (
  content: "akce" | "rozvrh",
): Promise<"error" | { [key: string]: any }> => {
  const url = `${CMSURL}/content/${content}.json`;

  try {
    const res = (await axios.get(url)).data as { [key: string]: any };
    return res;
  } catch (err) {
    return "error";
  }
};

export const imageURLCreator = (image: string) => {
  if (image.startsWith("/bucket/")) return `${CMSURL}${image}`;
  return image;
};
