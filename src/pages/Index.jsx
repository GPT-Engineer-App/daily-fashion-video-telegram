import React, { useState } from "react";
import { Button, Input, Box, Text, useToast } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const toast = useToast();

  const sendVideoToTelegram = async () => {
    try {
      // Here you would typically make an API call to your server
      // which would handle the Telegram API interaction.
      // This is a placeholder for that functionality.
      console.log(`Sending video URL: ${videoUrl} to Telegram group`);

      // Simulate API call
      setTimeout(() => {
        toast({
          title: "Video sent successfully!",
          description: "Your streetwear fashion video has been posted to the Telegram group.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send the video. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4}>
      <Text mb={2}>Enter the URL of the streetwear fashion video:</Text>
      <Input placeholder="https://instagram.com/reel/example" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} mb={4} />
      <Button leftIcon={<FaPaperPlane />} colorScheme="teal" onClick={sendVideoToTelegram}>
        Send Video to Telegram
      </Button>
    </Box>
  );
};

export default Index;
