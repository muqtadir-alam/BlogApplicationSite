import { useEffect, useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import React, { Component } from 'react';
// import { getAllPosts } from '../../../service/api';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../../Redux/actions/Actions';
//components
import Post from './Post';

const Posts = () => {
	const home = useSelector(state => state?.home);
	const posts = home?.AllPostList;

	const dispatch = useDispatch();
	// const [posts, getPosts] = useState([]);
	const { search } = useLocation();
	console.log('this is the ', search);

	useEffect(() => {
		const fetchData = async () => {
			dispatch(getAllPosts(search)); // params in url
		};
		fetchData();
	}, [search]);

	return (
		<>
			{posts?.length ? (
				posts?.map(post => (
					<Grid item lg={3} sm={4} xs={12}>
						<Link
							style={{ textDecoration: 'none', color: 'inherit' }}
							to={`details/${post._id}`}>
							<Post post={post} />
						</Link>
					</Grid>
				))
			) : (
				<Box style={{ color: '878787', margin: '30px 80px', fontSize: 18 }}>
					No data is available for selected category
				</Box>
			)}
		</>
	);
};

export default Posts;
