const widgets = {
    "pointerTool": {
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
    "fillingTool":{
        "controlVisible": true,
        "controlEnabled": true,
        "properties": {
        }
    },
    "eraserTool":{
        "controlVisible":true,
        "controlEnabled":true,
        "properties":{
            "size":{
                "controlVisible": true,
                "controlEnabled": true,
                "defaultValue": 1
            }
        }
    },
    "labelmapLUT": {
        "controlVisible": true,
        "controlEnabled": true,
        "defaultValue": 1,
        "properties": {
            "options":  [
                {"value":1,"label":"Lesion","color":"#f00","iri":""},
                {"value":2,"label":"Plaque","color":"#0f0","iri":""},
                {"value":3,"label":"Toxin","color":"#00f","iri":""},
                {"value":4,"label":"Tumor","color":"#f8f","iri":""},
                {"value":5,"label":"Aging","color":"#8ff","iri":""}
            ]
        }
    },
    "labelmapUndoRedoTool":{
        "controlVisible":true,
        "controlEnabled":true
    },
    "annotationOpacity": {
        "controlVisible": true,
        "controlEnabled": false,
        "defaultValue": 1
    },
    "labelmapOpacity":{
        "controlVisible":true,
        "controlEnabled":true,
        "defaultValue":1
    }
};