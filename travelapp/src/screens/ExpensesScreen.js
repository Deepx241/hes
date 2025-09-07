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
import { budgetData, recentExpenses } from '../data/mockData';

const ExpensesScreen = () => {
  const renderCategoryItem = ({ item }) => (
    <View className="flex-row items-center justify-between mb-3">
      <View 
        className="px-3 py-1 rounded-full"
        style={{ backgroundColor: `${item.color}20` }}
      >
        <Text 
          className="text-sm font-medium"
          style={{ color: item.color }}
        >
          {item.name}
        </Text>
      </View>
      <Text className="text-gray-900 font-semibold">${item.amount}</Text>
    </View>
  );

  const renderExpenseItem = ({ item }) => (
    <View className="bg-white rounded-lg p-4 mb-3">
      <View className="flex-row items-center justify-between mb-2">
        <Text className="text-lg font-semibold text-gray-900">
          {item.title}
        </Text>
        <Text className="text-lg font-bold text-gray-900">
          ${item.amount}
        </Text>
      </View>
      
      <View className="flex-row items-center mb-2">
        <View 
          className="px-2 py-1 rounded-full mr-2"
          style={{ backgroundColor: `${item.color}20` }}
        >
          <Text 
            className="text-xs font-medium"
            style={{ color: item.color }}
          >
            {item.category}
          </Text>
        </View>
        <Text className="text-gray-600 text-sm">{item.date}</Text>
      </View>
      
      <Text className="text-gray-600 text-sm">{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="p-4">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-2xl font-bold text-gray-900">Expenses</Text>
            <TouchableOpacity className="bg-gray-900 rounded-lg px-4 py-2 flex-row items-center">
              <Ionicons name="add" size={20} color="white" />
              <Text className="text-white font-medium ml-2">Add Expense</Text>
            </TouchableOpacity>
          </View>

          {/* Budget Overview Card */}
          <View className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <Text className="text-lg font-semibold text-gray-900 mb-4">
              $ Budget Overview
            </Text>
            
            <View className="mb-4">
              <Text className="text-green-600 font-semibold text-lg mb-1">
                ${budgetData.total} Budget
              </Text>
              <Text className="text-gray-600 font-semibold text-lg mb-1">
                ${budgetData.spent} Spent
              </Text>
              <Text className="text-blue-600 font-semibold text-lg">
                ${budgetData.remaining} Remaining
              </Text>
            </View>
            
            <View className="mb-2">
              <Text className="text-gray-600 text-sm mb-1">Budget Usage</Text>
              <View className="w-full bg-gray-200 rounded-full h-3">
                <View 
                  className="h-3 rounded-full bg-green-500"
                  style={{ width: `${budgetData.percentage}%` }}
                />
              </View>
            </View>
            <Text className="text-gray-600 text-sm">{budgetData.percentage}%</Text>
          </View>

          {/* Categories Card */}
          <View className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <View className="flex-row items-center mb-4">
              <Ionicons name="time-outline" size={20} color="#6b7280" />
              <Text className="text-lg font-semibold text-gray-900 ml-2">
                Categories
              </Text>
            </View>
            
            <FlatList
              data={budgetData.categories}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.name}
              scrollEnabled={false}
            />
          </View>

          {/* Recent Expenses Card */}
          <View className="bg-white rounded-xl shadow-sm p-6">
            <View className="flex-row items-center mb-4">
              <Ionicons name="bar-chart-outline" size={20} color="#6b7280" />
              <Text className="text-lg font-semibold text-gray-900 ml-2">
                Recent Expenses
              </Text>
            </View>
            
            <FlatList
              data={recentExpenses}
              renderItem={renderExpenseItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExpensesScreen;
