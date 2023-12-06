import { Bar, HistoryMetadata, LibrarySymbolInfo, PeriodParams } from '../../../charting_library/datafeed-api';
import { IRequester } from './irequester';
export type PeriodParamsWithOptionalCountback = Omit<PeriodParams, 'countBack'> & {
    countBack?: number;
};
export interface GetBarsResult {
    bars: Bar[];
    meta: HistoryMetadata;
    fxs: any;
    bis: any;
    xds: any;
    zsds: any;
    bi_zss: any;
    xd_zss: any;
    zsd_zss: any;
    bcs: any;
    mmds: any;
}
export interface LimitedResponseConfiguration {
    /**
     * Set this value to the maximum number of bars which
     * the data backend server can supply in a single response.
     * This doesn't affect or change the library behavior regarding
     * how many bars it will request. It just allows this Datafeed
     * implementation to correctly handle this situation.
     */
    maxResponseLength: number;
    /**
     * If the server can't return all the required bars in a single
     * response then `expectedOrder` specifies whether the server
     * will send the latest (newest) or earliest (older) data first.
     */
    expectedOrder: 'latestFirst' | 'earliestFirst';
}
export declare class HistoryProvider {
    private _datafeedUrl;
    private readonly _requester;
    private readonly _limitedServerResponse?;
    bars_result: Map<string, any>;
    constructor(datafeedUrl: string, requester: IRequester, limitedServerResponse?: LimitedResponseConfiguration);
    getBars(symbolInfo: LibrarySymbolInfo, resolution: string, periodParams: PeriodParamsWithOptionalCountback): Promise<GetBarsResult>;
    private _processTruncatedResponse;
    private _processHistoryResponse;
}
