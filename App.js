
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

export default function App() {

  
  const [posts, setPosts] = useState([]);

  
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {

    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );

        const data = await response.json();

        setPosts(data.slice(0, 10));

      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>External API Posts</Text>

      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.postContainer}>
              <Text style={styles.title}>
                {item.id}. {item.title}
              </Text>

              <Text style={styles.body}>
                {item.body}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f5f5f5'
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },

  postContainer: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },

  body: {
    fontSize: 14,
    color: '#555'
  }
});

