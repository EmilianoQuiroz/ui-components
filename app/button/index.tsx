import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import React from "react";
import { ScrollView } from "react-native";

export default function index() {
  return (
    <ScrollView>
      <ThemedText size="lg" textType="bold" color="blue" style={{ margin: 10 }}>
        Button Examples
      </ThemedText>
      <ThemedText
        size="md"
        textType="bold"
        style={{
          alignItems: "center",
          marginHorizontal: "auto",
          marginBottom: 10,
        }}
      >
        Colors
      </ThemedText>
      <ThemedView
        margin
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 30,
        }}
      >
        <ThemedButton buttonType="fill" color="primary">
          Button Example
        </ThemedButton>
        <ThemedButton buttonType="fill" color="secondary">
          Button Example
        </ThemedButton>
        <ThemedButton buttonType="fill" color="tertiary">
          Button Example
        </ThemedButton>
        <ThemedButton buttonType="fill" color="success">
          Button Example
        </ThemedButton>
        <ThemedButton buttonType="fill" color="warning">
          Button Example
        </ThemedButton>
        <ThemedButton buttonType="fill" color="danger">
          Button Example
        </ThemedButton>
      </ThemedView>
      <ThemedText
        size="md"
        textType="bold"
        style={{
          alignItems: "center",
          marginHorizontal: "auto",
          marginBottom: 10,
          marginTop: 20,
        }}
      >
        Button Types and Sizes
      </ThemedText>
      <ThemedView
        margin
        style={{
          gap: 20,
          alignContent: "center",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <ThemedButton size="sm" buttonType="fill" color="primary">
          Button Example
        </ThemedButton>
        <ThemedButton size="md" buttonType="outline" color="success">
          Button Example1
        </ThemedButton>
        <ThemedButton size="lg" buttonType="disabled">
          Button Example
        </ThemedButton>

        <ThemedButton
          size="sm"
          width="full"
          buttonType="fill"
          color="secondary"
        >
          Button Example 1
        </ThemedButton>
        <ThemedButton
          size="md"
          width="full"
          buttonType="outline"
          color="danger"
        >
          Button Example 2
        </ThemedButton>
        <ThemedButton size="lg" buttonType="disabled" width="full">
          Button Example
        </ThemedButton>
      </ThemedView>
      <ThemedText
        size="md"
        textType="bold"
        style={{
          alignItems: "center",
          marginHorizontal: "auto",
          marginBottom: 10,
          marginTop: 20,
        }}
      >
        Rounded
      </ThemedText>
      <ThemedView
        margin
        style={{
          gap: 20,
          alignContent: "center",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <ThemedButton radius="none" color="tertiary" buttonType="fill">
          Button Example
        </ThemedButton>
        <ThemedButton radius="sm" color="tertiary" buttonType="fill">
          Button Example
        </ThemedButton>
        <ThemedButton radius="md" color="tertiary" buttonType="fill">
          Button Example
        </ThemedButton>
        <ThemedButton radius="lg" color="tertiary" buttonType="fill">
          Button Example
        </ThemedButton>
        <ThemedButton radius="none" color="tertiary" buttonType="fill">
          L
        </ThemedButton>
        <ThemedButton radius="sm" color="tertiary" buttonType="fill">
          L
        </ThemedButton>
        <ThemedButton radius="md" color="tertiary" buttonType="fill">
          L
        </ThemedButton>
        <ThemedButton radius="lg" color="tertiary" buttonType="fill">
          L
        </ThemedButton>
        <ThemedButton radius="full" color="tertiary" buttonType="fill">
          L
        </ThemedButton>
      </ThemedView>
      <ThemedText
        size="md"
        textType="bold"
        style={{
          alignItems: "center",
          marginHorizontal: "auto",
          marginBottom: 10,
          marginTop: 20,
        }}
      >
        Icons
      </ThemedText>
      <ThemedView
        margin
        style={{
          gap: 20,
          alignContent: "center",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 40,
        }}
      >
        <ThemedButton
          icon="add-circle-outline"
          iconPosition="only"
          radius="none"
          color="primary"
        />
        <ThemedButton
          icon="home"
          iconPosition="only"
          radius="md"
          color="secondary"
        />
        <ThemedButton
          icon="git-branch"
          iconPosition="only"
          radius="full"
          color="tertiary"
        />
        <ThemedButton
          size="lg"
          icon="link-outline"
          iconPosition="only"
          radius="none"
          color="success"
        />
        <ThemedButton
          size="lg"
          icon="hand-left"
          iconPosition="only"
          radius="md"
          color="warning"
        />
        <ThemedButton
          size="lg"
          icon="arrow-back"
          iconPosition="only"
          radius="full"
          color="danger"
        />
        <ThemedButton
          buttonType="outline"
          size="lg"
          icon="arrow-back-circle-outline"
          iconPosition="only"
          radius="full"
          color="secondary"
        />
        <ThemedButton
          buttonType="outline"
          size="lg"
          icon="add-outline"
          iconPosition="only"
          radius="full"
          color="tertiary"
        />
        <ThemedButton
          buttonType="disabled"
          size="lg"
          icon="add-outline"
          iconPosition="only"
          radius="full"
          color="tertiary"
        />
        <ThemedButton icon="airplane" iconPosition="left" color="secondary">
          Button and icon
        </ThemedButton>
        <ThemedButton icon="airplane" iconPosition="right" color="tertiary">
          Button and icon
        </ThemedButton>
        <ThemedButton
          buttonType="outline"
          icon="airplane"
          iconPosition="left"
          color="secondary"
        >
          Button and icon
        </ThemedButton>
        <ThemedButton
          buttonType="outline"
          icon="airplane"
          iconPosition="right"
          color="tertiary"
        >
          Button and icon
        </ThemedButton>
        <ThemedButton
          buttonType="disabled"
          icon="airplane"
          iconPosition="left"
          color="secondary"
        >
          Button and icon
        </ThemedButton>
        <ThemedButton
          buttonType="disabled"
          icon="airplane"
          iconPosition="right"
          color="tertiary"
        >
          Button and icon
        </ThemedButton>
        <ThemedButton
          icon="airplane"
          iconPosition="left"
          color="secondary"
          width="full"
        >
          Button and icon
        </ThemedButton>
        <ThemedButton
          icon="airplane"
          iconPosition="right"
          color="tertiary"
          width="full"
        >
          Button and icon
        </ThemedButton>
        <ThemedButton
          buttonType="outline"
          icon="airplane"
          iconPosition="left"
          color="secondary"
          width="full"
        >
          Button and icon
        </ThemedButton>
        <ThemedButton
          buttonType="outline"
          icon="airplane"
          iconPosition="right"
          color="tertiary"
          width="full"
        >
          Button and icon
        </ThemedButton>
        <ThemedButton
          buttonType="disabled"
          icon="airplane"
          iconPosition="left"
          color="secondary"
          width="full"
        >
          Button and icon
        </ThemedButton>
        <ThemedButton
          buttonType="disabled"
          icon="airplane"
          iconPosition="right"
          color="tertiary"
          width="full"
        >
          Button and icon
        </ThemedButton>
      </ThemedView>
    </ScrollView>
  );
}
