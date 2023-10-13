import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";
const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const [add, setAdd] = useState(1);
  const route = useRoute();
  console.log("clean as fuck", route.params);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Confirm and Pay",
      headerTintColor: "white",
      gestureEnabled: false,
      headerStyle: {
        backgroundColor: "#fd5c63",
      },
      headerLeft: () => null,
    });
  }, []);
  const str = route.params.price;
  var res = str.replace(/\D/g, "");
  console.log(res);
  const Days = route.params.no_Of_Days;
  const totalPrice = Days * res;
  const service_fee = 20;
  const taxes = 45;
  const finalAmount = totalPrice + taxes + service_fee;
  console.log(finalAmount);
  return (
    <ScrollView style={{}}>
      <View style={{ flexDirection: "row", padding: 20 }}>
        <View>
          <Image
            style={{ width: 100, height: 100, borderRadius: 10 }}
            source={route.params.img }
          />
        </View>
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 15, color: "gray" }}>
            {route.params.location}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginVertical: 4 }}>
            {route.params.title}
          </Text>
          <Text style={{ fontSize: 15, color: "gray", marginBottom: 6 }}>
            1 bed 1 bath
          </Text>
          <Text style={{ fontSize: 15, color: "gray" }}>
            {route.params.review}
            {"ratings"}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          marginVertical: 20,
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            this is a rare find.
          </Text>
          <Text style={{ fontSize: 16, color: "#606060" }}>
            {route.params.person}'s on Airbnb is usually fully booked
          </Text>
        </View>
        <MaterialCommunityIcons
          name="diamond-stone"
          size={24}
          color="#FF69B4"
        />
      </View>
      <Text style={{ backgroundColor: "#D0D0D0", height: 5 }}></Text>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "600", padding: 20 }}>
          Your Trip
        </Text>
        <View
          style={{ marginLeft: 20, flexDirection: "row", alignItems: "center" }}
        >
          <View>
            <Text style={{ fontSize: 15, fontWeight: "700" }}>Dates</Text>
            <Text>
              {route.params.startDate}-{route.params.endDate}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginVertical: 18,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 15, fontWeight: "700" }}>guests</Text>
            <Text>{add} Guests</Text>
          </View>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              position: "absolute",
              right: 10,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fd5c63",
              borderRadius: 5,
            }}
          >
            <Pressable onPress={() => setAdd(Math.max(1, add - 1))}>
              <Text
                style={{
                  fontSize: 25,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                -
              </Text>
            </Pressable>

            <Pressable>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                {add}
              </Text>
            </Pressable>

            <Pressable onPress={() => setAdd(add + 1)}>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                +
              </Text>
            </Pressable>
          </Pressable>
        </View>
      </View>
      <Text style={{ backgroundColor: "#D0D0D0", height: 5 }}></Text>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 19 }}>Price Details</Text>
        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            {route.params.price} x {route.params.no_Of_Days} {"Days"}
          </Text>
          <Text style={{ fontSize: 17, color: "gray" }}>
            {"£"}
            {totalPrice}
          </Text>
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>service fees</Text>
          <Text style={{ fontSize: 17, color: "gray" }}>
            {"£"}
            {service_fee}
          </Text>
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Occupancy taxes and fees
          </Text>
          <Text style={{ fontSize: 17, color: "gray" }}>
            {"£"}
            {taxes}
          </Text>
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Total(Pounds)
          </Text>
          <Text style={{ fontSize: 20, color: "black" }}>
            {" "}
            {"£"}
            {finalAmount}
          </Text>
        </View>
      </View>
      <Text style={{ backgroundColor: "#D0D0D0", height: 5 }}></Text>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>
          Cancellation Policy
        </Text>
        <Text style={{ marginTop: 13, fontSize: 14, color: "gray" }}>
          Free cancellation for 48 hours.after that,cancel before 12.00 PM on{" "}
          {route.params.startDate} and get 50 % refund,minus the service fee.
        </Text>
        <Text style={{ marginTop: 13, fontSize: 14, color: "gray" }}>
          Our Extending Circumstances policy does not cover travel disruptions
          caused by COVID-19.
        </Text>
      </View>
      <Text style={{ backgroundColor: "#D0D0D0", height: 5 }}></Text>
      <Pressable
      onPress={()=>navigation.navigate("Finish")}
        style={{ padding: 20, marginLeft: "auto", marginRight: "auto" }}
      >
        <Text
          style={{
            backgroundColor: "#fd5c63",
            width: 180,
            textAlign: "center",
            padding: 10,
            borderRadius: 4,
            color: "white",
          }}
        >
          Confirm And Pay!
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({});
