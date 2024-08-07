import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { icons } from "../../constants";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../context/GlobalProvider";
import SearchInput from "../../components/SearchInput";

const Home = () => {
  const router = useRouter();

  const handleProfileNavigation = () => {
    router.push("../profile");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[{ id: 1 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <Text className="text-3xl">{item.id}</Text>}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <TouchableOpacity
                onPress={handleProfileNavigation}
                className="bg-primary rounded-full p-2 absolute right-4 "
              >
                <Image
                  source={icons.profile}
                  resizeMode="contain"
                  style={{ width: 24, height: 24, tintColor: "green" }}
                />
              </TouchableOpacity>
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Nadil Liyanage
                </Text>
              </View>
            </View>
            <SearchInput />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
