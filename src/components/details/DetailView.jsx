import { useState, useEffect, useContext } from 'react';
import { Box, makeStyles, Typography, Grid } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';

import React from 'react';
import { LoginContext } from '../../context/ContextProvider';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, createPost, deletePost } from '../../Redux/actions/Actions';
//components
import Comments from './comments/Comments';

const useStyle = makeStyles(theme => ({
	container: {
		margin: '50px 100px',
		[theme.breakpoints.down('md')]: {
			margin: 0,
		},
	},
	image: {
		width: '100%',
		height: '50vh',
		objectFit: 'cover',
	},
	icons: {
		float: 'right',
	},
	icon: {
		margin: 5,
		padding: 5,
		border: '1px solid #878787',
		borderRadius: 10,
	},
	heading: {
		fontSize: 38,
		fontWeight: 600,
		textAlign: 'center',
		margin: '50px 0 10px 0',
	},
	author: {
		color: '#878787',
		display: 'flex',
		margin: '20px 0',
		[theme.breakpoints.down('sm')]: {
			display: 'block',
		},
	},
	link: {
		textDecoration: 'none',
		color: 'inherit',
	},
}));

const DetailView = ({ match }) => {
	const home = useSelector(state => state?.home);

	const post = home?.PostDetailList;
	console.log('this is post data,', post);
	const classes = useStyle();
	const dispatch = useDispatch();
	const url =
		'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
	const history = useHistory();

	useEffect(() => {
		const fetchData = async () => {
			dispatch(getPost(match.params.id));
		};
		fetchData();
	}, []);

	const deleteBlog = id => {
		dispatch(deletePost(id));
	};

	return (
		<Box className={classes.container}>
			<img src={post?.picture || url} alt='post' className={classes.image} />
			<Box className={classes.icons}>
				<>
					<Link to={`/update/${post?._id}`}>
						<Edit className={classes.icon} color='primary' />
					</Link>
					<Link onClick={() => deleteBlog(post?._id)}>
						<Delete className={classes.icon} color='error' />
					</Link>
				</>
			</Box>
			<Typography className={classes.heading}>{post?.title}</Typography>

			<Box className={classes.author}>
				<Link to={`/?username=${post?.username}`} className={classes.link}>
					<Typography>
						Author: <span style={{ fontWeight: 600 }}>{post?.username}</span>
					</Typography>
				</Link>
				<Typography style={{ marginLeft: 'auto' }}>
					{new Date(post?.createdDate).toDateString()}
				</Typography>
			</Box>

			<Typography className={classes.detail}>{post?.description}</Typography>
			<Comments post={post} />
		</Box>
	);
};

export default DetailView;
