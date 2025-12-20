import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function Auth102Screen() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#2567E8",
          }}
        >
          <Image source={require("../../assets/image.png")} />
          <View
            style={{
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              top: 60,
            }}
          >
            <Image
              source={require("../../assets/logo/logo-login.png")}
              style={{ width: 24, height: 24 }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 26,
                fontWeight: "bold",
                marginTop: 8,
              }}
            >
              Sign in to your Account
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 26,
                fontWeight: "bold",
              }}
            >
              Account
            </Text>
            <Text style={{ color: "#fff", fontSize: 16, marginTop: 8 }}>
              Enter your email and password to log in
            </Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "#fff",
            height: "50%",
          }}
        />
        <View
          style={{
            position: "absolute",
            backgroundColor: "#fff",
            marginTop: "55%",
            marginHorizontal: 30,
            alignSelf: "center",
            borderRadius: 12,
            height: 450,
            width: "90%",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 3,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "transparent",
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#ddd",
              padding: 15,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              margin: 24,
            }}
          >
            <Text
              style={{
                color: "#000",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 18,
                alignItems: "center",
                marginVertical: "auto",
              }}
            >
              <Image
                source={require("../../assets/logo/google-logo.png")}
                style={{ width: 18, height: 18 }}
              />{" "}
              Continue with Google
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 24,
              marginVertical: 10,
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "#ddd" }} />
            <Text style={{ marginHorizontal: 10, color: "#666" }}>
              Or login with
            </Text>
            <View style={{ flex: 1, height: 1, backgroundColor: "#ddd" }} />
          </View>
          <TextInput
            style={{
              height: 50,
              borderColor: "#ddd",
              borderWidth: 1,
              borderRadius: 12,
              paddingHorizontal: 20,
              marginHorizontal: 24,
              marginVertical: 10,
            }}
            placeholder="Email"
            placeholderTextColor="#999"
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 50,
              borderColor: "#ddd",
              borderWidth: 1,
              borderRadius: 12,
              marginHorizontal: 24,
              marginVertical: 10,
              paddingHorizontal: 20,
            }}
          >
            <TextInput
              style={{
                flex: 1,
                height: "100%",
              }}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="#999"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
              marginHorizontal: 24,
            }}
          >
            <TouchableOpacity
              onPress={() => setRememberMe(!rememberMe)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 4,
                  borderWidth: 2,
                  borderColor: rememberMe ? "#2567E8" : "#ddd",
                  backgroundColor: rememberMe ? "#2567E8" : "transparent",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 10,
                }}
              >
                {rememberMe && (
                  <Ionicons name="checkmark" size={14} color="#fff" />
                )}
              </View>
              <Text style={{ color: "#666", fontSize: 14 }}>Remember me</Text>
            </TouchableOpacity>
            <Text
              style={{ color: "#1D61E7", fontSize: 16, fontWeight: "bold" }}
            >
              Forgot Password?
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#1D61E7",
              marginHorizontal: 24,
              borderRadius: 12,
              paddingVertical: 14,
              marginVertical: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
              Log In
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              marginBottom: 24,
              color: "#666",
            }}
          >
            Don't have an account?{" "}
            <Text style={{ color: "#1D61E7", fontWeight: "bold" }}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
