import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
        <Text style={styles.headerSubtitle}>
          Personal Information
        </Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>

        <Image
  source={{
    uri: "https://example.com/your-image.jpg",
  }}
  style={styles.profileImage}
/>
        

        <Text style={styles.name}>
          Pheche H. Prudenciado
        </Text>

        <Text style={styles.username}>
          @itsme_peach
        </Text>

        <Text style={styles.bio}>
          Computer Science Student
        </Text>

      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>

        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>
            Edit Profile
          </Text>
        </Pressable>

        <Pressable style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>
            Contact
          </Text>
        </Pressable>

      </View>

      {/* About Me */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          About Me
        </Text>

        <Text style={styles.cardText}>
          I am a Computer Science student interested
          in programming, web development, and mobile
          application development.
        </Text>
      </View>

      {/* Skills */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Skills
        </Text>

        <View style={styles.skillsContainer}>

          <View style={styles.skill}>
            <Text style={styles.skillText}>
              Java
            </Text>
          </View>

          <View style={styles.skill}>
            <Text style={styles.skillText}>
              JavaScript
            </Text>
          </View>

          <View style={styles.skill}>
            <Text style={styles.skillText}>
              PHP
            </Text>
          </View>

          <View style={styles.skill}>
            <Text style={styles.skillText}>
              React Native
            </Text>
          </View>

        </View>
      </View>

      {/* Personal Information */}
      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Information
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>
            phecheprudenciado3@gmail.com
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Location</Text>
          <Text style={styles.infoValue}>
            Philippines
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Course</Text>
          <Text style={styles.infoValue}>
            Computer Science
          </Text>
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
  },

  header: {
    backgroundColor: "#2563EB",
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 25,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },

  headerSubtitle: {
    color: "#DCE7FF",
    fontSize: 15,
    marginTop: 5,
  },

  profileSection: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 30,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  name: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#1F2937",
  },

  username: {
    fontSize: 15,
    color: "#6B7280",
    marginTop: 5,
  },

  bio: {
    fontSize: 16,
    color: "#374151",
    marginTop: 12,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
    gap: 10,
  },

  primaryButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  secondaryButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2563EB",
  },

  secondaryButtonText: {
    color: "#2563EB",
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 20,
    borderRadius: 15,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 10,
  },

  cardText: {
    fontSize: 15,
    color: "#4B5563",
    lineHeight: 23,
  },

  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  skill: {
    backgroundColor: "#E8F0FE",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },

  skillText: {
    color: "#2563EB",
    fontWeight: "600",
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  infoLabel: {
    color: "#6B7280",
    fontSize: 14,
  },

  infoValue: {
    color: "#1F2937",
    fontSize: 14,
    fontWeight: "500",
    maxWidth: "60%",
    textAlign: "right",
  },

});