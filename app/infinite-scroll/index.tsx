import ThemeText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const loadMore = () => {
    const newNumbers = Array.from(
      { length: 10 },
      (_, i) => numbers.length + i + 1
    );
    setTimeout(() => {
      setNumbers([...numbers, ...newNumbers]);
    }, 1500);
  };
  return (
    <ThemedView margin>
      <FlatList
        data={numbers}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#f0f0f0",
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 32,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 8,
            }}
          >
            <ItemComponent id={item} />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View style={{ marginVertical: 16, alignItems: "center" }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;

//Item component
interface Item {
  id: number;
}

const ItemComponent = ({ id }: Item) => (
  <Image
    source={{ uri: `https://picsum.photos/id/${id}/500/400` }}
    style={{ width: "100%", height: 350, borderRadius: 32 }}
  />
);
