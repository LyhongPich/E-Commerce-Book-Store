<script>
    export default {
        data() {
            return {
                timer: 5,
                showMail: false,
                ship: this.$route.query.ship,
                id: this.$route.query.id,
                qtd: this.$route.query.qtd
            }
        },
        methods: {
            startTimer() {
                this.timerInterval = setInterval(() => {
                    if(this.timer > 0) {
                        this.timer -= 1;
                    }
                    else {
                        this.showMail = true;
                        clearInterval(this.timerInterval);
                    }
                }, 1000)
            },
            sendData() {
                const object = {
                    ship: this.ship,
                    id: this.id,
                    qtd: this.qtd
                }

                this.$emit('checkmail', object);
            }
        },
        mounted() {
            this.startTimer();
        }
    }
</script>

<template>
    <div class="w-full h-[779px] flex">
        <div class="w-[90%] mx-auto">
            <!-- 1319px -->
            <div class="w-[65%] h-auto mx-auto mt-[49px]">
                <!-- 747px -->
                <div class="flex h-[70px] items-center text-[2.25rem] font-bold">
                    <img class="h-full mr-[5%]" src="https://cdn-icons-png.flaticon.com/512/1287/1287087.png" alt="">
                    <span>Thank you!</span>
                </div>
                <div class="text-[2rem] mt-[35px]">
                    <div class="">
                        <span>Your order is completed</span>
                    </div>
                    <div class="" v-if="timer > 1">
                        <span>We will send an email confirmation very shortly in {{ timer }} seconds ...</span>
                    </div>
                    <div class="" v-else>
                        <span>We will send an email confirmation very shortly in {{ timer }} second ...</span>
                    </div>
                </div>
                <div class="w-2/5 flex mx-auto h-[37px] mt-[40px]" v-if="showMail">
                    <button @click="sendData" class="w-full h-full border-2 border-solid border-black bg-sky-500 text-white">Check Mail</button>
                </div>
            </div>
        </div>
    </div>
</template>