import {avgScore} from "./statUtils/matchStats/avgScore";
import {readAllMatchFiles} from "./statUtils/fileReadUtils/readAllMatchFiles";
import {MatchStat} from "./types";
import {avg_score} from "./wsm/ipl-data-analyser-core-rust/pkg";

//pull wasm functions written in rust

const team: string = 'Royal Challengers Bangalore';

const matchStat = {
    "meta": {
        "data_version": "1.0.0",
        "created": "2011-05-06",
        "revision": 2
    },
    "info": {
        "balls_per_over": 6,
        "city": "Bangalore",
        "dates": [
            "2008-04-18"
        ],
        "event": {
            "match_number": 1,
            "name": "Indian Premier League"
        },
        "gender": "male",
        "match_type": "T20",
        "officials": {
            "match_referees": [
                "J Srinath"
            ],
            "reserve_umpires": [
                "VN Kulkarni"
            ],
            "tv_umpires": [
                "AM Saheba"
            ],
            "umpires": [
                "Asad Rauf",
                "RE Koertzen"
            ]
        },
        "outcome": {
            "by": {
                "runs": 140
            },
            "winner": "Kolkata Knight Riders"
        },
        "overs": 20,
        "player_of_match": [
            "BB McCullum"
        ],
        "players": {
            "Kolkata Knight Riders": [
                "SC Ganguly",
                "BB McCullum",
                "RT Ponting",
                "DJ Hussey",
                "Mohammad Hafeez",
                "LR Shukla",
                "WP Saha",
                "AB Agarkar",
                "AB Dinda",
                "M Kartik",
                "I Sharma"
            ],
            "Royal Challengers Bangalore": [
                "R Dravid",
                "W Jaffer",
                "V Kohli",
                "JH Kallis",
                "CL White",
                "MV Boucher",
                "B Akhil",
                "AA Noffke",
                "P Kumar",
                "Z Khan",
                "SB Joshi"
            ]
        },
        "registry": {
            "people": {
                "AA Noffke": "b69e69ed",
                "AB Agarkar": "fa463154",
                "AB Dinda": "66b30f71",
                "AM Saheba": "883e3818",
                "Asad Rauf": "861606b7",
                "B Akhil": "af7dadf7",
                "BB McCullum": "b8a55852",
                "CL White": "d0513f63",
                "DJ Hussey": "fd835ab3",
                "I Sharma": "5bb1a1c4",
                "J Srinath": "bad31fac",
                "JH Kallis": "86dc8f2e",
                "LR Shukla": "b1451597",
                "M Kartik": "abfeb126",
                "MV Boucher": "f3cb53a1",
                "Mohammad Hafeez": "9ab63e7b",
                "P Kumar": "e938e1bc",
                "R Dravid": "0184dc35",
                "RE Koertzen": "0265fab2",
                "RT Ponting": "7d415ea5",
                "SB Joshi": "670709ec",
                "SC Ganguly": "725529bc",
                "V Kohli": "ba607b88",
                "VN Kulkarni": "0b126008",
                "W Jaffer": "619aa81f",
                "WP Saha": "fe11caa6",
                "Z Khan": "91a4a398"
            }
        },
        "season": "2007/08",
        "team_type": "club",
        "teams": [
            "Royal Challengers Bangalore",
            "Kolkata Knight Riders"
        ],
        "toss": {
            "decision": "field",
            "winner": "Royal Challengers Bangalore"
        },
        "venue": "M Chinnaswamy Stadium"
    },
    "innings": [
        {
            "team": "Kolkata Knight Riders",
            "overs": [
                {
                    "over": 0,
                    "deliveries": [
                        {
                            "batter": "SC Ganguly",
                            "bowler": "P Kumar",
                            "extras": {
                                "legbyes": 1
                            },
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "P Kumar",
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "P Kumar",
                            "extras": {
                                "wides": 1
                            },
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "P Kumar",
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "P Kumar",
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "P Kumar",
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "P Kumar",
                            "extras": {
                                "legbyes": 1
                            },
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        }
                    ]
                },
                {
                    "over": 1,
                    "deliveries": [
                        {
                            "batter": "BB McCullum",
                            "bowler": "Z Khan",
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "Z Khan",
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 4,
                                "extras": 0,
                                "total": 4
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "Z Khan",
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 4,
                                "extras": 0,
                                "total": 4
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "Z Khan",
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 6,
                                "extras": 0,
                                "total": 6
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "Z Khan",
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 4,
                                "extras": 0,
                                "total": 4
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "Z Khan",
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        }
                    ]
                },
                {
                    "over": 2,
                    "deliveries": [
                        {
                            "batter": "SC Ganguly",
                            "bowler": "P Kumar",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "SC Ganguly",
                            "bowler": "P Kumar",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "SC Ganguly",
                            "bowler": "P Kumar",
                            "extras": {
                                "legbyes": 1
                            },
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "P Kumar",
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 4,
                                "extras": 0,
                                "total": 4
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "P Kumar",
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "SC Ganguly",
                            "bowler": "P Kumar",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        }
                    ]
                },
                {
                    "over": 3,
                    "deliveries": [
                        {
                            "batter": "BB McCullum",
                            "bowler": "AA Noffke",
                            "extras": {
                                "wides": 5
                            },
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 0,
                                "extras": 5,
                                "total": 5
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "AA Noffke",
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 6,
                                "extras": 0,
                                "total": 6
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "AA Noffke",
                            "extras": {
                                "legbyes": 1
                            },
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        },
                        {
                            "batter": "SC Ganguly",
                            "bowler": "AA Noffke",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 4,
                                "extras": 0,
                                "total": 4
                            }
                        },
                        {
                            "batter": "SC Ganguly",
                            "bowler": "AA Noffke",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "SC Ganguly",
                            "bowler": "AA Noffke",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "AA Noffke",
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 6,
                                "extras": 0,
                                "total": 6
                            }
                        }
                    ]
                },
                {
                    "over": 4,
                    "deliveries": [
                        {
                            "batter": "SC Ganguly",
                            "bowler": "P Kumar",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 4,
                                "extras": 0,
                                "total": 4
                            }
                        },
                        {
                            "batter": "SC Ganguly",
                            "bowler": "P Kumar",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "P Kumar",
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 4,
                                "extras": 0,
                                "total": 4
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "P Kumar",
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "P Kumar",
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "SC Ganguly",
                            "bowler": "P Kumar",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        }
                    ]
                },
                {
                    "over": 5,
                    "deliveries": [
                        {
                            "batter": "BB McCullum",
                            "bowler": "Z Khan",
                            "non_striker": "SC Ganguly",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "SC Ganguly",
                            "bowler": "Z Khan",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            },
                            "wickets": [
                                {
                                    "kind": "caught",
                                    "player_out": "SC Ganguly",
                                    "fielders": [
                                        {
                                            "name": "JH Kallis"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "batter": "RT Ponting",
                            "bowler": "Z Khan",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "RT Ponting",
                            "bowler": "Z Khan",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "RT Ponting",
                            "bowler": "Z Khan",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "RT Ponting",
                            "bowler": "Z Khan",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        }
                    ]
                },
                {
                    "over": 6,
                    "deliveries": [
                        {
                            "batter": "BB McCullum",
                            "bowler": "AA Noffke",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "RT Ponting",
                            "bowler": "AA Noffke",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "AA Noffke",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "RT Ponting",
                            "bowler": "AA Noffke",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 2,
                                "extras": 0,
                                "total": 2
                            }
                        },
                        {
                            "batter": "RT Ponting",
                            "bowler": "AA Noffke",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "AA Noffke",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        }
                    ]
                },
                {
                    "over": 7,
                    "deliveries": [
                        {
                            "batter": "BB McCullum",
                            "bowler": "Z Khan",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "Z Khan",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "RT Ponting",
                            "bowler": "Z Khan",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "Z Khan",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "RT Ponting",
                            "bowler": "Z Khan",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "Z Khan",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        }
                    ]
                },
                {
                    "over": 8,
                    "deliveries": [
                        {
                            "batter": "BB McCullum",
                            "bowler": "JH Kallis",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "JH Kallis",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "JH Kallis",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "JH Kallis",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "RT Ponting",
                            "bowler": "JH Kallis",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "JH Kallis",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 2,
                                "extras": 0,
                                "total": 2
                            }
                        }
                    ]
                },
                {
                    "over": 9,
                    "deliveries": [
                        {
                            "batter": "RT Ponting",
                            "bowler": "SB Joshi",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "SB Joshi",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "RT Ponting",
                            "bowler": "SB Joshi",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "SB Joshi",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "SB Joshi",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 6,
                                "extras": 0,
                                "total": 6
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "SB Joshi",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        }
                    ]
                },
                {
                    "over": 10,
                    "deliveries": [
                        {
                            "batter": "BB McCullum",
                            "bowler": "JH Kallis",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "RT Ponting",
                            "bowler": "JH Kallis",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 4,
                                "extras": 0,
                                "total": 4
                            }
                        },
                        {
                            "batter": "RT Ponting",
                            "bowler": "JH Kallis",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "RT Ponting",
                            "bowler": "JH Kallis",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 6,
                                "extras": 0,
                                "total": 6
                            }
                        },
                        {
                            "batter": "RT Ponting",
                            "bowler": "JH Kallis",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "RT Ponting",
                            "bowler": "JH Kallis",
                            "extras": {
                                "byes": 4
                            },
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 4,
                                "total": 4
                            }
                        }
                    ]
                },
                {
                    "over": 11,
                    "deliveries": [
                        {
                            "batter": "BB McCullum",
                            "bowler": "SB Joshi",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "SB Joshi",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 6,
                                "extras": 0,
                                "total": 6
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "SB Joshi",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 2,
                                "extras": 0,
                                "total": 2
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "SB Joshi",
                            "non_striker": "RT Ponting",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "RT Ponting",
                            "bowler": "SB Joshi",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "RT Ponting",
                            "bowler": "SB Joshi",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        }
                    ]
                },
                {
                    "over": 12,
                    "deliveries": [
                        {
                            "batter": "RT Ponting",
                            "bowler": "JH Kallis",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            },
                            "wickets": [
                                {
                                    "kind": "caught",
                                    "player_out": "RT Ponting",
                                    "fielders": [
                                        {
                                            "name": "P Kumar"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "JH Kallis",
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 4,
                                "extras": 0,
                                "total": 4
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "JH Kallis",
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "JH Kallis",
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 2,
                                "extras": 0,
                                "total": 2
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "JH Kallis",
                            "extras": {
                                "wides": 1
                            },
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "JH Kallis",
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 4,
                                "extras": 0,
                                "total": 4
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "JH Kallis",
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        }
                    ]
                },
                {
                    "over": 13,
                    "deliveries": [
                        {
                            "batter": "BB McCullum",
                            "bowler": "SB Joshi",
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "DJ Hussey",
                            "bowler": "SB Joshi",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "DJ Hussey",
                            "bowler": "SB Joshi",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "SB Joshi",
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "DJ Hussey",
                            "bowler": "SB Joshi",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "SB Joshi",
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 2,
                                "extras": 0,
                                "total": 2
                            }
                        }
                    ]
                },
                {
                    "over": 14,
                    "deliveries": [
                        {
                            "batter": "DJ Hussey",
                            "bowler": "CL White",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 4,
                                "extras": 0,
                                "total": 4
                            }
                        },
                        {
                            "batter": "DJ Hussey",
                            "bowler": "CL White",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "CL White",
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 6,
                                "extras": 0,
                                "total": 6
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "CL White",
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 4,
                                "extras": 0,
                                "total": 4
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "CL White",
                            "extras": {
                                "wides": 2
                            },
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 0,
                                "extras": 2,
                                "total": 2
                            }
                        },
                        {
                            "batter": "DJ Hussey",
                            "bowler": "CL White",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "CL White",
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 6,
                                "extras": 0,
                                "total": 6
                            }
                        }
                    ]
                },
                {
                    "over": 15,
                    "deliveries": [
                        {
                            "batter": "DJ Hussey",
                            "bowler": "AA Noffke",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "DJ Hussey",
                            "bowler": "AA Noffke",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "AA Noffke",
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 2,
                                "extras": 0,
                                "total": 2
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "AA Noffke",
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "AA Noffke",
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "DJ Hussey",
                            "bowler": "AA Noffke",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        }
                    ]
                },
                {
                    "over": 16,
                    "deliveries": [
                        {
                            "batter": "BB McCullum",
                            "bowler": "Z Khan",
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "DJ Hussey",
                            "bowler": "Z Khan",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 2,
                                "extras": 0,
                                "total": 2
                            }
                        },
                        {
                            "batter": "DJ Hussey",
                            "bowler": "Z Khan",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "Z Khan",
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 6,
                                "extras": 0,
                                "total": 6
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "Z Khan",
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 2,
                                "extras": 0,
                                "total": 2
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "Z Khan",
                            "non_striker": "DJ Hussey",
                            "runs": {
                                "batter": 2,
                                "extras": 0,
                                "total": 2
                            }
                        }
                    ]
                },
                {
                    "over": 17,
                    "deliveries": [
                        {
                            "batter": "DJ Hussey",
                            "bowler": "AA Noffke",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            },
                            "wickets": [
                                {
                                    "kind": "caught",
                                    "player_out": "DJ Hussey",
                                    "fielders": [
                                        {
                                            "name": "CL White"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "AA Noffke",
                            "non_striker": "Mohammad Hafeez",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "Mohammad Hafeez",
                            "bowler": "AA Noffke",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "Mohammad Hafeez",
                            "bowler": "AA Noffke",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "AA Noffke",
                            "non_striker": "Mohammad Hafeez",
                            "runs": {
                                "batter": 4,
                                "extras": 0,
                                "total": 4
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "AA Noffke",
                            "non_striker": "Mohammad Hafeez",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        }
                    ]
                },
                {
                    "over": 18,
                    "deliveries": [
                        {
                            "batter": "BB McCullum",
                            "bowler": "JH Kallis",
                            "non_striker": "Mohammad Hafeez",
                            "runs": {
                                "batter": 6,
                                "extras": 0,
                                "total": 6
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "JH Kallis",
                            "non_striker": "Mohammad Hafeez",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "JH Kallis",
                            "non_striker": "Mohammad Hafeez",
                            "runs": {
                                "batter": 6,
                                "extras": 0,
                                "total": 6
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "JH Kallis",
                            "non_striker": "Mohammad Hafeez",
                            "runs": {
                                "batter": 4,
                                "extras": 0,
                                "total": 4
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "JH Kallis",
                            "non_striker": "Mohammad Hafeez",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "Mohammad Hafeez",
                            "bowler": "JH Kallis",
                            "non_striker": "BB McCullum",
                            "runs": {
                                "batter": 4,
                                "extras": 0,
                                "total": 4
                            }
                        }
                    ]
                },
                {
                    "over": 19,
                    "deliveries": [
                        {
                            "batter": "BB McCullum",
                            "bowler": "P Kumar",
                            "non_striker": "Mohammad Hafeez",
                            "runs": {
                                "batter": 6,
                                "extras": 0,
                                "total": 6
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "P Kumar",
                            "non_striker": "Mohammad Hafeez",
                            "runs": {
                                "batter": 6,
                                "extras": 0,
                                "total": 6
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "P Kumar",
                            "non_striker": "Mohammad Hafeez",
                            "runs": {
                                "batter": 2,
                                "extras": 0,
                                "total": 2
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "P Kumar",
                            "non_striker": "Mohammad Hafeez",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "P Kumar",
                            "non_striker": "Mohammad Hafeez",
                            "runs": {
                                "batter": 2,
                                "extras": 0,
                                "total": 2
                            }
                        },
                        {
                            "batter": "BB McCullum",
                            "bowler": "P Kumar",
                            "non_striker": "Mohammad Hafeez",
                            "runs": {
                                "batter": 6,
                                "extras": 0,
                                "total": 6
                            }
                        }
                    ]
                }
            ],
            "powerplays": [
                {
                    "from": 0.1,
                    "to": 5.6,
                    "type": "mandatory"
                }
            ]
        },
        {
            "team": "Royal Challengers Bangalore",
            "overs": [
                {
                    "over": 0,
                    "deliveries": [
                        {
                            "batter": "R Dravid",
                            "bowler": "AB Dinda",
                            "non_striker": "W Jaffer",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "W Jaffer",
                            "bowler": "AB Dinda",
                            "extras": {
                                "wides": 1
                            },
                            "non_striker": "R Dravid",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        },
                        {
                            "batter": "W Jaffer",
                            "bowler": "AB Dinda",
                            "non_striker": "R Dravid",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "W Jaffer",
                            "bowler": "AB Dinda",
                            "non_striker": "R Dravid",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "R Dravid",
                            "bowler": "AB Dinda",
                            "non_striker": "W Jaffer",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "W Jaffer",
                            "bowler": "AB Dinda",
                            "non_striker": "R Dravid",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "W Jaffer",
                            "bowler": "AB Dinda",
                            "non_striker": "R Dravid",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        }
                    ]
                },
                {
                    "over": 1,
                    "deliveries": [
                        {
                            "batter": "R Dravid",
                            "bowler": "I Sharma",
                            "non_striker": "W Jaffer",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            },
                            "wickets": [
                                {
                                    "kind": "bowled",
                                    "player_out": "R Dravid"
                                }
                            ]
                        },
                        {
                            "batter": "V Kohli",
                            "bowler": "I Sharma",
                            "non_striker": "W Jaffer",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "V Kohli",
                            "bowler": "I Sharma",
                            "extras": {
                                "legbyes": 4
                            },
                            "non_striker": "W Jaffer",
                            "runs": {
                                "batter": 0,
                                "extras": 4,
                                "total": 4
                            }
                        },
                        {
                            "batter": "V Kohli",
                            "bowler": "I Sharma",
                            "non_striker": "W Jaffer",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "W Jaffer",
                            "bowler": "I Sharma",
                            "non_striker": "V Kohli",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "W Jaffer",
                            "bowler": "I Sharma",
                            "non_striker": "V Kohli",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        }
                    ]
                },
                {
                    "over": 2,
                    "deliveries": [
                        {
                            "batter": "V Kohli",
                            "bowler": "AB Dinda",
                            "non_striker": "W Jaffer",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "V Kohli",
                            "bowler": "AB Dinda",
                            "non_striker": "W Jaffer",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            },
                            "wickets": [
                                {
                                    "kind": "bowled",
                                    "player_out": "V Kohli"
                                }
                            ]
                        },
                        {
                            "batter": "JH Kallis",
                            "bowler": "AB Dinda",
                            "non_striker": "W Jaffer",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "W Jaffer",
                            "bowler": "AB Dinda",
                            "non_striker": "JH Kallis",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "W Jaffer",
                            "bowler": "AB Dinda",
                            "extras": {
                                "wides": 1
                            },
                            "non_striker": "JH Kallis",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        },
                        {
                            "batter": "W Jaffer",
                            "bowler": "AB Dinda",
                            "non_striker": "JH Kallis",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "W Jaffer",
                            "bowler": "AB Dinda",
                            "non_striker": "JH Kallis",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        }
                    ]
                },
                {
                    "over": 3,
                    "deliveries": [
                        {
                            "batter": "W Jaffer",
                            "bowler": "I Sharma",
                            "non_striker": "JH Kallis",
                            "runs": {
                                "batter": 2,
                                "extras": 0,
                                "total": 2
                            }
                        },
                        {
                            "batter": "W Jaffer",
                            "bowler": "I Sharma",
                            "non_striker": "JH Kallis",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "JH Kallis",
                            "bowler": "I Sharma",
                            "non_striker": "W Jaffer",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "JH Kallis",
                            "bowler": "I Sharma",
                            "extras": {
                                "legbyes": 1
                            },
                            "non_striker": "W Jaffer",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        },
                        {
                            "batter": "W Jaffer",
                            "bowler": "I Sharma",
                            "non_striker": "JH Kallis",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "W Jaffer",
                            "bowler": "I Sharma",
                            "non_striker": "JH Kallis",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        }
                    ]
                },
                {
                    "over": 4,
                    "deliveries": [
                        {
                            "batter": "JH Kallis",
                            "bowler": "AB Agarkar",
                            "non_striker": "W Jaffer",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "W Jaffer",
                            "bowler": "AB Agarkar",
                            "non_striker": "JH Kallis",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "JH Kallis",
                            "bowler": "AB Agarkar",
                            "non_striker": "W Jaffer",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "JH Kallis",
                            "bowler": "AB Agarkar",
                            "non_striker": "W Jaffer",
                            "runs": {
                                "batter": 6,
                                "extras": 0,
                                "total": 6
                            }
                        },
                        {
                            "batter": "JH Kallis",
                            "bowler": "AB Agarkar",
                            "non_striker": "W Jaffer",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            },
                            "wickets": [
                                {
                                    "kind": "caught",
                                    "player_out": "JH Kallis",
                                    "fielders": [
                                        {
                                            "name": "M Kartik"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "batter": "CL White",
                            "bowler": "AB Agarkar",
                            "non_striker": "W Jaffer",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        }
                    ]
                },
                {
                    "over": 5,
                    "deliveries": [
                        {
                            "batter": "W Jaffer",
                            "bowler": "AB Dinda",
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "W Jaffer",
                            "bowler": "AB Dinda",
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            },
                            "wickets": [
                                {
                                    "kind": "caught",
                                    "player_out": "W Jaffer",
                                    "fielders": [
                                        {
                                            "name": "RT Ponting"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "batter": "MV Boucher",
                            "bowler": "AB Dinda",
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "MV Boucher",
                            "bowler": "AB Dinda",
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "CL White",
                            "bowler": "AB Dinda",
                            "non_striker": "MV Boucher",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "MV Boucher",
                            "bowler": "AB Dinda",
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        }
                    ]
                },
                {
                    "over": 6,
                    "deliveries": [
                        {
                            "batter": "CL White",
                            "bowler": "AB Agarkar",
                            "non_striker": "MV Boucher",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "CL White",
                            "bowler": "AB Agarkar",
                            "non_striker": "MV Boucher",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "CL White",
                            "bowler": "AB Agarkar",
                            "non_striker": "MV Boucher",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "MV Boucher",
                            "bowler": "AB Agarkar",
                            "extras": {
                                "wides": 1
                            },
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        },
                        {
                            "batter": "MV Boucher",
                            "bowler": "AB Agarkar",
                            "extras": {
                                "wides": 1
                            },
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        },
                        {
                            "batter": "MV Boucher",
                            "bowler": "AB Agarkar",
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "MV Boucher",
                            "bowler": "AB Agarkar",
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "MV Boucher",
                            "bowler": "AB Agarkar",
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 4,
                                "extras": 0,
                                "total": 4
                            }
                        }
                    ]
                },
                {
                    "over": 7,
                    "deliveries": [
                        {
                            "batter": "CL White",
                            "bowler": "SC Ganguly",
                            "non_striker": "MV Boucher",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "MV Boucher",
                            "bowler": "SC Ganguly",
                            "extras": {
                                "legbyes": 1
                            },
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        },
                        {
                            "batter": "CL White",
                            "bowler": "SC Ganguly",
                            "non_striker": "MV Boucher",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "MV Boucher",
                            "bowler": "SC Ganguly",
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 2,
                                "extras": 0,
                                "total": 2
                            }
                        },
                        {
                            "batter": "MV Boucher",
                            "bowler": "SC Ganguly",
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            },
                            "wickets": [
                                {
                                    "kind": "caught",
                                    "player_out": "MV Boucher",
                                    "fielders": [
                                        {
                                            "name": "M Kartik"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "batter": "CL White",
                            "bowler": "SC Ganguly",
                            "non_striker": "B Akhil",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        }
                    ]
                },
                {
                    "over": 8,
                    "deliveries": [
                        {
                            "batter": "B Akhil",
                            "bowler": "AB Agarkar",
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "B Akhil",
                            "bowler": "AB Agarkar",
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            },
                            "wickets": [
                                {
                                    "kind": "caught",
                                    "player_out": "B Akhil",
                                    "fielders": [
                                        {
                                            "name": "RT Ponting"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "batter": "AA Noffke",
                            "bowler": "AB Agarkar",
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "AA Noffke",
                            "bowler": "AB Agarkar",
                            "extras": {
                                "wides": 1
                            },
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        },
                        {
                            "batter": "AA Noffke",
                            "bowler": "AB Agarkar",
                            "extras": {
                                "wides": 1
                            },
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        },
                        {
                            "batter": "AA Noffke",
                            "bowler": "AB Agarkar",
                            "non_striker": "CL White",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "CL White",
                            "bowler": "AB Agarkar",
                            "non_striker": "AA Noffke",
                            "runs": {
                                "batter": 2,
                                "extras": 0,
                                "total": 2
                            }
                        },
                        {
                            "batter": "CL White",
                            "bowler": "AB Agarkar",
                            "non_striker": "AA Noffke",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            },
                            "wickets": [
                                {
                                    "kind": "caught",
                                    "player_out": "CL White",
                                    "fielders": [
                                        {
                                            "name": "WP Saha"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "over": 9,
                    "deliveries": [
                        {
                            "batter": "AA Noffke",
                            "bowler": "SC Ganguly",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "P Kumar",
                            "bowler": "SC Ganguly",
                            "non_striker": "AA Noffke",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "P Kumar",
                            "bowler": "SC Ganguly",
                            "non_striker": "AA Noffke",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "P Kumar",
                            "bowler": "SC Ganguly",
                            "extras": {
                                "wides": 1
                            },
                            "non_striker": "AA Noffke",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        },
                        {
                            "batter": "P Kumar",
                            "bowler": "SC Ganguly",
                            "extras": {
                                "legbyes": 1
                            },
                            "non_striker": "AA Noffke",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        },
                        {
                            "batter": "AA Noffke",
                            "bowler": "SC Ganguly",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 4,
                                "extras": 0,
                                "total": 4
                            }
                        },
                        {
                            "batter": "AA Noffke",
                            "bowler": "SC Ganguly",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        }
                    ]
                },
                {
                    "over": 10,
                    "deliveries": [
                        {
                            "batter": "AA Noffke",
                            "bowler": "AB Agarkar",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "AA Noffke",
                            "bowler": "AB Agarkar",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "AA Noffke",
                            "bowler": "AB Agarkar",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "AA Noffke",
                            "bowler": "AB Agarkar",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "P Kumar",
                            "bowler": "AB Agarkar",
                            "non_striker": "AA Noffke",
                            "runs": {
                                "batter": 4,
                                "extras": 0,
                                "total": 4
                            }
                        },
                        {
                            "batter": "P Kumar",
                            "bowler": "AB Agarkar",
                            "non_striker": "AA Noffke",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        }
                    ]
                },
                {
                    "over": 11,
                    "deliveries": [
                        {
                            "batter": "AA Noffke",
                            "bowler": "SC Ganguly",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            },
                            "wickets": [
                                {
                                    "kind": "run out",
                                    "player_out": "AA Noffke",
                                    "fielders": [
                                        {
                                            "name": "AB Agarkar"
                                        },
                                        {
                                            "name": "WP Saha"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "batter": "Z Khan",
                            "bowler": "SC Ganguly",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "Z Khan",
                            "bowler": "SC Ganguly",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "Z Khan",
                            "bowler": "SC Ganguly",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "P Kumar",
                            "bowler": "SC Ganguly",
                            "non_striker": "Z Khan",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "P Kumar",
                            "bowler": "SC Ganguly",
                            "non_striker": "Z Khan",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        }
                    ]
                },
                {
                    "over": 12,
                    "deliveries": [
                        {
                            "batter": "P Kumar",
                            "bowler": "LR Shukla",
                            "non_striker": "Z Khan",
                            "runs": {
                                "batter": 6,
                                "extras": 0,
                                "total": 6
                            }
                        },
                        {
                            "batter": "P Kumar",
                            "bowler": "LR Shukla",
                            "extras": {
                                "wides": 2
                            },
                            "non_striker": "Z Khan",
                            "runs": {
                                "batter": 0,
                                "extras": 2,
                                "total": 2
                            }
                        },
                        {
                            "batter": "Z Khan",
                            "bowler": "LR Shukla",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "P Kumar",
                            "bowler": "LR Shukla",
                            "non_striker": "Z Khan",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "Z Khan",
                            "bowler": "LR Shukla",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "Z Khan",
                            "bowler": "LR Shukla",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "Z Khan",
                            "bowler": "LR Shukla",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        }
                    ]
                },
                {
                    "over": 13,
                    "deliveries": [
                        {
                            "batter": "Z Khan",
                            "bowler": "SC Ganguly",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            },
                            "wickets": [
                                {
                                    "kind": "bowled",
                                    "player_out": "Z Khan"
                                }
                            ]
                        },
                        {
                            "batter": "SB Joshi",
                            "bowler": "SC Ganguly",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "P Kumar",
                            "bowler": "SC Ganguly",
                            "non_striker": "SB Joshi",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "P Kumar",
                            "bowler": "SC Ganguly",
                            "non_striker": "SB Joshi",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "P Kumar",
                            "bowler": "SC Ganguly",
                            "non_striker": "SB Joshi",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "P Kumar",
                            "bowler": "SC Ganguly",
                            "non_striker": "SB Joshi",
                            "runs": {
                                "batter": 6,
                                "extras": 0,
                                "total": 6
                            }
                        }
                    ]
                },
                {
                    "over": 14,
                    "deliveries": [
                        {
                            "batter": "SB Joshi",
                            "bowler": "I Sharma",
                            "extras": {
                                "wides": 1
                            },
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        },
                        {
                            "batter": "SB Joshi",
                            "bowler": "I Sharma",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "SB Joshi",
                            "bowler": "I Sharma",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        },
                        {
                            "batter": "SB Joshi",
                            "bowler": "I Sharma",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "P Kumar",
                            "bowler": "I Sharma",
                            "extras": {
                                "legbyes": 1
                            },
                            "non_striker": "SB Joshi",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        },
                        {
                            "batter": "SB Joshi",
                            "bowler": "I Sharma",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 1,
                                "extras": 0,
                                "total": 1
                            }
                        },
                        {
                            "batter": "P Kumar",
                            "bowler": "I Sharma",
                            "non_striker": "SB Joshi",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            }
                        }
                    ]
                },
                {
                    "over": 15,
                    "deliveries": [
                        {
                            "batter": "SB Joshi",
                            "bowler": "LR Shukla",
                            "extras": {
                                "wides": 1
                            },
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 0,
                                "extras": 1,
                                "total": 1
                            }
                        },
                        {
                            "batter": "SB Joshi",
                            "bowler": "LR Shukla",
                            "non_striker": "P Kumar",
                            "runs": {
                                "batter": 0,
                                "extras": 0,
                                "total": 0
                            },
                            "wickets": [
                                {
                                    "kind": "caught",
                                    "player_out": "SB Joshi",
                                    "fielders": [
                                        {
                                            "name": "BB McCullum"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            "powerplays": [
                {
                    "from": 0.1,
                    "to": 5.6,
                    "type": "mandatory"
                }
            ],
            "target": {
                "overs": 20,
                "runs": 223
            }
        }
    ]
}

const calculateAvgScoreOfATeam = () => {
    const matchStats: Array<MatchStat> = readAllMatchFiles();

    console.log(`total matches played by ${team}: ${matchStats.length}`);

    const avg = avgScore(matchStats, team);

    console.log(`avg ${avg}`);
};

const calculateAvgScoreUsingWasm = () => {
    const matchStats: Array<MatchStat> = readAllMatchFiles();

    // let matchStats = [
    //     {name: "hello world", id: "99", parent_id: "88"},
    //     {name: "hello world2", id: "88", parent_id: "12"},
    //     {name: "hello world3", id: "77", parent_id: "88"}
    // ]

    // console.log(matchStats.length)

    avg_score(matchStats);
}

let t = process.hrtime();

// calculateAvgScoreOfATeam();

// greet();
calculateAvgScoreUsingWasm();

t = process.hrtime(t);

console.log(`${t[0]} s, ${t[1] / 1000000} ms`)


