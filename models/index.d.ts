import { ModelInit, MutableModel, __modelMeta__, CustomIdentifier, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum ActiveStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}



type EagerSong = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Song, 'key'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly key: string;
  readonly fileUrl: string;
  readonly fileKey: string;
  readonly listens?: (string | null)[] | null;
  readonly trendingListens?: (string | null)[] | null;
  readonly listOfUidDownVotes?: (string | null)[] | null;
  readonly listOfUidUpVotes?: (string | null)[] | null;
  readonly name: string;
  readonly partOf?: string | null;
  readonly selectedCategory: string;
  readonly selectedCreator?: string | null;
  readonly thumbnail: string;
  readonly thumbnailKey: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySong = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Song, 'key'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly key: string;
  readonly fileUrl: string;
  readonly fileKey: string;
  readonly listens?: (string | null)[] | null;
  readonly trendingListens?: (string | null)[] | null;
  readonly listOfUidDownVotes?: (string | null)[] | null;
  readonly listOfUidUpVotes?: (string | null)[] | null;
  readonly name: string;
  readonly partOf?: string | null;
  readonly selectedCategory: string;
  readonly selectedCreator?: string | null;
  readonly thumbnail: string;
  readonly thumbnailKey: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Song = LazyLoading extends LazyLoadingDisabled ? EagerSong : LazySong

export declare const Song: (new (init: ModelInit<Song>) => Song) & {
  copyOf(source: Song, mutator: (draft: MutableModel<Song>) => MutableModel<Song> | void): Song;
}

type EagerCreator = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Creator, 'key'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly key: string;
  readonly desc?: string | null;
  readonly facebook?: string | null;
  readonly instagram?: string | null;
  readonly name: string;
  readonly thumbnail?: string | null;
  readonly thumbnailKey?: string | null;
  readonly twitter?: string | null;
  readonly youtube?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCreator = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Creator, 'key'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly key: string;
  readonly desc?: string | null;
  readonly facebook?: string | null;
  readonly instagram?: string | null;
  readonly name: string;
  readonly thumbnail?: string | null;
  readonly thumbnailKey?: string | null;
  readonly twitter?: string | null;
  readonly youtube?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Creator = LazyLoading extends LazyLoadingDisabled ? EagerCreator : LazyCreator

export declare const Creator: (new (init: ModelInit<Creator>) => Creator) & {
  copyOf(source: Creator, mutator: (draft: MutableModel<Creator>) => MutableModel<Creator> | void): Creator;
}

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Category, 'key'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly key: string;
  readonly name: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Category, 'key'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly key: string;
  readonly name: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerAlbum = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Album, 'key'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly key: string;
  readonly name: string;
  readonly thumbnail?: string | null;
  readonly thumbnailKey?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAlbum = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Album, 'key'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly key: string;
  readonly name: string;
  readonly thumbnail?: string | null;
  readonly thumbnailKey?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Album = LazyLoading extends LazyLoadingDisabled ? EagerAlbum : LazyAlbum

export declare const Album: (new (init: ModelInit<Album>) => Album) & {
  copyOf(source: Album, mutator: (draft: MutableModel<Album>) => MutableModel<Album> | void): Album;
}

type EagerProfile = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Profile, 'key'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly key: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone_number?: string | null;
  readonly imageKey?: string | null;
  readonly followers?: (string | null)[] | null;
  readonly follows?: (string | null)[] | null;
  readonly activeStatus?: ActiveStatus | keyof typeof ActiveStatus | null;
  readonly lastActive?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfile = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Profile, 'key'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly key: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone_number?: string | null;
  readonly imageKey?: string | null;
  readonly followers?: (string | null)[] | null;
  readonly follows?: (string | null)[] | null;
  readonly activeStatus?: ActiveStatus | keyof typeof ActiveStatus | null;
  readonly lastActive?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}

