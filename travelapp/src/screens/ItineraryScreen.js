import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { itineraryData } from '../data/mockData';

const ItineraryScreen = () => {
  const getEventIcon = (type) => {
    switch (type) {
      case 'flight':
        return 'airplane-outline';
      case 'accommodation':
        return 'bed-outline';
      case 'activity':
        return 'camera-outline';
      case 'meal':
        return 'restaurant-outline';
      default:
        return 'ellipse-outline';
    }
  };

  const getEventColor = (type) => {
    switch (type) {
      case 'flight':
        return '#3b82f6';
      case 'accommodation':
        return '#8b5cf6';
      case 'activity':
        return '#10b981';
      case 'meal':
        return '#f59e0b';
      default:
        return '#6b7280';
    }
  };

  const renderEventItem = ({ item, index, isLast }) => (
    <View className="flex-row mb-4">
      {/* Timeline indicator */}
      <View className="items-center mr-4">
        <View 
          className="w-4 h-4 rounded-full"
          style={{ 
            backgroundColor: item.completed ? item.color : '#1f2937'
          }}
        />
        {!isLast && (
          <View 
            className="w-0.5 h-16 mt-2"
            style={{ backgroundColor: '#e5e7eb' }}
          />
        )}
      </View>
      
      {/* Event content */}
      <View className="flex-1 bg-white rounded-lg p-4 shadow-sm">
        <View className="flex-row items-center justify-between mb-2">
          <View className="flex-row items-center flex-1">
            <Ionicons 
              name={getEventIcon(item.type)} 
              size={20} 
              color="#1f2937" 
            />
            <Text className="text-lg font-semibold text-gray-900 ml-2 flex-1">
              {item.title}
            </Text>
          </View>
          {item.completed && (
            <Ionicons name="checkmark-circle" size={20} color="#10b981" />
          )}
        </View>
        
        <View className="flex-row items-center mb-2">
          <Ionicons name="time-outline" size={16} color="#6b7280" />
          <Text className="text-gray-600 text-sm ml-1">{item.time}</Text>
          <Ionicons name="location-outline" size={16} color="#6b7280" className="ml-4" />
          <Text className="text-gray-600 text-sm ml-1">{item.location}</Text>
        </View>
        
        <View 
          className="px-2 py-1 rounded-full self-start mb-2"
          style={{ backgroundColor: `${getEventColor(item.type)}20` }}
        >
          <Text 
            className="text-xs font-medium"
            style={{ color: getEventColor(item.type) }}
          >
            {item.type}
          </Text>
        </View>
        
        <Text className="text-gray-600 text-sm">{item.description}</Text>
      </View>
    </View>
  );

  const renderDaySection = ({ item }) => (
    <View className="mb-6">
      <View className="flex-row items-center mb-4">
        <Ionicons name="calendar-outline" size={20} color="#6b7280" />
        <Text className="text-lg font-semibold text-gray-900 ml-2">
          {item.date}
        </Text>
      </View>
      
      <FlatList
        data={item.events}
        renderItem={({ item: event, index }) => 
          renderEventItem({ 
            item: event, 
            index, 
            isLast: index === item.events.length - 1 
          })
        }
        keyExtractor={(event) => event.id}
        scrollEnabled={false}
      />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="p-4">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-2xl font-bold text-gray-900">Itinerary</Text>
            <TouchableOpacity className="bg-gray-900 rounded-lg px-4 py-2 flex-row items-center">
              <Ionicons name="add" size={20} color="white" />
              <Text className="text-white font-medium ml-2">Add Item</Text>
            </TouchableOpacity>
          </View>

          {/* Itinerary Content */}
          <FlatList
            data={itineraryData}
            renderItem={renderDaySection}
            keyExtractor={(item) => item.date}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItineraryScreen;
