/* eslint-disable jsx-a11y/accessible-emoji */
import { Icon } from 'icons';
import React, { Suspense, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.iconWrapper}>
            <Suspense fallback={<Text>Loading...</Text>}>
              <Icon />
            </Suspense>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  iconWrapper: {
    padding: 24,
  },
});

export default App;
