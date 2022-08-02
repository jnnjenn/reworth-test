export type TVenues = {
	_id: string,
	address: {
			_id: string,
			zipcode: string,
			location: {
				type: string,
				coordinates: [number, number]
			},
			street_address: string
	},
	name: string,
	status: string
};

export type TDirectory = {
	created: number,
	name: string,
	status: string,
	venues: [TVenues],
	quickType: string,
	cashback_decimal: number,
	dv_name: string,
	expires: null,
	dv_cashback: string,
	media: string,
	dv_category: string,
	raw_category: string,
	dv_address: string,
	dv_latlng: [ number, number ],
	price_level: number,
	rating: number,
	popularity: number
};