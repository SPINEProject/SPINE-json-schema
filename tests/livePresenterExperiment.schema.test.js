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
    "_id": "0cb7015f-ee55-464f-8e82-780c51082d15",
    "docType": "livePresenterExperiment",
    "creationDate": "2022-01-15T11:04:20.181Z",
    "description": "The users identifies birds",
    "question": "BIRDS contribution",
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
    "scoringMethod": {},
    "clinical": {},
    "caseDistribution": {
        "maxContributionPerCase": 4,
        "maxContributionPerCasePerUser": 1,
        "pool": {
            "and.gal_1": [
                "AND.GAL_1_20210617_040000.WAV_1X10MIN.WAV",
                "AND.GAL_1_20210619_050000.WAV_1X10MIN.WAV",
                "AND.GAL_1_20210620_040000.WAV_3X10MIN.WAV",
                "AND.GAL_1_20210622_040000.WAV_1X10MIN.WAV"
            ],
            "and.kav_1": [
                "AND.KAV_1_20210613_050000.WAV_1X10MIN.WAV",
                "AND.KAV_1_20210615_030000.WAV_3X10MIN.WAV",
                "AND.KAV_1_20210617_050000.WAV_2X10MIN.WAV",
                "AND.KAV_1_20210619_030000.WAV_3X10MIN.WAV"
            ],
            "and.pio_1": [
                "AND.PIO_1_20210506_070000.WAV_3X10MIN.WAV",
                "AND.PIO_1_20210508_040000.WAV_3X10MIN.WAV",
                "AND.PIO_1_20210509_060000.WAV_2X10MIN.WAV",
                "AND.PIO_1_20210511_050000.WAV_3X10MIN.WAV"
            ],
            "and.pri_1": [
                "AND.PRIN_1_20210516_040000.WAV_2X10MIN.WAV",
                "AND.PRIN_1_20210518_040000.WAV_1X10MIN.WAV",
                "AND.PRIN_1_20210520_050000.WAV_2X10MIN.WAV",
                "AND.PRIN_1_20210522_050000.WAV_2X10MIN.WAV"
            ],
            "ann.mra_1": [
                "ANN.MRA_1_20210606_060000.WAV_3X10MIN.WAV",
                "ANN.MRA_1_20210608_040000.WAV_1X10MIN.WAV",
                "ANN.MRA_1_20210610_030000.WAV_1X10MIN.WAV",
                "ANN.MRA_1_20210612_030000.WAV_1X10MIN.WAV"
            ],
            "ann.pop_1": [
                "ANN.POP_1_20210624_010000.WAV_3X10MIN.WAV",
                "ANN.POP_1_20210626_030000.WAV_1X10MIN.WAV",
                "ANN.POP_1_20210627_030000.WAV_1X10MIN.WAV",
                "ANN.POP_1_20210629_010000.WAV_2X10MIN.WAV"
            ],
            "aur.sal_1": [
                "AUR.SAL_1_20210525_060000.WAV_1X10MIN.WAV",
                "AUR.SAL_1_20210527_070000.WAV_2X10MIN.WAV",
                "AUR.SAL_1_20210529_050000.WAV_1X10MIN.WAV",
                "AUR.SAL_1_20210530_050000.WAV_2X10MIN.WAV"
            ],
            "bas.cas_1": [
                "BAS.CAS_1_20210501_050000.WAV_2X10MIN.WAV",
                "BAS.CAS_1_20210502_050000.WAV_3X10MIN.WAV",
                "BAS.CAS_1_20210504_070000.WAV_3X10MIN.WAV",
                "BAS.CAS_1_20210506_050000.WAV_3X10MIN.WAV"
            ],
            "ben.let_1": [
                "BEN.LET_1_20210513_040000.WAV_1X10MIN.WAV",
                "BEN.LET_1_20210515_050000.WAV_1X10MIN.WAV",
                "BEN.LET_1_20210516_040000.WAV_1X10MIN.WAV",
                "BEN.LET_1_20210518_050000.WAV_1X10MIN.WAV"
            ],
            "car.lop_1": [
                "CAR.LOP_1_20210516_040000.WAV_2X10MIN.WAV",
                "CAR.LOP_1_20210516_070000.WAV_1X10MIN.WAV",
                "CAR.LOP_1_20210520_040000.WAV_2X10MIN.WAV",
                "CAR.LOP_1_20210520_070000.WAV_3X10MIN.WAV"
            ],
            "chr.bou_1": [
                "CHR.BOU_1_20210605_070000.WAV_3X10MIN.WAV",
                "CHR.BOU_1_20210606_040000.WAV_3X10MIN.WAV",
                "CHR.BOU_1_20210608_040000.WAV_1X10MIN.WAV",
                "CHR.BOU_1_20210610_060000.WAV_2X10MIN.WAV"
            ],
            "csa.eot_1": [
                "CSA.EOT_1_20210513_060000.WAV_3X10MIN.WAV",
                "CSA.EOT_1_20210515_040000.WAV_2X10MIN.WAV",
                "CSA.EOT_1_20210516_030000.WAV_3X10MIN.WAV",
                "CSA.EOT_1_20210518_030000.WAV_2X10MIN.WAV"
            ],
            "csa.eot_2": [
                "CSA.EOT_2_20210513_030000.WAV_3X10MIN.WAV",
                "CSA.EOT_2_20210515_060000.WAV_3X10MIN.WAV",
                "CSA.EOT_2_20210516_040000.WAV_2X10MIN.WAV",
                "CSA.EOT_2_20210518_040000.WAV_2X10MIN.WAV"
            ],
            "deb.har_2": [
                "DEB.HAR_2_20210518_040000.WAV_1X10MIN.WAV",
                "DEB.HAR_2_20210520_050000.WAV_2X10MIN.WAV",
                "DEB.HAR_2_20210522_060000.WAV_3X10MIN.WAV",
                "DEB.HAR_2_20210523_050000.WAV_1X10MIN.WAV"
            ],
            "dmi.mus_1": [
                "DMI.MUS_1_20210624_010000.WAV_3X10MIN.WAV",
                "DMI.MUS_1_20210626_030000.WAV_1X10MIN.WAV",
                "DMI.MUS_1_20210627_030000.WAV_1X10MIN.WAV",
                "DMI.MUS_1_20210629_030000.WAV_3X10MIN.WAV"
            ],
            "ele.val_1": [
                "ELE.VAL_1_20210504_070000.WAV_2X10MIN.WAV",
                "ELE.VAL_1_20210506_050000.WAV_1X10MIN.WAV",
                "ELE.VAL_1_20210508_070000.WAV_3X10MIN.WAV",
                "ELE.VAL_1_20210509_050000.WAV_2X10MIN.WAV"
            ],
            "eli.flu_1": [
                "ELI.FLU_1_20210603_050000.WAV_2X10MIN.WAV",
                "ELI.FLU_1_20210605_030000.WAV_3X10MIN.WAV",
                "ELI.FLU_1_20210606_040000.WAV_1X10MIN.WAV",
                "ELI.FLU_1_20210608_030000.WAV_3X10MIN.WAV"
            ],
            "eli.man_1": [
                "ELI.MAN_1_20210603_030000.WAV_2X10MIN.WAV",
                "ELI.MAN_1_20210605_050000.WAV_2X10MIN.WAV",
                "ELI.MAN_1_20210606_050000.WAV_2X10MIN.WAV",
                "ELI.MAN_1_20210608_030000.WAV_2X10MIN.WAV"
            ],
            "fla.bal_3": [
                "FLA.BAL_3_20210522_030000.WAV_3X10MIN.WAV",
                "FLA.BAL_3_20210523_030000.WAV_1X10MIN.WAV",
                "FLA.BAL_3_20210525_060000.WAV_2X10MIN.WAV",
                "FLA.BAL_3_20210527_030000.WAV_3X10MIN.WAV"
            ],
            "gre.vai_1": [
                "GRE.VAI_1_20210708_050000.WAV_2X10MIN.WAV",
                "GRE.VAI_1_20210710_040000.WAV_2X10MIN.WAV",
                "GRE.VAI_1_20210711_020000.WAV_3X10MIN.WAV",
                "GRE.VAI_1_20210713_020000.WAV_2X10MIN.WAV"
            ],
            "ing.van_1": [
                "ING.VAN_1_20210513_050000.WAV_2X10MIN.WAV",
                "ING.VAN_1_20210513_070000.WAV_2X10MIN.WAV",
                "ING.VAN_1_20210520_060000.WAV_2X10MIN.WAV",
                "ING.VAN_1_20210520_070000.WAV_1X10MIN.WAV"
            ],
            "jon.hag_1": [
                "JON.HAG_1_20210606_040000.WAV_2X10MIN.WAV",
                "JON.HAG_1_20210608_060000.WAV_3X10MIN.WAV",
                "JON.HAG_1_20210610_040000.WAV_2X10MIN.WAV",
                "JON.HAG_1_20210612_040000.WAV_1X10MIN.WAV"
            ],
            "kat.sam_1": [
                "KAT.SAM_1_20210626_030000.WAV_3X10MIN.WAV",
                "KAT.SAM_1_20210627_040000.WAV_1X10MIN.WAV",
                "KAT.SAM_1_20210629_030000.WAV_1X10MIN.WAV",
                "KAT.SAM_1_20210701_040000.WAV_3X10MIN.WAV"
            ],
            "kat.sam_2": [
                "KAT.SAM_2_20210612_030000.WAV_2X10MIN.WAV",
                "KAT.SAM_2_20210613_030000.WAV_2X10MIN.WAV",
                "KAT.SAM_2_20210615_040000.WAV_1X10MIN.WAV",
                "KAT.SAM_2_20210617_050000.WAV_3X10MIN.WAV"
            ],
            "leo.dud_1": [
                "LEO.DUD_1_20210605_020000.WAV_1X10MIN.WAV",
                "LEO.DUD_1_20210606_050000.WAV_1X10MIN.WAV",
                "LEO.DUD_1_20210608_040000.WAV_2X10MIN.WAV",
                "LEO.DUD_1_20210610_020000.WAV_1X10MIN.WAV"
            ],
            "luc.bar_1": [
                "LUC.BAR_1_20210520_040000.WAV_2X10MIN.WAV",
                "LUC.BAR_1_20210522_070000.WAV_3X10MIN.WAV",
                "LUC.BAR_1_20210523_060000.WAV_2X10MIN.WAV",
                "LUC.BAR_1_20210525_050000.WAV_1X10MIN.WAV"
            ],
            "maa.deg_1": [
                "MAA.DEG_1_20210612_030000.WAV_1X10MIN.WAV",
                "MAA.DEG_1_20210613_040000.WAV_2X10MIN.WAV",
                "MAA.DEG_1_20210615_060000.WAV_1X10MIN.WAV",
                "MAA.DEG_1_20210617_060000.WAV_1X10MIN.WAV"
            ],
            "man.bra_1": [
                "MAN.BRA_1_20210506_080000.WAV_1X10MIN.WAV",
                "MAN.BRA_1_20210508_060000.WAV_1X10MIN.WAV",
                "MAN.BRA_1_20210509_050000.WAV_1X10MIN.WAV",
                "MAN.BRA_1_20210511_060000.WAV_2X10MIN.WAV"
            ],
            "mar.fat_1": [
                "MAR.FAT_1_20210701_020000.WAV_3X10MIN.WAV",
                "MAR.FAT_1_20210703_040000.WAV_3X10MIN.WAV",
                "MAR.FAT_1_20210704_020000.WAV_3X10MIN.WAV",
                "MAR.FAT_1_20210706_050000.WAV_1X10MIN.WAV"
            ],
            "mar.gos_1": [
                "MAR.GOS_1_20210701_050000.WAV_2X10MIN.WAV",
                "MAR.GOS_1_20210703_040000.WAV_2X10MIN.WAV",
                "MAR.GOS_1_20210704_050000.WAV_2X10MIN.WAV",
                "MAR.GOS_1_20210706_060000.WAV_1X10MIN.WAV"
            ],
            "mic.bog_1": [
                "MIC.BOG_1_20210624_030000.WAV_1X10MIN.WAV",
                "MIC.BOG_1_20210626_040000.WAV_3X10MIN.WAV",
                "MIC.BOG_1_20210627_060000.WAV_2X10MIN.WAV",
                "MIC.BOG_1_20210629_030000.WAV_1X10MIN.WAV"
            ],
            "mik.koz_1": [
                "MIK.KOZ_1_20210619_030000.WAV_3X10MIN.WAV",
                "MIK.KOZ_1_20210620_010000.WAV_1X10MIN.WAV",
                "MIK.KOZ_1_20210622_010000.WAV_3X10MIN.WAV",
                "MIK.KOZ_1_20210624_020000.WAV_3X10MIN.WAV"
            ],
            "mon.bjo_1": [
                "MON.BJO_1_20210629_030000.WAV_2X10MIN.WAV",
                "MON.BJO_1_20210701_060000.WAV_1X10MIN.WAV",
                "MON.BJO_1_20210703_030000.WAV_3X10MIN.WAV",
                "MON.BJO_1_20210704_040000.WAV_1X10MIN.WAV"
            ],
            "pil.fer_1": [
                "PIL.FER_1_20210424_080000.WAV_2X10MIN.WAV",
                "PIL.FER_1_20210425_050000.WAV_1X10MIN.WAV",
                "PIL.FER_1_20210427_060000.WAV_1X10MIN.WAV",
                "PIL.FER_1_20210429_050000.WAV_2X10MIN.WAV"
            ],
            "pil.fer_2": [
                "PIL.FER_2_20210504_040000.WAV_2X10MIN.WAV",
                "PIL.FER_2_20210506_040000.WAV_3X10MIN.WAV",
                "PIL.FER_2_20210508_040000.WAV_2X10MIN.WAV",
                "PIL.FER_2_20210509_050000.WAV_3X10MIN.WAV"
            ],
            "ric.hou_1": [
                "RIC.HOU_1_20210525_050000.WAV_1X10MIN.WAV",
                "RIC.HOU_1_20210527_060000.WAV_1X10MIN.WAV",
                "RIC.HOU_1_20210529_070000.WAV_1X10MIN.WAV",
                "RIC.HOU_1_20210530_040000.WAV_2X10MIN.WAV"
            ],
            "rit.ise_1": [
                "RIT.ISE_1_20210515_060000.WAV_2X10MIN.WAV",
                "RIT.ISE_1_20210516_040000.WAV_1X10MIN.WAV",
                "RIT.ISE_1_20210518_060000.WAV_3X10MIN.WAV",
                "RIT.ISE_1_20210520_050000.WAV_3X10MIN.WAV"
            ],
            "sam.gre_1": [
                "SAM.GRE_1_20210529_050000.WAV_3X10MIN.WAV",
                "SAM.GRE_1_20210530_040000.WAV_1X10MIN.WAV",
                "SAM.GRE_1_20210601_050000.WAV_3X10MIN.WAV",
                "SAM.GRE_1_20210603_040000.WAV_3X10MIN.WAV"
            ],
            "slo.mil_1": [
                "SLO.MIL_1_20210626_040000.WAV_1X10MIN.WAV",
                "SLO.MIL_1_20210627_040000.WAV_2X10MIN.WAV",
                "SLO.MIL_1_20210629_030000.WAV_2X10MIN.WAV",
                "SLO.MIL_1_20210701_040000.WAV_3X10MIN.WAV"
            ],
            "slo.mil_2": [
                "SLO.MIL_2_20210612_030000.WAV_3X10MIN.WAV",
                "SLO.MIL_2_20210612_050000.WAV_1X10MIN.WAV",
                "SLO.MIL_2_20210613_030000.WAV_3X10MIN.WAV",
                "SLO.MIL_2_20210613_060000.WAV_3X10MIN.WAV"
            ],
            "sof.gri_1": [
                "SOF.GRI_1_20210608_060000.WAV_3X10MIN.WAV",
                "SOF.GRI_1_20210610_040000.WAV_1X10MIN.WAV",
                "SOF.GRI_1_20210612_050000.WAV_2X10MIN.WAV",
                "SOF.GRI_1_20210613_040000.WAV_3X10MIN.WAV"
            ],
            "tho.dam_1": [
                "THO.DAM_1_20210603_070000.WAV_2X10MIN.WAV",
                "THO.DAM_1_20210605_050000.WAV_1X10MIN.WAV",
                "THO.DAM_1_20210606_040000.WAV_1X10MIN.WAV",
                "THO.DAM_1_20210606_050000.WAV_3X10MIN.WAV"
            ],
            "voj.lan_1": [
                "VOJ.LAN_1_20210626_050000.WAV_3X10MIN.WAV",
                "VOJ.LAN_1_20210627_040000.WAV_3X10MIN.WAV",
                "VOJ.LAN_1_20210629_030000.WAV_1X10MIN.WAV",
                "VOJ.LAN_1_20210629_040000.WAV_1X10MIN.WAV"
            ],
            "xoa.mor_1": [
                "XOA.MOR_1_20210504_050000.WAV_1X10MIN.WAV",
                "XOA.MOR_1_20210506_050000.WAV_1X10MIN.WAV",
                "XOA.MOR_1_20210508_050000.WAV_2X10MIN.WAV",
                "XOA.MOR_1_20210509_060000.WAV_1X10MIN.WAV"
            ],
            "zul.var_1": [
                "ZUL.VAR_1_20210508_050000.WAV_2X10MIN.WAV",
                "ZUL.VAR_1_20210509_080000.WAV_1X10MIN.WAV",
                "ZUL.VAR_1_20210511_050000.WAV_2X10MIN.WAV",
                "ZUL.VAR_1_20210513_080000.WAV_2X10MIN.WAV"
            ],
            "zul.var_2": [
                "ZUL.VAR_2_20210508_050000.WAV_2X10MIN.WAV",
                "ZUL.VAR_2_20210509_080000.WAV_2X10MIN.WAV",
                "ZUL.VAR_2_20210511_050000.WAV_1X10MIN.WAV",
                "ZUL.VAR_2_20210513_050000.WAV_2X10MIN.WAV"
            ],
            "zul.var_3": [
                "ZUL.VAR_3_20210508_070000.WAV_2X10MIN.WAV",
                "ZUL.VAR_3_20210509_080000.WAV_2X10MIN.WAV",
                "ZUL.VAR_3_20210511_050000.WAV_3X10MIN.WAV",
                "ZUL.VAR_3_20210513_070000.WAV_1X10MIN.WAV"
            ]
        },
        "rules": []
    },
    "centers": [
        {
            "poolId": "and.gal_1",
            "centerId": "9dafc121-0730-4a23-9dc4-1a0ee6c7c6f2"
        },
        {
            "poolId": "and.kav_1",
            "centerId": "f48c44dd-b195-40f3-8971-814093d93776"
        },
        {
            "poolId": "and.pio_1",
            "centerId": "239bfdbf-a274-4ecd-ba49-013ca5b0a0b6"
        },
        {
            "poolId": "and.pri_1",
            "centerId": "78fe6ad4-d3a8-4243-9a4f-6cff8c977d5d"
        },
        {
            "poolId": "ann.mra_1",
            "centerId": "4dd116e5-0a1a-4373-be8b-c748494eefef"
        },
        {
            "poolId": "ann.pop_1",
            "centerId": "ede93991-e012-4149-8372-b6f3056fb0ce"
        },
        {
            "poolId": "aur.sal_1",
            "centerId": "8d467232-2c8c-4d77-96d6-26ad00f7a83a"
        },
        {
            "poolId": "bas.cas_1",
            "centerId": "1a2dcc7c-67d4-4e05-8c4c-fe1a29b7a63d"
        },
        {
            "poolId": "ben.let_1",
            "centerId": "555e1ae3-7acf-4b7a-8007-8efe172c2810"
        },
        {
            "poolId": "car.lop_1",
            "centerId": "a7b12cb3-81f4-485f-a52a-e96d4b556577"
        },
        {
            "poolId": "chr.bou_1",
            "centerId": "b43a58e7-d4a7-4d68-90ce-3e43c422a83c"
        },
        {
            "poolId": "csa.eot_1",
            "centerId": "c45734a7-37b0-4579-8e51-4c8559c36da9"
        },
        {
            "poolId": "csa.eot_2",
            "centerId": "3f881a62-795f-4980-ab52-d8a8361198f0"
        },
        {
            "poolId": "deb.har_2",
            "centerId": "2463c6c7-3e1f-4468-aca4-b5f769eb3684"
        },
        {
            "poolId": "dmi.mus_1",
            "centerId": "3eb560b6-ef11-434f-8e58-6ee5fddbb614"
        },
        {
            "poolId": "ele.val_1",
            "centerId": "c4d76fde-de3a-4de0-91cd-086c59297bf9"
        },
        {
            "poolId": "eli.flu_1",
            "centerId": "59b1af0c-8e6d-4fd3-989d-b62b660d011e"
        },
        {
            "poolId": "eli.man_1",
            "centerId": "d10f7422-c9bd-4ab2-9e16-5b39f135d5be"
        },
        {
            "poolId": "fla.bal_3",
            "centerId": "7fae037e-2ac3-4b28-88d5-5c4766c8652f"
        },
        {
            "poolId": "gre.vai_1",
            "centerId": "0f75b47b-9872-4880-b650-ad99ae92910a"
        },
        {
            "poolId": "ing.van_1",
            "centerId": "1be052db-5f40-44c9-9e93-ff21cd884883"
        },
        {
            "poolId": "jon.hag_1",
            "centerId": "a0a875b2-fa5e-4438-94e0-a2d16434d440"
        },
        {
            "poolId": "kat.sam_1",
            "centerId": "950ac867-7bb2-43c7-a6db-73de39db53f2"
        },
        {
            "poolId": "kat.sam_2",
            "centerId": "cd9c283c-50b9-4673-b510-521f8fb40be3"
        },
        {
            "poolId": "leo.dud_1",
            "centerId": "44b7eeba-a326-44f6-b377-4e8b81e2cf6b"
        },
        {
            "poolId": "luc.bar_1",
            "centerId": "76ec65e4-0dd4-4d02-b537-f991ed3e5e26"
        },
        {
            "poolId": "maa.deg_1",
            "centerId": "5cd39512-1ae4-49a8-8bde-b2315b0327e4"
        },
        {
            "poolId": "man.bra_1",
            "centerId": "af2c4a22-2a73-487b-b550-c509cffaaa84"
        },
        {
            "poolId": "mar.fat_1",
            "centerId": "87bcb5a0-c427-464c-869a-336c2320a80f"
        },
        {
            "poolId": "mar.gos_1",
            "centerId": "4a8ffa3a-747f-46bf-8b17-bd85acc10956"
        },
        {
            "poolId": "mic.bog_1",
            "centerId": "5a5c65ed-9ab6-41af-92c1-2cdc26528a43"
        },
        {
            "poolId": "mik.koz_1",
            "centerId": "29009643-4631-4cc4-80c4-94ebaa0dd0fc"
        },
        {
            "poolId": "mon.bjo_1",
            "centerId": "926d2742-eb53-4959-bbee-9244951b4b59"
        },
        {
            "poolId": "pil.fer_1",
            "centerId": "13ac0d9c-55af-4f5d-83ea-ea47e690c63c"
        },
        {
            "poolId": "pil.fer_2",
            "centerId": "e2669815-0e8a-405f-96a6-fc79b7617a26"
        },
        {
            "poolId": "ric.hou_1",
            "centerId": "ecaaa634-f467-41c0-b1dd-6402c549be00"
        },
        {
            "poolId": "rit.ise_1",
            "centerId": "8c3d89f2-83ca-417d-9bd9-b6931570dc48"
        },
        {
            "poolId": "sam.gre_1",
            "centerId": "bb021746-8e27-4959-ae1c-6ca9279020b3"
        },
        {
            "poolId": "slo.mil_1",
            "centerId": "db718cc6-e297-4148-b95b-4b2d8f0be93a"
        },
        {
            "poolId": "slo.mil_2",
            "centerId": "abe3fdde-62c5-4971-9f35-351c4600792e"
        },
        {
            "poolId": "sof.gri_1",
            "centerId": "a451c2ab-7d71-44b3-958c-bcb11d90c80e"
        },
        {
            "poolId": "tho.dam_1",
            "centerId": "f69ee348-9239-49e3-84b6-de08d9d301ab"
        },
        {
            "poolId": "voj.lan_1",
            "centerId": "7859e47c-9e98-436c-b822-3604635a7610"
        },
        {
            "poolId": "xoa.mor_1",
            "centerId": "faaff41d-300b-477f-b1de-2285da0be699"
        },
        {
            "poolId": "zul.var_1",
            "centerId": "e2134aa1-15f2-42ea-bd9c-b2d5af60852f"
        },
        {
            "poolId": "zul.var_2",
            "centerId": "0593bc79-313a-43d8-ac7b-0dc3410fefa9"
        },
        {
            "poolId": "zul.var_3",
            "centerId": "8b0c95be-0d85-4af8-add6-c6fb9d689bd4"
        }
    ],
    "scoring": {},
    "input": {
        "AND.GAL_1_20210617_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "6644d99b-6593-4be9-a30f-336d5c0499c3"
            },
            "inputROIDataList_key1": {
                "value": "54d6f4dc-83ed-4648-9eba-a69795a898e7"
            }
        },
        "AND.GAL_1_20210619_050000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "75b1f5c6-711d-4346-9a4d-4f2f40948107"
            },
            "inputROIDataList_key1": {
                "value": "49b1d6ff-2d2f-4aa4-8ca6-86742fc7aac1"
            }
        },
        "AND.GAL_1_20210620_040000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "cf2c6ac6-efbe-45ff-9863-7c7d930284e6"
            },
            "inputROIDataList_key1": {
                "value": "0b0c5cac-3004-46b5-8416-014b0f8f6bc4"
            }
        },
        "AND.GAL_1_20210622_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "34d33fde-5a24-4cb4-8393-b77fe8e6f9ce"
            },
            "inputROIDataList_key1": {
                "value": "ab09e101-c68d-4ddc-a0df-80cabdfc58a4"
            }
        },
        "AND.KAV_1_20210613_050000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "df55ada2-a30c-4b05-aac6-6223a3b0307c"
            },
            "inputROIDataList_key1": {
                "value": "b22204c0-cf27-417c-bb23-8c6e53a6a986"
            }
        },
        "AND.KAV_1_20210615_030000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "0ed34a7b-8abb-4380-a17a-0e886d8e3dd3"
            },
            "inputROIDataList_key1": {
                "value": "f2ebd7ec-35a4-4e5e-94e8-c64df9bcec55"
            }
        },
        "AND.KAV_1_20210617_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "8125bdec-5248-405b-95c0-bb1c81eddb83"
            },
            "inputROIDataList_key1": {
                "value": "8c1031ec-9808-409a-8c26-bc9b86ae7350"
            }
        },
        "AND.KAV_1_20210619_030000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "c1ed6377-c520-4e35-9fb2-9549f2da0307"
            },
            "inputROIDataList_key1": {
                "value": "ff087b34-4ff3-42be-b079-3ba3a6d68a43"
            }
        },
        "AND.PIO_1_20210506_070000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "71673177-1795-4dd5-a650-67b3b9f05b3e"
            },
            "inputROIDataList_key1": {
                "value": "69aec84d-f368-4cd9-96f1-9a832f8cdb02"
            }
        },
        "AND.PIO_1_20210508_040000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "907ed6a3-b5d2-4694-b711-9e42de79d750"
            },
            "inputROIDataList_key1": {
                "value": "2523cbfa-60f2-49c4-944f-35fc9b41ca52"
            }
        },
        "AND.PIO_1_20210509_060000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "d9595907-6123-4077-8446-af0ee9e3c4cf"
            },
            "inputROIDataList_key1": {
                "value": "ef149cf3-4ae4-4b4e-84a5-8350635dc7c8"
            }
        },
        "AND.PIO_1_20210511_050000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "72a49c56-4d06-4a0e-8a51-5c1c637924cd"
            },
            "inputROIDataList_key1": {
                "value": "d67bb99e-1918-4a90-ad36-629802ea7577"
            }
        },
        "AND.PRIN_1_20210516_040000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "1b56c830-79c7-43ce-a352-06d83998c597"
            },
            "inputROIDataList_key1": {
                "value": "df87b150-6d03-4b43-b93b-c2424556d2e3"
            }
        },
        "AND.PRIN_1_20210518_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "c8f0ecc4-5e9b-47c6-b23e-e6f4b4a618e7"
            },
            "inputROIDataList_key1": {
                "value": "4451579a-7468-41c6-89f3-9434d04d8fe7"
            }
        },
        "AND.PRIN_1_20210520_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "2a57e025-839a-442a-8f65-dfcff7d59354"
            },
            "inputROIDataList_key1": {
                "value": "862c85c1-c98c-4d2c-9188-e1b1cbbf2f91"
            }
        },
        "AND.PRIN_1_20210522_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "c6e565ff-007c-42fb-b0a5-049aaad3aff0"
            },
            "inputROIDataList_key1": {
                "value": "5cbd384d-24b0-400f-9913-12bd01e2a42b"
            }
        },
        "ANN.MRA_1_20210606_060000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "32acd276-8a77-46a4-a0b4-7066967da77a"
            },
            "inputROIDataList_key1": {
                "value": "6572bdca-55a7-4831-a054-07f3e4910386"
            }
        },
        "ANN.MRA_1_20210608_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "a74be2c8-75c5-41a4-9cd6-21e668746415"
            },
            "inputROIDataList_key1": {
                "value": "3a104441-2689-41ea-aefc-310905d385d5"
            }
        },
        "ANN.MRA_1_20210610_030000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "8f085c7c-8d95-4a2c-8a94-0720fbda0d12"
            },
            "inputROIDataList_key1": {
                "value": "bf0cb6c3-d513-46ee-90b3-079b33e49494"
            }
        },
        "ANN.MRA_1_20210612_030000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "86636503-934f-4281-8eda-54ca4c8255d9"
            },
            "inputROIDataList_key1": {
                "value": "d77213b7-96fa-4d37-8ad2-d5046a8118e9"
            }
        },
        "ANN.POP_1_20210624_010000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "178f55e8-de8f-4efb-8675-abfabed01e54"
            },
            "inputROIDataList_key1": {
                "value": "0f07b501-5003-4e78-a374-8d16789ad4df"
            }
        },
        "ANN.POP_1_20210626_030000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "90f50899-7e85-4f3b-9923-9039bbe4280e"
            },
            "inputROIDataList_key1": {
                "value": "249aca97-8687-4cf8-ac09-40a24ac77fff"
            }
        },
        "ANN.POP_1_20210627_030000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "87809e5e-59f4-419d-bc97-7ebc5746bae2"
            },
            "inputROIDataList_key1": {
                "value": "36d9f7e0-93af-403c-8987-67f5cfdef300"
            }
        },
        "ANN.POP_1_20210629_010000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "19ca628d-5a28-4855-ab32-4c9f7834d17d"
            },
            "inputROIDataList_key1": {
                "value": "6d8e0375-c213-4f10-be37-49c741656efe"
            }
        },
        "AUR.SAL_1_20210525_060000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "e99bb3a9-bcdc-4775-b6f5-830eae70e303"
            },
            "inputROIDataList_key1": {
                "value": "3e0a0829-5ed6-4151-b50b-89e042e766cd"
            }
        },
        "AUR.SAL_1_20210527_070000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "5db645ea-13f8-4a5e-a0a1-714d568b61fa"
            },
            "inputROIDataList_key1": {
                "value": "6fede527-014d-45c1-bd4b-71b924952faf"
            }
        },
        "AUR.SAL_1_20210529_050000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "9495cfc4-7260-4cb8-b3c2-d09140f15105"
            },
            "inputROIDataList_key1": {
                "value": "2a100a68-c287-4c44-ab58-1cea7f06563f"
            }
        },
        "AUR.SAL_1_20210530_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "e8808d3e-89f2-49e8-a778-444060124e82"
            },
            "inputROIDataList_key1": {
                "value": "88e32e25-abe6-43c2-b3b2-1987b7b6f947"
            }
        },
        "BAS.CAS_1_20210501_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "0f059693-3c02-4a33-be34-98c6dced487a"
            },
            "inputROIDataList_key1": {
                "value": "15ab86b2-9ece-4650-bac3-22e6fcc2617e"
            }
        },
        "BAS.CAS_1_20210502_050000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "936acc83-1eab-4d7e-8416-7d0a48858eb0"
            },
            "inputROIDataList_key1": {
                "value": "235762e8-3490-4c53-b7c3-ff410336cec9"
            }
        },
        "BAS.CAS_1_20210504_070000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "25b62c51-6757-470a-a746-dfa61c412349"
            },
            "inputROIDataList_key1": {
                "value": "67a4c9cd-e14b-4320-8a56-38e3d4bfa3d1"
            }
        },
        "BAS.CAS_1_20210506_050000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "a828eb0c-d173-4cf3-8e89-4c3e0b749982"
            },
            "inputROIDataList_key1": {
                "value": "4024a7ff-ff54-4ae8-bb28-507251892e94"
            }
        },
        "BEN.LET_1_20210513_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "28f9ebb6-c493-498b-b387-13429a76e565"
            },
            "inputROIDataList_key1": {
                "value": "db053558-74e0-45a6-917a-7ee60b4c5fd6"
            }
        },
        "BEN.LET_1_20210515_050000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "9911ab0c-e568-4adc-a262-651a5aba1069"
            },
            "inputROIDataList_key1": {
                "value": "13ffa36d-17c3-4d9d-b3cd-5ba67827acaa"
            }
        },
        "BEN.LET_1_20210516_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "5bb76315-895b-4c3d-9842-747b7f28d633"
            },
            "inputROIDataList_key1": {
                "value": "70c6b3a8-0817-49a9-ac58-6f503f690ad7"
            }
        },
        "BEN.LET_1_20210518_050000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "8ee2b378-79ea-48d3-afc0-93210d9bc917"
            },
            "inputROIDataList_key1": {
                "value": "8d099976-14f8-4581-9448-ece29ce429ec"
            }
        },
        "CAR.LOP_1_20210516_040000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "244a9027-f3f9-45ae-94b9-a898ba1d8824"
            },
            "inputROIDataList_key1": {
                "value": "8a4a9310-f4eb-4818-bc5d-1b8959d2fcd2"
            }
        },
        "CAR.LOP_1_20210516_070000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "7582d271-9b55-4a4d-98d5-d97f42a3e462"
            },
            "inputROIDataList_key1": {
                "value": "8c7d1291-b469-49c0-b29e-6c61d04c2f17"
            }
        },
        "CAR.LOP_1_20210520_040000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "db2cb1d9-1449-4a72-9bab-a438647e8960"
            },
            "inputROIDataList_key1": {
                "value": "5995b454-abc4-42b9-98b0-42da7149f824"
            }
        },
        "CAR.LOP_1_20210520_070000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "92083e5d-65f7-4556-8bfa-50e96be5f223"
            },
            "inputROIDataList_key1": {
                "value": "72f8e962-b40a-4428-bafa-2dcf2af42a2e"
            }
        },
        "CHR.BOU_1_20210605_070000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "ed8e7938-5a89-4df3-8fbd-18a8a8587988"
            },
            "inputROIDataList_key1": {
                "value": "55f35985-15dd-4096-87e9-29e365eb96bb"
            }
        },
        "CHR.BOU_1_20210606_040000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "2d17ff6c-9c76-4e47-b036-d93946e3265c"
            },
            "inputROIDataList_key1": {
                "value": "61f2eea8-5283-45ea-90b8-eaa02bd6979e"
            }
        },
        "CHR.BOU_1_20210608_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "7fa5dc42-6d2b-477e-b498-33be4581f870"
            },
            "inputROIDataList_key1": {
                "value": "673a5495-9fd3-4809-8bbe-fb9dc5a53565"
            }
        },
        "CHR.BOU_1_20210610_060000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "7f06806c-aadd-4669-8694-ab9c743e7317"
            },
            "inputROIDataList_key1": {
                "value": "7574ecc8-16bb-4646-a9f3-aeac0d543c4d"
            }
        },
        "CSA.EOT_1_20210513_060000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "b0ec606f-2253-4d26-b554-ccc57d5e6075"
            },
            "inputROIDataList_key1": {
                "value": "bae05da8-b230-4b90-89a4-ad51f2bc6657"
            }
        },
        "CSA.EOT_1_20210515_040000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "fa1f69ba-9023-4bb8-81f7-404a685cb48a"
            },
            "inputROIDataList_key1": {
                "value": "89e88846-abaf-4827-87ad-72ef2e704d04"
            }
        },
        "CSA.EOT_1_20210516_030000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "32d0ca62-2e60-4e67-b5a2-8bdc5d677a9e"
            },
            "inputROIDataList_key1": {
                "value": "a91baf1a-457c-422c-97c5-620753b9c6d4"
            }
        },
        "CSA.EOT_1_20210518_030000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "95c53fb8-d2f5-4d4c-ae8f-39de8929f141"
            },
            "inputROIDataList_key1": {
                "value": "30ee8adb-eb8f-4fe8-8db2-41da3910d8a2"
            }
        },
        "CSA.EOT_2_20210513_030000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "952120b1-9eec-4dcd-8b02-8d0f1be2398c"
            },
            "inputROIDataList_key1": {
                "value": "1295c5c0-0afa-40bc-9ff4-7bc0473030a4"
            }
        },
        "CSA.EOT_2_20210515_060000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "6305e148-755d-4a8c-a0a3-a7a6c4c3e0be"
            },
            "inputROIDataList_key1": {
                "value": "1931dd7a-72e5-4253-ac6f-a2ca8829ab29"
            }
        },
        "CSA.EOT_2_20210516_040000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "ffe36559-7387-4063-b9c7-66667c303497"
            },
            "inputROIDataList_key1": {
                "value": "95c949d5-90cd-430a-8ea4-46ce25f5c04d"
            }
        },
        "CSA.EOT_2_20210518_040000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "a6f955f1-51b7-4682-a8cc-6839fdd0e2ee"
            },
            "inputROIDataList_key1": {
                "value": "d3413be7-fc82-4658-8996-d64060fe2c8d"
            }
        },
        "DEB.HAR_2_20210518_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "229fff80-4d5b-4a3c-a60c-3e0172241ab5"
            },
            "inputROIDataList_key1": {
                "value": "2cf9a3da-c5eb-4911-b3de-4266ad8262ac"
            }
        },
        "DEB.HAR_2_20210520_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "0c412f4f-4750-4ae7-b86b-bcfe68078a8b"
            },
            "inputROIDataList_key1": {
                "value": "3c7d3341-be57-444a-b1ae-5e1b2b61f2b8"
            }
        },
        "DEB.HAR_2_20210522_060000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "0e7a2f23-bc0e-4634-a604-19afcf35872a"
            },
            "inputROIDataList_key1": {
                "value": "a43968e4-f875-4fa4-a46a-b74aafe205a3"
            }
        },
        "DEB.HAR_2_20210523_050000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "28427b1a-11cc-4955-bab6-26a353e7c41c"
            },
            "inputROIDataList_key1": {
                "value": "7c08935e-e832-4c84-8e1b-a30eb5d7e515"
            }
        },
        "DMI.MUS_1_20210624_010000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "225c85e3-585a-4fd2-bbd0-2ddd8e2d4e7d"
            },
            "inputROIDataList_key1": {
                "value": "4bee5bbe-bb63-4857-88e4-c241f7834210"
            }
        },
        "DMI.MUS_1_20210626_030000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "6a64d058-41dd-4b9c-aef8-0ddec576c4f3"
            },
            "inputROIDataList_key1": {
                "value": "46c73bd2-00ff-4b99-a9db-a53134c868b7"
            }
        },
        "DMI.MUS_1_20210627_030000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "5679ea0b-7c12-4621-a097-273b1dfd0257"
            },
            "inputROIDataList_key1": {
                "value": "67490be2-3c05-4277-a990-6fd0a29f9b27"
            }
        },
        "DMI.MUS_1_20210629_030000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "a22233bc-c454-4f97-a58b-597d9736cf83"
            },
            "inputROIDataList_key1": {
                "value": "8bf8afd2-60bc-44ec-97a9-f80529f7fced"
            }
        },
        "ELE.VAL_1_20210504_070000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "b057d7da-0e0e-47a4-a372-327a7b4c28a8"
            },
            "inputROIDataList_key1": {
                "value": "531a9229-86a1-4a2b-a767-5672bace7bb1"
            }
        },
        "ELE.VAL_1_20210506_050000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "f96d1375-0785-41c0-97da-9717d41649c0"
            },
            "inputROIDataList_key1": {
                "value": "4fdc3e92-71e3-4039-a92b-a7484d11f923"
            }
        },
        "ELE.VAL_1_20210508_070000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "4d039237-7d48-4b7c-a2d2-3a9eb405a5a7"
            },
            "inputROIDataList_key1": {
                "value": "0d87c200-5e35-45c9-b7fe-ab987d5c4d3f"
            }
        },
        "ELE.VAL_1_20210509_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "50b5a082-3df1-41d9-8468-7f4d85f18f86"
            },
            "inputROIDataList_key1": {
                "value": "3092c0f2-20fa-4910-a5c7-2fe1f66f1112"
            }
        },
        "ELI.FLU_1_20210603_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "3a4ee85c-7f0c-46f8-b46a-cb9a1b8ce5a6"
            },
            "inputROIDataList_key1": {
                "value": "5e51584d-391d-4599-8a05-5ebe433b244e"
            }
        },
        "ELI.FLU_1_20210605_030000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "cf2975e8-ccb6-4e88-a281-b1675069a011"
            },
            "inputROIDataList_key1": {
                "value": "07b0adf6-4609-455a-b4f6-7355e18566ae"
            }
        },
        "ELI.FLU_1_20210606_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "198a1ad7-fe9e-48a2-92e8-3358afc73cb2"
            },
            "inputROIDataList_key1": {
                "value": "db5c03d2-c95d-4bf4-89ca-84d1b79ce2c9"
            }
        },
        "ELI.FLU_1_20210608_030000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "84c569de-21d9-4dc3-b035-6811e4a233ca"
            },
            "inputROIDataList_key1": {
                "value": "66408fac-ef99-42d7-9d3e-601db5388311"
            }
        },
        "ELI.MAN_1_20210603_030000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "ccf9c3e9-2298-43ce-9971-e7931f231f26"
            },
            "inputROIDataList_key1": {
                "value": "02c87585-0826-4c6b-b215-8b87ef0ece15"
            }
        },
        "ELI.MAN_1_20210605_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "21899447-585b-4067-84a5-73d2dc48d014"
            },
            "inputROIDataList_key1": {
                "value": "cf75e03b-6771-4e7a-9e48-c925799be29c"
            }
        },
        "ELI.MAN_1_20210606_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "10bfec41-9975-4222-a9ac-8d2ff122ad22"
            },
            "inputROIDataList_key1": {
                "value": "4e8c5314-4968-423a-bab3-a691b4cf962f"
            }
        },
        "ELI.MAN_1_20210608_030000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "18930e38-bd6d-443d-8a23-4eda614b106c"
            },
            "inputROIDataList_key1": {
                "value": "4b89e347-2919-44aa-99b2-9a7d813a03c3"
            }
        },
        "FLA.BAL_3_20210522_030000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "bb5773e4-728d-4539-9235-21182ea5fc2c"
            },
            "inputROIDataList_key1": {
                "value": "e312b69a-3192-4e68-8958-f77ed3a6fdb0"
            }
        },
        "FLA.BAL_3_20210523_030000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "d1283a4c-ea05-4b92-bbae-664dc56ef68a"
            },
            "inputROIDataList_key1": {
                "value": "ac35f415-4ceb-4e15-b07d-65a95a32f389"
            }
        },
        "FLA.BAL_3_20210525_060000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "d98d666c-cec0-4d66-84ef-a72d7bc63bb0"
            },
            "inputROIDataList_key1": {
                "value": "4d76fefa-8f02-4807-a3f0-1298c6e0d5a2"
            }
        },
        "FLA.BAL_3_20210527_030000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "9e71db63-b563-4b82-a530-f56009b20769"
            },
            "inputROIDataList_key1": {
                "value": "28136015-4be5-49b6-96e7-d5f822df2899"
            }
        },
        "GRE.VAI_1_20210708_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "4c5e1ee2-f33c-44f6-8547-f63e682ecd59"
            },
            "inputROIDataList_key1": {
                "value": "0da5ae91-8f2f-4114-a865-fc084711cc60"
            }
        },
        "GRE.VAI_1_20210710_040000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "cc619c6a-dc8e-4647-a2b6-3c753bf79459"
            },
            "inputROIDataList_key1": {
                "value": "bb10aa85-7266-44a2-a9bf-bc827d241aca"
            }
        },
        "GRE.VAI_1_20210711_020000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "216f0428-4b24-460c-9998-5e3155a7222a"
            },
            "inputROIDataList_key1": {
                "value": "32b2c27f-6325-4e90-b8cd-fa07ff857bbf"
            }
        },
        "GRE.VAI_1_20210713_020000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "365110f1-0a53-4d64-8cfb-329c0ddbe62c"
            },
            "inputROIDataList_key1": {
                "value": "2e07164f-33a0-4273-a493-fc8d9bac28d5"
            }
        },
        "ING.VAN_1_20210513_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "2a217d0c-5b30-4729-bc42-ca2f175683e6"
            },
            "inputROIDataList_key1": {
                "value": "9059b617-6e70-47ca-a64c-3897389e08db"
            }
        },
        "ING.VAN_1_20210513_070000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "066d7d3a-ea54-476a-961d-ac414bddee02"
            },
            "inputROIDataList_key1": {
                "value": "d9253e41-77e8-4d81-bb39-29a4f4823b65"
            }
        },
        "ING.VAN_1_20210520_060000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "56e1c183-5aae-4147-ac09-26f335c00473"
            },
            "inputROIDataList_key1": {
                "value": "098957cf-ad0e-44e9-85bb-339dfa1d91a1"
            }
        },
        "ING.VAN_1_20210520_070000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "4eb4f70e-e579-423f-a83f-02349baeebb9"
            },
            "inputROIDataList_key1": {
                "value": "186f846d-93a2-4d7e-acc4-cd21be0ab697"
            }
        },
        "JON.HAG_1_20210606_040000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "3a80c70e-4cd0-4061-a800-0866832365f3"
            },
            "inputROIDataList_key1": {
                "value": "fb0a9674-ef7c-49f9-aa0a-364c08edd061"
            }
        },
        "JON.HAG_1_20210608_060000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "b54f3418-7a27-4bd5-bf93-f1bcce9d795a"
            },
            "inputROIDataList_key1": {
                "value": "db52a276-9e46-4181-b064-f8e136d5a800"
            }
        },
        "JON.HAG_1_20210610_040000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "bc00b9e3-f0ab-4e94-80d9-f233f119f0d8"
            },
            "inputROIDataList_key1": {
                "value": "d9ad6881-aafd-41f2-b494-7766d3bee3ab"
            }
        },
        "JON.HAG_1_20210612_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "41852132-717d-43d2-9270-9524caaa6f97"
            },
            "inputROIDataList_key1": {
                "value": "82ca9372-e46e-4748-b777-a931e7e82ffa"
            }
        },
        "KAT.SAM_1_20210626_030000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "d10e4b8e-51da-44d5-a11c-e007fb7a1ce3"
            },
            "inputROIDataList_key1": {
                "value": "f5bf0412-cad9-43a4-a2d1-df3fdf21bd9e"
            }
        },
        "KAT.SAM_1_20210627_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "4167e8ef-2c54-4b49-b85e-fee9c5f018c4"
            },
            "inputROIDataList_key1": {
                "value": "424b264b-16ee-470c-98c4-c3333f15781c"
            }
        },
        "KAT.SAM_1_20210629_030000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "b04d7e47-44f2-440b-865b-9b8fb1c19a74"
            },
            "inputROIDataList_key1": {
                "value": "26ed9ca2-2816-45e5-8f81-8de8b909a9b5"
            }
        },
        "KAT.SAM_1_20210701_040000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "a376dbad-5e70-41fe-8b66-2b49c429f536"
            },
            "inputROIDataList_key1": {
                "value": "12bb6ca3-8455-42f0-9a2c-d78845153dc9"
            }
        },
        "KAT.SAM_2_20210612_030000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "99949c5a-81ac-4b68-b7e3-a0389198ef9d"
            },
            "inputROIDataList_key1": {
                "value": "dad35d07-993c-447e-8796-da6f2a392aff"
            }
        },
        "KAT.SAM_2_20210613_030000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "9362228c-8e5b-494f-b91c-a1a2b55c0c99"
            },
            "inputROIDataList_key1": {
                "value": "ba7530ab-ddff-4724-a9bc-e37665a34308"
            }
        },
        "KAT.SAM_2_20210615_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "4490fd09-4e49-489b-8d3b-259767859a52"
            },
            "inputROIDataList_key1": {
                "value": "84c76a2f-dae5-4251-a40e-cf5272a66e0e"
            }
        },
        "KAT.SAM_2_20210617_050000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "70e10748-9bee-46b5-ba51-473bd9790e4b"
            },
            "inputROIDataList_key1": {
                "value": "13d577f8-ded0-4da8-bac3-94e568981928"
            }
        },
        "LEO.DUD_1_20210605_020000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "321dc3e1-a9fb-4d3a-8b31-6a2c6b58178a"
            },
            "inputROIDataList_key1": {
                "value": "19f67d8d-925c-4f5d-a152-586e51a9ddd0"
            }
        },
        "LEO.DUD_1_20210606_050000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "82fb3b06-04fb-4421-b220-5084197e2e8b"
            },
            "inputROIDataList_key1": {
                "value": "5c05f874-38d3-45c7-a983-d2c21425b4df"
            }
        },
        "LEO.DUD_1_20210608_040000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "9d2863ea-e6ea-4f63-b303-d019c9a52738"
            },
            "inputROIDataList_key1": {
                "value": "bc35aeaf-19d1-4b31-a6e4-37185d0da862"
            }
        },
        "LEO.DUD_1_20210610_020000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "f4bc57e7-cdd0-49a2-b0a4-fff90d63865b"
            },
            "inputROIDataList_key1": {
                "value": "c0fb79bf-6408-4521-a344-1cf15be71fdc"
            }
        },
        "LUC.BAR_1_20210520_040000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "28a5d6e9-6701-4d24-aa64-a1fe27749886"
            },
            "inputROIDataList_key1": {
                "value": "70fba6d8-2abd-452f-a9a2-9c61099642cc"
            }
        },
        "LUC.BAR_1_20210522_070000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "c01edf29-4ff3-4b25-9a69-b37aafa546fd"
            },
            "inputROIDataList_key1": {
                "value": "dbc486f3-21cc-455e-b2da-86302e143d35"
            }
        },
        "LUC.BAR_1_20210523_060000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "200ae214-b1ab-413f-a4fd-10224832e426"
            },
            "inputROIDataList_key1": {
                "value": "ef037104-e8c8-43b5-81cf-25034f67d708"
            }
        },
        "LUC.BAR_1_20210525_050000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "dfb7b171-0e9f-4cf2-9dff-a94d09a7b0e7"
            },
            "inputROIDataList_key1": {
                "value": "c6704f76-ead7-41ee-8df8-2ef01fe2f438"
            }
        },
        "MAA.DEG_1_20210612_030000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "7d45b417-e435-4179-9ca7-8253c8ff4558"
            },
            "inputROIDataList_key1": {
                "value": "73d4532c-8f50-4f58-9252-71c5189a7bc5"
            }
        },
        "MAA.DEG_1_20210613_040000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "6556ad61-b86e-479d-812f-92c542502565"
            },
            "inputROIDataList_key1": {
                "value": "7de20221-abb7-44fb-8730-ab8780ac2926"
            }
        },
        "MAA.DEG_1_20210615_060000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "899b1ff6-8238-49cb-976f-fb06410cb282"
            },
            "inputROIDataList_key1": {
                "value": "c63202cf-e502-4c87-9066-711cf0cf62a0"
            }
        },
        "MAA.DEG_1_20210617_060000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "1e381ba7-dafd-4c9e-a8f9-81773417223f"
            },
            "inputROIDataList_key1": {
                "value": "2ddd0e6e-dda3-46e3-9c34-592d7d9bfbc4"
            }
        },
        "MAN.BRA_1_20210506_080000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "9d57da99-c378-49c2-9d11-3febba699e15"
            },
            "inputROIDataList_key1": {
                "value": "5bc3397c-51d0-4bce-9b70-c8f23d15eb63"
            }
        },
        "MAN.BRA_1_20210508_060000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "13d83f15-cca2-41be-983a-3c624bf8965b"
            },
            "inputROIDataList_key1": {
                "value": "8365d14e-df2d-4b57-9ed5-cdddf7e48856"
            }
        },
        "MAN.BRA_1_20210509_050000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "cd40e45a-b929-41e7-a805-0662958e8560"
            },
            "inputROIDataList_key1": {
                "value": "78580ecf-4bb7-43b6-b677-291f2a8dfc85"
            }
        },
        "MAN.BRA_1_20210511_060000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "b1841e08-76a5-4394-9c24-487ee4774a71"
            },
            "inputROIDataList_key1": {
                "value": "6dde0edc-5410-4b35-bf43-41cc407f4f80"
            }
        },
        "MAR.FAT_1_20210701_020000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "4d97f155-c0de-4a67-9473-a63f5c60f257"
            },
            "inputROIDataList_key1": {
                "value": "5b24e26e-462e-43a4-917f-8421669ed33a"
            }
        },
        "MAR.FAT_1_20210703_040000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "11617fc0-9552-4d24-aa7c-82ee77ddeef5"
            },
            "inputROIDataList_key1": {
                "value": "dc30bfb0-1d43-4e86-86f4-6f68cfedd464"
            }
        },
        "MAR.FAT_1_20210704_020000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "d4728856-9294-4dd5-93f9-ecdd1f5a0456"
            },
            "inputROIDataList_key1": {
                "value": "f20024b6-3914-4357-a803-70d79180c0bb"
            }
        },
        "MAR.FAT_1_20210706_050000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "d9356b90-ff61-4080-a931-4e4552375362"
            },
            "inputROIDataList_key1": {
                "value": "9fc85685-7411-4b25-97fe-d385923a159f"
            }
        },
        "MAR.GOS_1_20210701_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "c050704a-6303-447c-8477-32a105931195"
            },
            "inputROIDataList_key1": {
                "value": "01c347c6-aada-4e17-a207-15b77b26aaeb"
            }
        },
        "MAR.GOS_1_20210703_040000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "cdff931c-25b5-4b0f-9ba5-9f5e46bb3a03"
            },
            "inputROIDataList_key1": {
                "value": "01800189-f8df-4702-bec1-a3732cafde15"
            }
        },
        "MAR.GOS_1_20210704_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "3b3585f5-fd5b-4c7c-b9f7-d8700dd98286"
            },
            "inputROIDataList_key1": {
                "value": "63698373-1bee-4946-b5d6-65064575233f"
            }
        },
        "MAR.GOS_1_20210706_060000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "30ded655-f39f-4ad8-b043-17db76bee490"
            },
            "inputROIDataList_key1": {
                "value": "e9960372-461c-4a44-a9a9-cf8d131a696e"
            }
        },
        "MIC.BOG_1_20210624_030000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "ccb5894f-68c3-434a-97c5-5536fec507d5"
            },
            "inputROIDataList_key1": {
                "value": "932d941d-bbd4-48bd-825e-da2f0d42bae2"
            }
        },
        "MIC.BOG_1_20210626_040000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "82625a9e-f8eb-450e-9c0f-5ff2db0e014c"
            },
            "inputROIDataList_key1": {
                "value": "a75ae845-40cb-4de6-b069-dfa4a4e83992"
            }
        },
        "MIC.BOG_1_20210627_060000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "34ed03a4-3293-4fdb-bcc5-8240213f8889"
            },
            "inputROIDataList_key1": {
                "value": "0655eb77-f52c-43b7-ae23-9cf55e1f772e"
            }
        },
        "MIC.BOG_1_20210629_030000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "bf7a90af-70c1-4cad-b439-103d95d793e6"
            },
            "inputROIDataList_key1": {
                "value": "e5c3d855-9856-4cad-a54f-615d6753e7ec"
            }
        },
        "MIK.KOZ_1_20210619_030000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "a765f0b6-ae8e-42fb-bd35-47a86b7b07fb"
            },
            "inputROIDataList_key1": {
                "value": "31c1ae4f-8141-4518-b9da-47532e8694c6"
            }
        },
        "MIK.KOZ_1_20210620_010000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "a3ea6166-de2a-4200-88e1-46d6eda07b5c"
            },
            "inputROIDataList_key1": {
                "value": "b1900bcd-2944-4dc1-8112-b6071708997c"
            }
        },
        "MIK.KOZ_1_20210622_010000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "546527b8-f9fd-4d3d-95a1-b7eac9b28b26"
            },
            "inputROIDataList_key1": {
                "value": "2e99fd9d-3bf3-42cc-9b41-76cca3266dd4"
            }
        },
        "MIK.KOZ_1_20210624_020000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "066e513c-0e67-4c55-b79b-5f4c73505b2b"
            },
            "inputROIDataList_key1": {
                "value": "a0b51585-458b-4e66-8a56-2f39a6054172"
            }
        },
        "MON.BJO_1_20210629_030000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "7c8923ed-cc85-4ebd-a3d5-0a883e72ccd0"
            },
            "inputROIDataList_key1": {
                "value": "f54b65d1-3339-4dbe-94c8-11202b93fb1e"
            }
        },
        "MON.BJO_1_20210701_060000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "f3c32a54-68c1-4ac2-9984-8bd360dcc276"
            },
            "inputROIDataList_key1": {
                "value": "dc74fec2-a048-49b6-b3af-bd6a7162461a"
            }
        },
        "MON.BJO_1_20210703_030000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "9316e7ba-2051-48ab-8ee5-516edb8b657f"
            },
            "inputROIDataList_key1": {
                "value": "1abfbc9f-ed96-44ec-a051-49befba10d13"
            }
        },
        "MON.BJO_1_20210704_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "ddbb3852-8ec0-4792-b6ef-8822ba88a7df"
            },
            "inputROIDataList_key1": {
                "value": "7c386858-5fb9-4d9e-949d-7fd51d26e332"
            }
        },
        "PIL.FER_1_20210424_080000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "15b011ff-370c-4ee4-bd51-ed88c6771361"
            },
            "inputROIDataList_key1": {
                "value": "246b4870-b3ce-46a6-b7aa-02fa8e75aa57"
            }
        },
        "PIL.FER_1_20210425_050000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "9e6cac3f-bafb-4bfc-9933-44902ff9ba5a"
            },
            "inputROIDataList_key1": {
                "value": "ffb9702b-f9c7-4b16-a6f8-17ac876d2393"
            }
        },
        "PIL.FER_1_20210427_060000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "0ba7fe63-b461-4157-b812-651250d5f796"
            },
            "inputROIDataList_key1": {
                "value": "34b6d47b-818b-4884-82c1-4d87cf0b1428"
            }
        },
        "PIL.FER_1_20210429_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "ad7fe2e1-7151-4602-ae68-5e6fc407551c"
            },
            "inputROIDataList_key1": {
                "value": "0921e742-2aae-4d8b-868e-d668d6ee4476"
            }
        },
        "PIL.FER_2_20210504_040000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "f923deea-9a41-4ddb-b487-8a02eeae4eac"
            },
            "inputROIDataList_key1": {
                "value": "bbc27600-213b-4d8d-ab60-c400ed191900"
            }
        },
        "PIL.FER_2_20210506_040000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "1b5d33e7-c4a8-4945-8099-b51bad200532"
            },
            "inputROIDataList_key1": {
                "value": "84329661-cf20-433c-a402-a1dd9ed0a097"
            }
        },
        "PIL.FER_2_20210508_040000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "bf30579b-4e2f-4d7f-89bb-a7d452362c8c"
            },
            "inputROIDataList_key1": {
                "value": "a6dfd701-227d-4aa5-8a92-0f9673b1ff56"
            }
        },
        "PIL.FER_2_20210509_050000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "ee4512da-37c7-4806-911e-1c74d799b2f0"
            },
            "inputROIDataList_key1": {
                "value": "0f7fd63b-22f6-4ac4-9544-94797263d5e1"
            }
        },
        "RIC.HOU_1_20210525_050000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "78735a78-d639-44b5-87a9-d9400f29b0d9"
            },
            "inputROIDataList_key1": {
                "value": "ae02e30a-b506-4943-85bd-b2957739d33e"
            }
        },
        "RIC.HOU_1_20210527_060000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "2589bb28-accb-455b-9a67-f6b0458a8fce"
            },
            "inputROIDataList_key1": {
                "value": "f1143cd0-3e6f-4f91-9bb2-fee4b7785b71"
            }
        },
        "RIC.HOU_1_20210529_070000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "cea5f104-4a48-47e2-94d1-f0b4114e67ee"
            },
            "inputROIDataList_key1": {
                "value": "cad53325-aa78-4072-82ac-fcb7b8dcc57a"
            }
        },
        "RIC.HOU_1_20210530_040000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "b75a211a-5a29-46da-ba7d-51d83a6a633d"
            },
            "inputROIDataList_key1": {
                "value": "48f30d61-355e-4e23-bbda-33f0159dde2a"
            }
        },
        "RIT.ISE_1_20210515_060000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "aa91a8c9-8dca-4759-b04e-9efaad6b4033"
            },
            "inputROIDataList_key1": {
                "value": "1be8e94c-ea04-4e0b-8d4e-fedb71bbdad0"
            }
        },
        "RIT.ISE_1_20210516_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "f20fc97e-f01b-437f-80cb-f5e1bbcb127c"
            },
            "inputROIDataList_key1": {
                "value": "b9fbab72-5379-439d-b201-186af08849cd"
            }
        },
        "RIT.ISE_1_20210518_060000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "fb3adf0d-61de-4375-a6c6-12f00bd0f354"
            },
            "inputROIDataList_key1": {
                "value": "2e1ea6ef-1fd8-4136-9883-636cabecd3a8"
            }
        },
        "RIT.ISE_1_20210520_050000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "d9c86611-9a24-4006-8528-cb1eb5cbfe14"
            },
            "inputROIDataList_key1": {
                "value": "fdefbf54-b85b-40a3-ad21-b043c2269c20"
            }
        },
        "SAM.GRE_1_20210529_050000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "41734457-e877-4271-80c7-cce2cfe5e3fe"
            },
            "inputROIDataList_key1": {
                "value": "89b1d1d8-6182-43fc-bf27-affbb264def6"
            }
        },
        "SAM.GRE_1_20210530_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "cef73982-7e08-4cdf-9425-f74390467b93"
            },
            "inputROIDataList_key1": {
                "value": "7c23bac0-7ad5-44a1-ae92-a28f8a292d0c"
            }
        },
        "SAM.GRE_1_20210601_050000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "57dbf985-a871-4c5e-9e1e-752dc4fb1522"
            },
            "inputROIDataList_key1": {
                "value": "abb2ff61-b7f4-4b89-84a8-863a5b950a7f"
            }
        },
        "SAM.GRE_1_20210603_040000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "405f9268-8dc2-4976-a031-c55ce35b6618"
            },
            "inputROIDataList_key1": {
                "value": "3e8f86e1-a24c-4bc5-93fb-915fe622c2c4"
            }
        },
        "SLO.MIL_1_20210626_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "2dced861-7773-4109-822e-89fafb678c8d"
            },
            "inputROIDataList_key1": {
                "value": "6d63204a-8e13-4052-8e33-8cb27bd55f32"
            }
        },
        "SLO.MIL_1_20210627_040000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "fef01e3e-872e-4751-a51e-8b8e51793663"
            },
            "inputROIDataList_key1": {
                "value": "2ba9c015-5992-4b14-8ffb-dd6a5b9cac09"
            }
        },
        "SLO.MIL_1_20210629_030000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "b3999ad2-85e9-4ddc-b201-53988dffeb05"
            },
            "inputROIDataList_key1": {
                "value": "af1100a9-a281-426a-8b77-eb008a1b4a78"
            }
        },
        "SLO.MIL_1_20210701_040000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "781e17d7-523e-4f5d-a0f5-423d90a46622"
            },
            "inputROIDataList_key1": {
                "value": "60154221-885d-49d9-a315-961ae63834b9"
            }
        },
        "SLO.MIL_2_20210612_030000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "64edbe18-7a4c-4ae0-a883-1117c3c58b74"
            },
            "inputROIDataList_key1": {
                "value": "e96168b6-ace2-45db-b091-347057686f12"
            }
        },
        "SLO.MIL_2_20210612_050000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "59f3db56-cbe4-41db-9935-da6b497ec87c"
            },
            "inputROIDataList_key1": {
                "value": "6cff1b44-09cd-4c0c-b24d-adb171c8cf89"
            }
        },
        "SLO.MIL_2_20210613_030000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "839eadbd-b873-4980-9db8-f15ccda65381"
            },
            "inputROIDataList_key1": {
                "value": "145b7534-1b17-4c87-ae26-6e2476843105"
            }
        },
        "SLO.MIL_2_20210613_060000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "aa63bcd9-d43e-453c-a06f-afee6cde4429"
            },
            "inputROIDataList_key1": {
                "value": "28c5ee9f-536d-430c-a61c-238bf19be680"
            }
        },
        "SOF.GRI_1_20210608_060000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "7800129b-4b4b-42a1-829e-288d822af256"
            },
            "inputROIDataList_key1": {
                "value": "55ae8ec9-7d80-455e-8dca-aebec6f1b304"
            }
        },
        "SOF.GRI_1_20210610_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "42713b82-ad08-4222-b28a-554309c26a30"
            },
            "inputROIDataList_key1": {
                "value": "e5ff03b1-16db-437f-a24c-02e13d4b2d25"
            }
        },
        "SOF.GRI_1_20210612_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "69fda10e-dc4e-451b-82af-8958e739481a"
            },
            "inputROIDataList_key1": {
                "value": "473bf96c-4f78-42c5-803e-4871b44b2348"
            }
        },
        "SOF.GRI_1_20210613_040000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "1bb31fa9-e9c9-447e-803e-79f4cde6ccb7"
            },
            "inputROIDataList_key1": {
                "value": "ff880ae4-3f03-493e-9e40-18858433fe0c"
            }
        },
        "THO.DAM_1_20210603_070000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "587f187e-7796-408a-9c22-11e446c5ec14"
            },
            "inputROIDataList_key1": {
                "value": "c2791ab7-f262-40c7-b2b9-e54a93ae473b"
            }
        },
        "THO.DAM_1_20210605_050000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "57771a02-14c2-4aa2-a227-87ff0faa4936"
            },
            "inputROIDataList_key1": {
                "value": "448bae9f-5975-4c83-ad71-19c3c0ba212b"
            }
        },
        "THO.DAM_1_20210606_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "904edfb6-32a3-466c-9bb8-1471a4653311"
            },
            "inputROIDataList_key1": {
                "value": "407aa3a4-afcf-4798-b385-173d15449a4a"
            }
        },
        "THO.DAM_1_20210606_050000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "cb51bbbc-3de7-4942-b2cb-d7c2ad78871f"
            },
            "inputROIDataList_key1": {
                "value": "812e6789-cb0e-446f-842a-84b19e576d82"
            }
        },
        "VOJ.LAN_1_20210626_050000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "e28f18eb-c979-4764-ada2-6d5c4f797f57"
            },
            "inputROIDataList_key1": {
                "value": "f32ac372-4a12-4f86-a37f-47b02de718eb"
            }
        },
        "VOJ.LAN_1_20210627_040000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "b91d5cfa-a9b5-48e7-8b95-b31a6fe5a87e"
            },
            "inputROIDataList_key1": {
                "value": "3cf8a8b2-d97a-46a3-adf6-0c8812ef9060"
            }
        },
        "VOJ.LAN_1_20210629_030000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "6070514f-8257-4216-8b40-8f609a14d9cb"
            },
            "inputROIDataList_key1": {
                "value": "66499329-a388-4f1a-a197-3da03821c3fe"
            }
        },
        "VOJ.LAN_1_20210629_040000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "7ed42e2e-8d9b-490c-85e7-9359137262bc"
            },
            "inputROIDataList_key1": {
                "value": "a6cae2ee-3e8d-4551-bc9b-ebebb8aa3254"
            }
        },
        "XOA.MOR_1_20210504_050000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "3fe4464d-15f8-489c-a743-9798c73083b2"
            },
            "inputROIDataList_key1": {
                "value": "d6558ceb-d8cb-4ee4-a081-dfee725d85a8"
            }
        },
        "XOA.MOR_1_20210506_050000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "2f11b0c4-630a-4acd-9f3f-e9ba802d56b7"
            },
            "inputROIDataList_key1": {
                "value": "ffba313b-af18-496a-bf0d-3b0f88c11323"
            }
        },
        "XOA.MOR_1_20210508_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "b9a3322b-112b-4501-8e80-acfaa376a356"
            },
            "inputROIDataList_key1": {
                "value": "e5570e0a-64a3-42b5-9fb0-61fd834c3150"
            }
        },
        "XOA.MOR_1_20210509_060000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "dfc17e6d-1dda-4fd2-9004-17a693e7f713"
            },
            "inputROIDataList_key1": {
                "value": "41d94843-accb-416d-8bd9-e1084ad8afdb"
            }
        },
        "ZUL.VAR_1_20210508_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "5e464171-1922-4a52-a5a2-2937679b0e58"
            },
            "inputROIDataList_key1": {
                "value": "5358303b-3d0f-453b-b611-affdfb969af9"
            }
        },
        "ZUL.VAR_1_20210509_080000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "39e7d0d0-5d6b-4efb-a88e-6b0716dc7894"
            },
            "inputROIDataList_key1": {
                "value": "fba71863-40cf-4a66-8180-5c76fb4607db"
            }
        },
        "ZUL.VAR_1_20210511_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "d39a06a1-1a56-491c-b344-10910a354aa3"
            },
            "inputROIDataList_key1": {
                "value": "3158ab6b-6f13-4920-b616-ab9195d302b4"
            }
        },
        "ZUL.VAR_1_20210513_080000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "60d6fe58-6348-48ab-9f7d-0c1498dcbe15"
            },
            "inputROIDataList_key1": {
                "value": "27ec7afc-2ea5-4daf-9223-b76c627ab51d"
            }
        },
        "ZUL.VAR_2_20210508_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "d2318fa9-9dad-4d20-9d66-008485d22450"
            },
            "inputROIDataList_key1": {
                "value": "e3b98f28-172a-4f15-8c11-32fb7e94b6a1"
            }
        },
        "ZUL.VAR_2_20210509_080000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "2b7d8adf-eadf-490d-a71a-8c27925e5261"
            },
            "inputROIDataList_key1": {
                "value": "c173f017-e2f5-4311-a966-09a0ac8abf53"
            }
        },
        "ZUL.VAR_2_20210511_050000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "52f92f90-eac0-4087-a192-637e831857b0"
            },
            "inputROIDataList_key1": {
                "value": "09302a9c-a1aa-4dfb-b7a0-abf8008b28f1"
            }
        },
        "ZUL.VAR_2_20210513_050000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "ba5eadad-e374-4db4-911d-443880f855c0"
            },
            "inputROIDataList_key1": {
                "value": "36dee12a-2668-46c4-8f47-948583be17a1"
            }
        },
        "ZUL.VAR_3_20210508_070000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "53fbf2cd-cdba-4753-81ad-002256df880b"
            },
            "inputROIDataList_key1": {
                "value": "a71ac13c-55e3-408d-b8b4-25c91105de78"
            }
        },
        "ZUL.VAR_3_20210509_080000.WAV_2X10MIN.WAV": {
            "inputAudio_key": {
                "value": "68ddc599-a6c9-45ee-8321-1995815c3098"
            },
            "inputROIDataList_key1": {
                "value": "7925913e-8e28-486c-849e-4fcaec52e40d"
            }
        },
        "ZUL.VAR_3_20210511_050000.WAV_3X10MIN.WAV": {
            "inputAudio_key": {
                "value": "62c0f555-adc4-48bd-bd1d-0f450688e6fd"
            },
            "inputROIDataList_key1": {
                "value": "f48acc6d-9e5c-4752-a13c-40cb085fad4a"
            }
        },
        "ZUL.VAR_3_20210513_070000.WAV_1X10MIN.WAV": {
            "inputAudio_key": {
                "value": "ae704832-3fe5-4e6f-9967-8b99dacb9c05"
            },
            "inputROIDataList_key1": {
                "value": "51f9ff31-490d-49a7-9374-2eaa5182b1f0"
            }
        }
    },
    "workflowId": "90b20f2e-8292-409d-bad4-3aceef77deab",
    "miniWorkflowSetId": "0dee5a31-55c1-42c8-ad92-34ad995d69a9"
}



const validate = ajvValidator.getSchema('https://raw.githubusercontent.com/SPINEProject/SPINE-json-schema/master/schemas/livePresenterExperiment.schema.json#/definitions/livePresenterExperimentDoc');
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
