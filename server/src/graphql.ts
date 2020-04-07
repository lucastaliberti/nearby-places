
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Place {
    id: string;
    name: string;
    formattedAddress?: string[];
}

export interface IQuery {
    getPlaces(geocodableLocation: string): Place[] | Promise<Place[]>;
}
