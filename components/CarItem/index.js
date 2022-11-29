import React from "react";
import {View, Text, ImageBackground} from "react-native";
import styles from "./styles";
import Button from "../Buttons";

const CarItem = (props) => {

	const handleOnPress = () => {
		console.warn("Hey there");
	}

	return (
		<View style={styles.carContainer}>
			<ImageBackground
				source={require("../../assets/images/ModelS.jpeg")}
				resizeMode="cover"
				style={styles.backgroundImage}
			/>

			<View style={styles.titles}>
				<Text style={styles.title}>Model S</Text>
				<Text style={styles.subTitle}>Starting at £29,990</Text>
			</View>

			<Button type="primary" content="Custom Order" onPress={handleOnPress}/>
			<Button type="secondary" content="Existing Inventory" onPress={handleOnPress}/>
		</View>
	);
};

export default CarItem;