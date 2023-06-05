<template>
    <div>
        <input v-model="writer" placeholder="글쓴이"/>
        <input v-model="title" placeholder="제목"/>
        <textarea v-model="content" placeholder="내용"/>
<!--        <button @click="index !== undefined ? update() : write()">{{index !== undefined ? '수정' : '작성'}}</button>-->
        <button @click="write">작성</button>
    </div>
</template>
<script>
import data from  '@/data'

export default {
    name: 'Create',
    data() {
        const index = this.$route.params.contentId;
        return {
            data: data,
            index: index,
            writer : "",
            title : "",
            content : ""
        }
    },
    methods: {
        write() {
            this.data.push({
                writer: this.writer,
                title: this.title,
                content: this.content,
            })
            this.$router.push({
                path: '/Read'
            })
        },

    }
}
</script>