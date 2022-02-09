import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import ConstImage from '../imageurl/ConstImage';
const imgurl = ConstImage();

const useStyle = makeStyles({
	image: {
		width: '100%',
		background: `url(${imgurl}) center/55% repeat-x #000`,
		height: '50vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		'& :first-child': {
			fontSize: 70,
			color: '#FFFFFF',
			lineHeight: 1,
		},
		'& :last-child': {
			fontSize: 20,
			background: '#FFFFFF',
		},
	},
});

const Banner = () => {
	const classes = useStyle();
	const url = imgurl;

	return (
		<>
			<Box className={classes.image}>
				<Typography>BLOG</Typography>
				<Typography>KNOWLEDGE HUB</Typography>
			</Box>
		</>
	);
};

export default Banner;
