# Travel App - React Native with Expo

A beautiful travel management app built with React Native, Expo, and NativeWind (TailwindCSS for React Native).

## Features

### 🏠 Home Screen
- Current trip overview with budget tracking
- Past adventures with completion status
- Recent activity feed
- Progress bars and visual indicators

### 💰 Expenses Screen
- Budget overview with spending breakdown
- Category-based expense tracking
- Recent expenses list
- Visual progress indicators

### 📅 Itinerary Screen
- Timeline view of travel events
- Event types (flight, accommodation, activity, meal)
- Completion status tracking
- Interactive timeline with visual indicators

### 📸 Photos Screen
- Photo gallery with location and date tags
- Travel memories organized by trip
- Easy photo management

### ⚙️ Settings Screen
- User profile management
- App preferences and notifications
- Theme and language settings
- Help and support options

## Technology Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **NativeWind** - TailwindCSS for React Native
- **React Navigation** - Navigation between screens
- **Vector Icons** - Beautiful iconography
- **Safe Area Context** - Proper layout handling

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd travelapp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Run on device/simulator:**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your phone

## Project Structure

```
travelapp/
├── App.js                 # Main app component with navigation
├── app.json              # Expo configuration
├── babel.config.js       # Babel configuration for NativeWind
├── tailwind.config.js    # TailwindCSS configuration
├── package.json          # Dependencies and scripts
└── src/
    ├── screens/          # Screen components
    │   ├── HomeScreen.js
    │   ├── ExpensesScreen.js
    │   ├── ItineraryScreen.js
    │   ├── PhotosScreen.js
    │   └── SettingsScreen.js
    ├── components/       # Reusable components
    └── data/            # Mock data and constants
        └── mockData.js
```

## Design Features

### 🎨 Visual Design
- **Clean UI** - Modern, minimalist design
- **Consistent Spacing** - Proper padding and margins
- **Rounded Corners** - Soft, friendly appearance
- **Shadows** - Depth and elevation
- **Color Coding** - Intuitive color system

### 📱 Responsive Design
- **Safe Areas** - Proper handling of notches and status bars
- **Flexible Layouts** - Adapts to different screen sizes
- **Touch-Friendly** - Appropriate touch targets
- **Scrollable Content** - Smooth scrolling experience

### 🎯 User Experience
- **Intuitive Navigation** - Bottom tab navigation
- **Visual Feedback** - Loading states and interactions
- **Consistent Patterns** - Familiar UI patterns
- **Accessibility** - Proper contrast and touch targets

## Customization

### Adding New Screens
1. Create a new component in `src/screens/`
2. Add the screen to the navigation in `App.js`
3. Update the tab navigator configuration

### Modifying Styles
- Edit `tailwind.config.js` for theme customization
- Use TailwindCSS classes in components
- Add custom styles as needed

### Adding New Data
- Update `src/data/mockData.js` with new sample data
- Modify components to use the new data structure

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser

## Platform Support

- ✅ iOS
- ✅ Android
- ✅ Web (with limitations)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on both iOS and Android
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Travel App** - Your personal travel companion for organizing and tracking your adventures.
