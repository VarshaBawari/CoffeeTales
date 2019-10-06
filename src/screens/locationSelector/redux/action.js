export const LOCATION_SELECTED = 'LOCATION_SELECTED';

export function addressSelected(country, city, lat, lng) {
    return {
        type: LOCATION_SELECTED,
        country,
        city,
        lat, lng
    }
}

