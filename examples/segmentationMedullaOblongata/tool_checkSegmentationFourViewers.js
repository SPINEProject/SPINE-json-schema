{
    "name": "Segmentation (Brush)",
    "description": "This tool is used to visualize a segmentation and check it.",
    "version": "0.0.1",
    "privacy": "PUBLIC",
    "inputs": {
        "image":{
            "name": "Input image",
            "description": "Input image",
            "isList": false,
            "type": "imageEntityInOut",
            "imageEntityInOut_Type": "ANATOMICAL",
            "imageEntityInOut_FileFormat": "dicom.gz",
            "required": true
        },
        "segmentation":{
            "name": "Segmentation",
            "description": "Segmentation",
            "isList": false,
            "type": "roiInOut",
            "typeROI": "EXPLICIT",
            "required": true
        }
    },
    "outputs": {},
    "configuration":{
        "viewers": {
            numberOfRows:1,  //
            numberOfColumns:4,
            viewers:[
                { type:"2D",
                    orientationControlVisible:true,
                    orientationControlOptions:[
                        {label:"Sagittal", value:0},
                        {label:"Coronal", value:1},
                        {label:"Axial", value:2}
                    ],
                    sequenceControlVisible:false,
                    smoothingControlVisible:true,
                    linkedControlVisible:true,  //obsolete?
                    smoothing:false, //initial
                    slice:0,   //initial slice
                    orientation:0, //SAGIT-0, CORONAL-1, AXIAL-2
                    hasCropping:false
                },
                { type:"2D",
                    orientationControlVisible:true,
                    orientationControlDisabled:false,
                    orientationControlOptions:[
                        {label:"Sagittal", value:0},
                        {label:"Coronal", value:1},
                        {label:"Axial", value:2}
                    ],
                    sequenceControlVisible:false,
                    smoothingControlVisible:true,
                    linkedControlVisible:true,  //obsolete?
                    smoothing:false, //initial
                    slice:0,   //initial slice
                    orientation:1, //SAGIT-0, CORONAL-1, AXIAL-2
                    hasCropping:false
                },
                { type:"2D",
                    orientationControlVisible:true,
                    orientationControlOptions:[
                        {label:"Sagittal", value:0},
                        {label:"Coronal", value:1},
                        {label:"Axial", value:2}
                    ],
                    sequenceControlVisible:false,
                    smoothingControlVisible:true,
                    linkedControlVisible:true,  //obsolete?
                    smoothing:false, //initial
                    slice:14,   //initial slice
                    orientation:2, //SAGIT-0, CORONAL-1, AXIAL-2
                    hasCropping:false
                },
                {   type:"3D"
                }
            ]

        },
        "widgets":{
            toolbarVisible:false,
            annotationTableVisible:false,
        }
    }
}