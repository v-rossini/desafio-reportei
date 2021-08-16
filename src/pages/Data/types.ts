/*
export type RecordResponse = {
    results: record[]
}
*/

export type person = {

    name: string
	height: number | string
	mass: number | string
	hair_color: string
	skin_color: string
	eye_color: string
	birth_year: string
	gender: string
	homeworld: string
	films: string[]
	species: string
	vehicles: string[]
	starships: []
	created: string
	edited: string
	url: string
}


export type planet = {
    name: string
    rotation_period: number | string
    orbital_period: number | string
    diameter: number | string
    climate: string
    gravity: string
    terrain: string
    surface_water: number | string
    population: number | string
    residents: string[]
    films: string[]
    created: string
    edited: string
    url: string
}


export type film = {
    title: string
	episode_id: number | string
	opening_crawl: string
	director: string
	producer: string
	release_date: string
	characters: string[]
	planets: string[]
	starships: string[]
	vehicles: string[]
	species: string[]
	created: string
	edited: string
	url: string
}


export type specie = {
	name: string
	classification: string
	designation: string
	average_height: number | string
	skin_colors: string
	hair_colors: string
	eye_colors: string
	average_lifespan: number | string
	homeworld: string
	language: string
	people: string[]
	films: string[]
	created: string
	edited: string
	url: string
}


export type vehicle = {
    name: string
    model: string
    manufacturer: string
    cost_in_credits: number | string
    length: number | string
    max_atmosphering_speed: number | string
    crew: number | string
    passengers: number | string
    cargo_capacity: number | string
    consumables: string
    vehicle_class: string
    pilots: string[]
    films: string[]
    created: string
    edited: string
    url: string
}

export type spaceship = {
    name: string
	model: string
	manufacturer: string
	cost_in_credits: number | string
	length: number | string
	max_atmosphering_speed: string
	crew: string
	passengers: string
	cargo_capacity: number | string
	consumables: string
	hyperdrive_rating: number | string
	MGLT: number | string
	starship_class: string
	pilots: string[]
	films: string[]
	created: string
	edited: string
	url: string

}

export type record = spaceship | vehicle | specie | film | planet | person