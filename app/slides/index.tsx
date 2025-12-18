import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemeText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
} from "react-native";
import { items, Slide } from "./slides.data";
import { router } from "expo-router";
import { useRef, useState } from "react";

const SlidesScreen = () => {
  const flatListRef = useRef<FlatList>(null);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isScrollEnable, setIsScrollEnable] = useState(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isScrollEnable) return;
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
    if (currentIndex === items.length - 1) {
      setIsScrollEnable(true);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({ index: index, animated: true });
  };

  return (
    <ThemedView>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
        scrollEnabled={isScrollEnable}
        onScroll={onScroll}
      />

      {currentSlideIndex === items.length - 1 ? (
        <ThemedButton
          style={{
            position: "absolute",
            right: 5,
            bottom: 20,
            width: 150,
            backgroundColor: "#532cf3ff",
          }}
          onPress={() => router.dismiss()}
        >
          Finish
        </ThemedButton>
      ) : (
        <ThemedButton
          style={{
            position: "absolute",
            right: 5,
            bottom: 20,
            width: 150,
            backgroundColor: "#532cf3ff",
            marginBottom: 25,
          }}
          onPress={() => scrollToSlide(currentSlideIndex + 1)}
        >
          Next slide
        </ThemedButton>
      )}
    </ThemedView>
  );
};
export default SlidesScreen;

// Slide Item Component
interface SlideItemsProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideItemsProps) => {
  const { width } = useWindowDimensions();
  const { title, desc, img } = item;

  return (
    <ThemedView
      style={{
        flex: 1,
        width,
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#f0f0f0",
      }}
    >
      <Image
        source={item.img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: "contain",
          alignSelf: "center",
        }}
      />
      <ThemeText
        textType="bold"
        style={{
          fontSize: 34,
          color: "#532cf3ff",
          marginTop: 20,
          textAlign: "center",
        }}
      >
        {title}
      </ThemeText>
      <ThemeText size="sm" style={{ textAlign: "center", marginTop: 20 }}>
        {desc}
      </ThemeText>
    </ThemedView>
  );
};
