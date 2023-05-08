import { ShowTimeSeat } from "./showtime.seat"

export type ShowTimeData = {
    showTime: string,
    seatsStatesMap: ShowTimeSeat[],
    freeTickets: number
}