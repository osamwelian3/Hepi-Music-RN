/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong(
    $filter: ModelSubscriptionSongFilterInput
    $owner: String
  ) {
    onCreateSong(filter: $filter, owner: $owner) {
      key
      fileUrl
      fileKey
      listens
      trendingListens
      listOfUidDownVotes
      listOfUidUpVotes
      name
      partOf
      selectedCategory
      selectedCreator
      thumbnail
      thumbnailKey
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong(
    $filter: ModelSubscriptionSongFilterInput
    $owner: String
  ) {
    onUpdateSong(filter: $filter, owner: $owner) {
      key
      fileUrl
      fileKey
      listens
      trendingListens
      listOfUidDownVotes
      listOfUidUpVotes
      name
      partOf
      selectedCategory
      selectedCreator
      thumbnail
      thumbnailKey
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong(
    $filter: ModelSubscriptionSongFilterInput
    $owner: String
  ) {
    onDeleteSong(filter: $filter, owner: $owner) {
      key
      fileUrl
      fileKey
      listens
      trendingListens
      listOfUidDownVotes
      listOfUidUpVotes
      name
      partOf
      selectedCategory
      selectedCreator
      thumbnail
      thumbnailKey
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateCreator = /* GraphQL */ `
  subscription OnCreateCreator(
    $filter: ModelSubscriptionCreatorFilterInput
    $owner: String
  ) {
    onCreateCreator(filter: $filter, owner: $owner) {
      key
      desc
      facebook
      instagram
      name
      thumbnail
      thumbnailKey
      twitter
      youtube
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateCreator = /* GraphQL */ `
  subscription OnUpdateCreator(
    $filter: ModelSubscriptionCreatorFilterInput
    $owner: String
  ) {
    onUpdateCreator(filter: $filter, owner: $owner) {
      key
      desc
      facebook
      instagram
      name
      thumbnail
      thumbnailKey
      twitter
      youtube
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteCreator = /* GraphQL */ `
  subscription OnDeleteCreator(
    $filter: ModelSubscriptionCreatorFilterInput
    $owner: String
  ) {
    onDeleteCreator(filter: $filter, owner: $owner) {
      key
      desc
      facebook
      instagram
      name
      thumbnail
      thumbnailKey
      twitter
      youtube
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory(
    $filter: ModelSubscriptionCategoryFilterInput
    $owner: String
  ) {
    onCreateCategory(filter: $filter, owner: $owner) {
      key
      name
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory(
    $filter: ModelSubscriptionCategoryFilterInput
    $owner: String
  ) {
    onUpdateCategory(filter: $filter, owner: $owner) {
      key
      name
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory(
    $filter: ModelSubscriptionCategoryFilterInput
    $owner: String
  ) {
    onDeleteCategory(filter: $filter, owner: $owner) {
      key
      name
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum(
    $filter: ModelSubscriptionAlbumFilterInput
    $owner: String
  ) {
    onCreateAlbum(filter: $filter, owner: $owner) {
      key
      name
      thumbnail
      thumbnailKey
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum(
    $filter: ModelSubscriptionAlbumFilterInput
    $owner: String
  ) {
    onUpdateAlbum(filter: $filter, owner: $owner) {
      key
      name
      thumbnail
      thumbnailKey
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum(
    $filter: ModelSubscriptionAlbumFilterInput
    $owner: String
  ) {
    onDeleteAlbum(filter: $filter, owner: $owner) {
      key
      name
      thumbnail
      thumbnailKey
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onCreateProfile(filter: $filter, owner: $owner) {
      key
      name
      email
      phone_number
      imageKey
      followers
      follows
      activeStatus
      lastActive
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onUpdateProfile(filter: $filter, owner: $owner) {
      key
      name
      email
      phone_number
      imageKey
      followers
      follows
      activeStatus
      lastActive
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onDeleteProfile(filter: $filter, owner: $owner) {
      key
      name
      email
      phone_number
      imageKey
      followers
      follows
      activeStatus
      lastActive
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateRequestPlayer = /* GraphQL */ `
  subscription OnCreateRequestPlayer(
    $filter: ModelSubscriptionRequestPlayerFilterInput
  ) {
    onCreateRequestPlayer(filter: $filter) {
      key
      name
      desc
      device
      longitude
      latitude
      playlists {
        nextToken
        startedAt
        __typename
      }
      followers
      following
      createdDate
      updatedDate
      ownerData
      owners
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateRequestPlayer = /* GraphQL */ `
  subscription OnUpdateRequestPlayer(
    $filter: ModelSubscriptionRequestPlayerFilterInput
  ) {
    onUpdateRequestPlayer(filter: $filter) {
      key
      name
      desc
      device
      longitude
      latitude
      playlists {
        nextToken
        startedAt
        __typename
      }
      followers
      following
      createdDate
      updatedDate
      ownerData
      owners
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteRequestPlayer = /* GraphQL */ `
  subscription OnDeleteRequestPlayer(
    $filter: ModelSubscriptionRequestPlayerFilterInput
  ) {
    onDeleteRequestPlayer(filter: $filter) {
      key
      name
      desc
      device
      longitude
      latitude
      playlists {
        nextToken
        startedAt
        __typename
      }
      followers
      following
      createdDate
      updatedDate
      ownerData
      owners
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateRequestSong = /* GraphQL */ `
  subscription OnCreateRequestSong(
    $filter: ModelSubscriptionRequestSongFilterInput
    $owner: String
    $owners: String
  ) {
    onCreateRequestSong(filter: $filter, owner: $owner, owners: $owners) {
      key
      fileUrl
      fileKey
      listens
      trendingListens
      listOfUidDownVotes
      listOfUidUpVotes
      requests
      requestUpVotes
      name
      partOf
      selectedCategory
      selectedCreator
      thumbnail
      thumbnailKey
      playlist {
        key
        name
        desc
        listeners
        createdDate
        updatedDate
        ownerData
        owners
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        requestPlayerPlaylistsKey
        __typename
      }
      createdDate
      updatedDate
      ownerData
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      requestPlaylistSongsKey
      owners
      __typename
    }
  }
`;
export const onUpdateRequestSong = /* GraphQL */ `
  subscription OnUpdateRequestSong(
    $filter: ModelSubscriptionRequestSongFilterInput
    $owner: String
    $owners: String
  ) {
    onUpdateRequestSong(filter: $filter, owner: $owner, owners: $owners) {
      key
      fileUrl
      fileKey
      listens
      trendingListens
      listOfUidDownVotes
      listOfUidUpVotes
      requests
      requestUpVotes
      name
      partOf
      selectedCategory
      selectedCreator
      thumbnail
      thumbnailKey
      playlist {
        key
        name
        desc
        listeners
        createdDate
        updatedDate
        ownerData
        owners
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        requestPlayerPlaylistsKey
        __typename
      }
      createdDate
      updatedDate
      ownerData
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      requestPlaylistSongsKey
      owners
      __typename
    }
  }
`;
export const onDeleteRequestSong = /* GraphQL */ `
  subscription OnDeleteRequestSong(
    $filter: ModelSubscriptionRequestSongFilterInput
    $owner: String
    $owners: String
  ) {
    onDeleteRequestSong(filter: $filter, owner: $owner, owners: $owners) {
      key
      fileUrl
      fileKey
      listens
      trendingListens
      listOfUidDownVotes
      listOfUidUpVotes
      requests
      requestUpVotes
      name
      partOf
      selectedCategory
      selectedCreator
      thumbnail
      thumbnailKey
      playlist {
        key
        name
        desc
        listeners
        createdDate
        updatedDate
        ownerData
        owners
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        requestPlayerPlaylistsKey
        __typename
      }
      createdDate
      updatedDate
      ownerData
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      requestPlaylistSongsKey
      owners
      __typename
    }
  }
`;
export const onCreateRequestPlaylist = /* GraphQL */ `
  subscription OnCreateRequestPlaylist(
    $filter: ModelSubscriptionRequestPlaylistFilterInput
  ) {
    onCreateRequestPlaylist(filter: $filter) {
      key
      name
      desc
      player {
        key
        name
        desc
        device
        longitude
        latitude
        followers
        following
        createdDate
        updatedDate
        ownerData
        owners
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      songs {
        nextToken
        startedAt
        __typename
      }
      listeners
      createdDate
      updatedDate
      ownerData
      owners
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      requestPlayerPlaylistsKey
      __typename
    }
  }
`;
export const onUpdateRequestPlaylist = /* GraphQL */ `
  subscription OnUpdateRequestPlaylist(
    $filter: ModelSubscriptionRequestPlaylistFilterInput
  ) {
    onUpdateRequestPlaylist(filter: $filter) {
      key
      name
      desc
      player {
        key
        name
        desc
        device
        longitude
        latitude
        followers
        following
        createdDate
        updatedDate
        ownerData
        owners
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      songs {
        nextToken
        startedAt
        __typename
      }
      listeners
      createdDate
      updatedDate
      ownerData
      owners
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      requestPlayerPlaylistsKey
      __typename
    }
  }
`;
export const onDeleteRequestPlaylist = /* GraphQL */ `
  subscription OnDeleteRequestPlaylist(
    $filter: ModelSubscriptionRequestPlaylistFilterInput
  ) {
    onDeleteRequestPlaylist(filter: $filter) {
      key
      name
      desc
      player {
        key
        name
        desc
        device
        longitude
        latitude
        followers
        following
        createdDate
        updatedDate
        ownerData
        owners
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      songs {
        nextToken
        startedAt
        __typename
      }
      listeners
      createdDate
      updatedDate
      ownerData
      owners
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      requestPlayerPlaylistsKey
      __typename
    }
  }
`;
export const onCreateStkPushData = /* GraphQL */ `
  subscription OnCreateStkPushData(
    $filter: ModelSubscriptionStkPushDataFilterInput
    $owner: String
    $owners: String
  ) {
    onCreateStkPushData(filter: $filter, owner: $owner, owners: $owners) {
      key
      phoneNumber
      merchantRequestID
      checkoutRequestID
      responseCode
      responseDescription
      customerMessage
      queryResultCode
      queryResultDesc
      createdDate
      updatedDate
      ownerData
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owners
      __typename
    }
  }
`;
export const onUpdateStkPushData = /* GraphQL */ `
  subscription OnUpdateStkPushData(
    $filter: ModelSubscriptionStkPushDataFilterInput
    $owner: String
    $owners: String
  ) {
    onUpdateStkPushData(filter: $filter, owner: $owner, owners: $owners) {
      key
      phoneNumber
      merchantRequestID
      checkoutRequestID
      responseCode
      responseDescription
      customerMessage
      queryResultCode
      queryResultDesc
      createdDate
      updatedDate
      ownerData
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owners
      __typename
    }
  }
`;
export const onDeleteStkPushData = /* GraphQL */ `
  subscription OnDeleteStkPushData(
    $filter: ModelSubscriptionStkPushDataFilterInput
    $owner: String
    $owners: String
  ) {
    onDeleteStkPushData(filter: $filter, owner: $owner, owners: $owners) {
      key
      phoneNumber
      merchantRequestID
      checkoutRequestID
      responseCode
      responseDescription
      customerMessage
      queryResultCode
      queryResultDesc
      createdDate
      updatedDate
      ownerData
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owners
      __typename
    }
  }
`;
export const onCreateMpesaCallbackData = /* GraphQL */ `
  subscription OnCreateMpesaCallbackData(
    $filter: ModelSubscriptionMpesaCallbackDataFilterInput
    $owner: String
  ) {
    onCreateMpesaCallbackData(filter: $filter, owner: $owner) {
      merchantRequestID
      checkoutRequestID
      resultCode
      resultDesc
      amount
      mpesaReceiptNumber
      transactionDate
      phoneNumber
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateMpesaCallbackData = /* GraphQL */ `
  subscription OnUpdateMpesaCallbackData(
    $filter: ModelSubscriptionMpesaCallbackDataFilterInput
    $owner: String
  ) {
    onUpdateMpesaCallbackData(filter: $filter, owner: $owner) {
      merchantRequestID
      checkoutRequestID
      resultCode
      resultDesc
      amount
      mpesaReceiptNumber
      transactionDate
      phoneNumber
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteMpesaCallbackData = /* GraphQL */ `
  subscription OnDeleteMpesaCallbackData(
    $filter: ModelSubscriptionMpesaCallbackDataFilterInput
    $owner: String
  ) {
    onDeleteMpesaCallbackData(filter: $filter, owner: $owner) {
      merchantRequestID
      checkoutRequestID
      resultCode
      resultDesc
      amount
      mpesaReceiptNumber
      transactionDate
      phoneNumber
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onCreateConfirmation = /* GraphQL */ `
  subscription OnCreateConfirmation(
    $filter: ModelSubscriptionConfirmationFilterInput
    $owner: String
  ) {
    onCreateConfirmation(filter: $filter, owner: $owner) {
      transactionType
      transID
      transTime
      transAmount
      businessShortCode
      billRefNumber
      invoiceNumber
      orgAccountBalance
      thirdPartyTransID
      mSISDN
      firstName
      middleName
      lastName
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateConfirmation = /* GraphQL */ `
  subscription OnUpdateConfirmation(
    $filter: ModelSubscriptionConfirmationFilterInput
    $owner: String
  ) {
    onUpdateConfirmation(filter: $filter, owner: $owner) {
      transactionType
      transID
      transTime
      transAmount
      businessShortCode
      billRefNumber
      invoiceNumber
      orgAccountBalance
      thirdPartyTransID
      mSISDN
      firstName
      middleName
      lastName
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteConfirmation = /* GraphQL */ `
  subscription OnDeleteConfirmation(
    $filter: ModelSubscriptionConfirmationFilterInput
    $owner: String
  ) {
    onDeleteConfirmation(filter: $filter, owner: $owner) {
      transactionType
      transID
      transTime
      transAmount
      businessShortCode
      billRefNumber
      invoiceNumber
      orgAccountBalance
      thirdPartyTransID
      mSISDN
      firstName
      middleName
      lastName
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
