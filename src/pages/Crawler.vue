<template>
    <div>
        <h1>1365 봉사 데이터 가져오기</h1>
        <ul>
            <li v-for="data in crawledData" :key="data">{{ data }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            crawledData: []
        };
    },
    mounted() {
        // 서버에서 JSON 데이터를 가져오는 비동기 요청
        fetch('/api/Crawling')
            .then(response => response.json())
            .then(data => {
                this.crawledData = data;
            });
    }
}
</script>
