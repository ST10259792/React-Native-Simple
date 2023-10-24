1. Create a new project - whatever the name of the project is meant to be
npx react-native init navTest1 

2. Instead of accessing the terminal from inside of Visual Studio Code 
Goto Windows Explorer => Documents => MAST => Navigation Test => navTest1
Click address bar -> folder icon -> Type cmd

[Effectively you are inside the Intergrated Terminal like how we normally are 
in]


3. in the terminal - install the following dependencies 
 
npm install @react-navigation/native 
npm install react-native-screens@3.20.0
npm install react-native-safe-area-context 

4. We are using the Native Stack navigator, so we are installing the required 
depency like what we have been trying so far in the Module Manual and in class. 
Install the following navigator

npm install @react-navigation/native-stack


[We are following the instructions mentioned on the Getting Started page]
[https://reactnavigation.org/docs/getting-started/]

5. Go back to the project inside Visual Studio Code. In the Project Explorer window 
and navigate to the following folder location:

android/app/src/main/java/<your package name>/MainActivity.java

6. Based on the last few lessons and the instructions shared 
Goto to Line 9 - Press Enter [copy those 4 lines in MainActivity.java] 

 @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

7. Then goto Line 2 - Press Enter and copy and paste the following line after the package 
instruction 
 
import android.os.Bundle; 

[Save the file and then close it]

8.Change App.tsx to App.js [file extension]

9. Replace the complete code in App.js copied the code from the reactnavigation page  

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}

10. Save and Run the project npx react-native run-android 

------------------------------------------------------------------------------------------
** If the project does not compile/run **
** PLEASE FOLLOW THESE INSTRUCTIONS    **

11. Go back to the terminal window where we installed the dependencies 

12. Close Visual Studio Code, Bluestacks and any other open windows

13. In the terminal window - type the following instructions once again - one at a time 

npm uninstall react-native-screens 
npm uninstall react-native-safe-area-context 

npm cache clean --force 

npm install react-native-screens@3.20.0 
npm install react-native-safe-area-context

14. Reopen Bluestacks and reconnect using the port number through the emulator.bat

15. Execute the project from this terminal window 
npx react-native run-android 
------------------------------------------------------------------------------------------

16. If there is an empty screen following #10 or #15 then ... 

17. Reopen Visual Studio Code - Go back to App.js and replace all the code with the following 

import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

18. This is the example from the react navigation website - you may edit their screens 
to match your requirements   
