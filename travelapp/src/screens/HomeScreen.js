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
import { currentTrip, pastTrips, recentActivity, travelStats } from '../data/mockData';

const HomeScreen = () => {
  const renderActivityItem = ({ item }) => (
    <View className="flex-row items-center mb-2">
      <View 
        className="w-2 h-2 rounded-full mr-3"
        style={{ backgroundColor: item.color }}
      />
      <Text className="text-gray-700 text-sm">{item.message}</Text>
    </View>
  );

  const renderTripCard = ({ item }) => (
    <View className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden">
      <View className="relative">
        <Image
          source={{ uri: item.image }}
          className="w-full h-32"
          resizeMode="cover"
        />
        <View className="absolute top-3 right-3">
          <View className={`px-2 py-1 rounded-full ${
            item.status === 'completed' ? 'bg-gray-800' : 'bg-green-500'
          }`}>
            <Text className="text-white text-xs font-medium">
              {item.status}
            </Text>
          </View>
        </View>
      </View>
      
      <View className="p-4">
        <Text className="text-lg font-semibold text-gray-900 mb-2">
          {item.title}
        </Text>
        
        <View className="flex-row items-center mb-2">
          <Ionicons name="location-outline" size={16} color="#6b7280" />
          <Text className="text-gray-600 text-sm ml-1">{item.location}</Text>
        </View>
        
        <View className="flex-row items-center mb-2">
          <Ionicons name="calendar-outline" size={16} color="#6b7280" />
          <Text className="text-gray-600 text-sm ml-1">{item.dates}</Text>
          <View className="flex-row items-center ml-4">
            <Ionicons name="people-outline" size={16} color="#6b7280" />
            <Text className="text-gray-600 text-sm ml-1">{item.participants}</Text>
          </View>
        </View>
        
        <View className="flex-row items-center mb-3">
          <Ionicons name="card-outline" size={16} color="#6b7280" />
          <Text className="text-gray-600 text-sm ml-1">
            ${item.budget.spent} / ${item.budget.total}
          </Text>
        </View>
        
        <View className="w-full bg-gray-200 rounded-full h-2">
          <View 
            className={`h-2 rounded-full ${
              item.status === 'completed' ? 'bg-red-500' : 'bg-green-500'
            }`}
            style={{ width: `${item.budget.percentage}%` }}
          />
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="p-4">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-6">
            <View>
              <Text className="text-2xl font-bold text-gray-900">My Travels</Text>
              <Text className="text-gray-600 text-sm mt-1">Track and organize your adventures.</Text>
            </View>
            <TouchableOpacity className="bg-gray-900 rounded-lg px-4 py-2 flex-row items-center">
              <Ionicons name="add" size={20} color="white" />
              <Text className="text-white font-medium ml-2">New Trip</Text>
            </TouchableOpacity>
          </View>

          {/* Stats Cards */}
          <View className="flex-row mb-6">
            <View className="flex-1 bg-white rounded-xl shadow-sm p-4 mr-2">
              <Text className="text-gray-600 text-sm mb-1">Total Trips</Text>
              <Text className="text-2xl font-bold text-gray-900">{travelStats.totalTrips}</Text>
            </View>
            <View className="flex-1 bg-white rounded-xl shadow-sm p-4 ml-2">
              <Text className="text-gray-600 text-sm mb-1">Total Spent</Text>
              <Text className="text-2xl font-bold text-green-600">${travelStats.totalSpent}</Text>
            </View>
          </View>

          {/* Upcoming Trips Section */}
          <View className="mb-6">
            <View className="flex-row items-center mb-4">
              <Text className="text-xl font-semibold text-gray-900">Upcoming Trips</Text>
              <View className="bg-gray-200 rounded-full px-2 py-1 ml-2">
                <Text className="text-gray-700 text-sm font-medium">1</Text>
              </View>
            </View>
            
            <View className="bg-white rounded-xl shadow-sm overflow-hidden">
              <View className="relative">
                <Image
                  source={{ uri: currentTrip.image }}
                  className="w-full h-32"
                  resizeMode="cover"
                />
                <View className="absolute top-3 right-3">
                  <View className="bg-green-500 px-2 py-1 rounded-full">
                    <Text className="text-white text-xs font-medium">upcoming</Text>
                  </View>
                </View>
              </View>
              
              <View className="p-4">
                <Text className="text-lg font-semibold text-gray-900 mb-2">
                  {currentTrip.title}
                </Text>
                
                <View className="flex-row items-center mb-2">
                  <Ionicons name="location-outline" size={16} color="#6b7280" />
                  <Text className="text-gray-600 text-sm ml-1">{currentTrip.location}</Text>
                </View>
                
                <View className="flex-row items-center mb-2">
                  <Ionicons name="calendar-outline" size={16} color="#6b7280" />
                  <Text className="text-gray-600 text-sm ml-1">{currentTrip.dates}</Text>
                  <View className="flex-row items-center ml-4">
                    <Ionicons name="people-outline" size={16} color="#6b7280" />
                    <Text className="text-gray-600 text-sm ml-1">{currentTrip.participants}</Text>
                  </View>
                </View>
                
                <View className="flex-row items-center mb-3">
                  <Ionicons name="card-outline" size={16} color="#6b7280" />
                  <Text className="text-gray-600 text-sm ml-1">
                    ${currentTrip.budget.spent} / ${currentTrip.budget.total}
                  </Text>
                </View>
                
                <View className="w-full bg-gray-200 rounded-full h-2">
                  <View 
                    className="h-2 rounded-full bg-green-500"
                    style={{ width: `${currentTrip.budget.percentage}%` }}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* Past Adventures Section */}
          <View className="mb-6">
            <View className="flex-row items-center mb-4">
              <Text className="text-xl font-semibold text-gray-900">Past Adventures</Text>
              <View className="bg-gray-200 rounded-full px-2 py-1 ml-2">
                <Text className="text-gray-700 text-sm font-medium">{pastTrips.length}</Text>
              </View>
            </View>
            
            <FlatList
              data={pastTrips}
              renderItem={renderTripCard}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
