import ThemedView from "@/presentation/shared/ThemedView";
import { View, Text, SectionList } from "react-native";
import { houses } from "./section-list-data";
import ThemeText from "@/presentation/shared/ThemedText";

const SectionListScreen = () => {
  return (
    <ThemedView margin>
      <SectionList
        sections={houses}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <ThemeText>{item}</ThemeText>}
        ListHeaderComponent={() => (
          <ThemeText
            style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}
          >
            Section List Example
          </ThemeText>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <ThemeText
            style={{
              fontSize: 20,
              fontWeight: "600",
              backgroundColor: "#eee",
              padding: 5,
              marginTop: 10,
            }}
          >
            {title}
          </ThemeText>
        )}
        stickySectionHeadersEnabled={true}
        ListFooterComponent={() => (
          <ThemeText
            style={{ fontSize: 16, fontWeight: "bold", marginTop: 20 }}
          >
            End of Section List
          </ThemeText>
        )}
      />
    </ThemedView>
  );
};
export default SectionListScreen;
