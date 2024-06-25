import { Slot, Stack } from "expo-router";
import { useEffect } from "react";
import { StreamChat } from "stream-chat";
import { OverlayProvider, Chat } from "stream-chat-expo";

const client = StreamChat.getInstance("xxw8udgwaycc");

export default function HomeLayout() {
  useEffect(() => {
    const connect = async () => {
      await client.connectUser(
        {
          id: "tabotcharlesbessong",
          name: "Jim Lahey",
          image: "https://i.imgur.com/fR9Jz14.png",
        },
        client.devToken("tabotcharlesbessong")
      );
      // const channel = client.channel('messaging','the_park',{
      //   name:"The Park"
      // })
      // await channel.watch()
    };
    connect();
  });
  return (
    <OverlayProvider>
      <Chat client={client}>
        <Slot />
      </Chat>
    </OverlayProvider>
  );
}
