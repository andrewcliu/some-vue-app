import axios from 'axios';

const apiBaseUrl = 'https://ndb99xkpdk.execute-api.eu-west-2.amazonaws.com/dev';

export default class PostService{
	getAllPosts(){
		return axios.get(`${apiBaseUrl}/posts`);
	}

	getPosts(number){
		return axios.get(`${apiBaseUrl}/posts/${number}`);
	}

	writePost(post){
		if(post.id){
			return axios.put(`${apiBaseUrl}/post/${post.id}`, post);
		}else{
			return axios.post(`${apiBaseUrl}/post`, post);
		}
	}

	deletePost(id){
		return axios.delete(`${apiBaseUrl}/post/${id}`);
	}
}