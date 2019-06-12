{
    "name": "Slice selector",
    "description": "This tool has one viewer and is used to select a specific slice",
    "version": "0.0.1",
    "privacy": "PUBLIC",
    "inputs": {
        "T1":{
            "name": "Input image",
            "description": "Input image",
            "isList": false,
            "type": "imageEntityInOut",
            "imageEntityInOut_Type": "ANATOMICAL",
            "imageEntityInOut_FileFormat": "dicom.gz",
            "required": true
        }
    },
    "outputs": {
        "slice_number_a":{
            "name": "The slice number",
            "description": "The selected slice number",
            "isList": false,
            "type": "Number",
            "bindingMapping":{
                "componentType": "viewer",
                "viewerId": "0",
                "viewerProperty": "sliceNumber"
            }
        }
    },
    "configuration":{
        "viewers": {
            numberOfRows:1,
	        numberOfColumns:1, // MaxColumns = 4		
            viewers:{
                "0":{
                    "name": "Only viewer",
                    "type":"2D", // 2D or 3D
                    //"orientationControlVisible":true, // If true then the orientation drop-down is displayed.
        		    //"orientationControlDisabled":true, // If true then the orientation in the drop-down can be changed.
                    //"sequenceControlVisible":false, // If true then the drop-down for other sequences is displayed
                    //"smoothingControlVisible":true, // If true then the smothing check-box is visible
                    "linkedControlVisible":false,  //If true then the linking check-box is visible. NOT USED FOR NOW.
                    //"smoothing":false, //initial
                    "initialSlice":0,   //initial slice
                    //"initialOrientation": 2, //SAGIT-0, CORONAL-1, AXIAL-2
                    "location": {
                        "row": 1,
                        "column": 1
                    },
                    "initialState":{
                        "intitialSlice": {
                            "strategy": "number", // or dynamic
                            "value": "0" // or FIRST, LAST, MIDDLE
                        },
                        "initialWindowLevel":{
                            "strategy": "dynamic", // or number
                            "value": "MIDDLE-FULL" // or [valueWindow, valueLevel], distributionBase
                        }
                    }
                    "displayImages":{
                        "possibleImagesToDisplay": ["T1"],
                        "hasDefaultImageToDisplay": true,
                        "defaultImageToDisplay": "T1"
                    },
                    "displayControls":{
                        "orientationControlVisible": true,
                        "orientationControlDisabled": true,
                        "orientationOptions":["SAGITTAL", "CORONAL", "AXIAL"],
                        "orientationByDefault": "AXIAL",
                        "smoothing":{
                            "smoothingControlVisible": true,
                            "smoothingControlDisabled": false,
                            "smoothingDefault": true
                        },
                        "sequence":{
                            "sequenceControl": false
                        }
                    },
                    
                }
            }
        },
        "widgets":{
            toolbarVisible:false,
            annotationTableVisible:false,
        }
    }
}