type EagerRequestPlayer = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<RequestPlayer, 'key'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly key: string;
  readonly name?: string | null;
  readonly desc?: string | null;
  readonly device?: string | null;
  readonly longitude?: string | null;
  readonly latitude?: string | null;
  readonly playlists?: (RequestPlaylist | null)[] | null;
  readonly followers?: (string | null)[] | null;
  readonly following?: (string | null)[] | null;
  readonly createdDate: string;
  readonly updatedDate: string;
  readonly ownerData?: string | null;
  readonly owners?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRequestPlayer = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<RequestPlayer, 'key'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly key: string;
  readonly name?: string | null;
  readonly desc?: string | null;
  readonly device?: string | null;
  readonly longitude?: string | null;
  readonly latitude?: string | null;
  readonly playlists: AsyncCollection<RequestPlaylist>;
  readonly followers?: (string | null)[] | null;
  readonly following?: (string | null)[] | null;
  readonly createdDate: string;
  readonly updatedDate: string;
  readonly ownerData?: string | null;
  readonly owners?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RequestPlayer = LazyLoading extends LazyLoadingDisabled ? EagerRequestPlayer : LazyRequestPlayer

export declare const RequestPlayer: (new (init: ModelInit<RequestPlayer>) => RequestPlayer) & {
  copyOf(source: RequestPlayer, mutator: (draft: MutableModel<RequestPlayer>) => MutableModel<RequestPlayer> | void): RequestPlayer;
}

type EagerRequestSong = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<RequestSong, 'key'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly key: string;
  readonly fileUrl: string;
  readonly fileKey: string;
  readonly listens?: (string | null)[] | null;
  readonly trendingListens?: (string | null)[] | null;
  readonly listOfUidDownVotes?: (string | null)[] | null;
  readonly listOfUidUpVotes?: (string | null)[] | null;
  readonly requests?: (string | null)[] | null;
  readonly requestUpVotes?: (string | null)[] | null;
  readonly name: string;
  readonly partOf?: string | null;
  readonly selectedCategory: string;
  readonly selectedCreator?: string | null;
  readonly thumbnail: string;
  readonly thumbnailKey: string;
  readonly playlist: RequestPlaylist;
  readonly createdDate: string;
  readonly updatedDate: string;
  readonly ownerData?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly requestPlaylistSongsKey: string;
}

type LazyRequestSong = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<RequestSong, 'key'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly key: string;
  readonly fileUrl: string;
  readonly fileKey: string;
  readonly listens?: (string | null)[] | null;
  readonly trendingListens?: (string | null)[] | null;
  readonly listOfUidDownVotes?: (string | null)[] | null;
  readonly listOfUidUpVotes?: (string | null)[] | null;
  readonly requests?: (string | null)[] | null;
  readonly requestUpVotes?: (string | null)[] | null;
  readonly name: string;
  readonly partOf?: string | null;
  readonly selectedCategory: string;
  readonly selectedCreator?: string | null;
  readonly thumbnail: string;
  readonly thumbnailKey: string;
  readonly playlist: AsyncItem<RequestPlaylist>;
  readonly createdDate: string;
  readonly updatedDate: string;
  readonly ownerData?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly requestPlaylistSongsKey: string;
}

export declare type RequestSong = LazyLoading extends LazyLoadingDisabled ? EagerRequestSong : LazyRequestSong

export declare const RequestSong: (new (init: ModelInit<RequestSong>) => RequestSong) & {
  copyOf(source: RequestSong, mutator: (draft: MutableModel<RequestSong>) => MutableModel<RequestSong> | void): RequestSong;
}

type EagerRequestPlaylist = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<RequestPlaylist, 'key'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly key: string;
  readonly name?: string | null;
  readonly desc?: string | null;
  readonly player: RequestPlayer;
  readonly songs?: (RequestSong | null)[] | null;
  readonly listeners?: (string | null)[] | null;
  readonly createdDate: string;
  readonly updatedDate: string;
  readonly ownerData?: string | null;
  readonly owners?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly requestPlayerPlaylistsKey?: string | null;
}

type LazyRequestPlaylist = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<RequestPlaylist, 'key'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly key: string;
  readonly name?: string | null;
  readonly desc?: string | null;
  readonly player: AsyncItem<RequestPlayer>;
  readonly songs: AsyncCollection<RequestSong>;
  readonly listeners?: (string | null)[] | null;
  readonly createdDate: string;
  readonly updatedDate: string;
  readonly ownerData?: string | null;
  readonly owners?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly requestPlayerPlaylistsKey?: string | null;
}

