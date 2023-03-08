const path = require('path');
const fs = require('fs');
const expSchema = require('../schemas/livePresenterExperiment.schema');
let Ajv = require('ajv');

var coreSchema = require('../schemas/core.schema')


const ajvValidator = new Ajv({ allErrors: true });
ajvValidator.addSchema(coreSchema, 'coreSchema');
ajvValidator.addSchema(expSchema, 'expSchema');

console.log("ok")

const exp = {
    "_id": "7463d337-4365-4797-bea0-e3412b9eda35",
    "docType": "livePresenterExperiment",
    "creationDate": "2023-01-15T11:04:20.181Z",
    "description": "The users identifies birds",
    "question": "BIRDS certification",
    "hypothesis": "No hypothesis",
    "privacy": "PUBLIC",
    "status": "DRAFT",
    "reference": {
        "projectId": "f3fc99a6-e1c6-47dc-a042-a9db5487fca1"
    },
    "owner": "amoralespinzon@bwh.harvard.edu",
    "modificationDate": "2011-10-05T14:48:00.000Z",
    "modifiedBy": "amoralespinzon@bwh.harvard.edu",
    "dataDescription": {
        "clinical": {},
        "measurement": {}
    },
    "scoringMethod": {
        "passed": {
            "text": "You passed",
            "linkText": "Go to the testing phase",
            "link": "/skills/playskill/map/c4b938be16b9287c84308d7da8007016/ff1621b5-412f-4130-8fba-d72ae6abd6ad"
        },
        "failed": {
            "text": "Score is too low",
            "linkText": "Try again",
            "link": "/skills/playskill/004dff61-96e3-4779-ab30-298ea58e7363",
            "livePresenterExperiment": "7463d337-4365-4797-bea0-e3412b9eda35",
            "miniWorkflowSet": "02c150e4-d1ff-42c5-a20c-d8c16a040e25",
            "miniWorkflow": "mw1"
        },
        "main": {
            "maxScore": 16,
            "thresholdScore": 12,
            "tooltip": "Votre score sur 16 cas. 1 cas correct = 1 point."
        },
        "component": [
            {
                "user": {
                    "type": "TASK_OUTPUT",
                    "task": "bird-identification_1",
                    "outputKey": "outputAnnotationFormData_key0",
                    "outputIndex": 0
                },
                "expert": {
                    "type": "ANNOTATION",
                    "key": "annotation"
                },
                "scoringMethod": "ANNOTATION_SAME_VALUE",
                "caseMatchingMethod": "ROI_ID",
                "tooltip": "1 point if correct, 0, if not",
                "name": "case 1"
            },
            {
                "user": {
                    "type": "TASK_OUTPUT",
                    "task": "bird-identification_1",
                    "outputKey": "outputAnnotationFormData_key0",
                    "outputIndex": 1
                },
                "expert": {
                    "type": "ANNOTATION",
                    "key": "annotation"
                },
                "scoringMethod": "ANNOTATION_SAME_VALUE",
                "caseMatchingMethod": "ROI_ID",
                "tooltip": "1 point if correct, 0, if not",
                "name": "case 2"
            },
            {
                "user": {
                    "type": "TASK_OUTPUT",
                    "task": "bird-identification_1",
                    "outputKey": "outputAnnotationFormData_key0",
                    "outputIndex": 2
                },
                "expert": {
                    "type": "ANNOTATION",
                    "key": "annotation"
                },
                "scoringMethod": "ANNOTATION_SAME_VALUE",
                "caseMatchingMethod": "ROI_ID",
                "tooltip": "1 point if correct, 0, if not",
                "name": "case 3"
            },
            {
                "user": {
                    "type": "TASK_OUTPUT",
                    "task": "bird-identification_1",
                    "outputKey": "outputAnnotationFormData_key0",
                    "outputIndex": 3
                },
                "expert": {
                    "type": "ANNOTATION",
                    "key": "annotation"
                },
                "scoringMethod": "ANNOTATION_SAME_VALUE",
                "caseMatchingMethod": "ROI_ID",
                "tooltip": "1 point if correct, 0, if not",
                "name": "case 4"
            },
            {
                "user": {
                    "type": "TASK_OUTPUT",
                    "task": "bird-identification_1",
                    "outputKey": "outputAnnotationFormData_key0",
                    "outputIndex": 4
                },
                "expert": {
                    "type": "ANNOTATION",
                    "key": "annotation"
                },
                "scoringMethod": "ANNOTATION_SAME_VALUE",
                "caseMatchingMethod": "ROI_ID",
                "tooltip": "1 point if correct, 0, if not",
                "name": "case 5"
            },
            {
                "user": {
                    "type": "TASK_OUTPUT",
                    "task": "bird-identification_1",
                    "outputKey": "outputAnnotationFormData_key0",
                    "outputIndex": 5
                },
                "expert": {
                    "type": "ANNOTATION",
                    "key": "annotation"
                },
                "scoringMethod": "ANNOTATION_SAME_VALUE",
                "caseMatchingMethod": "ROI_ID",
                "tooltip": "1 point if correct, 0, if not",
                "name": "case 6"
            },
            {
                "user": {
                    "type": "TASK_OUTPUT",
                    "task": "bird-identification_1",
                    "outputKey": "outputAnnotationFormData_key0",
                    "outputIndex": 6
                },
                "expert": {
                    "type": "ANNOTATION",
                    "key": "annotation"
                },
                "scoringMethod": "ANNOTATION_SAME_VALUE",
                "caseMatchingMethod": "ROI_ID",
                "tooltip": "1 point if correct, 0, if not",
                "name": "case 7"
            },
            {
                "user": {
                    "type": "TASK_OUTPUT",
                    "task": "bird-identification_1",
                    "outputKey": "outputAnnotationFormData_key0",
                    "outputIndex": 7
                },
                "expert": {
                    "type": "ANNOTATION",
                    "key": "annotation"
                },
                "scoringMethod": "ANNOTATION_SAME_VALUE",
                "caseMatchingMethod": "ROI_ID",
                "tooltip": "1 point if correct, 0, if not",
                "name": "case 8"
            },
            {
                "user": {
                    "type": "TASK_OUTPUT",
                    "task": "bird-identification_1",
                    "outputKey": "outputAnnotationFormData_key0",
                    "outputIndex": 8
                },
                "expert": {
                    "type": "ANNOTATION",
                    "key": "annotation"
                },
                "scoringMethod": "ANNOTATION_SAME_VALUE",
                "caseMatchingMethod": "ROI_ID",
                "tooltip": "1 point if correct, 0, if not",
                "name": "case 9"
            },
            {
                "user": {
                    "type": "TASK_OUTPUT",
                    "task": "bird-identification_1",
                    "outputKey": "outputAnnotationFormData_key0",
                    "outputIndex": 9
                },
                "expert": {
                    "type": "ANNOTATION",
                    "key": "annotation"
                },
                "scoringMethod": "ANNOTATION_SAME_VALUE",
                "caseMatchingMethod": "ROI_ID",
                "tooltip": "1 point if correct, 0, if not",
                "name": "case 10"
            },
            {
                "user": {
                    "type": "TASK_OUTPUT",
                    "task": "bird-identification_1",
                    "outputKey": "outputAnnotationFormData_key0",
                    "outputIndex": 10
                },
                "expert": {
                    "type": "ANNOTATION",
                    "key": "annotation"
                },
                "scoringMethod": "ANNOTATION_SAME_VALUE",
                "caseMatchingMethod": "ROI_ID",
                "tooltip": "1 point if correct, 0, if not",
                "name": "case 11"
            },
            {
                "user": {
                    "type": "TASK_OUTPUT",
                    "task": "bird-identification_1",
                    "outputKey": "outputAnnotationFormData_key0",
                    "outputIndex": 11
                },
                "expert": {
                    "type": "ANNOTATION",
                    "key": "annotation"
                },
                "scoringMethod": "ANNOTATION_SAME_VALUE",
                "caseMatchingMethod": "ROI_ID",
                "tooltip": "1 point if correct, 0, if not",
                "name": "case 12"
            },
            {
                "user": {
                    "type": "TASK_OUTPUT",
                    "task": "bird-identification_1",
                    "outputKey": "outputAnnotationFormData_key0",
                    "outputIndex": 12
                },
                "expert": {
                    "type": "ANNOTATION",
                    "key": "annotation"
                },
                "scoringMethod": "ANNOTATION_SAME_VALUE",
                "caseMatchingMethod": "ROI_ID",
                "tooltip": "1 point if correct, 0, if not",
                "name": "case 13"
            },
            {
                "user": {
                    "type": "TASK_OUTPUT",
                    "task": "bird-identification_1",
                    "outputKey": "outputAnnotationFormData_key0",
                    "outputIndex": 13
                },
                "expert": {
                    "type": "ANNOTATION",
                    "key": "annotation"
                },
                "scoringMethod": "ANNOTATION_SAME_VALUE",
                "caseMatchingMethod": "ROI_ID",
                "tooltip": "1 point if correct, 0, if not",
                "name": "case 14"
            },
            {
                "user": {
                    "type": "TASK_OUTPUT",
                    "task": "bird-identification_1",
                    "outputKey": "outputAnnotationFormData_key0",
                    "outputIndex": 14
                },
                "expert": {
                    "type": "ANNOTATION",
                    "key": "annotation"
                },
                "scoringMethod": "ANNOTATION_SAME_VALUE",
                "caseMatchingMethod": "ROI_ID",
                "tooltip": "1 point if correct, 0, if not",
                "name": "case 15"
            },
            {
                "user": {
                    "type": "TASK_OUTPUT",
                    "task": "bird-identification_1",
                    "outputKey": "outputAnnotationFormData_key0",
                    "outputIndex": 15
                },
                "expert": {
                    "type": "ANNOTATION",
                    "key": "annotation"
                },
                "scoringMethod": "ANNOTATION_SAME_VALUE",
                "caseMatchingMethod": "ROI_ID",
                "tooltip": "1 point if correct, 0, if not",
                "name": "case 16"
            }
        ]
    },
    "clinical": {},
    "caseDistribution": {
        "pool": {
            "Europe": [
                "XC713500",
                "XC729943",
                "XC711568",
                "XC629906",
                "XC757104",
                "XC707059",
                "XC703671",
                "XC503776",
                "XC758384",
                "XC580624",
                "XC662897",
                "XC652017",
                "XC672979",
                "XC699216",
                "XC721257",
                "XC738427",
                "XC692256",
                "XC707745",
                "XC711602",
                "XC757940",
                "XC658273",
                "XC658967",
                "XC713144",
                "XC720846",
                "XC716880",
                "XC718046",
                "XC720088",
                "XC756695",
                "XC756385",
                "XC733928",
                "XC750447",
                "XC747372",
                "XC548790",
                "XC551707",
                "XC715734",
                "XC718420",
                "XC716794",
                "XC717598",
                "XC721485",
                "XC753497",
                "XC562689",
                "XC579435",
                "XC747349",
                "XC730618",
                "XC601830",
                "XC639565",
                "XC637072",
                "XC714658",
                "XC711523",
                "XC716578",
                "XC677617",
                "XC747444",
                "XC709340",
                "XC711809",
                "XC712088",
                "XC664440",
                "XC738832",
                "XC704729",
                "XC699031",
                "XC696696",
                "XC561147",
                "XC659403",
                "XC480985",
                "XC144305",
                "XC740244",
                "XC638482",
                "XC627886",
                "XC612697",
                "XC722830",
                "XC711618",
                "XC694594",
                "XC662109",
                "XC747476",
                "XC718647",
                "XC717932",
                "XC716602",
                "XC742204",
                "XC738925",
                "XC728318",
                "XC356339"
            ],
            "North_Europe_and_Boreal_Forest": [
                "XC623387",
                "XC636894",
                "XC680533",
                "XC689772",
                "XC690235",
                "XC523093",
                "XC153176",
                "XC512253",
                "XC748807",
                "XC696593",
                "XC401879",
                "XC153139",
                "XC748448",
                "XC717706",
                "XC709186",
                "XC692954",
                "XC736819",
                "XC586791",
                "XC507636",
                "XC342807"
            ],
            "East_Europe_and_Balkans": [
                "XC757580",
                "XC695874",
                "XC668447",
                "XC628913",
                "XC737609",
                "XC733673",
                "XC477557",
                "XC391094",
                "XC747225",
                "XC721480",
                "XC662194",
                "XC650609",
                "XC709149",
                "XC659357",
                "XC649816",
                "XC380866",
                "XC759205",
                "XC745892",
                "XC623396",
                "XC591289"
            ],
            "Mountain": [
                "XC688398",
                "XC688395",
                "XC625475",
                "XC569163",
                "XC731822",
                "XC733540",
                "XC599964",
                "XC425901",
                "XC738789",
                "XC626840",
                "XC591286",
                "XC591285",
                "XC531085",
                "XC663884",
                "XC134564",
                "XC186477",
                "XC560380",
                "XC551446",
                "XC385254",
                "XC240516"
            ],
            "Mediterranean": [
                "XC758773",
                "XC756077",
                "XC734981",
                "XC732107",
                "XC728938",
                "XC644761",
                "XC615949",
                "XC547450",
                "XC547044",
                "XC568390",
                "XC651539",
                "XC761053",
                "XC647696",
                "XC647695",
                "XC647697",
                "XC107248",
                "XC573440",
                "XC480911",
                "XC414375",
                "XC104499"
            ]
        },
        "rules": [
            {
                "rules": {
                    "and": [
                        {
                            "in": [
                                "Europe",
                                {
                                    "var": "location"
                                }
                            ]
                        },
                        {
                            "==": [
                                {
                                    "var": "location.length"
                                },
                                1
                            ]
                        }
                    ]
                },
                "distribution": [
                    {
                        "min": 16,
                        "max": 16,
                        "pools": [
                            "Europe"
                        ]
                    }
                ]
            },
            {
                "rules": {
                    "and": [
                        {
                            "in": [
                                "East Europe and Balkans",
                                {
                                    "var": "location"
                                }
                            ]
                        },
                        {
                            "in": [
                                "Mediterannean",
                                {
                                    "var": "location"
                                }
                            ]
                        },
                        {
                            "in": [
                                "Mountains",
                                {
                                    "var": "location"
                                }
                            ]
                        },
                        {
                            "in": [
                                "North Europe and Boreal Forest",
                                {
                                    "var": "location"
                                }
                            ]
                        }
                    ]
                },
                "distribution": [
                    {
                        "min": 12,
                        "max": 12,
                        "pools": [
                            "Europe"
                        ]
                    },
                    {
                        "min": 4,
                        "max": 4,
                        "pools": [
                            "East_Europe_and_Balkans",
                            "Mediterranean",
                            "Mountain",
                            "North_Europe_and_Boreal_Forest"
                        ]
                    }
                ]
            },
            {
                "rules": {
                    "and": [
                        {
                            "in": [
                                "East Europe and Balkans",
                                {
                                    "var": "location"
                                }
                            ]
                        },
                        {
                            "in": [
                                "Mediterannean",
                                {
                                    "var": "location"
                                }
                            ]
                        },
                        {
                            "in": [
                                "Mountains",
                                {
                                    "var": "location"
                                }
                            ]
                        }
                    ]
                },
                "distribution": [
                    {
                        "min": 12,
                        "max": 12,
                        "pools": [
                            "Europe"
                        ]
                    },
                    {
                        "min": 4,
                        "max": 4,
                        "pools": [
                            "East_Europe_and_Balkans",
                            "Mediterranean",
                            "Mountain"
                        ]
                    }
                ]
            },
            {
                "rules": {
                    "and": [
                        {
                            "in": [
                                "East Europe and Balkans",
                                {
                                    "var": "location"
                                }
                            ]
                        },
                        {
                            "in": [
                                "Mediterannean",
                                {
                                    "var": "location"
                                }
                            ]
                        },
                        {
                            "in": [
                                "North Europe and Boreal Forest",
                                {
                                    "var": "location"
                                }
                            ]
                        }
                    ]
                },
                "distribution": [
                    {
                        "min": 12,
                        "max": 12,
                        "pools": [
                            "Europe"
                        ]
                    },
                    {
                        "min": 4,
                        "max": 4,
                        "pools": [
                            "East_Europe_and_Balkans",
                            "Mediterranean",
                            "North_Europe_and_Boreal_Forest"
                        ]
                    }
                ]
            },
            {
                "rules": {
                    "and": [
                        {
                            "in": [
                                "East Europe and Balkans",
                                {
                                    "var": "location"
                                }
                            ]
                        },
                        {
                            "in": [
                                "Mountains",
                                {
                                    "var": "location"
                                }
                            ]
                        },
                        {
                            "in": [
                                "North Europe and Boreal Forest",
                                {
                                    "var": "location"
                                }
                            ]
                        }
                    ]
                },
                "distribution": [
                    {
                        "min": 12,
                        "max": 12,
                        "pools": [
                            "Europe"
                        ]
                    },
                    {
                        "min": 4,
                        "max": 4,
                        "pools": [
                            "East_Europe_and_Balkans",
                            "Mountain",
                            "North_Europe_and_Boreal_Forest"
                        ]
                    }
                ]
            },
            {
                "rules": {
                    "and": [
                        {
                            "in": [
                                "Mediterannean",
                                {
                                    "var": "location"
                                }
                            ]
                        },
                        {
                            "in": [
                                "Mountains",
                                {
                                    "var": "location"
                                }
                            ]
                        },
                        {
                            "in": [
                                "North Europe and Boreal Forest",
                                {
                                    "var": "location"
                                }
                            ]
                        }
                    ]
                },
                "distribution": [
                    {
                        "min": 12,
                        "max": 12,
                        "pools": [
                            "Europe"
                        ]
                    },
                    {
                        "min": 4,
                        "max": 4,
                        "pools": [
                            "Mediterranean",
                            "Mountain",
                            "North_Europe_and_Boreal_Forest"
                        ]
                    }
                ]
            },
            {
                "rules": {
                    "and": [
                        {
                            "in": [
                                "East Europe and Balkans",
                                {
                                    "var": "location"
                                }
                            ]
                        },
                        {
                            "in": [
                                "Mediterannean",
                                {
                                    "var": "location"
                                }
                            ]
                        }
                    ]
                },
                "distribution": [
                    {
                        "min": 12,
                        "max": 12,
                        "pools": [
                            "Europe"
                        ]
                    },
                    {
                        "min": 4,
                        "max": 4,
                        "pools": [
                            "East_Europe_and_Balkans",
                            "Mediterranean"
                        ]
                    }
                ]
            },
            {
                "rules": {
                    "and": [
                        {
                            "in": [
                                "East Europe and Balkans",
                                {
                                    "var": "location"
                                }
                            ]
                        },
                        {
                            "in": [
                                "Mountains",
                                {
                                    "var": "location"
                                }
                            ]
                        }
                    ]
                },
                "distribution": [
                    {
                        "min": 12,
                        "max": 12,
                        "pools": [
                            "Europe"
                        ]
                    },
                    {
                        "min": 4,
                        "max": 4,
                        "pools": [
                            "East_Europe_and_Balkans",
                            "Mountain"
                        ]
                    }
                ]
            },
            {
                "rules": {
                    "and": [
                        {
                            "in": [
                                "East Europe and Balkans",
                                {
                                    "var": "location"
                                }
                            ]
                        },
                        {
                            "in": [
                                "North Europe and Boreal Forest",
                                {
                                    "var": "location"
                                }
                            ]
                        }
                    ]
                },
                "distribution": [
                    {
                        "min": 12,
                        "max": 12,
                        "pools": [
                            "Europe"
                        ]
                    },
                    {
                        "min": 4,
                        "max": 4,
                        "pools": [
                            "East_Europe_and_Balkans",
                            "North_Europe_and_Boreal_Forest"
                        ]
                    }
                ]
            },
            {
                "rules": {
                    "and": [
                        {
                            "in": [
                                "Mediterannean",
                                {
                                    "var": "location"
                                }
                            ]
                        },
                        {
                            "in": [
                                "Mountains",
                                {
                                    "var": "location"
                                }
                            ]
                        }
                    ]
                },
                "distribution": [
                    {
                        "min": 12,
                        "max": 12,
                        "pools": [
                            "Europe"
                        ]
                    },
                    {
                        "min": 4,
                        "max": 4,
                        "pools": [
                            "Mediterranean",
                            "Mountain"
                        ]
                    }
                ]
            },
            {
                "rules": {
                    "and": [
                        {
                            "in": [
                                "Mediterannean",
                                {
                                    "var": "location"
                                }
                            ]
                        },
                        {
                            "in": [
                                "North Europe and Boreal Forest",
                                {
                                    "var": "location"
                                }
                            ]
                        }
                    ]
                },
                "distribution": [
                    {
                        "min": 12,
                        "max": 12,
                        "pools": [
                            "Europe"
                        ]
                    },
                    {
                        "min": 4,
                        "max": 4,
                        "pools": [
                            "Mediterranean",
                            "North_Europe_and_Boreal_Forest"
                        ]
                    }
                ]
            },
            {
                "rules": {
                    "and": [
                        {
                            "in": [
                                "Mountains",
                                {
                                    "var": "location"
                                }
                            ]
                        },
                        {
                            "in": [
                                "North Europe and Boreal Forest",
                                {
                                    "var": "location"
                                }
                            ]
                        }
                    ]
                },
                "distribution": [
                    {
                        "min": 12,
                        "max": 12,
                        "pools": [
                            "Europe"
                        ]
                    },
                    {
                        "min": 4,
                        "max": 4,
                        "pools": [
                            "Mountain",
                            "North_Europe_and_Boreal_Forest"
                        ]
                    }
                ]
            },
            {
                "rules": {
                    "and": [
                        {
                            "in": [
                                "East Europe and Balkans",
                                {
                                    "var": "location"
                                }
                            ]
                        }
                    ]
                },
                "distribution": [
                    {
                        "min": 12,
                        "max": 12,
                        "pools": [
                            "Europe"
                        ]
                    },
                    {
                        "min": 4,
                        "max": 4,
                        "pools": [
                            "East_Europe_and_Balkans"
                        ]
                    }
                ]
            },
            {
                "rules": {
                    "and": [
                        {
                            "in": [
                                "Mediterannean",
                                {
                                    "var": "location"
                                }
                            ]
                        }
                    ]
                },
                "distribution": [
                    {
                        "min": 12,
                        "max": 12,
                        "pools": [
                            "Europe"
                        ]
                    },
                    {
                        "min": 4,
                        "max": 4,
                        "pools": [
                            "Mediterranean"
                        ]
                    }
                ]
            },
            {
                "rules": {
                    "and": [
                        {
                            "in": [
                                "Mountains",
                                {
                                    "var": "location"
                                }
                            ]
                        }
                    ]
                },
                "distribution": [
                    {
                        "min": 12,
                        "max": 12,
                        "pools": [
                            "Europe"
                        ]
                    },
                    {
                        "min": 4,
                        "max": 4,
                        "pools": [
                            "Mountain"
                        ]
                    }
                ]
            },
            {
                "rules": {
                    "and": [
                        {
                            "in": [
                                "North Europe and Boreal Forest",
                                {
                                    "var": "location"
                                }
                            ]
                        }
                    ]
                },
                "distribution": [
                    {
                        "min": 12,
                        "max": 12,
                        "pools": [
                            "Europe"
                        ]
                    },
                    {
                        "min": 4,
                        "max": 4,
                        "pools": [
                            "North_Europe_and_Boreal_Forest"
                        ]
                    }
                ]
            }
        ]
    },
    "scoring": {
        "XC713500": {
            "annotation": "217cad5e-2330-417f-9997-1930c90ad7e3"
        },
        "XC729943": {
            "annotation": "438ecd0b-09cb-4ec9-8739-7185cd6f2fdb"
        },
        "XC711568": {
            "annotation": "371bb299-3032-46a2-9dea-b151f25e9909"
        },
        "XC629906": {
            "annotation": "a38bfba2-ae5b-4264-b04c-eecff4b28e92"
        },
        "XC757104": {
            "annotation": "f02f7a69-568d-450f-8766-e0b8e7086f88"
        },
        "XC707059": {
            "annotation": "67559c42-7f5a-493b-8005-389ccb16007d"
        },
        "XC703671": {
            "annotation": "292ddfe1-8dd5-4ce2-8d89-4c4b55735c8f"
        },
        "XC503776": {
            "annotation": "b19b0aba-c0be-470b-891d-a742a3449c4c"
        },
        "XC758384": {
            "annotation": "fa289d24-b932-4724-ba7e-889be789ff8b"
        },
        "XC580624": {
            "annotation": "dd1fde4e-c0ea-4eec-a5a5-2d5179999db9"
        },
        "XC662897": {
            "annotation": "f3b567a9-0378-4942-b8b2-941fc65c6f96"
        },
        "XC652017": {
            "annotation": "21496d54-2748-456b-82b6-31d482085939"
        },
        "XC672979": {
            "annotation": "385f2b14-f602-41ad-a04d-55bded031f25"
        },
        "XC699216": {
            "annotation": "60482eac-6cf3-4a10-904b-a59198863be2"
        },
        "XC721257": {
            "annotation": "4598f1cf-f13b-4087-940c-63490c28f8a0"
        },
        "XC738427": {
            "annotation": "912f2a68-72d4-4e8f-94e7-e1b2454264f9"
        },
        "XC692256": {
            "annotation": "039a0220-2c81-48f5-ad87-d3a100adfd33"
        },
        "XC707745": {
            "annotation": "0c32695a-9c72-4802-959a-238e03d4fb82"
        },
        "XC711602": {
            "annotation": "f993c5f9-04a6-42d8-b44f-155e1f738952"
        },
        "XC757940": {
            "annotation": "485761c5-c593-4c16-8c1c-40b92dfa546c"
        },
        "XC658273": {
            "annotation": "0eca7e39-95d4-4c48-84aa-fb8707d027c6"
        },
        "XC658967": {
            "annotation": "2dd977dc-3b8d-46da-a59c-a977c4cdca65"
        },
        "XC713144": {
            "annotation": "b233c6d3-2000-4dbc-b839-1144c070b348"
        },
        "XC720846": {
            "annotation": "ff5fc12a-dad1-48f0-afc3-27ec44e32bb6"
        },
        "XC716880": {
            "annotation": "c75e0c60-ba71-410e-ad5f-325aa6aded42"
        },
        "XC718046": {
            "annotation": "d577bf41-425b-4cb2-9631-90e5459db0c0"
        },
        "XC720088": {
            "annotation": "fa271db0-0e29-48b7-8b1f-06e388340362"
        },
        "XC756695": {
            "annotation": "acc2e44b-f979-4bf8-bafa-56ef06033040"
        },
        "XC756385": {
            "annotation": "5bf99fcc-bef8-4298-afb0-f9f6b2d06f4b"
        },
        "XC733928": {
            "annotation": "504b0546-e005-4cf5-b32b-8c3f3c4f4e9f"
        },
        "XC750447": {
            "annotation": "fc981e18-f878-4a10-af63-ae96f2f6b15d"
        },
        "XC747372": {
            "annotation": "563f8ddb-89fc-4feb-94d9-01c946ddc335"
        },
        "XC548790": {
            "annotation": "415af659-5a5a-453e-b1ac-261c52bb1b85"
        },
        "XC551707": {
            "annotation": "fbb2f7a5-844a-4d2a-b48c-086c7e4a4ab8"
        },
        "XC715734": {
            "annotation": "7143f75d-a853-4cdb-90de-2d0808defc38"
        },
        "XC718420": {
            "annotation": "255cb47b-c3e2-4fb8-b935-e6f6c2a53695"
        },
        "XC716794": {
            "annotation": "4704d717-0dd3-4eac-8c69-c9c545f71ac4"
        },
        "XC717598": {
            "annotation": "10e26a08-826d-4e61-b293-20bffd0a306a"
        },
        "XC721485": {
            "annotation": "7f9a1ae9-c6b0-409b-88d8-c35fc2fcf71a"
        },
        "XC753497": {
            "annotation": "64865e4d-5963-44d4-81d9-443933b69b34"
        },
        "XC562689": {
            "annotation": "a3222ade-529e-4771-97bb-22f807115c1f"
        },
        "XC579435": {
            "annotation": "e456240b-8d56-401f-b245-f4fbc2047b1f"
        },
        "XC747349": {
            "annotation": "e0cc66df-49fe-415f-a1aa-d8a6f1b1c825"
        },
        "XC730618": {
            "annotation": "71b0c1c8-f9b0-4697-b2db-726af7efd5ac"
        },
        "XC601830": {
            "annotation": "65d75171-d7cc-4706-9899-b8ba684fbb35"
        },
        "XC639565": {
            "annotation": "7c3770d1-18b4-4680-8972-ace462fdcf39"
        },
        "XC637072": {
            "annotation": "712cb31e-12f4-4616-8167-326acf7423f8"
        },
        "XC714658": {
            "annotation": "37eca16d-205f-44b1-974f-5ccb383fcbef"
        },
        "XC711523": {
            "annotation": "39ccd31b-98a5-4f4b-a34e-7977017bc6a3"
        },
        "XC716578": {
            "annotation": "77f53a8d-1403-4617-bc7f-a9e2f5881b7f"
        },
        "XC677617": {
            "annotation": "395e511f-7fd6-44aa-9570-f1affd5ba69b"
        },
        "XC747444": {
            "annotation": "19b03d14-0b2a-4737-be85-a55e5361cee7"
        },
        "XC709340": {
            "annotation": "655356bc-b73e-4eb8-82d1-a30bef284079"
        },
        "XC711809": {
            "annotation": "692833cb-38cf-4f9e-8abf-8f21a7adfbc6"
        },
        "XC712088": {
            "annotation": "a8fe275a-3b79-42b5-8937-1a4e21da5fd0"
        },
        "XC664440": {
            "annotation": "6056ea71-becc-4d08-8f6d-572885014e28"
        },
        "XC738832": {
            "annotation": "e9527ac2-83e9-485d-9693-337e8d151bbf"
        },
        "XC704729": {
            "annotation": "e826abb0-b6af-4ff1-a9c2-c97a27c08412"
        },
        "XC699031": {
            "annotation": "693e4de4-c46d-4f0a-8d71-afa0c3ecd70b"
        },
        "XC696696": {
            "annotation": "2136f73a-022b-43a8-8358-b91d2e2d9c57"
        },
        "XC561147": {
            "annotation": "277f7c27-7957-4ec7-8bc3-718944dab305"
        },
        "XC659403": {
            "annotation": "bcf3eac8-618a-4d54-8dee-2d6e51e0f732"
        },
        "XC480985": {
            "annotation": "5c47bafa-f2b1-4653-a3c0-f5e8ff7dac03"
        },
        "XC144305": {
            "annotation": "62472f58-bad6-47cd-a10d-ae6db1cc81d1"
        },
        "XC740244": {
            "annotation": "393f1b5e-fdac-4927-829d-401f2bf84571"
        },
        "XC638482": {
            "annotation": "c4490339-8324-453d-bc79-495e03ff44d5"
        },
        "XC627886": {
            "annotation": "640d9f01-db4c-4793-96e4-722f77a721e2"
        },
        "XC612697": {
            "annotation": "d567c46b-8147-4f9a-80ea-0a0f636ebf7b"
        },
        "XC722830": {
            "annotation": "276da1ea-d387-4142-a06e-9140b20273b3"
        },
        "XC711618": {
            "annotation": "b2b68276-bfc1-4aeb-be2e-6cb2095bfe5c"
        },
        "XC694594": {
            "annotation": "fc737b80-b78a-4d08-93d9-c1c54298164f"
        },
        "XC662109": {
            "annotation": "94f33b08-f3e1-428c-9688-48b6f3b7b15a"
        },
        "XC747476": {
            "annotation": "421aed7f-8699-4be7-b405-1526b669c33e"
        },
        "XC718647": {
            "annotation": "4ceca62d-bc77-4a4e-8a82-413e7baf4ea2"
        },
        "XC717932": {
            "annotation": "09d63ec3-2e84-4b91-8cec-6d2cafd6dde5"
        },
        "XC716602": {
            "annotation": "5b1985ea-bc5e-496a-b494-1dc333792878"
        },
        "XC742204": {
            "annotation": "ed64add9-cdab-4439-b2e2-a878405abeba"
        },
        "XC738925": {
            "annotation": "83dff50b-cb92-4e33-ab3b-d4188ac70481"
        },
        "XC728318": {
            "annotation": "c4f38a1f-41e1-4b80-92e9-3abfe9cca72b"
        },
        "XC356339": {
            "annotation": "f5fc2417-caf1-4c0a-ae94-a36864d9642a"
        },
        "XC623387": {
            "annotation": "340f570b-850a-4b4f-8415-cd61de3d2543"
        },
        "XC636894": {
            "annotation": "c7e2265c-7211-491c-bcc5-f748f4a5d314"
        },
        "XC680533": {
            "annotation": "745df9d4-dacb-4569-961f-8c2c5663926b"
        },
        "XC689772": {
            "annotation": "d65fc9af-79d0-4ad4-9c2d-c5cffaf87439"
        },
        "XC690235": {
            "annotation": "9b133bdc-d1f2-4081-b4c4-413ba41f2a84"
        },
        "XC523093": {
            "annotation": "739e0ce5-fdd1-4f15-8139-4b2dcf65ebbb"
        },
        "XC153176": {
            "annotation": "6069bdb1-0e8e-404f-b319-61a1b8837ed1"
        },
        "XC512253": {
            "annotation": "b60e05ef-a9fb-43aa-b5d5-7f412f267663"
        },
        "XC748807": {
            "annotation": "fa33f5d3-d594-4670-ae43-610e203f4388"
        },
        "XC696593": {
            "annotation": "8f216496-f4cb-4b0c-b800-f1dcb862ab54"
        },
        "XC401879": {
            "annotation": "c9ae92e9-15d4-40bf-b965-ed5dcdcce494"
        },
        "XC153139": {
            "annotation": "47e6899f-1009-4a20-9762-ceb4cdbf8a8b"
        },
        "XC748448": {
            "annotation": "047733c0-79b6-4da5-be10-4cb2a3c5f91e"
        },
        "XC717706": {
            "annotation": "80eca271-2fef-41f3-8b91-aeebe09ae67a"
        },
        "XC709186": {
            "annotation": "19758d87-f98b-4f31-83f1-c0270b0d347b"
        },
        "XC692954": {
            "annotation": "66516aa8-2ade-40f1-9e76-df8e8d487129"
        },
        "XC736819": {
            "annotation": "a0d207c0-09ed-44cb-a133-dacc0499e2a1"
        },
        "XC586791": {
            "annotation": "eede3de6-1261-4f51-912b-59a71933e369"
        },
        "XC507636": {
            "annotation": "2919a585-7781-4b1b-9f06-b0d7febe16db"
        },
        "XC342807": {
            "annotation": "58a90096-7572-47f1-9a6a-f0196c428767"
        },
        "XC757580": {
            "annotation": "62ed2433-0d14-4ca9-a460-545319f4cdb9"
        },
        "XC695874": {
            "annotation": "03173df6-92d0-4a50-903c-d6b7897a31df"
        },
        "XC668447": {
            "annotation": "a9f9fbea-43b4-4f14-8475-5ffed4ae229a"
        },
        "XC628913": {
            "annotation": "0e8a0120-4104-47af-89b3-f4143ade256a"
        },
        "XC737609": {
            "annotation": "1a088cea-f487-4c2c-860c-92d4111dd831"
        },
        "XC733673": {
            "annotation": "7b47a484-bb96-4b25-a1db-77916e1bb598"
        },
        "XC477557": {
            "annotation": "dd353bcf-bc3a-44fc-b650-911a5d298ddb"
        },
        "XC391094": {
            "annotation": "70dfd05f-eb6a-4083-8217-44a5aa07a80e"
        },
        "XC747225": {
            "annotation": "f7faca73-d270-4226-81fa-3095c8de676f"
        },
        "XC721480": {
            "annotation": "ef3f5593-8d22-46cd-8b18-0a8720dfbe89"
        },
        "XC662194": {
            "annotation": "91117c2f-e031-4390-8286-67677eb5139f"
        },
        "XC650609": {
            "annotation": "b6370250-95ff-4976-b21f-84c86fa2417d"
        },
        "XC709149": {
            "annotation": "fdedd015-85e7-4851-8da6-347810c7f9b7"
        },
        "XC659357": {
            "annotation": "7c4ac0fe-76de-4578-911f-79196ada1a4d"
        },
        "XC649816": {
            "annotation": "edb76be1-8c8f-4b7a-bd48-fb3c7eb54b85"
        },
        "XC380866": {
            "annotation": "945a0fa1-e35f-4936-b555-bc4606e491f4"
        },
        "XC759205": {
            "annotation": "dcf79d25-7da2-44d1-acba-d4101e04ee7e"
        },
        "XC745892": {
            "annotation": "10d5637c-fca9-4b04-bb16-6a983e4fa60e"
        },
        "XC623396": {
            "annotation": "2ce5d2c0-1835-49c4-9fb8-426d1963a1fc"
        },
        "XC591289": {
            "annotation": "043dff12-65cc-4773-9882-0e5eb879779c"
        },
        "XC688398": {
            "annotation": "16e4f4da-6b57-4454-a300-1f09c201d76d"
        },
        "XC688395": {
            "annotation": "f666f917-b93c-4674-8f87-9c2794de6c7f"
        },
        "XC625475": {
            "annotation": "fb0067f2-f7fe-4d60-8a8d-4ad84ec7f76f"
        },
        "XC569163": {
            "annotation": "beb3a4ea-4c4b-46f8-92cb-fe61a669f0f5"
        },
        "XC731822": {
            "annotation": "47b664b5-d812-43da-ae99-fc96415b28b8"
        },
        "XC733540": {
            "annotation": "125c050d-14b0-4190-905b-baf062693b0a"
        },
        "XC599964": {
            "annotation": "58f42093-0601-4ad6-aa48-9000b030b53b"
        },
        "XC425901": {
            "annotation": "5f9515c0-a26f-43ac-b79c-ae9181662fc9"
        },
        "XC738789": {
            "annotation": "76bafe58-7d7d-4bd8-91cf-5418a1431828"
        },
        "XC626840": {
            "annotation": "31b95366-1e22-451c-aa01-fdd1b48d6e75"
        },
        "XC591286": {
            "annotation": "3035b146-3bbb-4876-a3b6-6d88361d756d"
        },
        "XC591285": {
            "annotation": "b509492d-8153-4ff3-8f83-5013ecd630dc"
        },
        "XC531085": {
            "annotation": "087eea98-5f65-4a48-a953-44f99634299d"
        },
        "XC663884": {
            "annotation": "d36eddae-ea50-44fa-8abc-9e42bbd91a76"
        },
        "XC134564": {
            "annotation": "a62e960c-3b1f-4153-a707-3a3b2cab3df2"
        },
        "XC186477": {
            "annotation": "802b8a08-86e8-4678-89ad-bac80141bd3b"
        },
        "XC560380": {
            "annotation": "1ca76061-073c-48ad-9643-4afc2c597821"
        },
        "XC551446": {
            "annotation": "ef570dfe-21aa-4a84-bdb5-2cabe1fef960"
        },
        "XC385254": {
            "annotation": "393479eb-dd38-400f-8364-bdc8f9259f37"
        },
        "XC240516": {
            "annotation": "db23c9df-f59f-4c19-a61b-b4723b937f6e"
        },
        "XC758773": {
            "annotation": "668a6098-2e99-4bd0-b124-e04407430706"
        },
        "XC756077": {
            "annotation": "a132a4b8-2fbf-49c3-a0b2-21204d01aea6"
        },
        "XC734981": {
            "annotation": "39822e1a-fed5-4642-beac-9eaf8040c603"
        },
        "XC732107": {
            "annotation": "ddf7f2d2-6205-446c-934c-deb62edb1dcd"
        },
        "XC728938": {
            "annotation": "4a870355-0d2a-421f-b131-5e3b4f86db91"
        },
        "XC644761": {
            "annotation": "c3c90bb5-dbac-4cc0-a6e4-3893cf2db7a2"
        },
        "XC615949": {
            "annotation": "b8387682-4e68-4ea9-9c0a-d17491c4aaa7"
        },
        "XC547450": {
            "annotation": "4b9b457d-9c56-43e7-9e5c-f58f5ae91624"
        },
        "XC547044": {
            "annotation": "62d5ca27-2344-40b1-bbad-24bb8a88a4a9"
        },
        "XC568390": {
            "annotation": "aebffe23-83fa-4c5b-8a5e-d42bcf11c7d4"
        },
        "XC651539": {
            "annotation": "64880c2f-61ff-44de-9754-d9bf2d91e9cb"
        },
        "XC761053": {
            "annotation": "c4300ee2-07ce-458b-9d41-06bb89aa890e"
        },
        "XC647696": {
            "annotation": "47ede9b2-b07d-4172-8957-4bbe0904b661"
        },
        "XC647695": {
            "annotation": "e37b4edc-a540-48eb-8328-f89dbb586894"
        },
        "XC647697": {
            "annotation": "8f23e889-a358-4978-8340-58f8d74b1008"
        },
        "XC107248": {
            "annotation": "e78f26cd-1cd9-40f6-8949-2853d24c6dbd"
        },
        "XC573440": {
            "annotation": "6aecb3ba-aa1b-49e6-8e3b-c654ca661e01"
        },
        "XC480911": {
            "annotation": "0e0077de-148d-4b21-957e-c1414633f1d6"
        },
        "XC414375": {
            "annotation": "26d6926b-c2dc-4565-8cb2-d23f901fc0e7"
        },
        "XC104499": {
            "annotation": "b41ee374-b37c-4964-a13a-c86df54def6e"
        }
    },
    "multiCaseConfig": {
        "inputs": {
            "inputAudio_key_": {
                "type": "PROPERTY_NAME_WITH_INDEX"
            },
            "inputROIDataList_key1_": {
                "type": "ARRAY"
            }
        }
    },
    "input": {
        "XC713500": {
            "inputAudio_key_": {
                "value": "482e06c5-d2e4-4ff5-9b9f-3aacc70e6659"
            },
            "inputROIDataList_key1_": {
                "value": "85bf1e1d-6dcd-407a-9047-c0fef8f371ef"
            }
        },
        "XC729943": {
            "inputAudio_key_": {
                "value": "2bff8b7b-1209-4b6c-8485-d520c249417d"
            },
            "inputROIDataList_key1_": {
                "value": "4ceb63ac-dacf-4d09-b443-f790a412f9eb"
            }
        },
        "XC711568": {
            "inputAudio_key_": {
                "value": "83b1c9ed-c65c-416d-8536-69388d931546"
            },
            "inputROIDataList_key1_": {
                "value": "70c6ab5d-54a7-4f78-a5e1-50ada8e19d21"
            }
        },
        "XC629906": {
            "inputAudio_key_": {
                "value": "978d72f6-a9d1-4d55-97a7-13b05cfc61f5"
            },
            "inputROIDataList_key1_": {
                "value": "ad05af16-7035-4f1f-ba01-c1033b0da4aa"
            }
        },
        "XC757104": {
            "inputAudio_key_": {
                "value": "c2630db5-3b04-4ef0-af34-d4f8cb85842c"
            },
            "inputROIDataList_key1_": {
                "value": "17a1d8cb-fd56-466c-9981-3cf36cc2a371"
            }
        },
        "XC707059": {
            "inputAudio_key_": {
                "value": "a0f58966-e18e-403d-bea8-d49b557fa5eb"
            },
            "inputROIDataList_key1_": {
                "value": "7f4451a3-66b9-4563-97fd-991322d8beb0"
            }
        },
        "XC703671": {
            "inputAudio_key_": {
                "value": "8c59aec4-6944-4982-bec4-8266cdbd8041"
            },
            "inputROIDataList_key1_": {
                "value": "e216e89c-a091-4c3d-a25b-e5f595f1d456"
            }
        },
        "XC503776": {
            "inputAudio_key_": {
                "value": "283117b5-8906-4445-95c6-cc9ef29ad646"
            },
            "inputROIDataList_key1_": {
                "value": "a86ffb7f-3f5a-4733-b4f4-2f737b3a652d"
            }
        },
        "XC758384": {
            "inputAudio_key_": {
                "value": "42d3bb30-2313-4fde-8f37-d99a8d64c9b6"
            },
            "inputROIDataList_key1_": {
                "value": "0e43ca63-6842-4bb3-b461-40f202e67a3c"
            }
        },
        "XC580624": {
            "inputAudio_key_": {
                "value": "3147d662-4e41-4d83-a818-73b9875acbfc"
            },
            "inputROIDataList_key1_": {
                "value": "922008ba-6993-46e4-8f0e-bb2f02ec79ec"
            }
        },
        "XC662897": {
            "inputAudio_key_": {
                "value": "f15364bf-43c7-406a-8b11-775885b5677d"
            },
            "inputROIDataList_key1_": {
                "value": "f20dcc70-875a-4bee-9b5b-9d3b36d0bb8e"
            }
        },
        "XC652017": {
            "inputAudio_key_": {
                "value": "77261711-905d-4f3c-a007-4f0ddc8ea117"
            },
            "inputROIDataList_key1_": {
                "value": "2f3031d5-4cb1-403b-9055-0d86be0a009c"
            }
        },
        "XC672979": {
            "inputAudio_key_": {
                "value": "9d9905f6-c683-4080-8d30-4dd5160fbcf7"
            },
            "inputROIDataList_key1_": {
                "value": "921b80de-8390-460d-8991-c3bea1bd4fb8"
            }
        },
        "XC699216": {
            "inputAudio_key_": {
                "value": "5ae7bbaa-42c2-4948-9d9e-682dda707447"
            },
            "inputROIDataList_key1_": {
                "value": "3d301a67-9df0-4fb1-8218-ebab72e0123a"
            }
        },
        "XC721257": {
            "inputAudio_key_": {
                "value": "61981398-0890-4153-891f-2da6548f0f94"
            },
            "inputROIDataList_key1_": {
                "value": "747c2f45-bac1-4e9f-b762-27782ce0ccf6"
            }
        },
        "XC738427": {
            "inputAudio_key_": {
                "value": "098c952d-20a2-405b-8a4c-ec180a435c26"
            },
            "inputROIDataList_key1_": {
                "value": "02d67f65-b500-4cfc-9c07-5f3c77bf33f9"
            }
        },
        "XC692256": {
            "inputAudio_key_": {
                "value": "6df4b1c0-cd81-4ea2-a55c-e87087296b14"
            },
            "inputROIDataList_key1_": {
                "value": "6a8c01db-3bf8-4298-a0ab-dbdd74407e74"
            }
        },
        "XC707745": {
            "inputAudio_key_": {
                "value": "ae030aa6-3c42-4968-9477-77485045a950"
            },
            "inputROIDataList_key1_": {
                "value": "549522ff-60d0-4dbc-a94c-318cd9afbec3"
            }
        },
        "XC711602": {
            "inputAudio_key_": {
                "value": "d7892659-1713-4cf2-ae54-8f639e69d91b"
            },
            "inputROIDataList_key1_": {
                "value": "bad115f2-54cd-484f-9692-e72877548fc7"
            }
        },
        "XC757940": {
            "inputAudio_key_": {
                "value": "94a54fe0-0ee4-4d63-8c5a-809f21430ff4"
            },
            "inputROIDataList_key1_": {
                "value": "65f02d00-702e-47e9-8aea-e468f0ff98a5"
            }
        },
        "XC658273": {
            "inputAudio_key_": {
                "value": "6ac820fd-0ead-41cd-b0b0-ae51c4e31f94"
            },
            "inputROIDataList_key1_": {
                "value": "f9bde38d-0f6e-4d34-9be5-2ba60b21017a"
            }
        },
        "XC658967": {
            "inputAudio_key_": {
                "value": "cd9b6a80-7aad-4bb5-bb52-44056da52455"
            },
            "inputROIDataList_key1_": {
                "value": "9aff03d2-dc44-4302-a4cc-75f02b52059d"
            }
        },
        "XC713144": {
            "inputAudio_key_": {
                "value": "1335f60b-7826-41fa-8ed2-f91c1677332b"
            },
            "inputROIDataList_key1_": {
                "value": "f8b51b93-33fc-4b0b-945e-e3c98feeacc6"
            }
        },
        "XC720846": {
            "inputAudio_key_": {
                "value": "7179bcb8-dd1c-4054-8e32-ac38a98d0e46"
            },
            "inputROIDataList_key1_": {
                "value": "410aa0f1-61dd-4010-b4e4-cd4a63554d85"
            }
        },
        "XC716880": {
            "inputAudio_key_": {
                "value": "8b4d1430-45bc-477f-9867-f8c6da3c0834"
            },
            "inputROIDataList_key1_": {
                "value": "18530218-455f-40c8-98b8-fa23af9e1875"
            }
        },
        "XC718046": {
            "inputAudio_key_": {
                "value": "c75ab614-2aed-4de6-b5a3-8ec4c46f3d76"
            },
            "inputROIDataList_key1_": {
                "value": "23a34097-2c64-4d49-95f6-f1bbeb8eeb24"
            }
        },
        "XC720088": {
            "inputAudio_key_": {
                "value": "bfd0a364-0ac2-4f12-b513-4e5d11304436"
            },
            "inputROIDataList_key1_": {
                "value": "d636a549-441d-4200-a2ee-0881f0e4ce5a"
            }
        },
        "XC756695": {
            "inputAudio_key_": {
                "value": "73d5cd63-968e-4f45-a218-f6186342024a"
            },
            "inputROIDataList_key1_": {
                "value": "2cff5a9b-cdab-41c0-98d0-59a3218b77e1"
            }
        },
        "XC756385": {
            "inputAudio_key_": {
                "value": "00c0f60f-df11-414e-a9d9-4d56138d010e"
            },
            "inputROIDataList_key1_": {
                "value": "4c9c6606-a2e3-4ead-acef-3f4edbc7054f"
            }
        },
        "XC733928": {
            "inputAudio_key_": {
                "value": "f2b5b4f2-70ea-4a5e-846e-9e8e074f64d2"
            },
            "inputROIDataList_key1_": {
                "value": "26d03d08-da24-42b6-b609-d1f65b75ff73"
            }
        },
        "XC750447": {
            "inputAudio_key_": {
                "value": "8bd2b6e0-5c51-4e8a-a5f3-4ed189193c1f"
            },
            "inputROIDataList_key1_": {
                "value": "04291455-ff49-48f8-a0e9-dcfed0d5449e"
            }
        },
        "XC747372": {
            "inputAudio_key_": {
                "value": "cfd8634b-d7d8-4ef1-93d5-de8764299834"
            },
            "inputROIDataList_key1_": {
                "value": "70689e6f-a970-46db-8031-800e949b8ce6"
            }
        },
        "XC548790": {
            "inputAudio_key_": {
                "value": "ea126774-a414-4c88-8e34-4475e36452a3"
            },
            "inputROIDataList_key1_": {
                "value": "435f9a2b-4ce4-4156-b940-5604b37ef586"
            }
        },
        "XC551707": {
            "inputAudio_key_": {
                "value": "b0de4d71-cecf-4346-91e0-98402011a627"
            },
            "inputROIDataList_key1_": {
                "value": "85615eb1-8198-4a7d-88b3-cdecf58e1ada"
            }
        },
        "XC715734": {
            "inputAudio_key_": {
                "value": "7e47779c-74bb-43c6-90d0-0e1142a147e4"
            },
            "inputROIDataList_key1_": {
                "value": "170a8d34-14c9-423a-8074-c69a44106074"
            }
        },
        "XC718420": {
            "inputAudio_key_": {
                "value": "77882c33-1c42-47ae-aad2-dae251df42b5"
            },
            "inputROIDataList_key1_": {
                "value": "9bdf838e-1a9f-46c5-92ce-a1174ee97389"
            }
        },
        "XC716794": {
            "inputAudio_key_": {
                "value": "d849e2d2-0636-4493-9ad8-0d7541b96304"
            },
            "inputROIDataList_key1_": {
                "value": "1a5b7f9d-56af-4674-9a78-de0df5eeba64"
            }
        },
        "XC717598": {
            "inputAudio_key_": {
                "value": "dfd4d0a4-1185-4dcc-a42d-0dca75acccf4"
            },
            "inputROIDataList_key1_": {
                "value": "fa948663-1329-4538-8e9f-8e87e56a55db"
            }
        },
        "XC721485": {
            "inputAudio_key_": {
                "value": "a2e8ea1a-f938-4eb0-9017-fbda4ede519c"
            },
            "inputROIDataList_key1_": {
                "value": "b3c3c18a-e84d-4db0-bb0f-bdde50313531"
            }
        },
        "XC753497": {
            "inputAudio_key_": {
                "value": "ebd2194d-9fa7-40ae-b180-e2a0e05f3e1a"
            },
            "inputROIDataList_key1_": {
                "value": "cfbd4ac3-fabc-4ee3-b86e-df0421af6d39"
            }
        },
        "XC562689": {
            "inputAudio_key_": {
                "value": "88b7f06d-db23-4a3f-b947-ef26f0b74347"
            },
            "inputROIDataList_key1_": {
                "value": "19b77a54-6b98-4a0d-b3d9-d57fa649802d"
            }
        },
        "XC579435": {
            "inputAudio_key_": {
                "value": "3eb39ea6-4304-481c-9ae0-083b3af8c834"
            },
            "inputROIDataList_key1_": {
                "value": "bc9274f5-838c-44b1-9108-b77819c51833"
            }
        },
        "XC747349": {
            "inputAudio_key_": {
                "value": "dbc59a00-117f-4728-bdab-c7a30accacfb"
            },
            "inputROIDataList_key1_": {
                "value": "134559a9-e6e2-49ad-9f0b-e9f0d47ed8a4"
            }
        },
        "XC730618": {
            "inputAudio_key_": {
                "value": "f6887d91-f079-4847-9884-5ddd05420f42"
            },
            "inputROIDataList_key1_": {
                "value": "cf5bf124-4406-4567-b6c1-e439418893f6"
            }
        },
        "XC601830": {
            "inputAudio_key_": {
                "value": "f4aab546-fbde-4f03-8900-8b1dc3d947e1"
            },
            "inputROIDataList_key1_": {
                "value": "bd56deea-acb4-45d5-9fe8-f9a8e553da3a"
            }
        },
        "XC639565": {
            "inputAudio_key_": {
                "value": "16e89568-05b9-4340-9b3c-5cf1a6be2711"
            },
            "inputROIDataList_key1_": {
                "value": "9220afca-5dfa-4830-ae03-5829f8de5cc7"
            }
        },
        "XC637072": {
            "inputAudio_key_": {
                "value": "03851e58-6d4e-42c9-ab7e-8beb6bf86bb3"
            },
            "inputROIDataList_key1_": {
                "value": "ec08f381-e057-40c9-b25f-2f743b9a526e"
            }
        },
        "XC714658": {
            "inputAudio_key_": {
                "value": "77b3e6f9-908e-41b6-83d2-ed2d77120166"
            },
            "inputROIDataList_key1_": {
                "value": "941ef5ac-880c-43d2-948e-18aea8c1a133"
            }
        },
        "XC711523": {
            "inputAudio_key_": {
                "value": "39be51a7-6feb-4849-ab57-f007511b78d9"
            },
            "inputROIDataList_key1_": {
                "value": "77981f35-8577-4249-b3f3-12db26d477e1"
            }
        },
        "XC716578": {
            "inputAudio_key_": {
                "value": "fa43e8da-9bb7-4996-ac50-62839a6ef3c1"
            },
            "inputROIDataList_key1_": {
                "value": "2cdf269c-ec29-4d16-9d69-e5820abd30f9"
            }
        },
        "XC677617": {
            "inputAudio_key_": {
                "value": "fd44dd63-fb5d-424d-927c-256ea2c92244"
            },
            "inputROIDataList_key1_": {
                "value": "654b66a5-7d57-4465-aa92-4ee3c1292268"
            }
        },
        "XC747444": {
            "inputAudio_key_": {
                "value": "9a81965e-ae8b-489b-9d3c-4c29b5e072e6"
            },
            "inputROIDataList_key1_": {
                "value": "bc7bdd7e-b97a-4ee0-94e4-aae1f9a9a9a3"
            }
        },
        "XC709340": {
            "inputAudio_key_": {
                "value": "9cfc4589-e2ab-48f7-9259-0f9fb72ff263"
            },
            "inputROIDataList_key1_": {
                "value": "98bd000d-1f86-49be-bcc1-8aeb303228a1"
            }
        },
        "XC711809": {
            "inputAudio_key_": {
                "value": "32334523-6144-4085-a3aa-7871889b0351"
            },
            "inputROIDataList_key1_": {
                "value": "7e12a321-e387-480d-a2ef-64d84f701c77"
            }
        },
        "XC712088": {
            "inputAudio_key_": {
                "value": "ddc64300-9d4d-4dcc-8e5e-217681503e97"
            },
            "inputROIDataList_key1_": {
                "value": "9bef0ebf-1843-491b-b376-fa1f885a8d93"
            }
        },
        "XC664440": {
            "inputAudio_key_": {
                "value": "1c46ec28-3fab-4c80-b30f-3d93c684e518"
            },
            "inputROIDataList_key1_": {
                "value": "25bb0c35-56c4-40e7-be91-ea7d3e46ec96"
            }
        },
        "XC738832": {
            "inputAudio_key_": {
                "value": "500d7985-3c9d-435e-b5f5-1d550b3943b5"
            },
            "inputROIDataList_key1_": {
                "value": "970990dd-fb65-45ec-9d4d-24485d2b2bc1"
            }
        },
        "XC704729": {
            "inputAudio_key_": {
                "value": "55ed2b34-8a2e-4541-8e11-bf4560da6912"
            },
            "inputROIDataList_key1_": {
                "value": "92e11efe-2231-4ea6-bc2c-1b5d6680db28"
            }
        },
        "XC699031": {
            "inputAudio_key_": {
                "value": "78b466c8-9df8-4b6c-a551-7e313d8cf3da"
            },
            "inputROIDataList_key1_": {
                "value": "c0687bd7-3272-4322-a2b1-c8a349180bcf"
            }
        },
        "XC696696": {
            "inputAudio_key_": {
                "value": "633fd338-27b2-4f91-a45f-14588d31a78e"
            },
            "inputROIDataList_key1_": {
                "value": "74a26d93-9b39-4eb1-882f-e57c6c399ce0"
            }
        },
        "XC561147": {
            "inputAudio_key_": {
                "value": "acb35a33-5e87-46a8-863f-0368d4cdd042"
            },
            "inputROIDataList_key1_": {
                "value": "d3e81abe-0d83-4850-814b-6ea2eeea4c35"
            }
        },
        "XC659403": {
            "inputAudio_key_": {
                "value": "b27c090d-ca69-4335-bfd8-3a1bb0711472"
            },
            "inputROIDataList_key1_": {
                "value": "a6dddb19-4559-49bf-b770-db7a7f8bb0f0"
            }
        },
        "XC480985": {
            "inputAudio_key_": {
                "value": "2757b3a8-4bc8-4030-bbea-c0ffacdf3f10"
            },
            "inputROIDataList_key1_": {
                "value": "e625274d-a5ee-40bd-a9cd-4fbf06c6ad15"
            }
        },
        "XC144305": {
            "inputAudio_key_": {
                "value": "8e8aad20-2b10-449e-b3ef-bfe833633552"
            },
            "inputROIDataList_key1_": {
                "value": "19fec277-3a8d-4844-93e7-bce6b3997648"
            }
        },
        "XC740244": {
            "inputAudio_key_": {
                "value": "96cde438-bbe6-4101-be7e-458793722cb7"
            },
            "inputROIDataList_key1_": {
                "value": "3f8044d3-01c0-415c-a9d0-97167f3acddb"
            }
        },
        "XC638482": {
            "inputAudio_key_": {
                "value": "0f25364c-75aa-4c72-99b6-7be13211e509"
            },
            "inputROIDataList_key1_": {
                "value": "28fc0fb6-4034-4d7e-894a-95345a766131"
            }
        },
        "XC627886": {
            "inputAudio_key_": {
                "value": "4d581016-c6c6-4e29-921b-574dc6e82b0f"
            },
            "inputROIDataList_key1_": {
                "value": "abf54a43-bc67-4445-a1e7-f655fff15d6c"
            }
        },
        "XC612697": {
            "inputAudio_key_": {
                "value": "cec1b472-1e10-4d83-ab5a-e4494bb40bf6"
            },
            "inputROIDataList_key1_": {
                "value": "f979d12f-de0f-4ea0-80bb-a5b18b528438"
            }
        },
        "XC722830": {
            "inputAudio_key_": {
                "value": "dcd9538d-c68a-47b7-88d3-53c063de56e9"
            },
            "inputROIDataList_key1_": {
                "value": "7e592eb3-56c5-4253-97e9-e42e35f3201a"
            }
        },
        "XC711618": {
            "inputAudio_key_": {
                "value": "182f6c8c-d79c-4ef3-9c30-e31b8f90d7d4"
            },
            "inputROIDataList_key1_": {
                "value": "ad5bdf9b-2760-4afa-b455-b7fb070b725e"
            }
        },
        "XC694594": {
            "inputAudio_key_": {
                "value": "0fe218ec-4540-4d72-a529-73960e749799"
            },
            "inputROIDataList_key1_": {
                "value": "fcb85b0a-aace-43e8-9b54-b4b476f30827"
            }
        },
        "XC662109": {
            "inputAudio_key_": {
                "value": "c1191e67-2047-4380-8e68-12f594a6e903"
            },
            "inputROIDataList_key1_": {
                "value": "3869b3e1-b5a4-42c4-9cbd-ac47b4c0aea6"
            }
        },
        "XC747476": {
            "inputAudio_key_": {
                "value": "394109da-7378-465d-a638-ec136c49db14"
            },
            "inputROIDataList_key1_": {
                "value": "ab2515c8-6972-4c49-9d34-4b2229357583"
            }
        },
        "XC718647": {
            "inputAudio_key_": {
                "value": "90189754-8068-4523-98e0-c2d22d42c8e1"
            },
            "inputROIDataList_key1_": {
                "value": "5cfec0d8-0a74-478f-8efe-a12ef5c9b069"
            }
        },
        "XC717932": {
            "inputAudio_key_": {
                "value": "29455dce-2d4a-48e7-b2de-0ccca2992b84"
            },
            "inputROIDataList_key1_": {
                "value": "d4f0ed3a-7e64-4238-85fa-fbc3feb2d1d3"
            }
        },
        "XC716602": {
            "inputAudio_key_": {
                "value": "fe5f09de-24f0-4b7b-ac26-bb7c1064a256"
            },
            "inputROIDataList_key1_": {
                "value": "9135433a-881f-4d76-9502-c92ad381d88f"
            }
        },
        "XC742204": {
            "inputAudio_key_": {
                "value": "9de30719-3e72-48c2-8d66-6552b50be078"
            },
            "inputROIDataList_key1_": {
                "value": "fc5669a5-378b-4c5a-884c-0d6204c7f367"
            }
        },
        "XC738925": {
            "inputAudio_key_": {
                "value": "286a414b-6781-4ac8-b853-6e664cc9d832"
            },
            "inputROIDataList_key1_": {
                "value": "220ceb8e-5c14-44f7-9d77-d8a7bcf11229"
            }
        },
        "XC728318": {
            "inputAudio_key_": {
                "value": "7cadba34-ebee-48bf-8f56-a25f7d7cf01e"
            },
            "inputROIDataList_key1_": {
                "value": "e03fac1e-9f43-4f20-b48f-e8f06a776b85"
            }
        },
        "XC356339": {
            "inputAudio_key_": {
                "value": "2b9f75ed-8151-4fbb-9d5b-378e9df2ed38"
            },
            "inputROIDataList_key1_": {
                "value": "95dd4e88-d577-4b6d-9787-2e97e5888300"
            }
        },
        "XC623387": {
            "inputAudio_key_": {
                "value": "d9256edf-7c01-4985-b64b-39c4db4a64f0"
            },
            "inputROIDataList_key1_": {
                "value": "0e9a03f8-abba-4663-b10e-71032cd9f55d"
            }
        },
        "XC636894": {
            "inputAudio_key_": {
                "value": "39159fbb-7772-4140-90d6-1985597160da"
            },
            "inputROIDataList_key1_": {
                "value": "54667ab9-ee30-40a7-bfbd-f08ab0218ec9"
            }
        },
        "XC680533": {
            "inputAudio_key_": {
                "value": "a31a9ff3-5b8e-4304-9f09-eb126d0fa7c1"
            },
            "inputROIDataList_key1_": {
                "value": "46167284-8f43-4b4f-b9c6-c3eecb10850e"
            }
        },
        "XC689772": {
            "inputAudio_key_": {
                "value": "6d333468-9098-431c-8630-03100cd0c46b"
            },
            "inputROIDataList_key1_": {
                "value": "cc83eab0-c14f-4714-9838-9619dce26c67"
            }
        },
        "XC690235": {
            "inputAudio_key_": {
                "value": "4388dbe1-79b7-4274-b241-06926335dec0"
            },
            "inputROIDataList_key1_": {
                "value": "b2ba4445-22d5-4bf7-9d59-28b686beb8b0"
            }
        },
        "XC523093": {
            "inputAudio_key_": {
                "value": "0ee3c390-0d29-4982-8963-80f21b0734d3"
            },
            "inputROIDataList_key1_": {
                "value": "781bbaba-a8fd-4dba-8057-7c3d9f1ed65c"
            }
        },
        "XC153176": {
            "inputAudio_key_": {
                "value": "e278507a-344a-418a-9642-0c7f8b4f28ed"
            },
            "inputROIDataList_key1_": {
                "value": "bc87e2fa-61d1-403c-a058-4e84239df771"
            }
        },
        "XC512253": {
            "inputAudio_key_": {
                "value": "db929a38-dbfb-45f2-afe3-d90c1fcf1951"
            },
            "inputROIDataList_key1_": {
                "value": "58970bc7-5b6b-4372-8dd7-b1be84b70d39"
            }
        },
        "XC748807": {
            "inputAudio_key_": {
                "value": "22343bcb-caab-4666-8923-6cf43c5579d5"
            },
            "inputROIDataList_key1_": {
                "value": "0112007a-5042-4af9-9ce2-909c1ac3003c"
            }
        },
        "XC696593": {
            "inputAudio_key_": {
                "value": "c07ee244-ce3a-4919-8279-65e150e861f9"
            },
            "inputROIDataList_key1_": {
                "value": "be88445c-9a79-4758-95f0-f27733939b73"
            }
        },
        "XC401879": {
            "inputAudio_key_": {
                "value": "77131857-b457-494c-9e99-7c7a84f51eff"
            },
            "inputROIDataList_key1_": {
                "value": "20ad8c90-bc3b-4e35-9f3a-eb7ce662d464"
            }
        },
        "XC153139": {
            "inputAudio_key_": {
                "value": "eb9758c0-13e1-443c-9c15-94f4f2e992cb"
            },
            "inputROIDataList_key1_": {
                "value": "ef7c4030-8ab8-41ce-80b5-84c7775022ed"
            }
        },
        "XC748448": {
            "inputAudio_key_": {
                "value": "82903fff-8d0f-4362-909e-d14e55d234e6"
            },
            "inputROIDataList_key1_": {
                "value": "a6501766-d8f4-4933-bbcb-acb6785a2c89"
            }
        },
        "XC717706": {
            "inputAudio_key_": {
                "value": "522f04e8-8199-4105-8169-6902666af70a"
            },
            "inputROIDataList_key1_": {
                "value": "1e22feaf-7d32-4649-b601-e48cc0ee8bb9"
            }
        },
        "XC709186": {
            "inputAudio_key_": {
                "value": "a0099438-ee67-496d-b137-a174a018c3d6"
            },
            "inputROIDataList_key1_": {
                "value": "c579d73d-db65-4b78-974f-6e8487842337"
            }
        },
        "XC692954": {
            "inputAudio_key_": {
                "value": "5caa52d7-7e38-4656-83b1-44759cf2823b"
            },
            "inputROIDataList_key1_": {
                "value": "2ced20e6-6cb0-46f6-8080-4a218ba9aa03"
            }
        },
        "XC736819": {
            "inputAudio_key_": {
                "value": "efb9b176-59db-4442-aa2a-82ad62bcc434"
            },
            "inputROIDataList_key1_": {
                "value": "e45ce2d3-dab0-452c-a66f-f7fc7ccad8b7"
            }
        },
        "XC586791": {
            "inputAudio_key_": {
                "value": "bea96735-5fd7-4391-9dbd-6786d9db65a4"
            },
            "inputROIDataList_key1_": {
                "value": "66bb06da-94ea-4e8f-ad68-b66bdf063f3f"
            }
        },
        "XC507636": {
            "inputAudio_key_": {
                "value": "6b4b1ac8-629c-4e56-8f65-8c31d1e889f1"
            },
            "inputROIDataList_key1_": {
                "value": "17ec3b9f-d423-4e3b-90f5-ac376a2a06eb"
            }
        },
        "XC342807": {
            "inputAudio_key_": {
                "value": "6bb8f58e-9bee-431e-80c6-0a5b85c95873"
            },
            "inputROIDataList_key1_": {
                "value": "89387998-2bc1-4346-be3c-78a5d4004095"
            }
        },
        "XC757580": {
            "inputAudio_key_": {
                "value": "6056865f-3719-4765-9071-8300e0c6df3d"
            },
            "inputROIDataList_key1_": {
                "value": "c9fb2377-6593-4201-b16a-9933ac71e8f1"
            }
        },
        "XC695874": {
            "inputAudio_key_": {
                "value": "b1cb5524-b3e0-4ff4-9876-9b21ef580aeb"
            },
            "inputROIDataList_key1_": {
                "value": "f4b5e35d-5e07-4b3c-b212-c03196f65ba6"
            }
        },
        "XC668447": {
            "inputAudio_key_": {
                "value": "9991aab3-0972-4cde-ba62-91974c0d0fc8"
            },
            "inputROIDataList_key1_": {
                "value": "3e4fc070-3ea5-4779-b720-1022b8ea4075"
            }
        },
        "XC628913": {
            "inputAudio_key_": {
                "value": "30395f1d-fa22-42b0-a9d7-61ab69e1241d"
            },
            "inputROIDataList_key1_": {
                "value": "5f88297a-cd9d-468c-a1d1-92c05a9717e6"
            }
        },
        "XC737609": {
            "inputAudio_key_": {
                "value": "f412008f-2606-46ff-aa20-2cb6dd489517"
            },
            "inputROIDataList_key1_": {
                "value": "84593306-1a60-4b45-bf19-b5b70ef65885"
            }
        },
        "XC733673": {
            "inputAudio_key_": {
                "value": "4b271d37-0bf0-4109-9ec3-6bdb3f97dfcf"
            },
            "inputROIDataList_key1_": {
                "value": "cc38b208-3593-4b7f-91ea-808a0c40fa58"
            }
        },
        "XC477557": {
            "inputAudio_key_": {
                "value": "9012ae42-172b-41c2-af5a-179cd2d410c8"
            },
            "inputROIDataList_key1_": {
                "value": "e07a8b01-eb89-4f43-9499-f5fa59bab83a"
            }
        },
        "XC391094": {
            "inputAudio_key_": {
                "value": "b5ff1e83-3c0c-4a12-9fb4-f35b45b541e9"
            },
            "inputROIDataList_key1_": {
                "value": "e0294e89-12d4-41b2-8dd4-7bfa4a75af3e"
            }
        },
        "XC747225": {
            "inputAudio_key_": {
                "value": "4bbba953-7f80-4bbb-8a13-2ab239b809ec"
            },
            "inputROIDataList_key1_": {
                "value": "db69c3ac-9f40-46d3-b828-c03935e9e36e"
            }
        },
        "XC721480": {
            "inputAudio_key_": {
                "value": "a01b4624-b42f-4a30-9f25-7e3fc8bf41a1"
            },
            "inputROIDataList_key1_": {
                "value": "72ffbca2-c966-4889-b4e0-e7a2b7de6fa8"
            }
        },
        "XC662194": {
            "inputAudio_key_": {
                "value": "a9fa0824-d368-4f14-819f-f2eeb5c68f87"
            },
            "inputROIDataList_key1_": {
                "value": "2347e36f-8705-4d0f-a406-754f0ae1dbaa"
            }
        },
        "XC650609": {
            "inputAudio_key_": {
                "value": "da33595a-f64a-4a62-9ae5-43876f534b10"
            },
            "inputROIDataList_key1_": {
                "value": "b61debc9-646c-42b3-b494-91601f3db1e3"
            }
        },
        "XC709149": {
            "inputAudio_key_": {
                "value": "d7c59d00-77c0-4728-bb35-42d4d6e5be94"
            },
            "inputROIDataList_key1_": {
                "value": "c559e45c-d9e1-4420-927a-9df8abdd964e"
            }
        },
        "XC659357": {
            "inputAudio_key_": {
                "value": "41f938c3-7be1-4129-9fd1-66193cd1446a"
            },
            "inputROIDataList_key1_": {
                "value": "97c6f34a-786b-4c22-a761-77ebd77b6cf4"
            }
        },
        "XC649816": {
            "inputAudio_key_": {
                "value": "59a3e46b-291a-45e9-9410-21f35cad2b87"
            },
            "inputROIDataList_key1_": {
                "value": "35b6b317-f7bc-4756-949f-4326cdfe1d76"
            }
        },
        "XC380866": {
            "inputAudio_key_": {
                "value": "5625e1bf-5ceb-4e42-a8fe-9d00c11859e2"
            },
            "inputROIDataList_key1_": {
                "value": "346818a3-313e-4510-8129-15a9962efb58"
            }
        },
        "XC759205": {
            "inputAudio_key_": {
                "value": "136ebc3c-fdca-49b9-89d4-f2195910e64b"
            },
            "inputROIDataList_key1_": {
                "value": "93273b90-ef39-43c5-b8f6-7c9eaa5af496"
            }
        },
        "XC745892": {
            "inputAudio_key_": {
                "value": "46194b6a-1501-414f-977d-687862d0ced0"
            },
            "inputROIDataList_key1_": {
                "value": "aa7bbf3a-30f3-4877-a16a-447270de1796"
            }
        },
        "XC623396": {
            "inputAudio_key_": {
                "value": "39fd9c13-4f26-42aa-a595-5ac527ccbb58"
            },
            "inputROIDataList_key1_": {
                "value": "1baf5d17-191a-4eca-bf05-1f1b58f1554b"
            }
        },
        "XC591289": {
            "inputAudio_key_": {
                "value": "0a8360aa-e5ff-4229-85a5-8826f0c2bf50"
            },
            "inputROIDataList_key1_": {
                "value": "38207ce0-8181-4a2f-9ce6-0079b982d99b"
            }
        },
        "XC688398": {
            "inputAudio_key_": {
                "value": "8887a7eb-9ee7-4950-bfd3-ef5d866ce58c"
            },
            "inputROIDataList_key1_": {
                "value": "4581d03e-6bb3-4560-ba84-2e3aaab81c14"
            }
        },
        "XC688395": {
            "inputAudio_key_": {
                "value": "b136d0f4-cd58-48d4-a650-4c42a95d5b11"
            },
            "inputROIDataList_key1_": {
                "value": "bbaa980f-42c1-4937-9574-3e3a065b190b"
            }
        },
        "XC625475": {
            "inputAudio_key_": {
                "value": "8381bb9e-23ab-4a38-ad55-1bdc2a090ecf"
            },
            "inputROIDataList_key1_": {
                "value": "249b3be8-348e-4e9e-a381-aa67f7157087"
            }
        },
        "XC569163": {
            "inputAudio_key_": {
                "value": "ba723781-2f22-4a45-83c7-0c84bdf5cde9"
            },
            "inputROIDataList_key1_": {
                "value": "99d5e131-5159-4d1a-862c-1f9fef16d838"
            }
        },
        "XC731822": {
            "inputAudio_key_": {
                "value": "fc21ea7e-932f-4b36-aac1-85591eb86303"
            },
            "inputROIDataList_key1_": {
                "value": "0fe1438f-833b-423c-81b7-07de041c5ae9"
            }
        },
        "XC733540": {
            "inputAudio_key_": {
                "value": "93d332ff-f5d5-4377-ac09-6665b72f3342"
            },
            "inputROIDataList_key1_": {
                "value": "cff51121-1889-495c-bdcf-3418d9fe8cf5"
            }
        },
        "XC599964": {
            "inputAudio_key_": {
                "value": "2a4d65a5-446d-47ad-a068-48b782418a51"
            },
            "inputROIDataList_key1_": {
                "value": "035e33df-56e5-45c0-bf3a-c3b0b33f6931"
            }
        },
        "XC425901": {
            "inputAudio_key_": {
                "value": "7fc955a1-290b-42e9-92ba-251b6e608b43"
            },
            "inputROIDataList_key1_": {
                "value": "f6ce13e8-9f92-4b3a-973a-2ea2dd08184b"
            }
        },
        "XC738789": {
            "inputAudio_key_": {
                "value": "9ef142da-019c-4278-ae13-a1ce5bb2e565"
            },
            "inputROIDataList_key1_": {
                "value": "12e9b304-29b6-4362-a674-782409f32f3e"
            }
        },
        "XC626840": {
            "inputAudio_key_": {
                "value": "2bd8fc87-2fc1-4195-b1c0-5cd489c7c6d0"
            },
            "inputROIDataList_key1_": {
                "value": "e0c418e9-ed5e-405a-bb2d-464e483ce8bf"
            }
        },
        "XC591286": {
            "inputAudio_key_": {
                "value": "347d3fb1-78a1-4bc1-b35c-dd086c7d248b"
            },
            "inputROIDataList_key1_": {
                "value": "9f54e592-e2c9-4110-b193-13f68e547622"
            }
        },
        "XC591285": {
            "inputAudio_key_": {
                "value": "d0bc7518-3854-460f-8fcd-fae02f16cf9d"
            },
            "inputROIDataList_key1_": {
                "value": "1b665197-e72a-40b8-9ed4-0c1638e1ac55"
            }
        },
        "XC531085": {
            "inputAudio_key_": {
                "value": "d06bc9c4-0bc2-4c74-b7e5-cbd67c19a551"
            },
            "inputROIDataList_key1_": {
                "value": "492eef26-bd55-4b83-8ddf-5c139980b405"
            }
        },
        "XC663884": {
            "inputAudio_key_": {
                "value": "6600aac7-2483-4c62-b34e-56903249ecdd"
            },
            "inputROIDataList_key1_": {
                "value": "bc7e21d0-e824-471d-b411-67d6eae1574a"
            }
        },
        "XC134564": {
            "inputAudio_key_": {
                "value": "20fbc337-3f25-4281-b088-55e1a8d363c5"
            },
            "inputROIDataList_key1_": {
                "value": "64691c5d-0259-4892-8c82-4913d4080148"
            }
        },
        "XC186477": {
            "inputAudio_key_": {
                "value": "ac6aef3b-17d2-4241-940b-4782243985b9"
            },
            "inputROIDataList_key1_": {
                "value": "4a9a8486-4d24-4752-b324-6ecec6ee5397"
            }
        },
        "XC560380": {
            "inputAudio_key_": {
                "value": "f00341a3-7bba-401e-a286-e9a052152796"
            },
            "inputROIDataList_key1_": {
                "value": "5123d86c-a3b9-4f95-a3c3-7beb1d558c34"
            }
        },
        "XC551446": {
            "inputAudio_key_": {
                "value": "b09af3be-a794-4c42-913d-f4c84f3b0a3c"
            },
            "inputROIDataList_key1_": {
                "value": "36785bd6-d085-46d1-ac9e-89f8763abea6"
            }
        },
        "XC385254": {
            "inputAudio_key_": {
                "value": "21f1f211-8419-440d-b602-dbeb95f6c47f"
            },
            "inputROIDataList_key1_": {
                "value": "fdb89c57-8f6a-4a80-b07e-ec2c75131410"
            }
        },
        "XC240516": {
            "inputAudio_key_": {
                "value": "bd2353c5-d52e-47b2-be0f-0f99c35fe9f9"
            },
            "inputROIDataList_key1_": {
                "value": "15c7d25f-2230-4105-a576-b3f10663b4b2"
            }
        },
        "XC758773": {
            "inputAudio_key_": {
                "value": "73402de1-5175-4e08-b66d-c486cf020502"
            },
            "inputROIDataList_key1_": {
                "value": "5031fe66-68b2-40fa-8edb-e877ca5a5eb6"
            }
        },
        "XC756077": {
            "inputAudio_key_": {
                "value": "98779712-2e8b-41c5-89cb-cd20d65caab6"
            },
            "inputROIDataList_key1_": {
                "value": "4a248a31-3fd5-44dd-a3f0-1f80e21d29c2"
            }
        },
        "XC734981": {
            "inputAudio_key_": {
                "value": "95f20b32-f1e1-43f9-9186-0f6723fd64c4"
            },
            "inputROIDataList_key1_": {
                "value": "49506cd0-ed14-4a36-b08c-308cd552e358"
            }
        },
        "XC732107": {
            "inputAudio_key_": {
                "value": "9b2319ea-c9c2-4a3f-81a7-6b53ebe27878"
            },
            "inputROIDataList_key1_": {
                "value": "af1cd33c-a071-4dfd-a563-ae1e09d31c4b"
            }
        },
        "XC728938": {
            "inputAudio_key_": {
                "value": "39be23e4-8251-47dd-973b-7440780ffabc"
            },
            "inputROIDataList_key1_": {
                "value": "d8b958b1-bef8-45cf-999b-9d1b4b98635c"
            }
        },
        "XC644761": {
            "inputAudio_key_": {
                "value": "3b93c1ee-7182-44f5-9a54-67036e8c2cb5"
            },
            "inputROIDataList_key1_": {
                "value": "1db1da22-aa5c-4aa1-8dea-b9b766e2efe5"
            }
        },
        "XC615949": {
            "inputAudio_key_": {
                "value": "99add0f7-11fa-4b16-80b3-35ac3dce09af"
            },
            "inputROIDataList_key1_": {
                "value": "8a69bd23-0bdc-4ffe-a20d-376707ecde93"
            }
        },
        "XC547450": {
            "inputAudio_key_": {
                "value": "bfa2de76-4f1a-48cc-8936-311fa3048b7c"
            },
            "inputROIDataList_key1_": {
                "value": "5726e56c-1ce7-428e-a9d7-bece8cd59776"
            }
        },
        "XC547044": {
            "inputAudio_key_": {
                "value": "edc04017-ac07-4148-b70c-c2cae1c1466a"
            },
            "inputROIDataList_key1_": {
                "value": "5c97c311-021b-4626-81b2-284bdd1d9154"
            }
        },
        "XC568390": {
            "inputAudio_key_": {
                "value": "38381807-4497-41ba-bcf2-dcfea6da06f8"
            },
            "inputROIDataList_key1_": {
                "value": "1f0b5786-d972-458f-9141-62241ea86ede"
            }
        },
        "XC651539": {
            "inputAudio_key_": {
                "value": "ea0495af-7e18-4304-93bd-34fa79f1cf10"
            },
            "inputROIDataList_key1_": {
                "value": "eb6e644b-b761-4447-826c-ec36f8cef347"
            }
        },
        "XC761053": {
            "inputAudio_key_": {
                "value": "eb7a87b5-1d00-48e6-9838-cb950ebfeb1c"
            },
            "inputROIDataList_key1_": {
                "value": "97a310bd-8021-426b-baeb-7f34745d09e4"
            }
        },
        "XC647696": {
            "inputAudio_key_": {
                "value": "d65f7451-75e9-4f37-89ec-94eb6ab178c8"
            },
            "inputROIDataList_key1_": {
                "value": "c9f7bd55-9233-4983-aa53-965c310fd21b"
            }
        },
        "XC647695": {
            "inputAudio_key_": {
                "value": "746e5d3f-1d8e-48ee-b89d-16e4371c06cd"
            },
            "inputROIDataList_key1_": {
                "value": "19a03248-3568-484d-9c5d-ddcbc0457738"
            }
        },
        "XC647697": {
            "inputAudio_key_": {
                "value": "3d1bc86c-e309-4531-b631-b91adf9b2736"
            },
            "inputROIDataList_key1_": {
                "value": "dce770f5-7a42-4be5-a4eb-562c24dd3d0a"
            }
        },
        "XC107248": {
            "inputAudio_key_": {
                "value": "09498ced-1676-4f5c-a377-e9e79d74f5e1"
            },
            "inputROIDataList_key1_": {
                "value": "15137040-587a-4dda-a0ec-abd670813bef"
            }
        },
        "XC573440": {
            "inputAudio_key_": {
                "value": "7b29ce35-54a7-418b-a617-dd3127291134"
            },
            "inputROIDataList_key1_": {
                "value": "37a9e5c3-798a-4b17-885d-ce7948c6efa0"
            }
        },
        "XC480911": {
            "inputAudio_key_": {
                "value": "75db2e60-5ece-4969-a9c1-d38c55cba801"
            },
            "inputROIDataList_key1_": {
                "value": "4c7c4146-b12e-4e89-b612-8c068a7bfab8"
            }
        },
        "XC414375": {
            "inputAudio_key_": {
                "value": "a0ea308b-fbd7-455c-bd61-f97c058854da"
            },
            "inputROIDataList_key1_": {
                "value": "4a8b871c-e96c-4840-be99-34c302c7c681"
            }
        },
        "XC104499": {
            "inputAudio_key_": {
                "value": "43bf9a49-7ad8-43ee-b531-b02b2d977599"
            },
            "inputROIDataList_key1_": {
                "value": "f134caf6-aaa5-4dd0-bc9c-39df6c018b1c"
            }
        }
    },
    "workflowId": "d10df0bc-f8d3-424e-a609-7e123fe71bee",
    "miniWorkflowSetId": "02c150e4-d1ff-42c5-a20c-d8c16a040e25"
}

const validate = ajvValidator.getSchema('https://raw.githubusercontent.com/SPINEProject/SPINE-json-schema/master/schemas/livePresenterExperiment.schema.json#/definitions/livePresenterExperimentBase');
try {
  valid = validate(exp);
}
catch (err) {
  throw 'Error while validating the filter document, check the schema definition. Error:'+ err
}

if (!valid) {
  let errorMessage = JSON.stringify(validate.errors[0]).replace(/\"/g, '');
  throw 'Error while validating the filter document, check the schema definition. Error:' + errorMessage
}
