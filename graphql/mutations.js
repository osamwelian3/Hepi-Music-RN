/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteRequestSong = /* GraphQL */ `
  mutation DeleteRequestSong(
    $input: DeleteRequestSongInput!
    $condition: ModelRequestSongConditionInput
  ) {
    deleteRequestSong(input: $input, condition: $condition) {
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
export const deleteStkPushData = /* GraphQL */ `
  mutation DeleteStkPushData(
    $input: DeleteStkPushDataInput!
    $condition: ModelStkPushDataConditionInput
  ) {
    deleteStkPushData(input: $input, condition: $condition) {
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
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
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
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
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
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
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
export const createCreator = /* GraphQL */ `
  mutation CreateCreator(
    $input: CreateCreatorInput!
    $condition: ModelCreatorConditionInput
  ) {
    createCreator(input: $input, condition: $condition) {
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
export const updateCreator = /* GraphQL */ `
  mutation UpdateCreator(
    $input: UpdateCreatorInput!
    $condition: ModelCreatorConditionInput
  ) {
    updateCreator(input: $input, condition: $condition) {
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
export const deleteCreator = /* GraphQL */ `
  mutation DeleteCreator(
    $input: DeleteCreatorInput!
    $condition: ModelCreatorConditionInput
  ) {
    deleteCreator(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
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
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
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
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
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
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
export const createRequestPlayer = /* GraphQL */ `
  mutation CreateRequestPlayer(
    $input: CreateRequestPlayerInput!
    $condition: ModelRequestPlayerConditionInput
  ) {
    createRequestPlayer(input: $input, condition: $condition) {
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
export const updateRequestPlayer = /* GraphQL */ `
  mutation UpdateRequestPlayer(
    $input: UpdateRequestPlayerInput!
    $condition: ModelRequestPlayerConditionInput
  ) {
    updateRequestPlayer(input: $input, condition: $condition) {
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
export const deleteRequestPlayer = /* GraphQL */ `
  mutation DeleteRequestPlayer(
    $input: DeleteRequestPlayerInput!
    $condition: ModelRequestPlayerConditionInput
  ) {
    deleteRequestPlayer(input: $input, condition: $condition) {
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
export const createRequestSong = /* GraphQL */ `
  mutation CreateRequestSong(
    $input: CreateRequestSongInput!
    $condition: ModelRequestSongConditionInput
  ) {
    createRequestSong(input: $input, condition: $condition) {
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
export const updateRequestSong = /* GraphQL */ `
  mutation UpdateRequestSong(
    $input: UpdateRequestSongInput!
    $condition: ModelRequestSongConditionInput
  ) {
    updateRequestSong(input: $input, condition: $condition) {
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
export const createRequestPlaylist = /* GraphQL */ `
  mutation CreateRequestPlaylist(
    $input: CreateRequestPlaylistInput!
    $condition: ModelRequestPlaylistConditionInput
  ) {
    createRequestPlaylist(input: $input, condition: $condition) {
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
export const updateRequestPlaylist = /* GraphQL */ `
  mutation UpdateRequestPlaylist(
    $input: UpdateRequestPlaylistInput!
    $condition: ModelRequestPlaylistConditionInput
  ) {
    updateRequestPlaylist(input: $input, condition: $condition) {
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
export const deleteRequestPlaylist = /* GraphQL */ `
  mutation DeleteRequestPlaylist(
    $input: DeleteRequestPlaylistInput!
    $condition: ModelRequestPlaylistConditionInput
  ) {
    deleteRequestPlaylist(input: $input, condition: $condition) {
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
export const createStkPushData = /* GraphQL */ `
  mutation CreateStkPushData(
    $input: CreateStkPushDataInput!
    $condition: ModelStkPushDataConditionInput
  ) {
    createStkPushData(input: $input, condition: $condition) {
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
export const updateStkPushData = /* GraphQL */ `
  mutation UpdateStkPushData(
    $input: UpdateStkPushDataInput!
    $condition: ModelStkPushDataConditionInput
  ) {
    updateStkPushData(input: $input, condition: $condition) {
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
export const createMpesaCallbackData = /* GraphQL */ `
  mutation CreateMpesaCallbackData(
    $input: CreateMpesaCallbackDataInput!
    $condition: ModelMpesaCallbackDataConditionInput
  ) {
    createMpesaCallbackData(input: $input, condition: $condition) {
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
export const updateMpesaCallbackData = /* GraphQL */ `
  mutation UpdateMpesaCallbackData(
    $input: UpdateMpesaCallbackDataInput!
    $condition: ModelMpesaCallbackDataConditionInput
  ) {
    updateMpesaCallbackData(input: $input, condition: $condition) {
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
export const deleteMpesaCallbackData = /* GraphQL */ `
  mutation DeleteMpesaCallbackData(
    $input: DeleteMpesaCallbackDataInput!
    $condition: ModelMpesaCallbackDataConditionInput
  ) {
    deleteMpesaCallbackData(input: $input, condition: $condition) {
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
export const createConfirmation = /* GraphQL */ `
  mutation CreateConfirmation(
    $input: CreateConfirmationInput!
    $condition: ModelConfirmationConditionInput
  ) {
    createConfirmation(input: $input, condition: $condition) {
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
export const updateConfirmation = /* GraphQL */ `
  mutation UpdateConfirmation(
    $input: UpdateConfirmationInput!
    $condition: ModelConfirmationConditionInput
  ) {
    updateConfirmation(input: $input, condition: $condition) {
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
export const deleteConfirmation = /* GraphQL */ `
  mutation DeleteConfirmation(
    $input: DeleteConfirmationInput!
    $condition: ModelConfirmationConditionInput
  ) {
    deleteConfirmation(input: $input, condition: $condition) {
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
