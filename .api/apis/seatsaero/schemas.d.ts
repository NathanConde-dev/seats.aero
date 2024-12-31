declare const CachedSearch: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly origin_airport: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A list of origin airports. Comma-delimited if multiple, such as \"SFO,LAX\".";
                };
                readonly destination_airport: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A list of destination airports. Comma-delimited if multiple, such as \"FRA,LHR\".";
                };
                readonly cabin: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Results must have this cabin available when specified. Must be one of: [economy, premium, business, first]";
                };
                readonly start_date: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Results must depart between start_date and end_date when specified, in YYYY-MM-DD format.";
                };
                readonly end_date: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Results must depart between start_date and end_date when specified, in YYYY-MM-DD format.";
                };
                readonly cursor: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A cursor you obtained from a previous search call.";
                };
                readonly take: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 500;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Maximum amount of results to respond with. Must be >= 10 and <= 1000.";
                };
                readonly order_by: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "By default, results are ordered by departure date and then by available cabins, with available premium cabins ranked above results without them available. You can alternatively specify lowest_mileage in this parameter to return results with the cheapest prices first.";
                };
                readonly skip: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "How many results to skip.";
                };
            };
            readonly required: readonly ["origin_airport", "destination_airport"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly ID: {
                                readonly type: "string";
                                readonly examples: readonly ["2QSaUXJ0ZuSVqgrRWqkSlXhnVbS"];
                            };
                            readonly RouteID: {
                                readonly type: "string";
                                readonly examples: readonly ["2HmSwbzAS9SnEdtIsf3nkjozpX1"];
                            };
                            readonly Route: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly ID: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2HmSwbzAS9SnEdtIsf3nkjozpX1"];
                                    };
                                    readonly OriginAirport: {
                                        readonly type: "string";
                                        readonly examples: readonly ["SFO"];
                                    };
                                    readonly OriginRegion: {
                                        readonly type: "string";
                                        readonly examples: readonly ["North America"];
                                    };
                                    readonly DestinationAirport: {
                                        readonly type: "string";
                                        readonly examples: readonly ["JFK"];
                                    };
                                    readonly DestinationRegion: {
                                        readonly type: "string";
                                        readonly examples: readonly ["North America"];
                                    };
                                    readonly NumDaysOut: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [75];
                                    };
                                    readonly Distance: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [2582];
                                    };
                                    readonly Source: {
                                        readonly type: "string";
                                        readonly examples: readonly ["american"];
                                    };
                                };
                            };
                            readonly Date: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-08-11"];
                            };
                            readonly ParsedDate: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-08-11T00:00:00Z"];
                            };
                            readonly YAvailable: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                            readonly WAvailable: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [false];
                            };
                            readonly JAvailable: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                            readonly FAvailable: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                            readonly YMileageCost: {
                                readonly type: "string";
                                readonly examples: readonly ["12500"];
                            };
                            readonly WMileageCost: {
                                readonly type: "string";
                                readonly examples: readonly ["0"];
                            };
                            readonly JMileageCost: {
                                readonly type: "string";
                                readonly examples: readonly ["33000"];
                            };
                            readonly FMileageCost: {
                                readonly type: "string";
                                readonly examples: readonly ["33000"];
                            };
                            readonly YRemainingSeats: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly WRemainingSeats: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly JRemainingSeats: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly FRemainingSeats: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly YAirlines: {
                                readonly type: "string";
                                readonly examples: readonly ["AA, B6"];
                            };
                            readonly WAirlines: {
                                readonly type: "string";
                                readonly examples: readonly [""];
                            };
                            readonly JAirlines: {
                                readonly type: "string";
                                readonly examples: readonly ["AA, B6"];
                            };
                            readonly FAirlines: {
                                readonly type: "string";
                                readonly examples: readonly ["AA"];
                            };
                            readonly YDirect: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                            readonly WDirect: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [false];
                            };
                            readonly JDirect: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                            readonly FDirect: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                            readonly Source: {
                                readonly type: "string";
                                readonly examples: readonly ["american"];
                            };
                            readonly CreatedAt: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-05-29T08:37:32.218426Z"];
                            };
                            readonly UpdatedAt: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-07-10T13:52:23.343425Z"];
                            };
                            readonly AvailabilityTrips: {};
                        };
                    };
                };
                readonly count: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [42];
                };
                readonly hasMore: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly cursor: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1689009958];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GetAvailability: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly source: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The mileage program to retrieve availability from.";
                };
                readonly cabin: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Only returns results with this cabin available. Must be one of: [economy, premium, business, first]";
                };
                readonly start_date: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Only returns results between start_date and end_date when specified.";
                };
                readonly end_date: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Only returns results between start_date and end_date when specified.";
                };
                readonly origin_region: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Only returns results originating in this region when specified. Must be one of: [North America, South America, Africa, Asia, Europe, Oceania]";
                };
                readonly destination_region: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Only returns results arriving in this region when specified. Must be one of: [North America, South America, Africa, Asia, Europe, Oceania]";
                };
                readonly take: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 500;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "How many results to return. Must be >=10 and <= 1000 if specified, otherwise 500.";
                };
                readonly cursor: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Cursor you retrieved from a previous availability response.";
                };
                readonly skip: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "How many results to skip that you have already retrieved. Use this with the cursor to paginate responses.";
                };
            };
            readonly required: readonly ["source"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GetRoutes1: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly source: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["source"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly ID: {
                        readonly type: "string";
                        readonly examples: readonly ["2QghXwB1QjGRYbTBKFBkSDD1Wcs"];
                    };
                    readonly OriginAirport: {
                        readonly type: "string";
                        readonly examples: readonly ["TPE"];
                    };
                    readonly OriginRegion: {
                        readonly type: "string";
                        readonly examples: readonly ["Asia"];
                    };
                    readonly DestinationAirport: {
                        readonly type: "string";
                        readonly examples: readonly ["PNH"];
                    };
                    readonly DestinationRegion: {
                        readonly type: "string";
                        readonly examples: readonly ["Asia"];
                    };
                    readonly NumDaysOut: {
                        readonly type: "integer";
                        readonly default: 0;
                        readonly examples: readonly [60];
                    };
                    readonly Distance: {
                        readonly type: "integer";
                        readonly default: 0;
                        readonly examples: readonly [1423];
                    };
                    readonly Source: {
                        readonly type: "string";
                        readonly examples: readonly ["aeroplan"];
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GetTrips: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The ID of the availability object.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly ID: {
                                readonly type: "string";
                                readonly examples: readonly ["2S8Cm9dHORWWKpoCkxfRkZa0e5l"];
                            };
                            readonly RouteID: {
                                readonly type: "string";
                                readonly examples: readonly ["2B9HOBW9EOvJQDTQqxc3UKEhhur"];
                            };
                            readonly AvailabilityID: {
                                readonly type: "string";
                                readonly examples: readonly ["2PPrELk9WcfJaNREWEPXypvhXAD"];
                            };
                            readonly AvailabilitySegments: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly ID: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2S8CmA8bXa9KHaxZfUtihUzRTPd"];
                                        };
                                        readonly RouteID: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2B9HOBW9EOvJQDTQqxc3UKEhhur"];
                                        };
                                        readonly AvailabilityID: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2PPrELk9WcfJaNREWEPXypvhXAD"];
                                        };
                                        readonly AvailabilityTripID: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2S8Cm9dHORWWKpoCkxfRkZa0e5l"];
                                        };
                                        readonly FlightNumber: {
                                            readonly type: "string";
                                            readonly examples: readonly ["CM326"];
                                        };
                                        readonly Distance: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [966];
                                        };
                                        readonly FareClass: {
                                            readonly type: "string";
                                            readonly examples: readonly ["I"];
                                        };
                                        readonly AircraftName: {
                                            readonly type: "string";
                                            readonly examples: readonly ["739"];
                                        };
                                        readonly AircraftCode: {
                                            readonly type: "string";
                                            readonly examples: readonly ["739"];
                                        };
                                        readonly OriginAirport: {
                                            readonly type: "string";
                                            readonly examples: readonly ["CUN"];
                                        };
                                        readonly DestinationAirport: {
                                            readonly type: "string";
                                            readonly examples: readonly ["PTY"];
                                        };
                                        readonly DepartsAt: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2024-05-01T13:52:00Z"];
                                        };
                                        readonly ArrivesAt: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2024-05-01T16:31:00Z"];
                                        };
                                        readonly CreatedAt: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2023-07-05T01:02:57.782804Z"];
                                        };
                                        readonly UpdatedAt: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2023-07-08T07:12:25.266914Z"];
                                        };
                                        readonly Source: {
                                            readonly type: "string";
                                            readonly examples: readonly ["lifemiles"];
                                        };
                                        readonly Order: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                    };
                                };
                            };
                            readonly TotalDuration: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [1133];
                            };
                            readonly Stops: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [1];
                            };
                            readonly Carriers: {
                                readonly type: "string";
                                readonly examples: readonly ["CM, TK"];
                            };
                            readonly RemainingSeats: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [9];
                            };
                            readonly MileageCost: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [70000];
                            };
                            readonly TotalTaxes: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [1290];
                            };
                            readonly TaxesCurrency: {
                                readonly type: "string";
                                readonly examples: readonly [""];
                            };
                            readonly TaxesCurrencySymbol: {
                                readonly type: "string";
                                readonly examples: readonly [""];
                            };
                            readonly AllianceCost: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [87944];
                            };
                            readonly FlightNumbers: {
                                readonly type: "string";
                                readonly examples: readonly ["CM326, TK800"];
                            };
                            readonly DepartsAt: {
                                readonly type: "string";
                                readonly examples: readonly ["2024-05-01T13:52:00Z"];
                            };
                            readonly Cabin: {
                                readonly type: "string";
                                readonly examples: readonly ["business"];
                            };
                            readonly ArrivesAt: {
                                readonly type: "string";
                                readonly examples: readonly ["2024-05-02T16:45:00Z"];
                            };
                            readonly CreatedAt: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-07-05T01:02:57.782804Z"];
                            };
                            readonly UpdatedAt: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-07-08T07:12:25.266914Z"];
                            };
                            readonly Source: {
                                readonly type: "string";
                                readonly examples: readonly ["lifemiles"];
                            };
                        };
                    };
                };
                readonly origin_coordinates: {
                    readonly type: "object";
                    readonly properties: {
                        readonly Lat: {
                            readonly type: "number";
                            readonly default: 0;
                            readonly examples: readonly [21.036500930800003];
                        };
                        readonly Lon: {
                            readonly type: "number";
                            readonly default: 0;
                            readonly examples: readonly [-86.8770980835];
                        };
                    };
                };
                readonly destination_coordinates: {
                    readonly type: "object";
                    readonly properties: {
                        readonly Lat: {
                            readonly type: "number";
                            readonly default: 0;
                            readonly examples: readonly [40.9768981934];
                        };
                        readonly Lon: {
                            readonly type: "number";
                            readonly default: 0;
                            readonly examples: readonly [28.814599990799998];
                        };
                    };
                };
                readonly booking_links: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly label: {
                                readonly type: "string";
                                readonly examples: readonly ["Book via Avianca LifeMiles"];
                            };
                            readonly link: {
                                readonly type: "string";
                                readonly examples: readonly ["https://www.lifemiles.com/fly/find"];
                            };
                            readonly primary: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const LiveSearch: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["origin_airport", "destination_airport", "departure_date", "source"];
        readonly properties: {
            readonly origin_airport: {
                readonly type: "string";
                readonly description: "The origin airport to search from.";
            };
            readonly destination_airport: {
                readonly type: "string";
                readonly description: "The destination airport to search to.";
            };
            readonly departure_date: {
                readonly type: "string";
                readonly description: "Departure date to search, in YYYY-MM-DD format.";
            };
            readonly source: {
                readonly type: "string";
                readonly description: "The mileage program to search. Can be one of: [united, delta, virginatlantic, velocity, aeroplan, alaska]";
            };
            readonly disable_filters: {
                readonly type: "boolean";
                readonly description: "Disables any filters for dynamic pricing or mismatched airports.";
                readonly default: false;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly ID: {
                                readonly type: "string";
                                readonly examples: readonly ["2SODQGRpnMQIvz0lJVRb8TROLaH"];
                            };
                            readonly RouteID: {
                                readonly type: "string";
                                readonly examples: readonly [""];
                            };
                            readonly AvailabilityID: {
                                readonly type: "string";
                                readonly examples: readonly [""];
                            };
                            readonly AvailabilitySegments: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly ID: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2SODQJegJ36x5Ji48yvUCN510hR"];
                                        };
                                        readonly RouteID: {
                                            readonly type: "string";
                                            readonly examples: readonly [""];
                                        };
                                        readonly AvailabilityID: {
                                            readonly type: "string";
                                            readonly examples: readonly [""];
                                        };
                                        readonly AvailabilityTripID: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2SODQGRpnMQIvz0lJVRb8TROLaH"];
                                        };
                                        readonly FlightNumber: {
                                            readonly type: "string";
                                            readonly examples: readonly ["VS20"];
                                        };
                                        readonly Distance: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [5359];
                                        };
                                        readonly FareClass: {
                                            readonly type: "string";
                                            readonly examples: readonly ["A"];
                                        };
                                        readonly AircraftName: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Airbus A350-1000"];
                                        };
                                        readonly AircraftCode: {
                                            readonly type: "string";
                                            readonly examples: readonly ["351"];
                                        };
                                        readonly OriginAirport: {
                                            readonly type: "string";
                                            readonly examples: readonly ["SFO"];
                                        };
                                        readonly DestinationAirport: {
                                            readonly type: "string";
                                            readonly examples: readonly ["LHR"];
                                        };
                                        readonly DepartsAt: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2024-03-09T17:45:00Z"];
                                        };
                                        readonly ArrivesAt: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2024-03-10T12:00:00Z"];
                                        };
                                        readonly CreatedAt: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0001-01-01T00:00:00Z"];
                                        };
                                        readonly UpdatedAt: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0001-01-01T00:00:00Z"];
                                        };
                                        readonly Source: {
                                            readonly type: "string";
                                            readonly examples: readonly ["virginatlantic"];
                                        };
                                    };
                                };
                            };
                            readonly TotalDuration: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [615];
                            };
                            readonly Stops: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly Carriers: {
                                readonly type: "string";
                                readonly examples: readonly ["VS"];
                            };
                            readonly RemainingSeats: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [9];
                            };
                            readonly MileageCost: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [15000];
                            };
                            readonly TotalTaxes: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [15169];
                            };
                            readonly TaxesCurrency: {
                                readonly type: "string";
                                readonly examples: readonly ["USD"];
                            };
                            readonly TaxesCurrencySymbol: {
                                readonly type: "string";
                                readonly examples: readonly ["$"];
                            };
                            readonly AllianceCost: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly FlightNumbers: {
                                readonly type: "string";
                                readonly examples: readonly ["VS20"];
                            };
                            readonly DepartsAt: {
                                readonly type: "string";
                                readonly examples: readonly ["2024-03-09T17:45:00Z"];
                            };
                            readonly Cabin: {
                                readonly type: "string";
                                readonly examples: readonly ["economy"];
                            };
                            readonly ArrivesAt: {
                                readonly type: "string";
                                readonly examples: readonly ["2024-03-10T12:00:00Z"];
                            };
                            readonly CreatedAt: {
                                readonly type: "string";
                                readonly examples: readonly ["0001-01-01T00:00:00Z"];
                            };
                            readonly UpdatedAt: {
                                readonly type: "string";
                                readonly examples: readonly ["0001-01-01T00:00:00Z"];
                            };
                            readonly Source: {
                                readonly type: "string";
                                readonly examples: readonly ["virginatlantic"];
                            };
                        };
                    };
                };
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["unsupported source"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["invalid status code 403"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
export { CachedSearch, GetAvailability, GetRoutes1, GetTrips, LiveSearch };
