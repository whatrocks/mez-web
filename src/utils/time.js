import { DateTime } from "luxon";

export function formatDateTime({ datetime }) {
  return DateTime.fromISO(datetime).toLocaleString(DateTime.DATE_FULL);
}