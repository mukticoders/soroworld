/* Environment */
export const NASA_API_KEY = "9EbbRNj3WUWdVE0oEpcpiW1TuvVLkDeFEYs6pOpx";

/* Constants */
export const PLANET_RADIUS_SCALE = 10;
export const PLANET_RADIUS_YINT = 10;

/* FUnctions */
export function convertAUtoKm(au: string | number) {
 const AU_TO_KM = 149597870.7;
 return Number(au) * AU_TO_KM;
}
