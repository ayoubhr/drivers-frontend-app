export interface Driver {
    name: string,
    age?: number,
    picture: string,
    team: string,
    races: Races[],
    timer: number,
    position: number
}

export interface Races {
    name: string,
    time: string,
    position?: number
}

export interface ResponseDrivers {
    drivers: Driver[]
}
