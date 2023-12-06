import { UDFCompatibleDatafeedBase } from './udf-compatible-datafeed-base';
import { LimitedResponseConfiguration } from './history-provider';
import { IRequester } from './irequester';

export declare class UDFCompatibleDatafeed extends UDFCompatibleDatafeedBase {
    constructor(datafeedURL: string, updateFrequency?: number, limitedServerResponse?: LimitedResponseConfiguration ,requester: IRequester );
}
