<template>
	<form v-if="!loading" class='form' v-on:submit.prevent="onSubmit">
		<div class="input-field">
			<label for="title">Title</label>
			<input type="text" 
				name="title"
				v-model="title"
				:class="[errors.title ? 'invalid' : 'validate']"
			>
			<span class="helper-text" data-error="Title must not be empty"></span>
		</div>
		<div class="input-field">
			<label for="title">Body</label>
			<input type="text" 
				name="body"
				v-model="body"
				:class="[errors.title ? 'invalid' : 'validate']"
			>
			<span class="helper-text" data-error="Body must not be empty"></span>
		</div>
		<button type='submit' class='waves-effect waves-light-btn'>
			{{id ? 'Update' : 'Add'}}
		</button>
	</form>
	<div class='progress' v-else-if='loading'>
		<div class="indeterminate"></div>
	</div>
</template>

<script>
import PostService from '../PostService';
const postService = new PostService();

export default{
	name: 'PostForm',
	props:{
		editingPost:Object
	},
	data(){
		return{
			loading: false,
			title:'',
			body:'',
			errors:{},
			id:null
		}
	},
	methods:{
		onSubmit(){
			if(!this.validForm()){
				this.loading = false;
				return;
				// return so it stops and not carry on
			}
			this.loading = true;
			const post = {
				title:this.title,
				body:this.body,
				id: this.id
			};
			postService.writePost(post)
				.then(res => {
					this.loading = false;
					this.body = '';
					this.title = '';
					// console.log(res.data);
					// have to add it into the DOM manually bc data only shows up after refresh
					// (A)
					this.$emit('postCreated', res.data);
				})
				.catch(err => console.error(err));
		},
		validForm(){
			// resetting error just in case
			this.errors={};
			if(this.title.trim() === ""){
				this.errors.title = 'Title'
			};
			if(this.body.trim() === ""){
				this.errors.body = 'body'
			};
			if(Object.keys(this.errors).length > 0){
				return false;
			}else return true;
		}
	},
	watch:{
		// watching for changes from editingPost prop
		editingPost(post){
			this.title = post.title;
			this.body = post.body;
			this.id = post.id;
		}
	}
}
</script>

<style>
</style>