//NOTE: GOOGLE: Cannot find name 'google' SOLUTION,  /// <reference types="..." />
/// <reference types="@types/googlemaps" />

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);

//NOTE: name of files exporting class should have captical case
//NOTE: name of files exporting plain function or object should have lower case
