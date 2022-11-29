import React from "react";
import {View, Text, ImageBackground} from "react-native";
import styles from "./styles";
import Button from "../Buttons";

const CarItem = ({title, subTitle, subTitleCTA, backgroundImage}) => {

	const handleOnPress = () => {
		console.warn("Hey there");
	}

	return (
		<View style={styles.carContainer}>
			<ImageBackground
				source={backgroundImage}
				resizeMode="cover"
				style={styles.backgroundImage}
			/>

			<View style={styles.titles}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subTitle}>
					{subTitle}
					{" "}
					<Text style={styles.subTitleCTA}>{subTitleCTA}</Text>
				</Text>
			</View>

			<View style={styles.buttonContainer}>
				<Button type="primary" content="Custom Order" onPress={handleOnPress}/>
				<Button type="secondary" content="Existing Inventory" onPress={handleOnPress}/>
			</View>
		</View>
	);
};

export default CarItem;