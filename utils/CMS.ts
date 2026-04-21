import axios from "axios";

const CMSURL = "https://cms.rcchuchle.cz/";

export const getContent = async (
  content: "akce" | "kurzy" | "lektori" | "aktuality",
): Promise<"error" | { [key: string]: any }> => {
  const url = `${CMSURL}/content/${content}.json?t=${Date.now()}`;

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
