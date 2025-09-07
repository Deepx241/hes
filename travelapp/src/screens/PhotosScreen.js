import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const PhotosScreen = () => {
  const samplePhotos = [
    {
      id: '1',
      uri: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&h=300&fit=crop',
      location: 'Tokyo, Japan',
      date: 'Dec 15, 2024'
    },
    {
      id: '2',
      uri: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=300&h=300&fit=crop',
      location: 'Paris, France',
      date: 'Sep 10, 2024'
    },
    {
      id: '3',
      uri: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=300&h=300&fit=crop',
      location: 'Rome, Italy',
      date: 'Aug 5, 2024'
    },
    {
      id: '4',
      uri: 'https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=300&h=300&fit=crop',
      location: 'Barcelona, Spain',
      date: 'Jul 20, 2024'
    },
    {
      id: '5',
      uri: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=300&h=300&fit=crop',
      location: 'Amsterdam, Netherlands',
      date: 'Jun 15, 2024'
    },
    {
      id: '6',
      uri: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&h=300&fit=crop',
      location: 'Prague, Czech Republic',
      date: 'May 10, 2024'
    }
  ];

  const renderPhotoItem = ({ item }) => (
    <TouchableOpacity className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
      <Image
        source={{ uri: item.uri }}
        className="w-full h-48"
        resizeMode="cover"
      />
      <View className="p-4">
        <View className="flex-row items-center mb-2">
          <Ionicons name="location-outline" size={16} color="#6b7280" />
          <Text className="text-gray-600 text-sm ml-1">{item.location}</Text>
        </View>
        <View className="flex-row items-center">
          <Ionicons name="calendar-outline" size={16} color="#6b7280" />
          <Text className="text-gray-600 text-sm ml-1">{item.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="p-4">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-2xl font-bold text-gray-900">Photos</Text>
            <TouchableOpacity className="bg-gray-900 rounded-lg px-4 py-2 flex-row items-center">
              <Ionicons name="add" size={20} color="white" />
              <Text className="text-white font-medium ml-2">Add Photo</Text>
            </TouchableOpacity>
          </View>

          {/* Photo Grid */}
          <FlatList
            data={samplePhotos}
            renderItem={renderPhotoItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            numColumns={1}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhotosScreen;
