import { getContent } from "~/utils/CMS";

export const useMainStore = defineStore("main", () => {
  const loaded = ref(false);
  const closedPopup = ref<string | undefined>(undefined);

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

  const popUpContent = computed<IPost | null>(() => {
    if (closedPopup.value || posts.value === "error") return null;
    // get the newest post and if its id didn't match closedPopup, return it
    const sortedPosts = Object.values(posts.value).sort((a, b) => {
      if (!a.timestamp || !b.timestamp) return 0;
      return b.timestamp - a.timestamp;
    });
    if (sortedPosts.length === 0) return null;
    if (closedPopup.value || sortedPosts[0].id === closedPopup.value)
      return null;
    return sortedPosts[0];
  });

  onMounted(async () => {
    const closed = localStorage.getItem("closedPopup");
    if (closed) {
      closedPopup.value = closed;
    }

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

  const closePopup = (id: string) => {
    closedPopup.value = id;
  };

  const subscribe = async (mail: string) => {};

  const unsubscribe = async () => {};

  watch(mailing, (value) => {
    if (value) {
      localStorage.setItem("mailing", value);
    } else {
      localStorage.removeItem("mailing");
    }
  });

  watch(closedPopup, (value) => {
    if (value) {
      localStorage.setItem("closedPopup", value);
    }
  });

  return {
    popUpContent,
    closePopup,
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
