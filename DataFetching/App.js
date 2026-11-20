
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

export default function App() {

  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchFact = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(
        'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch fact');
      }

      const data = await response.json();

      setFact(data.text);

    } catch (error) {
      console.log('Error fetching fact:', error);
      setError('Unable to load a fun fact. Please try again.');

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.header}>DAILY CURIOSITY</Text>

      <Text style={styles.subtitle}>
        Discover something interesting today!
      </Text>

      <View style={styles.card}>

        <Text style={styles.cardLabel}>
          DID YOU KNOW?
        </Text>

        {loading ? (
          <ActivityIndicator size="large" color="#6C63FF" />
        ) : error ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          <Text style={styles.fact}>
            {fact}
          </Text>
        )}

        <Text style={styles.footer}>
          A little knowledge goes a long way.
        </Text>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={fetchFact}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Loading...' : 'Discover Another Fact'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        Powered by Useless Facts API
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F3F2FF',
    justifyContent: 'center',
    padding: 25
  },

  header: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#383078',
    textAlign: 'center',
    letterSpacing: 2
  },

  subtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 35
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 20,
    minHeight: 230,
    justifyContent: 'center',
    elevation: 5
  },

  cardLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#6C63FF',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 2
  },

  fact: {
    fontSize: 19,
    color: '#333',
    textAlign: 'center',
    lineHeight: 30,
    fontWeight: '500'
  },

  error: {
    fontSize: 15,
    color: 'red',
    textAlign: 'center'
  },

  footer: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 25
  },

  button: {
    backgroundColor: '#6C63FF',
    padding: 17,
    borderRadius: 12,
    marginTop: 25
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  note: {
    color: '#999',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 25
  }

});

