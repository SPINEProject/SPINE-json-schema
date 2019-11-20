const widgets = {
    "pickerTool": {
        "controlVisible": true,
        "controlEnabled": true,
        "defaultValue": false
    },
    "pinTool": {
        "controlVisible": true,
        "controlEnabled": true,
        "properties": {
            "markerSize": {
                "controlVisible": true,
                "controlEnabled": true,
                "defaultValue": 2
            },
            "fontSize":{
                "controlVisible": true,
                "controlEnabled": true,
                "defaultValue": 12
            },
            "clearAll":{
                "controlVisible": true,
                "controlEnabled": true
            }
        }
    },
    "projectionTool": {
        "controlVisible": true,
        "controlEnabled": true,
        "defaultValue": false,
        "properties": {
            "range": {
                "controlVisible": true,
                "controlEnabled": true,
                "defaultValue": 1
            }
        }
    },
    "linkAllTool": {
        "controlVisible": true,
        "controlEnabled": true,
        "defaultValue": false
    },
    "crossHairTool": {
        "controlVisible": true,
        "controlEnabled": true,
        "defaultValue": false
    },
    "brushTool": {
        "controlVisible": true,
        "controlEnabled": true,
        "properties": {
            "size": {
                "controlVisible": true,
                "controlEnabled": true,
                "defaultValue": 1
            },
            "labelmap": {
                "controlVisible": false,
                "controlEnabled": false,
                "defaultValue": 1,
                "properties": {
                    "options": {
                        "label": "Medulla Oblongata",
                        "iri": "",
                        "color": "#f00",
                        "value": 1
                    }
                }
            },
            "threshold": {
                "controlVisible": false,
                "controlEnabled": false,
                "properties": {
                    "lowerValueByDefault": 0,
                    "upperValueByDefault": 65000,
                    "probeControlVisible": true,
                    "probeControlEnabled": true
                }
            }
        }
    },
    "fillingTool": {
        "controlVisible": true,
        "controlEnabled": true,
        "properties": {
            "labelmap": {
                "controlVisible": false,
                "controlEnabled": false,
                "defaultValue": 1,
                "properties": {
                    "options": [{
                        "label": "Lesion",
                        "iri": "",
                        "color": "#f00",
                        "value": 1
                    }]
                }
            }
        }
    },
    "eraserTool": {
        "controlVisible": true,
        "controlEnabled": true,
        "properties": {
            "size": {
                "controlVisible": true,
                "controlEnabled": true,
                "defaultValue": 1
            }
        }
    },
    "labelmapUndoRedoTool": {
        "controlVisible": true,
        "controlEnabled": true
    },
    "labelmapOpacity": {
        "controlVisible": true,
        "controlEnabled": true,
        "defaultValue": 1
    },
    "annotationOpacity": {
        "controlVisible": true,
        "controlEnabled": true,
        "defaultValue": 1
    }
};