export declare type RequestPlaylist = LazyLoading extends LazyLoadingDisabled ? EagerRequestPlaylist : LazyRequestPlaylist

export declare const RequestPlaylist: (new (init: ModelInit<RequestPlaylist>) => RequestPlaylist) & {
  copyOf(source: RequestPlaylist, mutator: (draft: MutableModel<RequestPlaylist>) => MutableModel<RequestPlaylist> | void): RequestPlaylist;
}

type EagerStkPushData = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<StkPushData, 'key'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly key: string;
  readonly phoneNumber: string;
  readonly merchantRequestID: string;
  readonly checkoutRequestID: string;
  readonly responseCode: string;
  readonly responseDescription: string;
  readonly customerMessage: string;
  readonly queryResultCode?: string | null;
  readonly queryResultDesc?: string | null;
  readonly createdDate: string;
  readonly updatedDate: string;
  readonly ownerData?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStkPushData = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<StkPushData, 'key'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly key: string;
  readonly phoneNumber: string;
  readonly merchantRequestID: string;
  readonly checkoutRequestID: string;
  readonly responseCode: string;
  readonly responseDescription: string;
  readonly customerMessage: string;
  readonly queryResultCode?: string | null;
  readonly queryResultDesc?: string | null;
  readonly createdDate: string;
  readonly updatedDate: string;
  readonly ownerData?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StkPushData = LazyLoading extends LazyLoadingDisabled ? EagerStkPushData : LazyStkPushData

export declare const StkPushData: (new (init: ModelInit<StkPushData>) => StkPushData) & {
  copyOf(source: StkPushData, mutator: (draft: MutableModel<StkPushData>) => MutableModel<StkPushData> | void): StkPushData;
}

type EagerMpesaCallbackData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MpesaCallbackData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly merchantRequestID: string;
  readonly checkoutRequestID: string;
  readonly resultCode: string;
  readonly resultDesc?: string | null;
  readonly amount?: string | null;
  readonly mpesaReceiptNumber?: string | null;
  readonly transactionDate?: string | null;
  readonly phoneNumber: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMpesaCallbackData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MpesaCallbackData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly merchantRequestID: string;
  readonly checkoutRequestID: string;
  readonly resultCode: string;
  readonly resultDesc?: string | null;
  readonly amount?: string | null;
  readonly mpesaReceiptNumber?: string | null;
  readonly transactionDate?: string | null;
  readonly phoneNumber: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MpesaCallbackData = LazyLoading extends LazyLoadingDisabled ? EagerMpesaCallbackData : LazyMpesaCallbackData

export declare const MpesaCallbackData: (new (init: ModelInit<MpesaCallbackData>) => MpesaCallbackData) & {
  copyOf(source: MpesaCallbackData, mutator: (draft: MutableModel<MpesaCallbackData>) => MutableModel<MpesaCallbackData> | void): MpesaCallbackData;
}

type EagerConfirmation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Confirmation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly transactionType: string;
  readonly transID: string;
  readonly transTime: string;
  readonly transAmount: string;
  readonly businessShortCode: string;
  readonly billRefNumber: string;
  readonly invoiceNumber?: string | null;
  readonly orgAccountBalance?: string | null;
  readonly thirdPartyTransID?: string | null;
  readonly mSISDN?: string | null;
  readonly firstName?: string | null;
  readonly middleName?: string | null;
  readonly lastName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConfirmation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Confirmation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly transactionType: string;
  readonly transID: string;
  readonly transTime: string;
  readonly transAmount: string;
  readonly businessShortCode: string;
  readonly billRefNumber: string;
  readonly invoiceNumber?: string | null;
  readonly orgAccountBalance?: string | null;
  readonly thirdPartyTransID?: string | null;
  readonly mSISDN?: string | null;
  readonly firstName?: string | null;
  readonly middleName?: string | null;
  readonly lastName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Confirmation = LazyLoading extends LazyLoadingDisabled ? EagerConfirmation : LazyConfirmation

export declare const Confirmation: (new (init: ModelInit<Confirmation>) => Confirmation) & {
  copyOf(source: Confirmation, mutator: (draft: MutableModel<Confirmation>) => MutableModel<Confirmation> | void): Confirmation;
}