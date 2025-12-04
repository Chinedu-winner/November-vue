<template>
    <div>
        <h1>All Posts</h1>
    </div>
</template>


<script>
import axios from 'axios';
import { axiosInstance } from "../functions/axios"
export default {
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        this.fetchAllPosts();
    },
    methods: {
        async fetchAllPosts() {
            const req = await axiosInstance.get("/posts");
            console.log(req);
        }
    },
}
</script>