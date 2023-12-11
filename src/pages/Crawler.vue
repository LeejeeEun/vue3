<!--<template>-->
<!--    <div class="container mt-4">-->
<!--        <div class="row">-->
<!--            <div class="col">-->
<!--                <img :src="require('@/assets/1365.jpg')" alt="이미지" class="img-fluid" style="max-width: 30%; height: auto; margin: 0 auto;">-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="row mt-4">-->
<!--            <div class="col">-->
<!--                <div class="card">-->
<!--                    <div class="card-body">-->
<!--                        <h1 class="card-title">1365 봉사 데이터(크롤링)</h1>-->
<!--                        <ul class="list-group list-group-flush">-->
<!--                            <li class="list-group-item" v-for="(data, index) in crawledData" :key="index">{{ data }}</li>-->
<!--                            <li class="list-group-item" v-if="crawledData.length === 0">데이터를 불러오는 중입니다...</li>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--    data() {-->
<!--        return {-->
<!--            crawledData: []-->
<!--        };-->
<!--    },-->
<!--    mounted() {-->
<!--        // 서버에서 JSON 데이터를 가져오는 비동기 요청-->
<!--        fetch('/api/Crawling')-->
<!--            .then(response => response.json())-->
<!--            .then(data => {-->
<!--                this.crawledData = data;-->
<!--            });-->
<!--    }-->
<!--};-->
<!--</script>-->

<!--<style>-->

<!--</style>-->
<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col">
                <img :src="require('@/assets/1365.jpg')" alt="이미지" class="img-fluid" style="max-width: 30%; height: auto; margin: 0 auto;">
            </div>
        </div>
        <div class="row mt-4">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">1365 봉사 데이터(크롤링)</h1>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(data, index) in crawledData" :key="index">
                                {{ data }}
                                <button class="btn btn-primary" @click="joinEvent(index)">참여하기</button>
                            </li>
                            <li class="list-group-item" v-if="crawledData.length === 0">데이터를 불러오는 중입니다...</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            crawledData: []
        };
    },
    methods: {
        joinEvent(index) {
            // 해당 데이터에 대한 참여하기 기능 구현
            console.log(`참여하기 버튼이 눌림 - Index: ${index}, Data: ${this.crawledData[index]}`);
            // 여기에 실제로 참여하기에 대한 로직을 구현하면 됩니다.
        },
        fetchData() {
            // 서버에서 JSON 데이터를 가져오는 비동기 요청
            fetch('/api/Crawling')
                .then(response => response.json())
                .then(data => {
                    this.crawledData = data;
                });
        }
    },
    mounted() {
        this.fetchData();
    }
};
</script>

<style>
/* 추가적인 스타일링이 필요한 경우 여기에 추가하세요 */
</style>



