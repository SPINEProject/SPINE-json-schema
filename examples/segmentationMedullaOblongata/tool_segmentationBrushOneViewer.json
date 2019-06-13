{
    "name": "Segmentation (Brush)",
    "description": "This tool is used to segment something in an image using the paint brush",
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
        "lower-bound":{
            "name": "The lower bound",
            "description": "The selected slice number for the lower bound",
            "isList": false,
            "type": "Number",
        },
        "upper-bound":{
            "name": "The upper bound",
            "description": "The selected slice number for the upper bound",
            "isList": false,
            "type": "Number",
        }
    },
    "outputs": {
        "segmentation":{
            "name": "Medulla oblongata segmentation",
            "description": "The medulla oblongata segmentation from the user",
            "isList": false,
            "type": "roiWithAnnotationsInOut",
            "typeROI": "EXPLICIT",
            "annotations": [
                {
                    "typeAnnotationForm": "MULTIPLE_CHOICE_SINGLE_ANSWER",
                    "propertiesAnnotation": {
                        "isOntologyBased": true,
                        "typeAnnotationOptions": "TEXT",
                        "ontologyId": "https://bioportal.bioontology.org/ontologies/SNOMEDCT",
                        "options": [
                            {
                                "value": "http://purl.bioontology.org/ontology/SNOMEDCT/279104005",
                                "valueToDisplay": "Medulla Oblongata",
                            }
                        ]
                    }
                }
            ]
        }
    },
    "configuration":{
        "viewers": {
            numberOfRows:1,  //
			numberOfColumns:1,
            viewers:[
                {   type:"2D",
                    orientationControlVisible:true,
		            orientationControlDisabled:true,
                    sequenceControlVisible:false,
                    smoothingControlVisible:true,
                    linkedControlVisible:true,  //obsolete?
                    smoothing:false, //initial
                    slice:14,   //initial slice
                    orientation:2, //SAGIT-0, CORONAL-1, AXIAL-2
                    hasCropping:true,
                    croppingSlices:[0,0,0,0,14,256] //sagittal, coronal, axial
                }
            ]
        },
        "widgets":{
            toolbarVisible:true,
            pointerToolVisible:true,//picking cell and positioning slices on the remaining views
            pinToolVisible:false,
            brushToolVisible:true,
            brushToolProperties:{
                toolTip:"Brush Tool",
                brushSizeControlVisible:true,
                brushSizeLabel:"Brush Size",
                brushSize:1,
                colorMapValuesOptionsVisible:false,
                borderControlVisible:false,
                colorValue:1,
                thresholdingControlVisible:false,
            },
            fillingToolVisible:true,
            fillingToolProperties:{
                toolTip:"Bucket Tool",
                colorMapValuesOptionsVisible:true,
                colorMapValuesLabel:"Label",
                colorValue:1,
            },
            eraserToolVisible:true,
            eraserProperties:{
                size:1,
            },
            undoButtonVisible:true,
            redoButtonVisible:true,
            referenceLinesControlVisible:true,
            referenceLines:false, //default
            labelMapOpacityControlVisible:true,
            labelMapOpacity:100,
            pinOpacityControlVisible:false, // maybe glass Opacity - it is used for reference lines and
            pinOpacity:100, //default value
            annotationTableVisible:false,
        }

    }
}