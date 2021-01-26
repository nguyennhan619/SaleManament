import {String} from '../library/string/string';

export class LinkSettings {
    public static GetResLinkSetting(pGroup: string, pFunction: string, ...pParams: any[]) {
        let resLinkSetting: any = require('../../../reslink-api.json');
        let link = resLinkSetting[pGroup][pFunction];
        return String.Format(link, pParams);
    }
}