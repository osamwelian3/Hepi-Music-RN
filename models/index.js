// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ActiveStatus = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE"
};

const { Song, Creator, Category, Album, Profile, RequestPlayer, RequestSong, RequestPlaylist, StkPushData, MpesaCallbackData, Confirmation } = initSchema(schema);

export {
  Song,
  Creator,
  Category,
  Album,
  Profile,
  RequestPlayer,
  RequestSong,
  RequestPlaylist,
  StkPushData,
  MpesaCallbackData,
  Confirmation,
  ActiveStatus
};