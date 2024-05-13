/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSong = /* GraphQL */ `
  query GetSong($key: ID!) {
    getSong(key: $key) {
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
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $key: ID
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSongs(
      key: $key
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSongs = /* GraphQL */ `
  query SyncSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSongs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCreator = /* GraphQL */ `
  query GetCreator($key: ID!) {
    getCreator(key: $key) {
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
export const listCreators = /* GraphQL */ `
  query ListCreators(
    $key: ID
    $filter: ModelCreatorFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCreators(
      key: $key
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCreators = /* GraphQL */ `
  query SyncCreators(
    $filter: ModelCreatorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCreators(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($key: ID!) {
    getCategory(key: $key) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $key: ID
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCategories(
      key: $key
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAlbum = /* GraphQL */ `
  query GetAlbum($key: ID!) {
    getAlbum(key: $key) {
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
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $key: ID
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAlbums(
      key: $key
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAlbums = /* GraphQL */ `
  query SyncAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAlbums(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($key: ID!) {
    getProfile(key: $key) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $key: ID
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProfiles(
      key: $key
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncProfiles = /* GraphQL */ `
  query SyncProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getRequestPlayer = /* GraphQL */ `
  query GetRequestPlayer($key: ID!) {
    getRequestPlayer(key: $key) {
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
export const listRequestPlayers = /* GraphQL */ `
  query ListRequestPlayers(
    $key: ID
    $filter: ModelRequestPlayerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRequestPlayers(
      key: $key
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncRequestPlayers = /* GraphQL */ `
  query SyncRequestPlayers(
    $filter: ModelRequestPlayerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRequestPlayers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getRequestSong = /* GraphQL */ `
  query GetRequestSong($key: ID!) {
    getRequestSong(key: $key) {
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
export const listRequestSongs = /* GraphQL */ `
  query ListRequestSongs(
    $key: ID
    $filter: ModelRequestSongFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRequestSongs(
      key: $key
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncRequestSongs = /* GraphQL */ `
  query SyncRequestSongs(
    $filter: ModelRequestSongFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRequestSongs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getRequestPlaylist = /* GraphQL */ `
  query GetRequestPlaylist($key: ID!) {
    getRequestPlaylist(key: $key) {
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
export const listRequestPlaylists = /* GraphQL */ `
  query ListRequestPlaylists(
    $key: ID
    $filter: ModelRequestPlaylistFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRequestPlaylists(
      key: $key
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncRequestPlaylists = /* GraphQL */ `
  query SyncRequestPlaylists(
    $filter: ModelRequestPlaylistFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRequestPlaylists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getStkPushData = /* GraphQL */ `
  query GetStkPushData($key: ID!) {
    getStkPushData(key: $key) {
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
export const listStkPushData = /* GraphQL */ `
  query ListStkPushData(
    $key: ID
    $filter: ModelStkPushDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listStkPushData(
      key: $key
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncStkPushData = /* GraphQL */ `
  query SyncStkPushData(
    $filter: ModelStkPushDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStkPushData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMpesaCallbackData = /* GraphQL */ `
  query GetMpesaCallbackData($id: ID!) {
    getMpesaCallbackData(id: $id) {
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
export const listMpesaCallbackData = /* GraphQL */ `
  query ListMpesaCallbackData(
    $filter: ModelMpesaCallbackDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMpesaCallbackData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMpesaCallbackData = /* GraphQL */ `
  query SyncMpesaCallbackData(
    $filter: ModelMpesaCallbackDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMpesaCallbackData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getConfirmation = /* GraphQL */ `
  query GetConfirmation($id: ID!) {
    getConfirmation(id: $id) {
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
export const listConfirmations = /* GraphQL */ `
  query ListConfirmations(
    $filter: ModelConfirmationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConfirmations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncConfirmations = /* GraphQL */ `
  query SyncConfirmations(
    $filter: ModelConfirmationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConfirmations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
