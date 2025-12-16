import ThemeText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={() => {
            setIsRefreshing(true);
            setTimeout(() => {
              setIsRefreshing(false);
            }, 2000);
          }}
          colors={["#9Bd35A", "#689F38"]}
        />
      }
    >
      <ThemedView margin>
        <ThemeText>PullToRefreshScreen</ThemeText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
