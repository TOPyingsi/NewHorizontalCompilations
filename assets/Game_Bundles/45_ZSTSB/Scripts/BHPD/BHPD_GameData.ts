import { _decorator, Component, Node, sys } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BHPD_GameData')
export class BHPD_GameData {
    public LockArr: boolean[] = [true, false, false, false, false, false];

    public isFirst: boolean = true;

    public mapData: { BuildingName: string; State: boolean; fillArr: boolean[] }[] = [
        { BuildingName: "地图1", State: false, fillArr: [] },
        { BuildingName: "地图2", State: false, fillArr: [] },
        { BuildingName: "地图3", State: false, fillArr: [] },
        { BuildingName: "地图4", State: false, fillArr: [] },
        { BuildingName: "地图5", State: false, fillArr: [] },
        { BuildingName: "地图6", State: false, fillArr: [] },
    ]

    getDataByName(buildingName: string): { BuildingName: string; State: boolean; fillArr: boolean[] } {
        return this.mapData.find(item => item.BuildingName === buildingName);
    }

    private static instance: BHPD_GameData = null;

    public static get Instance(): BHPD_GameData {
        if (!BHPD_GameData.instance) {
            this.ReadDate();
        }
        return BHPD_GameData.instance;
    }

    public TimeDate: number[] = [];
    public static DateSave() {
        let json = JSON.stringify(BHPD_GameData.Instance);
        sys.localStorage.setItem("BHPD_DATA", json);
        console.log("游戏存档");
    }
    public static ReadDate() {
        let name = sys.localStorage.getItem("BHPD_DATA");
        if (name != "" && name != null) {
            console.log("读取存档");
            BHPD_GameData.instance = Object.assign(new BHPD_GameData(), JSON.parse(name));
        } else {
            console.log("新建存档");
            BHPD_GameData.instance = new BHPD_GameData();
        }
    }
}


