import { getContent } from "~/utils/CMS";
import { addDoc, deleteDoc } from "~/utils/fb/store";

export const useMainStore = defineStore("main", () => {
  const loaded = ref(false);
  const error = ref(false);

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

  onMounted(async () => {
    const mail = localStorage.getItem("mailing");
    if (mail) {
      mailing.value = mail;
    }

    const promiseEventsRes = getContent("akce");
    const promiseSchedulesRes = getContent("rozvrh");
    const eventsRes = await promiseEventsRes;
    const schedulesRes = await promiseSchedulesRes;

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
      const convertedSchedules: { [key: string]: ICourse } = Object.keys(
        schedulesRes,
      ).reduce(
        (acc, key) => {
          const schedule = schedulesRes[key];
          const finalSchedule: ICourse = {
            ...schedule,
            id: key,
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

      loaded.value = true;
    }

    loaded.value = true;
  });

  const subscribe = async (mail: string) => {
    if (mailing.value) return;
    await addDoc(["mailing"], {}, mail);
    mailing.value = mail;
  };

  const unsubscribe = async () => {
    if (!mailing.value) return;
    await deleteDoc(["mailing"], mailing.value);
    mailing.value = null;
  };

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
  };
});
