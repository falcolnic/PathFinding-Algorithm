# Sort Algorithm Visualizer

A dynamic and interactive web application built with Svelte and TypeScript that visualizes various sorting algorithms in real-time. Watch as different sorting algorithms organize data with customizable speed controls, visual feedback, and timing metrics.

## 🚀 Features

- **Multiple Sorting Algorithms**: Bubble Sort, Insertion Sort, and Selection Sort[![Athena Award Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Faward.athena.hackclub.com%2Fapi%2Fbadge)](https://award.athena.hackclub.com?utm_source=readme)
- **Real-time Visualization**: Watch bars animate as they get sorted
- **Speed Control**: Adjust sorting speed with an interactive slider (faster/slower)
- **Dark/Light Theme**: Toggle between color themes with persistent storage
- **Timer Display**: Track sorting duration with precision timing
- **Sound Effects**: Audio feedback during sorting operations
- **Responsive Design**: Adapts to different screen sizes
- **Weather Display**: Shows current weather based on your location

## 🛠️ Technologies Used

- **Frontend**: Svelte 3, TypeScript
- **Build Tool**: Vite
- **Styling**: CSS with Bootstrap 5
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pathfinder-js
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎮 Usage

### Basic Operations

1. **Create Bars**: Click "Create bars" button to generate a custom number of bars
2. **Select Algorithm**: Choose from Bubble Sort, Insertion Sort, or Selection Sort
3. **Adjust Speed**: Use the speed slider to control animation speed
4. **Watch**: Observe the sorting algorithm in action with visual feedback

### Keyboard Shortcuts

- **Space**: Set sorting speed to maximum (9000)
- **Enter**: Apply current speed slider value

### Visual Indicators

- **Red bars**: Currently being swapped/compared
- **Green bars**: Completed/sorted bars
- **Default color**: Unsorted bars (changes with theme)

## 🧩 Project Structure

```
src/
├── components/          # Svelte components
│   ├── bars.svelte     # Bar visualization component
│   ├── buttons.svelte  # Control buttons
│   ├── heading.svelte  # Animated heading
│   ├── speedscrollbar.svelte # Speed control
│   ├── colortheme.svelte # Theme switcher
│   ├── Timer.svelte    # Sorting timer
│   └── weather.svelte  # Weather display
├── algorithms/         # Sorting algorithm implementations
│   ├── bubble-sort.ts
│   ├── insertion-sort.ts
│   ├── selection-sort.ts
│   └── algo-utils.ts   # Shared utilities
├── types/             # TypeScript interfaces
│   └── interfaces.ts
├── variables/         # Svelte stores and constants
│   └── stores.ts
├── assets/           # Static assets (sounds, icons)
├── App.svelte       # Main application component
└── main.ts          # Application entry point
```

### Modifying Themes

Colors and themes are managed in [`src/variables/stores.ts`](src/variables/stores.ts). You can customize:
- Light/dark theme colors
- Bar colors during sorting
- Animation colors

## 🚀 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🧪 Development

- **Type Checking**: `npm run check`
- **Preview Build**: `npm run preview`

## 🎵 Audio Assets

The application includes sound effects stored in [`src/assets/`](src/assets/):
- `ping.mp3`: Sorting step sound
- `success_sound.mp3`: Completion sound

## 🌍 Weather Integration

The application fetches weather data using the Open-Meteo API based on the user's geolocation. This feature requires permission to access location data.

[![Athena Award Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Faward.athena.hackclub.com%2Fapi%2Fbadge)](https://award.athena.hackclub.com?utm_source=readme)
