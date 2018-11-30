<template>
  <div>
    <h1>The Questions page</h1>
    <ul li v-for="(question, index) in questions" :key="index">
      <div>
        <span :class="{
          missing: question.needsAttention
        }">{{question.text }}</span>
        <div>
          <input
            type="radio"
            :name="question.text"
            value="1"
            v-model="question.answer"
            @change="resetQuestion(question)"
          > 1
          <br>
          <input
            type="radio"
            :name="question.text"
            value="2"
            v-model="question.answer"
            @change="resetQuestion(question)"
          > 2
          <br>
          <input
            type="radio"
            :name="question.text"
            value="3"
            v-model="question.answer"
            @change="resetQuestion(question)"
          > 3
          <br>
        </div>
      </div>
    </ul>
    <button @click="checkAndSubmit">Submit</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      questions: []
    };
  },
  computed: {
    allAnswered() {
      return this.questions.every(answer => answer.answer);
    }
  },
  created() {
    axios({
      method: "GET",
      url: "http://test.natterbase.com:3002/questions",
      //   withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "x-access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMDAwMDAwMDMiLCJpYXQiOjE1MzM2NDQwOTMsImV4cCI6MTU2NTA5MzY5M30.oMv_mQN6mAAmAVrRAozC7Ytk3omAye9P_TQ8Xyg3VOE"
      }
    })
      .then(response => {
        // console.log(response.data.questions);
        this.questions = response.data.questions.map(question => {
          return {
            text: question,
            answer: null,
            needsAttention: false
          };
        });
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    resetQuestion(question) {
      question.needsAttention = false;
    },
    checkAndSubmit() {
      if (!this.allAnswered) {
          alert(`You have unanswered questions`);
          this.questions = this.questions.map(question => {
              return {
                  ...question,
            needsAttention: question.answer ? false : true
          };
        });
      } else {
        alert("ALL GOOD SO SEND!");
      }
    }
  }
};
</script>

<style>
.missing {
  color: red;
}
</style>
