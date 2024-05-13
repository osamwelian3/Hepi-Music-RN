import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStorageManager {
  // Method to store an object in AsyncStorage
  static async storeObject(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error storing object:', error);
    }
  }

  // Method to retrieve an object from AsyncStorage
  static async getObject(key) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Error retrieving object:', error);
      return null;
    }
  }

  // Method to prepend an item to a list stored in AsyncStorage
static async prependToList(key, newItem) {
    try {
      let existingList = await this.getObject(key) || [];
      
      // Check if the item already exists in the list
      const existingIndex = existingList.findIndex(item => item.key === newItem.key);
  
      if (existingIndex !== -1) {
        // Remove the existing item from its current position
        const existingItem = existingList.splice(existingIndex, 1)[0];
        // Place the existing item at index 0
        existingList.unshift(existingItem);
      } else {
        // Prepend the new item to the list
        existingList = [newItem, ...existingList];
      }
  
      // Update the list in AsyncStorage
      await this.storeObject(key, existingList);
    } catch (error) {
      console.error('Error prepending to list:', error);
    }
  }  

  // Method to trim a list stored in AsyncStorage to a specified length
  static async trimList(key, maxLength) {
    try {
      const existingList = await this.getObject(key) || [];
      const trimmedList = existingList.slice(0, maxLength);
      await this.storeObject(key, trimmedList);
    } catch (error) {
      console.error('Error trimming list:', error);
    }
  }
}

export default AsyncStorageManager;
