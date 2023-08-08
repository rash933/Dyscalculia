import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Registation1 = () => {
    const [isStudent, setIsStudent] = useState(true);
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [userName, setUserName] = useState('');

    const navigation = useNavigation();

    const handleRegistration = () => {
        const userData = {
            dateOfBirth,
            userName,
            role: isStudent, // Include the user role in the request body (true for Student, false for Teacher)
        };

        const apiUrl = isStudent
            ? 'http://localhost:8000/api/student/register' // Student registration API URL
            : 'http://localhost:8000/api/teacher/register'; // Teacher registration API URL

        // Perform registration and send data to server
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData), // Send the userData object in the request body
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Registration successful:', data);
                navigation.navigate('Registation2');
            })
            .catch((error) => {
                console.error('Error in registration:', error);
            });
    };

    return (
        <View style={styles.container}>
            {/* ... Your existing code ... */}

            {/* User Role Radio Buttons */}
            <View style={styles.textFeild}>
                <Text style={{ textAlign: 'left' }} variant="labelLarge">
                    User Role
                </Text>
                <RadioButton.Group onValueChange={(newValue) => setIsStudent(newValue === 'true')} value={isStudent.toString()}>
                    <View
                        style={{
                            width: 250,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderColor: '#000',
                            borderWidth: 1,
                            borderRadius: 4,
                        }}
                    >
                        <RadioButton.Item label="Student" value="true" position="leading" />
                        <RadioButton.Item label="Teacher" value="false" position="leading" />
                    </View>
                </RadioButton.Group>
            </View>

            {/* Date Of Birth TextInput */}
            <View style={styles.textFeild}>
                <Text style={{ textAlign: 'left' }} variant="labelLarge">
                    Date Of Birth
                </Text>
                <TextInput
                    style={{ width: 250 }}
                    mode="outlined"
                    outlineColor="#000"
                    label=""
                    value={dateOfBirth}
                    onChangeText={(text) => setDateOfBirth(text)}
                />
                <Text style={{ textAlign: 'left', color: '#ec0b43' }} variant="labelLarge">
                    Incorrect format ("xxxx-xx-xx")
                </Text>
            </View>

            {/* Name of the user TextInput */}
            <View style={styles.textFeild}>
                <Text style={{ textAlign: 'left' }} variant="labelLarge">
                    Name of the user
                </Text>
                <TextInput
                    style={{ width: 250 }}
                    mode="outlined"
                    outlineColor="#000"
                    label=""
                    value={userName}
                    onChangeText={(text) => setUserName(text)}
                />
                <Text style={{ textAlign: 'left', color: '#ec0b43' }} variant="labelLarge">
                    Letters Only
                </Text>
            </View>

            {/* Next Button */}
            <View style={styles.buttonBox}>
                <Button
                    style={styles.button}
                    textColor="#ffff"
                    buttonColor="#002060"
                    mode="contained"
                    onPress={handleRegistration}
                >
                    Next
                </Button>
                {/* Rest of the component */}
            </View>
        </View>
    );
};

export default Registation1;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textFeild: {
        marginBottom: 10,
    },
    buttonBox: {
        marginTop: 20,
    },
    button: {
        padding: 10,
        width: 150,
        alignSelf: 'center',
    },
};
