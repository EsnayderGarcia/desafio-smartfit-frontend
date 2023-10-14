export interface IUnidade {
  current_country_id: string,
  locations: ILocation[],
  wp_total: number,
  total: number,
  success: boolean
}

export interface ILocation {
  id: string,
  title: string,
  content:  HTMLParagraphElement,
  opened: boolean,
  mask: string,
  towel: string,
  fountain: string,
  locker_room: string,
  schedules: ISchedule[]
}

export interface ISchedule {
  weekdays: string,
  hour: string
}
