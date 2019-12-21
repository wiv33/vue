<template>
    <div>
        <h1>{{result}}</h1>
        <form @submit.prevent="onSubmitForm">
            <input type="text" ref="answer" minlength="4" maxlength="4" v-model="value">
            <button>입력</button>
        </form>
        <div>시도 : {{tries.length}}</div>
        <ul>
            <li v-for="t in tries">
                <div>{{ t.try }}</div>
                <div>{{ t.result }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    const getNumbers = () => {
        const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const arr = [];
        for (let i = 0; i < 4; i++) {
            const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            arr.push(chosen);
        }
        return arr;
    };
    export default {
        data() {
            return {
                answer: getNumbers(), // ex) [1,2,3,4]
                tries: [], // 시도 수
                value: '', // 입력
                result: '' // 결과
            }
        },
        methods: {
            onSubmitForm(e) {
                let flag = false;
                if (this.value === '') {
                    return;
                }
                if (this.value === this.answer.join('')) {
                    this.tries.push({
                        try: this.value,
                        result: '홈런'
                    });
                    this.result = '홈런';
                    flag = true;
                } else {
                    if (this.tries.length >= 9) {
                        this.result = `10번 넘게 틀려서 실패! 답은 ${this.answer.join('')}이었습니다!`;
                        flag = true;
                    }
                    let strike = 0;
                    let ball = 0;
                    const answerArr = this.value.split('').map(v => parseInt(v));
                    for (let i = 0; i < 4; i++) {
                        if (answerArr[i] === this.answer[i]) {
                            strike++;
                        } else if (this.answer.includes(answerArr[i])) {
                            ball++;
                        }
                    }
                    this.tries.push({
                        try: this.value,
                        result: `${strike} 스트라이크, ${ball} 볼입니다.`
                    });
                }
                if (flag) {
                    setTimeout(() => {
                        alert("게임을 다시 시작합니다.");
                        this.answer = getNumbers();
                        this.tries = [];
                        this.result = '';
                    }, 500)
                }
                this.$refs.answer.focus();
                this.value = '';
            }
        }
    }
</script>
