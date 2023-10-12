import React, { useState } from "react";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateRangePicker from "rnv-date-range-picker";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import DatePicker from "react-native-neat-date-picker";
const ReserveScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState(new Date());
   const [selectedRange, setRange] = useState({});
  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false);
  };
  const day = new Date(selectedRange.firstDate);
  const night = new Date(selectedRange.secondDate);
  const diffTime = Math.abs(day - night);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffTime + " milliseconds");
  console.log(diffDays + " days");

  const onConfirm = (date) => {
    // You should close the modal in here
    setShowDatePicker(false);

    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    console.log(date.getDate());
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date.toISOString());
    hideDatePicker();
  };
  return (
    <>
      <ScrollView style={{ marginTop: 30 }}>
        <Image
          source={route.params.img }
          style={{ width: "100%", height: 200 }}
        />
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            {route.params.title}
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}
          >
            <FontAwesome name="star" size={18} color="#fd5c63" />
            <Text style={{ paddingHorizontal: 10 }}>{route.params.review}</Text>
            <Text style={{ color: "gray", fontSize: 15 }}>
              {route.params.location}
            </Text>
          </View>
          <Text
            style={{ backgroundColor: "#D8D8D8", height: 1, marginTop: 14 }}
          ></Text>
          <View
            style={{
              marginTop: 10,
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
          <Text
            style={{ backgroundColor: "#D8D8D8", height: 1, marginTop: 14 }}
          ></Text>
          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "600" }}>
                Hosted By {route.params.person}
              </Text>
              <Image
                source={route.params.image}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  marginTop: 10,
                }}
              />
            </View>
            <Text style={{ fontWeight: "700", color: "#8A2BE2" }}>
              {route.params.description}
            </Text>
          </View>
          <Text
            style={{ backgroundColor: "#D8D8D8", height: 1, marginTop: 14 }}
          ></Text>
          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="home" size={24} color="black" />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Entire home
                </Text>
                <Text style={{ color: "gray", fontSize: 14 }}>
                  you'll have the treehouse to yourself
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SimpleLineIcons name="emotsmile" size={24} color="black" />
              <View style={{ marginLeft: 10, marginVertical: 13 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Enhanced Clean
                </Text>
                <Text style={{ color: "gray", fontSize: 14, marginRight: 30 }}>
                  the host committed to Airbnb's 5-step enhanced cleaning
                  process
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="ios-location-outline" size={24} color="black" />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Great Location
                </Text>
                <Text style={{ color: "gray", fontSize: 14, marginRight: 30 }}>
                  100% of the recent guests gave the location a 5-star rating
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="event-note" size={24} color="black" />
            <Text style={{ marginLeft: 10, fontSize: 16 }}>
              Free Cancellation Available
            </Text>
          </View>
          <Text
            style={{ backgroundColor: "#D8D8D8", height: 1, marginTop: 14 }}
          ></Text>
          <View style={{ marginTop: 14 }}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Where You'll Sleep
            </Text>
            <View
              style={{
                marginTop: 5,
                borderColor: "gray",
                borderWidth: 1,
                width: 120,
                padding: 13,
                borderRadius: 10,
              }}
            >
              <Ionicons name="bed-outline" size={24} color="black" />
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Bedroom</Text>
              <Text style={{ color: "gray" }}>1 double bed</Text>
            </View>
          </View>
          <Text
            style={{ backgroundColor: "#D8D8D8", height: 1, marginTop: 14 }}
          ></Text>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 10 }}>
              What This place Offers
            </Text>
            <View style={{ margin: 12 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="silverware-fork-knife"
                  size={22}
                  color="black"
                />
                <Text style={{ marginLeft: 10, fontSize: 17 }}>Kitchen</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 13,
                }}
              >
                <AntDesign name="wifi" size={22} color="black" />
                <Text style={{ marginLeft: 10, fontSize: 17 }}>Wifi</Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="car" size={22} color="black" />
                <Text style={{ marginLeft: 10, fontSize: 17 }}>
                  Free Parking on Premises
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 13,
                }}
              >
                <MaterialIcons name="pets" size={22} color="black" />
                <Text style={{ marginLeft: 10, fontSize: 17 }}>Pets</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 3,
                }}
              >
                <FontAwesome5 name="charging-station" size={21} color="black" />
                <Text style={{ marginLeft: 10, fontSize: 17 }}>
                  Free Parking on Premises
                </Text>
              </View>
            </View>
            <Text
              style={{ backgroundColor: "#D8D8D8", height: 1, marginTop: 14 }}
            ></Text>
          </View>
        </View>
        <DateRangePicker
          onSelectDateRange={(range) => {
            setRange(range);
          }}
          responseFormat="YYYY-MM-DD"
          minDate={moment()}
          // minDate={moment().subtract(100, "days")}
        />
        <View style={{ margin: 23 }}>
          <View>
            {selectedRange.firstDate && selectedRange.secondDate ? (
              <Text style={{ fontSize: 18 }}>
                {selectedRange.firstDate}-{selectedRange.secondDate}
              </Text>
            ) : null}
            {/* <Text>start date: {selectedRange.firstDate}</Text>
            <Text>end date: {selectedRange.secondDate}</Text> */}
          </View>
          <View></View>
        </View>
      </ScrollView>

      <Pressable
        style={{
          backgroundColor: "#AFDBF5",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
            {route.params.price}
          </Text>
          {/* <Pressable onPress={open}>
            <Text>jan3 - jan 10</Text>
          </Pressable> */}
        </View>
        <Pressable
          disabled={!selectedRange.firstDate && !selectedRange.secondDate}
          onPress={() =>
            navigation.navigate("Confirmation", {
              img: route.params.img,
              location: route.params.location,
              price: route.params.price,
              title: route.params.title,
              review: route.params.review,
              person: route.params.person,
              startDate: selectedRange.firstDate,
              endDate: selectedRange.secondDate,
              no_Of_Days: diffDays,
            })
          }
          style={{}}
        >
          <Text
            style={{
              backgroundColor: "#fd5c63",
              padding: 13,
              borderRadius: 7,
              color: "#fff",
            }}
          >
            Reserve
          </Text>
        </Pressable>
      </Pressable>
    </>
  );
};

export default ReserveScreen;

const styles = StyleSheet.create({});
