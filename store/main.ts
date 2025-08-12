import { getContent } from "~/utils/CMS";

export const useMainStore = defineStore("main", () => {
  const loaded = ref(false);

  const mailing = ref<null | string>(null);
  const events = ref<
    | {
        [key: string]: IEvent;
      }
    | "error"
  >({});
  const schedule = ref<
    | {
        [key: string]: ICourse;
      }
    | "error"
  >({});
  const lektori = ref<
    | {
        [key: string]: LektoriItem;
      }
    | "error"
  >({});
  const posts = ref<
    | {
        [key: string]: IPost;
      }
    | "error"
  >({});

  onMounted(async () => {
    const mail = localStorage.getItem("mailing");
    if (mail) {
      mailing.value = mail;
    }

    const promiseEventsRes = getContent("akce");
    const promiseSchedulesRes = getContent("kurzy");
    const promiseLektoriRes = getContent("lektori");
    const promisePostsRes = getContent("aktuality");
    const eventsRes = await promiseEventsRes;
    const schedulesRes = await promiseSchedulesRes;
    const lektoriRes = await promiseLektoriRes;
    const postsRes = await promisePostsRes;

    if (eventsRes === "error") events.value = "error";
    else {
      const convertedEvents: {
        [key: string]: IEvent;
      } = Object.keys(eventsRes).reduce(
        (acc, key) => {
          const event = eventsRes[key];
          const finalEvent: IEvent = {
            id: key,
            ...event,
          };

          acc[key] = finalEvent;
          return acc;
        },
        {} as { [key: string]: IEvent },
      );
      events.value = convertedEvents;
    }

    if (schedulesRes === "error") {
      schedule.value = "error";
    } else {
      console.log(schedulesRes);
      const convertedSchedules: { [key: string]: ICourse } = Object.keys(
        schedulesRes,
      ).reduce(
        (acc, key) => {
          const schedule = schedulesRes[key];
          const finalSchedule: ICourse = {
            ...schedule,
            id: key,
            lector:
              Array.isArray(schedule.lector) && schedule.lector.length > 0
                ? schedule.lector[0].id
                : undefined,
            schedule: {
              day: schedule.schedule.day,
              start: schedule.schedule.start,
              end: schedule.schedule.start + schedule.schedule.duration,
            },
          };
          acc[key] = finalSchedule;
          return acc;
        },
        {} as { [key: string]: ICourse },
      );

      schedule.value = convertedSchedules;
    }

    if (lektoriRes === "error") {
      lektori.value = "error";
    } else {
      const convertedLektori: { [key: string]: LektoriItem } = Object.keys(
        lektoriRes,
      ).reduce(
        (acc, key) => {
          const lektor = lektoriRes[key];
          const finalLektor: LektoriItem = {
            id: key,
            ...lektor,
          };
          acc[key] = finalLektor;
          return acc;
        },
        {} as { [key: string]: LektoriItem },
      );

      lektori.value = convertedLektori;
    }

    if (postsRes === "error") {
      posts.value = "error";
    } else {
      const convertedPosts: { [key: string]: IPost } = Object.keys(
        postsRes,
      ).reduce(
        (acc, key) => {
          const post = postsRes[key];
          const finalPost: IPost = {
            id: key,
            ...post,
          };
          acc[key] = finalPost;
          return acc;
        },
        {} as { [key: string]: IPost },
      );

      posts.value = convertedPosts;
    }

    loaded.value = true;
  });

  const subscribe = async (mail: string) => {};

  const unsubscribe = async () => {};

  watch(mailing, (value) => {
    if (value) {
      localStorage.setItem("mailing", value);
    } else {
      localStorage.removeItem("mailing");
    }
  });

  return {
    loaded,
    mailing,
    subscribe,
    unsubscribe,
    events,
    schedule,
    lektori,
    posts,
  };
});
