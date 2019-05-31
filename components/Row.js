import React from "react";
import { View, StyleSheet } from "react-native";
const greenBase = "rgb(141, 230, 84)";
const greenBorder = "rgb(91, 160, 38)";
const redBase = "rgb(208, 77, 72)";
const redBorder = "rgb(154, 0, 0)";
const yellowBase = "rgb(243, 254, 89)";
const yellowBorder = "rgb(181, 195, 46)";
const skyBlueBase = "rgb(145, 239, 232)";
const skyBlueBorder = "rgb(99, 173, 176)";
const navyBlueBase = "rgb(74, 80, 226)";
const navyBlueBorder = "rgb(6, 7, 168)";
const orangeBase = "rgb(226, 180, 80)";
const orangeBorder = "rgb(160, 116, 28)";
const purpleBase = "rgb(157, 78, 232)";
const purpleBorder = "rgb(98, 15, 174)";

export default function Row({ row }) {
	_createRow = () => {
		return row.map((eaItem, i) => (
			<View key={i} style={[styles.cell, styles[eaItem.type]]} />
		));
	};
	return <View style={styles.row}>{this._createRow()}</View>;
}

const styles = StyleSheet.create({
	row: {
		flex: 0.0666,
		position: "relative",
		zIndex: 1,

		flexDirection: "row"
	},
	cell: {
		flex: 0.1,
		backgroundColor: "rgba(0,0,0,0)",
		borderWidth: 0.5,
		borderColor: "rgb(192,192,192)",
		borderColor: "#E2F5FA"
	},
	line: {
		backgroundColor: purpleBase,
		borderColor: purpleBorder,
		borderTopColor: "#E2F5FA"
		// padding: 2
	},
	cube: {
		backgroundColor: yellowBase,
		borderColor: yellowBorder,
		borderTopColor: "#E2F5FA"
		// padding: 2
		// borderWidth: 2
	},
	romb1: {
		backgroundColor: skyBlueBase,
		borderColor: skyBlueBorder,
		borderTopColor: "#E2F5FA"
		// padding: 2
		// borderWidth: 2
	},
	romb2: {
		backgroundColor: greenBase,
		borderColor: greenBorder,
		borderTopColor: "#E2F5FA"
		// padding: 2
		// borderWidth: 2
	},
	horse: {
		backgroundColor: orangeBase,
		borderColor: orangeBorder,
		borderTopColor: "#E2F5FA"
		// padding: 2
		// borderWidth: 2
	},
	triangle: {
		backgroundColor: redBase,
		borderColor: redBorder,
		borderTopColor: "#E2F5FA"
		// padding: 2
		// borderWidth: 2
	}
});

