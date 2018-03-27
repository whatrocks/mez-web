import _ from "lodash";

export const RRULES = {
  'One-time': '',
  Daily: 'RRULE:FREQ=DAILY',
  Weekly: 'RRULE:FREQ=WEEKLY',
  Monthly: 'RRULE:FREQ=MONTHLY',
  Yearly: 'RRULE:FREQ=YEARLY'
}

export const invertedRules = _.invert(RRULES);

export const repeatColors = {
  'One-time': 'is-primary',
  Daily: 'is-info',
  Weekly: 'is-success',
  Monthly: 'is-warning',
  Yearly: 'is-danger'
}