import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {
  const settingsItems = [
    {
      id: '1',
      title: 'Notifications',
      subtitle: 'Manage your notification preferences',
      icon: 'notifications-outline',
      type: 'switch',
      value: true
    },
    {
      id: '2',
      title: 'Currency',
      subtitle: 'USD ($)',
      icon: 'card-outline',
      type: 'arrow'
    },
    {
      id: '3',
      title: 'Language',
      subtitle: 'English',
      icon: 'language-outline',
      type: 'arrow'
    },
    {
      id: '4',
      title: 'Dark Mode',
      subtitle: 'Switch to dark theme',
      icon: 'moon-outline',
      type: 'switch',
      value: false
    },
    {
      id: '5',
      title: 'Privacy Policy',
      subtitle: 'Read our privacy policy',
      icon: 'shield-outline',
      type: 'arrow'
    },
    {
      id: '6',
      title: 'Terms of Service',
      subtitle: 'Read our terms of service',
      icon: 'document-text-outline',
      type: 'arrow'
    },
    {
      id: '7',
      title: 'Help & Support',
      subtitle: 'Get help and contact support',
      icon: 'help-circle-outline',
      type: 'arrow'
    },
    {
      id: '8',
      title: 'About',
      subtitle: 'Version 1.0.0',
      icon: 'information-circle-outline',
      type: 'arrow'
    }
  ];

  const renderSettingItem = ({ item }) => (
    <TouchableOpacity className="bg-white rounded-lg p-4 mb-3 flex-row items-center justify-between">
      <View className="flex-row items-center flex-1">
        <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center mr-4">
          <Ionicons name={item.icon} size={20} color="#6b7280" />
        </View>
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-900">{item.title}</Text>
          <Text className="text-gray-600 text-sm">{item.subtitle}</Text>
        </View>
      </View>
      
      {item.type === 'switch' ? (
        <Switch
          value={item.value}
          trackColor={{ false: '#e5e7eb', true: '#10b981' }}
          thumbColor={item.value ? '#ffffff' : '#f3f4f6'}
        />
      ) : (
        <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="p-4">
          {/* Header */}
          <View className="mb-6">
            <Text className="text-2xl font-bold text-gray-900">Settings</Text>
          </View>

          {/* Profile Section */}
          <View className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <View className="flex-row items-center">
              <View className="w-16 h-16 bg-gray-200 rounded-full items-center justify-center mr-4">
                <Ionicons name="person" size={32} color="#6b7280" />
              </View>
              <View className="flex-1">
                <Text className="text-xl font-semibold text-gray-900">John Doe</Text>
                <Text className="text-gray-600">john.doe@example.com</Text>
              </View>
              <TouchableOpacity className="bg-gray-100 rounded-lg px-4 py-2">
                <Text className="text-gray-700 font-medium">Edit</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Settings List */}
          <FlatList
            data={settingsItems}
            renderItem={renderSettingItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />

          {/* Logout Button */}
          <TouchableOpacity className="bg-red-500 rounded-lg p-4 mt-6 flex-row items-center justify-center">
            <Ionicons name="log-out-outline" size={20} color="white" />
            <Text className="text-white font-semibold ml-2">Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
